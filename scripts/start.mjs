import { spawn } from 'node:child_process';

const port = process.env.PORT || '3000';
const hostname = process.env.HOSTNAME || '0.0.0.0';

const child = spawn(
  process.execPath,
  ['./node_modules/next/dist/bin/next', 'start', '--hostname', hostname, '--port', port],
  {
    stdio: 'inherit',
    env: process.env
  }
);

child.on('exit', (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal);
    return;
  }

  process.exit(code ?? 0);
});
