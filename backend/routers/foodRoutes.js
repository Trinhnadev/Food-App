import express from 'express';
import { addFood } from '../controller/foodController.js';
import multer from 'multer';

const foodRouter = express.Router();

// Image Storage Engine configuration
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads"); // Ensure this path exists
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const upload = multer({ storage: storage });

// Route for adding food
foodRouter.post("/add-food", upload.single("image"), addFood);

export default foodRouter;
