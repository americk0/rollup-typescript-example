import { Buffer } from 'buffer';
import config from './package.json';

export function func(s: string): string {
  console.log(config.version);

  return Buffer.from(s).toString('base64');
}
