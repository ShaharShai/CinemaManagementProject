import mongoose from 'mongoose';

const memberSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    }
}, { versionKey: false })

const Member = mongoose.model('Member', memberSchema);

export default Member;