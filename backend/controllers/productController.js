const Product = require("../models/productModel");


//create product
exports.createProduct = async (req, res, next) => {

    const product = await Product.create(req.body);

    res.status(201).json({
        success: true,
        product
    })
}


exports.getAllProducts = async(req, res) => {

    const products = await Product.find();

    res.status(200).json({
        success: true,
        products
    })
}

//update product -- admin
exports.updateProduct = async(req, res, next) =>{
    
    let product = Product.findById(req.params.id);

    if(!product){
        return res.start(500).json({
            success: false,
            message: "Product not found"
        })
    }

    product = await Product.findBy

}