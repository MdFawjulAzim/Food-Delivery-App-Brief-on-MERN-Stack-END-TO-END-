import multer from "multer";

const fileStorageEngine = multer.diskStorage({
    destination: (req, res, cb) => { 
        cb(null, "./uploads/avatar");
    },
    filename: (req, file, cb) => {
        cb(null,"api-img__" + Date.now() + "-" + file.originalname);
    }
});


let upload = multer({ storage: fileStorageEngine });
export default upload;
