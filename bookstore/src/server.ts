import express from 'express';
import userRoutes from './routes/userRoutes';
import authRoutes from './routes/authRoutes';  

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/api', authRoutes);  

app.use('/users', userRoutes);  

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});



