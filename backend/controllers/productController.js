
exports.getProducts = (req, res, next) => {
    res.status(200).json({
        succes: true,
        message: 'This route will show all products in the database.'
    })
}