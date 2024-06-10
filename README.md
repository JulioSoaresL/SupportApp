### Pré Requisitos
- [Laravel](https://laravel.com/docs/11.x)
- [Composer](https://getcomposer.org/)
- [Yarn](https://chore-update--yarnpkg.netlify.app/pt-BR/docs/install)
- [Docker](https://www.docker.com/get-started/)
- PHP 7.3.x

### Instalação

1. Clone o repositorio utilizando o comando ``git clone <repositorio>``.
2. Entre no repositorio clonado, vá a pasta api e adicione um arquivo _.ENV_ e adicione as configurações do DB
```
DB_CONNECTION=pgsql
DB_HOST=<IP do Host>
DB_PORT=5432
DB_DATABASE=supportApp
DB_USERNAME=docker
DB_PASSWORD=docker
```
3. No terminal execute o comando ``composer install``
4. Ainda no terminal execute ``docker compose up -d``
5. Após execute ``php artisan migrate``
