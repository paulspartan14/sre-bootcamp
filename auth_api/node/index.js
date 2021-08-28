require('dotenv').config()
import Config from 'config';
import app from './server';
const { PORT } = process.env || 8000
import db_connection from './database/connection'

let config = Config;

// conection db ELIMINAR AL FINAL despues de probar en docker
db_connection.connect((err) => {
  if (err) {
    console.log(`ha ocurrido un error: ${err}`)
  } else {
    console.log('Database connection successfull')
  }
})

 app.listen(PORT, function() {
  console.log('listening at',config.port);
});
