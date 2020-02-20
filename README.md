# group-registration
Group registration form build using ReactJS on front-end and PHP with MySQL on back-end

## Prerequisites
### Front-end
* NodeJS >= 12.15.0
* npm or yarn

### Back-end
* PHP >= 7.3
* Composer

## Local Development
### Front-end
1. While being in **/form** directory install dependencies by running
```
yarn
```
2. Run local server (it's using parcel.js dev server)
```
yarn dev
```
Front-end app will be available on 
```
localhost:1234
```

### Back-end
1. You need to have Composer configured locally in **/api** directory so then you have ```composer.phar``` file there

While still being in **/api** directory install dependencies by running
```
php composer.phar install
```

2. To start local server go into **/api/public** directory and run
```
php -S localhost:8888
```
Back-end app will be available on
```
localhost:8888
```
