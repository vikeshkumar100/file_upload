import express from 'express';
import fs from 'fs';
import multer from 'multer';
if(!fs.existsSync('./uploads'))
{
    fs.mkdirSync('./uploads');
}
const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'./uploads')
    },
    filename:(req,file,cb)=>{
        cb(null,+Date.now()+"-"+file.originalname)
    }
});
const upload=multer({storage});

const router=express.Router();
router.get('/',(req,res)=>{
    return res.render("file.view.ejs");
})
router.post('/',upload.single('image'),(req,res)=>{
    console.log(req.file);
    return res.send("file uploaded successful");
})
export default router;