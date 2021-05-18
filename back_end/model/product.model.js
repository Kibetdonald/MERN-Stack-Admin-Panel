const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
    prd_cat: {
        required: true,
        type: String,

    },
    prd_title: {
        required: true,
        type: String,
    },
    prd_price: {
        required: true,
        type: Number,
    },
    prd_desc: {
        required: true,
        type: String,
        trim: true
    },
    prd_img: [{img: {type: String}}],
    prd_keyword: {
        required: true,
        type: String,
        trim: true

    },
   
    prd_quantity: {
        required: true,
        type: Number
    },

},
    { timestamps: true }

);

module.export =mongoose.model('Product', productSchema);