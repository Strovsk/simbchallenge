# Simbi Test Case


## Getting Started

1. Clone the repository
1. Run it using docker
1. Enjoy it 🚀

## Docker 🐋

Ensure that you have Docker Desktop installed on your machine.

> To follow the steps below ensure that you are in the root directory of the project.

1. Enter the docker folder `cd docker`
2. Build the images and create the containers `docker-compose up -d`
    This command will build the images: `app` and `db` and create it's containers.

The `app` container will run the application and the `db` container will run the database. The first one will be available at `http://localhost:7800` and the second one at `http://localhost:3303` to avoid local problems.

## Enter the app container

To enter the app container you can run the following command:

```bash
docker exec -it app bash

# if it works you will see the following message
[app] dev@app 👻 ( /app )
```

## Simbi API

The API has the following endpoints:
  - **[GET]** /api/health
  - **[GET]** /api/projetos-rouanet
