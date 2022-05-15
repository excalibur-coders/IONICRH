import crypto from 'crypto';

const returnEncryptedFileName = (file: Express.Multer.File): string => {
  // crypto.randomBytes(16, (err, hash) => {
  //   fileName = `${hash.toString("hex")}-${file.originalname}`;

  //   // console.log('a ', fileName);
  
  //   return fileName;
  // });

  return `${crypto.randomBytes(16).toString("hex")}-${file.originalname}`;
} 

export default returnEncryptedFileName;
