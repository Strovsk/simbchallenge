![](https://img.shields.io/badge/Laravel%209.x-%23FF2D20?style=for-the-badge&logo=laravel&logoColor=%23EEE)
![](https://img.shields.io/badge/PHP%208.1.10-%23777BB4?style=for-the-badge&logo=php&logoColor=%23EEE)

# Simbi Tech Case - Backend

<p style="text-align: center;">
    <img src="../frontend/src/assets/background.svg" alt="Simbi Logo" />
</p>

## Sumário

-   [Migrações](#migrations)
-   [MSC - Model -> Service -> Controller](#msc)
-   [Docker](#docker)
-   [Api Simbi](#api-simbi)

<h2 id="migrations">Migrações</h2>

O sistema de "migrations" utilizado é o do Laravel. Você não precisa se preocupar em rodar comandos como `php artisan migrate`, pois o sistema já faz isso automaticamente através do script de entrypoint do container de desenvolvimento e as executará sempre. (Verifique o arquivo `backend/docker/DockerBootstrap.php`)

<h2 id="msc">MSC - Model -> Service -> Controller</h2>

O sistema de arquitetura utilizado é o MSC, que é uma variação do MVC. A diferença é que o Service é responsável por toda a lógica de negócio, enquanto o Controller é responsável por receber as requisições e enviar as respostas. O Model é responsável por representar a entidade no banco de dados. É ideal para nano/micro serviços e aplicações com pouca complexidade.

<h2 id="docker">Docker</h2>

O ambiente de desenvolvimento é todo feito em Docker. Todo o tutorial está no [README.md](../README.md) da raiz do projeto. Esta seção existe, pois, a linha de comando do laravel (artisan) precisa ser ativamente executada durante o desenvolvimento. Então, se você quiser entrar no container para acessar a linha de comando, execute o seguinte:

```bash
docker exec -it backend bash

# if it works you will see the following message
[app] dev@app 👻 ( /app )
```

<h2 id="api-simbi">Api Simbi</h2>

A API Simbi é uma API RESTful que fornece informações sobre projetos culturais aprovados pela Lei Rouanet. Ela é composta por dois endpoints:

-   **[GET]** /api/health

    simplesmente para verificar se a API está funcionando (normalmente utilizado para verificar comunição com gateways e dispositivos externos dos quais a API depende)

-   **[GET]** /api/projetos-rouanet

    O endpoint que foi solicitado no CASE
