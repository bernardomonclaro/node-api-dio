import express, { Request, Response, NextFunction } from 'express';
import errorHandler from './middlewares/error-handler.middleware';
import authorizationRoute from './routes/authorization.route';
import statusRoute from './routes/status.route';
import route from './routes/users.route';

const app = express();

// Configurações da aplicação
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configurações de rotas
app.use(route);
app.use(statusRoute);
app.use(authorizationRoute)
// Configuração dos handlers de error
app.use(errorHandler);

// Inicialização do servidor
app.listen(3000, () => {
  console.log('Aplicação executando na porta 3000!');
});
