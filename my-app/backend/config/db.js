import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://ronak_26013:ronak_26013@cluster0.67i44e9.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}