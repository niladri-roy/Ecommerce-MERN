const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please Enter product Name"],
        trim: true,
    },
    description: {
        type: String,
        required: [true, "Please Enter product Description"],
    },
    price: {
        type: Number,
        required: [true, "Please Enter product Price"],
        maxLength: [8, "Price cannot exceed 8 characters"],
    },
    ratings: {
        type: Number,
        default: 0,
    },
    images: [
        {
        public_id: {
            type: String,
            required: true,
        },
        url: {
            type: String,
            required: true,
        },
        },
    ],
    category: {
        type: String,
        required: [true, "Please Enter Product Category"],
    },
    Stock: {
        type: Number,
        required: [true, "Please Enter product Stock"],
        maxLength: [4, "Stock cannot exceed 4 characters"],
        default: 1,
    },
    numOfReviews: {
        type: Number,
        default: 0,
    },
    reviews: [
        {
        user: {
            type: mongoose.Schema.ObjectId,
            ref: "User",
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        rating: {
            type: Number,
            required: true,
        },
        comment: {
            type: String,
            required: true,
        },
        },
    ],

    user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("Product", productSchema);









/*

1. `name`: This field represents the name of the product. It is a string type and is required, meaning it must be provided when creating a new product. The `trim` property is set to true, which removes any leading or trailing whitespace from the name.

2. `description`: This field represents the description of the product. It is a string type and is required. It provides a brief description of the product.

3. `price`: This field represents the price of the product. It is a number type and is required. The `maxLength` property is set to 8, which means the price cannot exceed 8 characters in length.

4. `ratings`: This field represents the average rating of the product. It is a number type and has a default value of 0. This field can be used to store the average rating of the product based on user reviews.

5. `images`: This field is an array that contains objects representing images of the product. Each image object has two properties: `public_id` (string type, required) and `url` (string type, required). It allows storing multiple images for a product.

6. `category`: This field represents the category of the product. It is a string type and is required. It can be used to categorize products into different groups or types.

7. `Stock`: This field represents the stock quantity of the product. It is a number type and is required. The `maxLength` property is set to 4, meaning the stock quantity cannot exceed 4 characters in length. It has a default value of 1.

8. `numOfReviews`: This field represents the total number of reviews for the product. It is a number type and has a default value of 0. This field can be used to keep track of the number of reviews a product has received.

9. `reviews`: This field is an array that contains objects representing user reviews for the product. Each review object has four properties: `user` (mongoose Schema ObjectId, referencing the "User" model, required), `name` (string type, required), `rating` (number type, required), and `comment` (string type, required). It allows storing multiple user reviews for a product.

10. `user`: This field represents the user who created the product. It is a mongoose Schema ObjectId, referencing the "User" model, and is required. It establishes a relationship between the product and the user who created it.

11. `createdAt`: This field represents the date and time when the product was created. It is a Date type and has a default value of the current date and time when the product is created.

The `productSchema` defines the structure and validation rules for a product document in MongoDB using the Mongoose library. It includes various fields to store information about the product, such as its name, description, price, ratings, images, category, stock quantity, reviews, creator user, and creation timestamp. 

*/