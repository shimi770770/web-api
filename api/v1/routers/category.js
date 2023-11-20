
const router=require('express').Router();


const{
    getAllCategoryById,
    getCategoryById,
    addCategory,
    updateCategory,
    deleteCategoryById


}=require('../controllers/category');






//  קטגורויות 
router.get('/', getAllCategoryById);//סלש בגט זה תביא את כל המוצרים
//נקודת קצה לקבלת פרטי מוצר לפי קוד מוצר
router.get('/:id', getCategoryById);
//נקודת קצה לעידכון פרטי מוצר לפי קוד מוצר
router.patch('/:id', updateCategory);
//נקודת קצה למחיקת מוצר לפי קוד מוצר
router.delete('/', deleteCategoryById);
//הוספת מוצר חדש
router.post('/', addCategory);


module.exports=require;