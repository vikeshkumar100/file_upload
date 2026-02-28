import express from 'express';
import path from 'node:path';
import uploadRouter from './routes/file.route.js';

const app=express();
const PORT=8000;
app.use(express.urlencoded({extended:true}));
app.set("view engine","ejs");
app.set('views',path.resolve('./views'));

app.get('/',(req,res)=>{
    return res.send("vikesh");
});
app.use('/upload',uploadRouter);


app.listen(PORT,()=>{
    console.log("server is running on port - ",PORT);
})