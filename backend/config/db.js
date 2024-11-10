import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://nguyenanhtrinh05:192837465@cluster0.84500.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("DB Connected");
    } catch (error) {
        console.log("DB Connection Error: ", error);
        process.exit(1); // Thoát ứng dụng nếu không kết nối được DB
    }
};
