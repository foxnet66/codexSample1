import { spawn } from 'node:child_process';
import process from 'node:process';

const isWin = process.platform === 'win32';

function runCommand(command, args, options = {}) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, {
      stdio: 'inherit',
      shell: isWin,
      ...options,
    });

    child.on('error', reject);
    child.on('exit', (code) => {
      if (code === 0) {
        resolve(undefined);
      } else {
        reject(new Error(`${command} ${args.join(' ')} exited with code ${code}`));
      }
    });
  });
}

async function startServer() {
  const child = spawn('npm', ['run', 'serve:lighthouse'], {
    stdio: 'inherit',
    shell: isWin,
  });

  const waitOn = (await import('wait-on')).default;
  const waitPromise = waitOn({
    resources: ['http://127.0.0.1:3000'],
    timeout: 120000,
  });

  let exitHandler;
  let errorHandler;
  const exitPromise = new Promise((_, reject) => {
    exitHandler = (code) => {
      reject(new Error(`Lighthouse server exited early with code ${code ?? 'unknown'}`));
    };
    errorHandler = (error) => {
      reject(error instanceof Error ? error : new Error(String(error)));
    };
    child.once('exit', exitHandler);
    child.once('error', errorHandler);
  });

  await Promise.race([waitPromise, exitPromise]).finally(() => {
    child.off('exit', exitHandler);
    child.off('error', errorHandler);
  });

  return child;
}

async function main() {
  const skipBuild = process.argv.includes('--skip-build') || process.env.SKIP_BUILD === 'true';

  if (!skipBuild) {
    await runCommand('npm', ['run', 'build']);
  }

  const server = await startServer();

  try {
    await runCommand('npm', [
      'exec',
      'lighthouse',
      'http://127.0.0.1:3000',
      '--only-categories=performance,accessibility,seo',
      '--output',
      'html',
      '--output-path',
      './lighthouse/report.html',
      '--chrome-flags=--headless',
    ]);
  } finally {
    server.kill('SIGTERM');
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
