# Node.js MongoDB – User Authentication & Authorization example with JWT & Mongoose Atlas

## User Registration, User Login and Authorization process.
For practice purpose

### This Repository is Fully clone from
- Bezkoder NodeJS with Mongo from this [repo](https://github.com/bezkoder/node-js-jwt-auth-mongodb)
- And trom this [article](https://www.bezkoder.com/node-js-mongodb-auth-jwt/)

Thanks to [Bezkoder](https://github.com/bezkoder/)

### You can set your own MongoDB Atlas config
Set this code in `server.js`
```js
db.mongoose
  .connect(`SET THIS CODE FROM YOUR OWN MONGODB ATLAS CONNECTION LINK`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
    initial();
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });
```

### Project setup

In the project directory, you can run:

```
npm install
# or
yarn
```

or

### Running the server

```
node server.js
```