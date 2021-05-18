 //requiring router
 //HTTP METHODS
//  GET
//  PUT
//  DELETE
//  POST
 const router = require('express').Router();

 //requiring model that we created i.e exercise.model.js
 let Product = require('../model/product.model');


//root URL
router.route('/').get((req, res) => {
    Product.find()
    .then(products => res.json(products))
    .catch(err => res.status(400).json('Error:' +err))
    
   
});
//get request
router.route('/:id').get((req, res) => {
    product.findById(req.params.id)
    .then(products => res.json(products))
    .catch(err => res.status(400).json('Error:' +  err));

  //delete by id request 
router.route('/:id').get((req, res) => {
    product.findByIdAndDelete(req.params.id)
    .then(() => res.json('Product deleted'))
    .catch(err => res.status(400).json('Error:' +  err));


})

 
router.route('/add').post((req, res)=>{
    const prd_cat = req.body.prd_cat;
    const prd_title = req.body.prd_title;
    const prd_price = req.body.prd_price;
    const prd_desc = req.body.prd_desc;
    const prd_img = req.body.prd_img;
    const prd_keyword = req.params.prd_keyword
    const prd_quantity = Number(req.body.prd_quantity);
    //const date = Date.parse(req.body.date);

//creating new instance of exercise
    const newProduct = new product({
        prd_cat,
        prd_title,
        prd_price,
        prd_desc,
        prd_img,
        prd_keyword,
        prd_quantity
       


    });


    newProduct.save()
    .then(() => res.json('Product added!'))
   .catch(err=>res.status(400).json('Error:'+err))

});
//update request
router.route('/update/:id').post((req, res)=>{
    product.findById(req.params.id)
    .then(product => {
        product.prd_cat = req.body.username;
        product.prd_title = req.body.description;
        product.prd_price = req.body.username;
        product.prd_desc = req.body.description;
        product.prd_img = req.body.username;
        product.prd_keyword = req.body.description;
        product.prd_quantity = Number(req.body.duration);
       
    });
    product.save()
    .then(() => res.json('Product updated!'))
    .catch(err =>res.status(400).json('Error: ' + err));
})
.catch(err => res.status(400).json('Error:' +err));

});

module.exports =router;

