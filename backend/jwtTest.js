const jwt = require('jsonwebtoken');

// вставьте сюда JWT, который вернул публичный сервер
const YOUR_JWT = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWE5MzQ0MzIyNDBlZjRkNjg0NzY1MDciLCJpYXQiOjE3MDU1ODc3OTgsImV4cCI6MTcwNjE5MjU5OH0.zv5qS1wXdtbQZGTP4Sh-FMrembi7N9PAgNkf7uyWNtY';

// вставьте сюда секретный ключ для разработки из кода
const SECRET_KEY_DEV = 'dev-secret';

try {
  jwt.verify(YOUR_JWT, SECRET_KEY_DEV);
  console.log(
    '\x1b[31m%s\x1b[0m',
    `
Надо исправить. В продакшне используется тот же
секретный ключ, что и в режиме разработки.
`,
  );
} catch (err) {
  if (err.name === 'JsonWebTokenError' && err.message === 'invalid signature') {
    console.log(
      '\x1b[32m%s\x1b[0m',
      'Всё в порядке. Секретные ключи отличаются',
    );
  } else {
    console.log('\x1b[33m%s\x1b[0m', 'Что-то не так', err);
  }
}
