<h1 align="center">
  !Safe
</h1>

<h3 align="center">
  To see not safe places.
</h3>

<p align="center">
  <img src="https://media1.giphy.com/media/1bmNIyLVhA1cT2nNrA/giphy.gif?cid=790b76115265aa5c05a67ae90e206d4d52b1955882715a84&rid=giphy.gif&ct=g" alt="animated" />
</p>


## 🔗 Table of contents
- [Technologies](#technologies)
- [Installation](#installation)
- [Getting start](#start)
- [Project](#project)
- [Contribute](#contribute)
- [License](#license)

## 📌 Technologies <a name="technologies"/>

- [Node](https://nodejs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [TypeORM](https://typeorm.io/#/)
- [Express](https://expressjs.com/pt-br/)
- [Postgres](https://www.postgresql.org/)
- [React Native](https://reactnative.dev/)
- [Expo](https://expo.io/)
- [Styled Components](https://styled-components.com/)

## 📂 Installation <a name="installation"/>

First of all, it is important that you have installed [Yarn](https://yarnpkg.com/) and [Expo](https://expo.io/).

So, run this command in terminal to clone the project via HTTPS:

```bash
git clone https://github.com/taylorbyks/isafe.git
```

### Backend

```bash
cd backend
yarn
```

After you needs to create a postgresql database named isafe, and run:

```bash
yarn typeorm migration:run
```

You will need to use ngrok or similar program to expose the port 3333, run:

```bash
ngrok http 3333
```

### Mobile

```bash
cd mobile
yarn
```

Paste in BaseURL at src/services/api.js the ngrok URL.

## 🚀 Getting start <a name="start"/>

### Backend

Run the following command in terminal:

```bash
# Start the aplication
yarn start
```

This will open http://localhost:3333.

### Mobile

First, you have to install Expo App on your smarthphone.

So, run the following command in terminal:

```bash
# Start the server
expo start
```

With Expo open on your smarthphone, scan the QR Code of Expo Server.


## 💻 Project <a name="project"/>


## 👍 Contribute <a name="contribute"/>

- Fork this repository.
- Create a branch with your resource: ```git checkout -b feature/my-feature```
- Submit changes: ```git commit -m "feat: My new feature"```
- Push your branch: ```git push origin feature/my-feature```

## 📕 License <a name="license"/>

Released in 2021. This project is under the [MIT License](https://choosealicense.com/licenses/mit/).

Build with 💜 by [Taylor Byk Schinveski](https://github.com/taylorabyks/).
