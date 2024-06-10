### Pré Requisitos
- [Laravel](https://laravel.com/docs/11.x)
- [Composer](https://getcomposer.org/)
- [NodeJS](https://nodejs.org/en)
- [Docker](https://www.docker.com/get-started/)
- PHP 7.3.x

### Instalação

```
## clonar repositorio
git clone git@github.com:JulioSoaresL/SupportApp.git

## navegar para a pasta da api
cd SupportApp/api
```

Adicione um arquivo _.ENV_ e altere as seguintes informações
```
DB_CONNECTION=pgsql
DB_HOST=<IP do Host>
DB_PORT=5432
DB_DATABASE=supportApp
DB_USERNAME=docker
DB_PASSWORD=docker
```
Após volte ao terminal ainda no caminho _SupportApp/api_
```
## baixa as dependencias do composer
composer install

## subir container dos serviços
docker compose up -d

## restaurar migrações (tabelas do banco de dados)
php artisan migrate:fresh
```
### Frontend. 

Dentro do repositorio _SupportApp/layout_ abra o terminal e execute os comandos abaixo

```
## instalar pacotes do package.json
yarn
ou
npm install


## para iniciar o serviço
yarn dev
ou
npm run dev
```
## Obs:

Assim que a api estiver em execução é possível utilizar API Client para testar a aplicação