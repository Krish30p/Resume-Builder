import multer from 'multer'

// Use memory storage for Vercel (read-only filesystem)
const storage = multer.memoryStorage();

//file filter
const fileFilter = (req, file , cb) =>{
    const allowedTypes =["image/jpeg", "image/png", "image/jpg",];
    if (allowedTypes.includes(file.mimetype)){
        cb (null, true)
    }
    else{
        cb(new Error(" only .jpeg , .png or .jpg are allowed formats", false))
    }
}

const upload = multer({storage, fileFilter})
export default upload;