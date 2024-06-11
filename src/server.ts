// Express
import express, { Request, Response, NextFunction } from "express";

// Rotas
import { router } from "./router";

// Bibliotecas
import cors from "cors";
import dotenv from 'dotenv';

// Servidor
import path from "path";

const app = express()

app.use(cors())
app.use(express.json())
app.use(router)

app.use('/files', express.static(path.resolve(__dirname, '..', 'tmp')))

// Variavel de ambiente
dotenv.config();

// Middleware de erro
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof Error) {
    // Se for uma instancia de um error
    return res.status(400).json({
      error: err.message
    })
  }

  return res.status(500).json({
    status: 'error',
    message: 'Internal server error.'
  })
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log("Servidor rodando na porta", PORT));

export default app;