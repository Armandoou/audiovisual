import express from "express";

const routerProduct = express.Router();

////////////////////////////////////////////////////////////

routerProduct.get('/', (req, res) => {
  console.log('entro a la ruta actualizada፨v፨v')
    
    res.status(400);
    throw new Error("Error simulado");
    

  res.send('Hello World!')
})

routerProduct.post('/', (req, res) => {
    const productos = [

        {name: "camara", id:"1"},
        {name: "microfono", id:"2"}

    ]
  console.log('፨v')
  res.json({"productos":productos})
})



export default routerProduct;