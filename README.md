# Template Laravel + React

- [Laravel](https://laravel.com/docs/11.x)
- [React + Typescript](https://react.dev/learn)
- [Inertia](https://inertiajs.com/)

## Installation

### Pre-requisite

- [Composer](https://getcomposer.org/)
- [Node.js](https://nodejs.org/en)

### Howto

1. clone repo

```bash
git clone https://github.com/rikarani/laravel-react
```

2. pindah folder

```bash
cd laravel-react
```

3. install package

```bash
composer install
```

```bash
npm install
```

4. copy .env.example

```bash
copy .env.example .env
```

atau

```bash
cp .env.example .env
```

5. setup database soalnya laravel 11 session nya pakek database njir, cek [docs](https://laravel.com/docs/11.x/session#configuration)

```
DB_CONNECTION=mysql
DB_HOST=
DB_PORT=
DB_DATABASE=
DB_USERNAME=
DB_PASSWORD=
```

6. run migration

```bash
php artisan migrate:fresh
```

7. start server & vite

```bash
php artisan serve
```

```bash
npm run dev
```
