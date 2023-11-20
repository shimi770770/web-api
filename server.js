require('dotenv').config();//הפעלת הפונקציה לייצירת משתניהסביבה מתוך הגדרות המערכת
const http=require('http');
const port=process.env.PORT;
const app=require('./app');
const srv=http.createServer(app);
srv.listen(port,()=>{console.log('server up')});