import mongoose from "mongoose";

const donorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide the donor\'s name'],
    },
    bloodGroup: {
        type: String,
        required: [true, 'Please provide a blood group'],
        enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
    },
    email: {
        type: String,
        required: [true, 'Please provide an email address'],
        unique: true,
        match: [
            // /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
            'Please provide a valid email address',
        ],
    },
    phone: {
        type: String,
        required: [true, 'Please provide a contact number'],
        match: [
            // /^\d{10}$/,
            'Please provide a valid phone number (10 digits)',
        ],
    },
    city: {
        type: String,
        required: [true, 'Please provide the city of the donor'],
    },
    address: {
        type: String,
        required: false,
    },
    availability: {
        type: Boolean,
        default: true,  
    },
    lastDonationDate: {
        type: Date,
        required: false,  
    },
}, {
    timestamps: true  
});

// Create a model from the schema and export it
const Donor = mongoose.model('Donor', donorSchema);
export default Donor;
