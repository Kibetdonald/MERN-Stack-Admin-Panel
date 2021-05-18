const router = require('express').Router();

//require the respective model
let category = require('../model/categories.model');


router.route('/').get((req, res) => {
    category.find()
    .then(categories => res.json(categories))
    .catch(err => res.status(400).json('Error:' +err));
});


router.route('/add').post((req, res)=>{
    const category_title  = req.body.category_title ;
    const newCategory = new category({category_title });

    newCategory.save()
    .then(() => res.json('Category added!'))
    .catch(err =>res.status(400).json('Error: ' +err));

});
module.exports =router;
