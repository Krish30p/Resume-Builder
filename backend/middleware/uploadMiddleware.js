import multer from 'multer'

const storage = multer.diskStorage({
    destination:( req, file, cb) =>{
        cb(null,"uploads/")
    },
    filename:( req, file, cb) =>{
        cb(null, `${Date.now()}-${file.originalname}`)
    },
});

//file filter
const fileFilter = (req, file , cb) =>{
    const allowedTypes =["iamges/jpeg", "iamges/png", "iamges/png",];
    if (allowedTypes.includes(file.mimetype)){
        cb (null, true)
    }
    else{
        cb(new Error(" only .jpeg , .png or .jpg are allowed formats", false))
    }
}

const upload = multer({storage, fileFilter})
export default upload;