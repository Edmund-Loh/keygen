const { JWKS: { KeyStore } } = require('jose');
const keystore = new KeyStore();
Promise.all([
  keystore.generate('RSA', 2048, { use: 'sig' }),
  keystore.generate('RSA', 2048, { use: 'enc' }),
]).then(function () {
  console.log('this is the full private JWKS:\n', keystore.toJWKS(true));
});