import path from 'path';
import crypto from 'crypto';
import multerS3 from 'multer-s3'
import aws from 'aws-sdk';

const s3 = {
    s3: multerS3({
        s3: new aws.S3(),
        bucket: String(process.env.BUCKET_NAME_EXCALIBUR),
        contentType: multerS3.AUTO_CONTENT_TYPE,
        acl: 'public-read',
        key: (req, file, cb) => {
            crypto.randomBytes(8, (err, hash) => {
                if (err) cb(err);
                const fileName = `${hash.toString("hex")}-${file.originalname}`;
                const { name, ext } = path.parse(fileName);
                cb(null, fileName);
            });
        }
    })
}

export default {
    storage: s3["s3"],
    limits: {
        fileSize: 100 * 1024 * 1024,
    },
}