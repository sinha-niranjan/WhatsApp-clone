import multer from "multer";

import { GridFsStorage } from "multer-gridfs-storage";

import dotenv from "dotenv";

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

// const url = `mongodb://${USERNAME}:${PASSWORD}@ac-taxiwe0-shard-00-00.4ial8lb.mongodb.net:27017,ac-taxiwe0-shard-00-01.4ial8lb.mongodb.net:27017,ac-taxiwe0-shard-00-02.4ial8lb.mongodb.net:27017/?ssl=true&replicaSet=atlas-i4p1tx-shard-0&authSource=admin&retryWrites=true&w=majority`
const storage = new GridFsStorage({
   url : `mongodb://${USERNAME}:${PASSWORD}@ac-taxiwe0-shard-00-00.4ial8lb.mongodb.net:27017,ac-taxiwe0-shard-00-01.4ial8lb.mongodb.net:27017,ac-taxiwe0-shard-00-02.4ial8lb.mongodb.net:27017/?ssl=true&replicaSet=atlas-i4p1tx-shard-0&authSource=admin&retryWrites=true&w=majority`,
  options: { useUnifiedTopology: true, useNewUrlParser: true },
  file: (req, file) => {
    const match = ["image/png", "image/jpg"];

    if (match.indexOf(file.mimeType) === -1) {
      return `${Date.now()}-file-${file.originalname}`;
    }

    return {
      bucketName: "photos",
      filename: `${Date.now()}-file-${file.originalname}`,
    };
  },
});

export default multer({ storage });


