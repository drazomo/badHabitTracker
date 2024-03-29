import mongoose from 'mongoose';

const habitSchema = mongoose.Schema({ 
    title: String,
    name: String,
    creator: String,
    createAt : {
        type: Date,
        default: new Date().toISOString()
    }
 });

var habitItem = mongoose.model('Item', habitSchema);

export default habitItem;