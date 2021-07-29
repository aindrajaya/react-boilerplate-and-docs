## React Redux Login, Logout, Registration example using Hooks

### This Repository is Fully clone from
- Bezkoder React Redux Hooks JWT [Repo](https://github.com/bezkoder/react-redux-hooks-jwt-auth)
- From this [article](https://www.bezkoder.com/react-hooks-redux-login-registration-example/)
- Thanks to [Bezkoder](https://github.com/bezkoder/)


### Set port
.env
```
PORT=8081
```

### Note:
Open `src/services/auth-header.js` and modify `return` statement for appropriate back-end (found in the tutorial).

```js
export default function authHeader() {
  const user = JSON.parse(localStorage.getItem('user'));

  if (user && user.accessToken) {
    // return { Authorization: 'Bearer ' + user.accessToken }; // for Spring Boot back-end
    return { 'x-access-token': user.accessToken };             // for Node.js Express back-end
  } else {
    return {};
  }
}
```

### Project setup

In the project directory, you can run:

```
npm install
# or
yarn install
```

or

### Compiles and hot-reloads for development

```
npm start
# or
yarn start
```

