import mongoose from 'mongoose';
// import monggodbird
const cartSchema = new mongoose.Schema({
    user_id: { type: String, required: true },
    products: [{
        type: mongoose.Schema.Types.ObjectId, ref: "CartDetail"
    }]
}, {
    timestamps: true,
    versionKey: false
});

export default mongoose.model('Cart', cartSchema);
