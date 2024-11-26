import { Request, Response } from 'express';
import { AuthService } from '../services/authService';  

const authService = new AuthService();  

export const registerUser = async (req: Request, res: Response): Promise<void> => {
  const { name, email, password } = req.body;

  try {
    const newUser = await authService.registerUser(name, email, password);  // Usando registerUser
    res.status(201).json(newUser);  // Retorna o novo usuário criado
  } catch (err) {
    if (err instanceof Error) {
      console.error(err);
      res.status(400).json({ error: err.message });
    } else {
      console.error(err);
      res.status(500).json({ error: 'Erro ao adicionar usuário' });
    }
  }
};

export const loginUser = async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;

  try {
    const user = await authService.loginUser(email, password);  
    res.status(200).json({ message: 'Login bem-sucedido', user });
  } catch (err) {
    if (err instanceof Error) {
      console.error(err);
      res.status(401).json({ error: err.message });
    } else {
      console.error(err);
      res.status(500).json({ error: 'Erro ao fazer login' });
    }
  }
};
