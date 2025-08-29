import mongoose from 'mongoose';

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://kp07krish:Resume1234567890@cluster0.mpqiu1r.mongodb.net/Resume')
    .then(() => console.log('DB Connected'))

}