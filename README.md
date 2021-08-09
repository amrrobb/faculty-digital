# Faculty Digital

Create:

1. Login Page
2. Dashboard to visualize data

Requirement: Full stack

For database:
1. Need to install postgreSQL

For server cofiguration: (run this command on bash)
1. cd faculty-digital/server
2. npm i
3. npm install --save-dev sequelize-cli
4. export JWT_KEY=AbsolutelySecret
5. npx sequelize db:migrate
6. npx sequelize-cli db:seed:all
7. npm run start

Dummy User: 
1. admin1@mail.com, password: password
2. admin2@mail.com, password: password

For client:
1. cd ../ (back to faculty-digital)
2. cd client
3. npm i 
4. npm run serve
