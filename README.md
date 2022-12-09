<h1 align="center">
  WS MANGA
</h1>

<p align="center">Web App Manga Marketplace</p><br>

### Group 8
| Name                     | NIM                |Job Tasks           |
| ------------------------ | ------------------ |------------------- |
| Evan Ananda Jati         | 20/460543/TK/51132 |Frontend & Backend  |
| Baihaqi Mustafa S        | 20/456839/TK/50663 |UI Design & Frontend|
| Adrian Syah Abidin       | 20/463588/TK/51580 |UI Design & Frontend|
| Khalid Rizki Ananta      | 20/460548/TK/51137 |Frontend & Backend  |
| Christina Angraeni P     | 20/456840/TK/50664 |UI Design & Frontend|

### Description
WS Manga or Waroeng Shopping Manga was created to form an application from the data type that belongs to the REST API, using several tech stacks that have been studied in lectures, one of which is React.js. This application was developed for the sale of various comics. You can also create a wishlist of the desired comics. Existing features are made for the other two parties, both buyers and sellers, to be able to use them. 

# Development Setup

# Setting Up Project

## Clone into your local directory with 
```
git clone https://github.com/evanjat2/PAW.git
```

## Install the dependency with
```
npm install
```


## Setup dummy backend for upload

Set the following keys in `server.js`

```js
const imagekit = new ImageKit({
  urlEndpoint: '<YOUR_IMAGEKIT_URL_ENDPOINT>',
  publicKey: '<YOUR_IMAGEKIT_PUBLIC_KEY>',
  privateKey: '<YOUR_IMAGEKIT_PRIVATE_KEY>',
});
```

All these parameters are required. API private key can also be obtained from the [developer](https://imagekit.io/dashboard#developers) section in your ImageKit dashboard.

Please note that file upload will only work if, along with the above, you have also defined `YOUR_IMAGEKIT_PUBLIC_KEY`, `YOUR_IMAGEKIT_URL_ENDPOINT`, and `YOUR_AUTHENTICATION_ENDPOINT` variables in `client/src/context/appContext.js`.

## Finally 
### Run the server on PAW directory
```
npm run server
```
### or
### Run the client side on PAW directory
```
npm run client
```
### or
## Run both client and server on PAW directory
```
npm start
```


Happy coding xD !
