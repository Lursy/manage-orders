# manage orders

### Requisitos

- Node.js instalado.
- MongoDB (pode ser utilizado o [MongoDB Atlas](https://cloud.mongodb.com)).

---

### como iniciar
- clonar o repositório ou baixar diretamente do github  
`git clone https://github.com/Lursy/manage-orders/`
- acessando projeto  
`cd manage-orders`
- instalando dependencias  
`npm install`

- crie um arquivo .env com a URI
exemplo de .env:
```env
URI="mongodb+srv://<user>:<password>@nome.<host>.mongodb.net/ManagerOrder?retryWrites=true"
```
- executar
 `npm run dev`
---  
### rotas
|Method|endpoint|descrição|
|:----:|:------:|:-------:|
|POST|/user/create/|registrar cliente|
|POST|/user/orders/|exibir pedidos de um usuário|
|POST|/user/spent/|exibir valor total gasto por usuário|
|POST|/product/create/|registrar produto|
|POST|/order/create/|registrar pedido|
|POST|/order/get/|exibir pedido|
---  
### requisições
```js
// criar usuário

fetch('http://localhost/user/create', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    "name": "maria",
    "email": "maria@gmail.com",
    "phoneNumber": "(35) 12345-6789"
})
```
```js
// ver total gasto por usuário

fetch('http://localhost/user/spent', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    "userId": "67dd9c45f1a749aae18674e6", // esse id é enviado como _id ao criar usuário
})
```
```js
// ver pedidos de um usuário

fetch('http://localhost/user/orders', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    "userId": "67dd9c45f1a749aae18674e6",
})
```
```js
// criar produto

fetch('http://localhost/product/create', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    "name": "café",
    "description": "pacote de café mineiro",
    "price": 10.99
})
```
```js
// criar pedido

fetch('http://localhost/order/create', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    "userId": "67ddc0e6611d59986bf80708",
    "productIds": ["67dda08fe46b9fe72b8db025", ...] // lista de ID de produtos do pedido
})
```

```js
// visualizar pedido

fetch('http://localhost/order/get', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    "orderId": "67ddc118611d59986bf8070c",
})
```
