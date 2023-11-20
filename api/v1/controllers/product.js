const express=require('express');
module.exports={
    getAllProducts:function(req,res){
        return res.status(200).json({msg:`all Product ${req.ip}`});
    },

    getProductById:function(req,res){
        return res.status(200).json({msg:`${req.ip}`})

    },
    addProduct:function(req,res){
        console.log(req.body);
        return res.status(200).json({msg:`${req.ip}`})
    },
    updateProduct:function(req,res){
        return res.status(200).json({msg:`${req.ip}`})
    },
    deleteProductById:function(req,res){
        return res.status(200).json({msg:`${req.ip}`})
    },

}