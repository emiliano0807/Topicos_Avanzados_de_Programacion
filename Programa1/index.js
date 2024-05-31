const express = require("express");   //Para Montar El Servidor
const cors = require("cors"); //Para conectar los clientes


const app = express();
app.use(cors()); //Para recibir datos de ips distintas a localhost

app.use(express.json()); //Permie leer los datos JSON

app.listen(3000,()=>console.log("Servidor creado en el puerto 3000"));

/**
 * GET    LEER
 * POST   ESCRIBIR
 * PATCH  MODIFICAR ATRIBUTO
 * PUT    MODIFICAR EL REGISTRO
 * DELETE ELIMINAR
 **/

/*app.get();
app.post();
app.patch();
app.put();
app.delete();*/

app.get("/",(req,res)=>{
    res.send("<h1>Hola desde node</h1>")
});
app.get("/json",(req,res)=>{
    res.json({mensaje:"Hola desde JSON"});
});

app.get("/suma/:numero1/:numero2",(req,res)=>{   
    var numero1;
    var numero2; 
    try {
        numero1 = parseFloat(req.params.numero1);
        numero2 = parseFloat(req.params.numero2);
        if(isNaN(numero1) || isNaN(numero2)){
            res.status(500).send("Parametros Incorrectos");
        }
    } catch (error) {
        res.status(500).send("Parametros Incorrectos");
    }
    res.status(200).send(`La suma de ${numero1} + ${numero2} = ${(numero1+numero2)}`);
});

app.get("/datos/:nombre/:edad",(req,res)=>{
    var {nombre,edad} = req.params;
    const datosHTML = `
    <div>
        <h1>
        Hola ${nombre}
        </h1>
        <br/>
        <p>Tu edad es: ${edad}</p>
    </div>
    `;
    res.send(datosHTML);
});

app.post("/sumar",(req,res)=>{
    let {numero1,numero2}=req.body
    try {
        numero1 = parseFloat(numero1);
        numero2 = parseFloat(numero2);
        if(isNaN(numero1) || isNaN(numero2)){
            res.status(500).send("Parametros Incorrectos");
        }
    } catch (error) {
        res.status(500).send("Parametros Incorrectos");
    }
    res.status(200).send(`La suma de ${numero1} + ${numero2} = ${(numero1+numero2)}`);
});
app.get('/productos', (req, res)=>{
    const productos={
        productos:[
            {
                nombre: "Aceite",
                precio: 250,
                marca: "Cristal"
            },
            {
                nombre: "Pasta de Dientes",
                precio: 35,
                marca: "Colgate"
            },
            {
                nombre: "Jabon",
                precio: 20,
                marca: "Zote"
            },
            {
                nombre: "Doritos",
                precio: 17,
                marca: "Sabritas"
            }
        ]
    }
    console.log(productos)
    res.json(productos)
})

const product=[]
let productsName=[]
let productsPrice=[]
app.post("/compra", (req, res)=>{
    const data = req.body;
    let total= 0;
    for(let i=0; i<data.length; i++){
        product[i]= data[i].split('-');
        productsName= [product[i][0], ...productsName]
        productsPrice= [product[i][1], ...productsPrice]
        total+=parseFloat(productsPrice);
    }
    res.send(`El total de tu lista es: ${total}`)
})