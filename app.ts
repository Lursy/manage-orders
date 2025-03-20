import bodyParser from 'body-parser';
import { config } from 'dotenv';
import express from 'express';
import http from 'http';
import path from 'path';
import fs from 'fs';
import mongoose from 'mongoose';

// configurando server
const app = express();
const PORT = 80;
const HOST = '0.0.0.0';
const server = http.createServer(app);

// adicionando variaveis de ambiente
config();

app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());

// Conectar ao MongoDB
async function connect(){
  try {
      const connection = await mongoose.connect(process.env.URI!);
      console.log('Connected to MongoDB');

      return connection;
  } catch (err) {
      console.error('Error connecting to MongoDB', err);
  }
}

app.get('/', (req, res) => {
  res.status(200).json({"status": "running"});
});

// Carregar rotas dinamicamente
const routesPath = path.join(__dirname, 'src/routes');
fs.readdir(routesPath, (err, files) => {
  if (err) {
    console.error('Erro ao ler diretório de rotas', err);
    return;
  }

  files.forEach(file => {
    if (file.endsWith('.ts') || file.endsWith('.js')) {
      import(path.join(routesPath, file))
        .then(route => {
          const routeName = `/${path.basename(file, path.extname(file)).split(".")[0]}`;
          app.use(routeName, route.default || route);
          console.log(`Rota registrada: ${routeName}`);
        })
        .catch(err => {
          console.error(`Erro ao carregar a rota ${file}:`, err);
        });
    }
  });
});

process.on("uncaughtException", (error) => {
  console.error("Erro não tratado capturado:", error);
});

process.on("unhandledRejection", (reason, promise) => {
  console.error("Rejeição de promessa não tratada:", reason);
});

server.listen(PORT, HOST, async () => {
  await connect();
  console.log(`website running on http://${HOST}:${PORT}`);
});
