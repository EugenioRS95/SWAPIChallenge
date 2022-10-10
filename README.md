# Serverless Nodejs Rest API con TypeScript y DynamoDB - SWAPI Challenge

Se expone el siguiente reto técnico: Integración con SWAPI.

## Tecnologías

* REST API con typescript
* DynamoDB
* Multi-environment administrado bajo Serverless
* Serverless offline
* NodeJs 14.18
* OpenAPI Documentation 0.4.0
* Jest
* Axios
* Esbuild

## Primero configurar globalmente las credenciales de acceso a AWS con el comando
 ```
$ aws configure
```

* `aws_access_key_id`
* `aws_secret_access_key`

### Instalar las dependencias necesarias

* Ejecutar ```npm install``` para instalar las dependencias necesarias.

### Configurar el archivo `.env` para su conexión con DynamoDB
Pueden ser las mismas que las credenciales configuradas inicialmente, siempre y cuando tenga los permisos necesarios.

* `DYNAMO_ACCESS_KEY_ID`
* `DYNAMO_SECRET_ACCESS_KEY`

## Despliegue Local

* Ejecutar ```npm run dev``` para desplegar localmente.

## Despliegue en AWS
* Ejecutar ```npm run deploy``` para desplegar en AWS.

## Ejecución de test de pruebas
* Ejecutar ```npm run test``` para ejecutar los test de pruebas.

