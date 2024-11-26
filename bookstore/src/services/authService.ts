// import { UserRepository } from '../repositories/userRepository';
// import { hashPassword, comparePassword } from '../helpers/hashHelper';
// import { createSession } from '../helpers/sessionHelper';

// export class AuthService {
//   private userRepository: UserRepository;

//   constructor() {
//     this.userRepository = new UserRepository();
//   }

//   async registerUser(name: string, email: string, password: string) {
//     const passwordHash = hashPassword(password); 
//     const user = await this.userRepository.addUser(name, email, passwordHash); 
//     return user;
//   }

//   async loginUser(email: string, password: string) {
//     const user = await this.userRepository.getUserByEmail(email);
//     if (!user) throw new Error('Usuário não encontrado');

//     const isPasswordValid = comparePassword(password, user.passwordHash); 
//     if (!isPasswordValid) throw new Error('Senha incorreta'); 

//     createSession(user.id); 
//     return user;
//   }
// }

import { UserRepository } from '../repositories/userRepository';
import { hashPassword, comparePassword } from '../helpers/hashHelper';

export class AuthService {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

 
  async registerUser(name: string, email: string, password: string) {
    const passwordHash = hashPassword(password); 
    console.log('Senha fornecida:', password); 
    console.log('Hash gerado:', passwordHash); 
    const user = await this.userRepository.addUser(name, email, passwordHash); 
    return user;
  }


  async loginUser(email: string, password: string) {
    const user = await this.userRepository.getUserByEmail(email);
    if (!user) throw new Error('Usuário não encontrado');

    console.log('Senha fornecida:', password);
    console.log('Hash armazenado no banco de dados:', user.passwordHash);

    const isPasswordValid = comparePassword(password, user.passwordHash); 
    if (!isPasswordValid) throw new Error('Senha incorreta'); 

     
    return user;
  }

}
