import multer from "multer";
import path from 'path';
import crypto from 'crypto';
import multerS3 from 'multer-s3'
import aws from 'aws-sdk';
import returnEncryptedFileName from 'functions/encryptedFileName';

const s3 = {
    s3: multerS3({
        s3: new aws.S3(),
        bucket: String(process.env.BUCKET_NAME),
        contentType: multerS3.AUTO_CONTENT_TYPE,
        acl: 'public-read',
        key: (req, file, cb) => {
            crypto.randomBytes(16, (err, hash) => {
                if (err) cb(err);
                const fileName = `${hash.toString("hex")}-${file.originalname}`;
                const { name, ext } = path.parse(fileName);
                cb(null, fileName);
            });
            /*          console.log(returnEncryptedFileName(file));
                        console.log('a ', returnEncryptedFileName(file));
                        cb(null, returnEncryptedFileName(file)); */
        }
    })
}
export default {
    storage: s3["s3"],
    limits: {
        fileSize: 5 * 1024 * 1024,
    }

}
