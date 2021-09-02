import mongoose from 'mongoose';
const bookSchema = mongoose.Schema({
    title:{
        type:String,
        require:true

    },
    desc:{
        type:String,
        require:true
    },
    img:{
        type:String,
        require:true
    },
    author:{
        type:String
    }
},{timestamp:true});
module.exports = mongoose.model('Book',bookSchema);