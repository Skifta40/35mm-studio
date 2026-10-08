import express from 'express';
import http from 'http';
import { spawn } from 'child_process';

const app = express();
const PORT = 3000;
const PHP_PORT = 8080;

// Start PHP 8.2 built-in server serving current workspace
const phpProcess = spawn('php', ['-S', `127.0.0.1:${PHP_PORT}`, '-t', '.'], {
  stdio: 'pipe'
});

phpProcess.stdout?.on('data', (data) => {
  console.log(`[PHP] ${data}`);
});

phpProcess.stderr?.on('data', (data) => {
  console.log(`[PHP LOG] ${data}`);
});

process.on('exit', () => phpProcess.kill());
process.on('SIGINT', () => {
  phpProcess.kill();
  process.exit(0);
});
process.on('SIGTERM', () => {
  phpProcess.kill();
  process.exit(0);
});

// Proxy all incoming traffic on port 3000 directly to PHP server
app.use((req, res) => {
  const targetPath = (req.url === '/' || req.url === '') ? '/index.php' : req.url;

  const options: http.RequestOptions = {
    hostname: '127.0.0.1',
    port: PHP_PORT,
    path: targetPath,
    method: req.method,
    headers: {
      ...req.headers,
      host: `127.0.0.1:${PHP_PORT}`,
      'x-forwarded-for': req.socket.remoteAddress || '',
      'x-forwarded-proto': 'http'
    }
  };

  const proxyReq = http.request(options, (proxyRes) => {
    res.writeHead(proxyRes.statusCode || 200, proxyRes.headers);
    proxyRes.pipe(res, { end: true });
  });

  proxyReq.on('error', (err) => {
    console.error('PHP Proxy Error:', err.message);
    res.status(502).send('PHP Server Error: ' + err.message);
  });

  req.pipe(proxyReq, { end: true });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`PHP Website Proxy running on port ${PORT} -> PHP 8.2 on port ${PHP_PORT}`);
});
