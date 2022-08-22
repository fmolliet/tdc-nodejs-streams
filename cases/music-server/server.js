const app = require('./app');

const port = 3333;

app.listen(port, () => {
    console.log(`listening to the port: ${port} `);
});
