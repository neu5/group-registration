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
1. You need to have Composer configured locally in **/api** directory so then you have ```composer.phar``` file in the **/api** directory
Now you can run
```
php composer.phar install
```
to install the dependencies

2. While being in **/api** directory run
```
php -S localhost:8888
```
Backend app will be available on
```
localhost:8888
```