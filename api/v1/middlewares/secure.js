module.exports=((req,res,next)=>{
    if(req.url=='/admin')
    {
        let ip=req.ip;//   של משתמש ip    שמירת כתובת 
        let status=arrip.find((el)=>el==ip);// arrip בדיקה אם האיי פי נמצא במערך 
        if(!status)//אם הוא לא מצא
          res.status(401).json({Msg:'You are not authorized'}); 
          //תחזיר 401 שזה לא נמצא אם הודעה שנרשום   
    }
    next();


});


