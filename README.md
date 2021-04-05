This is the frontend part of the pallet calculator web application, it is built with `create-react-app`.
Find the backend part of it here: https://github.com/lyonsun/pallet-calculator-backend

## Clone it

```shell
git clone git@github.com:lyonsun/pallet-calculator-frontend.git
```

## Install all dependencies

```shell
yarn
```

## Configure it to connect with the backend

```shell
touch .env.development.local
echo REACT_APP_BACKEND_URI=http://localhost:8000/api > .env.development.local
```

> Change `http://localhost:8000/api` to the one you defined.
> This app is built to connect a backend that is built with `django` and `djangorestframework`.
> Check [the backend part](https://github.com/lyonsun/pallet-calculator-backend) for more details.

## Run it in development server

```shell
yarn cra-start
```
## Run it in production server

```shell
yarn build
yarn start
```

## View it

Open the browser and go to http://localhost:3000