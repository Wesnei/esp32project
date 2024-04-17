const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_CONNECT)
  .then(() => {
    console.log("Conectado !!");
  })
  .catch((error) => {
    console.error("Erro ao conectar ao banco de dados:", error);
  });

