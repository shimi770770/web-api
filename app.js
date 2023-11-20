const express=require('express');
const app=express();
const productRouter=require('./api/v1/routers/products');
const categoryRouter=require('./api/v1/routers/category');
const secure=require('./api/v1/middlewares/secure');
const myLoger=require('./api/v1/middlewares/logger');
const morgan=require('morgan');



let arrip=['127.0.0.1','::1',"162.3.6.5","2.2.2.2"];// arrip מערך של איי פיי בשם 
app.use(myLoger);
app.use(secure);
//הוספת שיכבה לטיפול בבקשות שנשלחו בפורמט גייסוון
app.use(express.json());
// urlencoded  הוספת שיכבה לטיפול בבקשות שנשלחו בפורמט 
app.use(express.urlencoded({
    extended:false

}));
//app.use(morgan('dev'));


//עלייך ליצור שכבת בניים המבצע בדיקת אבטחה הוא ישלוף את כתובת האיי פי מהבקשה יבדוק 
//האם הכתובת נמצאת במאגר כתובת מורשות ובמידה ולא יעצור את הבקשה
//את מאגר הכתובות המורשות יש לנהל באמצעות מערך שיוגדר עם כתובות מורשות
// app.use((req,res,next)=>{
//     if(req.url=='/admin')
//     {
//         let ip=req.ip;//   של משתמש ip    שמירת כתובת 
//         let status=arrip.find((el)=>el==ip);// arrip בדיקה אם האיי פי נמצא במערך 
//         if(!status)//אם הוא לא מצא
//           res.status(401).json({Msg:'You are not authorized'}); 
//           //תחזיר 401 שזה לא נמצא אם הודעה שנרשום   
//     }
//     next();


// });




// שילוב הראוטרים בתוך האפלקציה
app.use('/product',productRouter);
app.use('/category',categoryRouter);


// 404 נקודת קצה עבור נתיבים שלר נמצאו 
//  כל בקשה all 
// הכוכבית כל נתיב
app.all('*',(req,res)=>{
    res.status(404).json({msg:'404 not found'});



});

module.exports=app;