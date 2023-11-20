//יצירת אובייקט מסוג ראוטר
const router=require('express').Router();


//const productRouter=require('../controllers/product');

const{
    getAllProducts,
    getProductById,
    addProduct,
    updateProduct,
    deleteProductById


}=require('../controllers/product');



//מוצרים
//  end points נקודת קצה  
router.get('/', getAllProducts);//סלש בגט זה תביא את כל המוצרים
//נקודת קצה למחיקת מוצר לפי קוד מוצר
router.get('/:id', deleteProductById);
//נקודת קצה לעידכון מוצר לפי קוד מוצר
router.patch('/:id', updateProduct);
//נקודת קצה למחיקת מוצר לפי קוד מוצר 
router.delete('/:id',deleteProductById );
//הוספת מוצר חדש
router.post('/', addProduct);


module.exports=router;