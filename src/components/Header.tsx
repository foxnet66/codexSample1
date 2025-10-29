import type { FC } from 'react';

interface HeaderProps {
  title: string;
  subtitle?: string;
}

const Header: FC<HeaderProps> = ({ title, subtitle }) => {
  return (
    <header className="flex flex-col items-center gap-2 text-center">
      <h1 className="text-4xl font-semibold tracking-tight text-slate-100 sm:text-5xl">{title}</h1>
      {subtitle ? <p className="max-w-xl text-lg text-slate-300">{subtitle}</p> : null}
    </header>
  );
};

export default Header;
