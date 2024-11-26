// import crypto from 'crypto';

// export const hashPassword = (password: string): string => {
//   return crypto.createHash('sha256').update(password).digest('hex');
// };

// export const comparePassword = (password: string, hash: string): boolean => {
//   const hashedPassword = hashPassword(password); 
  
//   console.log('Senha hasheada:', hashedPassword);
  
//   console.log('Hash armazenado:', hash);
//   return hashedPassword === hash;
// };


import crypto from 'crypto';

export const hashPassword = (password: string): string => {
  return crypto.createHash('sha256').update(password).digest('hex');
};

export const comparePassword = (password: string, hash: string): boolean => {
  const generatedHash = hashPassword(password);
  console.log('Hash gerado:', generatedHash);  
  console.log('Hash armazenado no banco:', hash);  
  return generatedHash === hash;
};


