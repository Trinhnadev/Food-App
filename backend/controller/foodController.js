import foodModel from "../models/foodModel.js";
import fs from 'fs';

// Function to add food item
const addFood = async (req, res) => {
    console.log("File:", req.file); // Log file information
    console.log("Body:", req.body); // Log body information

    if (!req.file) {
        return res.status(400).json({ success: false, message: "No file uploaded" });
    }

    let image_filename = `${req.file.filename}`;

    const food = new foodModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: image_filename,
    });

    try {
        await food.save();
        res.json({ success: true, message: "Food Added" });
    } catch (error) {
        console.log("Error:", error);
        res.status(500).json({ success: false, message: "Error adding food" });
    }
};

export { addFood };
