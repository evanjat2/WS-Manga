# PAW

## First clone into your local directory with 
```
git clone https://github.com/evanjat2/PAW.git
```

## Second, install the dependency with
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
