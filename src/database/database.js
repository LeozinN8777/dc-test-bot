require('dotenv').config();
const mongoose = require("mongoose");


class Database {
  constructor() {
    this.connection = null;
  }

  connect() {
    mongoose.set('strictQuery', true); // idk 
    const mongoUrl =
      `mongodb+srv://dc-test-bot:${process.env.DB_PASS}@cluster0.se6hzd4.mongodb.net/?retryWrites=true&w=majority`;
      console.log('💾🔱 Iniciando conexão com banco de dados.')
      mongoose.connect(mongoUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        this.connect = mongoose.connection;
        console.log('💾✅ Conectado com banco de dados.')
      })
      .catch(error => {
        console.error(`💾❌ Erro ao conectar com banco de dados: ${error}`)
      })
  }
}

module.exports = Database;