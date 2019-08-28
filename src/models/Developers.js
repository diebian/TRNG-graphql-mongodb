import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const DevSchema = new Schema({
    name: String,
    skills: String
});

const Dev = mongoose.model('developer', DevSchema);
export default Dev;
