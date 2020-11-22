# set up linter for project
To begin a basic set up
`./node_modules/.bin/eslint --init`
Javascript Guidelines
https://github.com/airbnb/javascript
https://github.com/johvin/eslint-import-resolver-alias#readme

# Populating the request body inside custom server

https://github.com/vercel/next.js/tree/canary/examples/custom-server-express

> Without the use of the body-parser package req.body will return undefined. To get express to populate req.body you need to install the body parser package and call the package within server.js.

This is somewhat false.. because you can use [axios](https://github.com/axios/axios) and since express 4.16.0 add the following helpers from express to your middleware

```
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
```

# Routes
/auth/login - logs user in
/api/user - gets active user

