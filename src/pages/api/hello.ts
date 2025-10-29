import type { NextApiRequest, NextApiResponse } from 'next';

export type HelloResponse = {
  name: string;
};

export default function handler(_req: NextApiRequest, res: NextApiResponse<HelloResponse>) {
  res.status(200).json({ name: 'Next.js Starter API' });
}
