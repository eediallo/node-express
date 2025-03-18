
const getAllProducts = async (req, res)=>{
    res.status(200).json({msg: 'products route'})
}
const getAllProductsStatic = async (req, res)=>{
    res.status(200).json({msg: 'products static route'})
}


export {getAllProducts, getAllProductsStatic}