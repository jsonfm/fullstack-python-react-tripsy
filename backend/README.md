### Development

```
python main.py
```

### RSA KeyPair

```
openssl genrsa -out rs256.pem 2048
openssl rsa -in rs256.pem -pubout -outform PEM -out rs256.pub
```
