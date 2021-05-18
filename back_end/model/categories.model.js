const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categoriesSchema = new Schema({
    category_title : {
        required: true,
        type: String,
        trim: true,
        max: 20,
        min: 3
       // index: true,
       //lowercase: true,
        //unique: true
    }
},{
    timestamps: true
}
)
  const category = mongoose.model('category', categoriesSchema)

    module.exports = category;