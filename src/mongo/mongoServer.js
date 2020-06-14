const admins = require("./admins");
const express = require("express");
const app = express();

app.use(express.json())

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader( "Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With")
    next();
  });

app.post('/makeUser', async(req, res) => {
    console.log("Making user");
    var acc ={"formatting issue" :"your json was bad!"};
    try{
        acc = await admins.makeUser();
    }catch(e){
        console.log(e)
        return res.status(400).json({error: e})
    }
    return res.json(acc)
});

app.get('/getOrders', async(req, res) => {
    console.log("get orders");
    var acc ={"formatting issue" :"your json was bad!"};
    try{
        acc = await admins.getOrders();
    }catch(e){
        console.log(e)
        return res.status(400).json({error: e})
    }
    return res.json(acc)
});

app.post('/removeOrder', async(req, res) => {
    var acc ={"formatting issue" :"your json was bad!"};
    console.log("Removing from cart");
    try{
        const body = req.body;
        if(body.id){
            acc = await admins.removeOrder(body.id);
        }
    }catch(e){
        console.log(e)
        return res.status(400).json({error: e})
    }
    return res.json(acc)
}); 

app.post('/getCartByIdTemp', async(req, res) => {
    console.log("get cart by id");
    var acc ={"formatting issue" :"your json was bad!"};
    try{
        const body = req.body;
        if(body.id){
            acc = await admins.getCartByIdTemp(body.id);
        }
    }catch(e){
        console.log(e)
        return res.status(400).json({error: e})
    }
    return res.json(acc)
});
app.post('/getCartById', async(req, res) => {
    console.log("get cart by id");
    var acc ={"formatting issue" :"your json was bad!"};
    try{
        const body = req.body;
        if(body.id){
            acc = await admins.getCartById(body.id);
        }
    }catch(e){
        console.log(e)
        return res.status(400).json({error: e})
    }
    return res.json(acc)
});

app.post('/getProducts', async(req, res) => {
    console.log("get products");
    var acc ={"formatting issue" :"your json was bad!"};
    try{
        acc = await admins.getProducts();
    }catch(e){
        console.log(e)
        return res.status(400).json({error: e})
    }
    return res.json(acc)
});

app.post('/addProduct', async(req, res) => {
    console.log("adding product");
    var acc ={"formatting issue" :"your json was bad!"};
    try{
        const body = req.body;
        if(body.name && body.price){
            acc = await admins.addProduct(body.name, body.price);
        }
    }catch(e){
        console.log(e)
        return res.status(400).json({error: e})
    }
    return res.json(acc)
});

app.post('/deleteCart', async(req, res) => {
    console.log("delete cart by id");
    var acc ={"formatting issue" :"your json was bad!"};
    try{
        const body = req.body;
        if(body.id){
            acc = await admins.deleteCart(body.id);
        }
    }catch(e){
        console.log(e)
        return res.status(400).json({error: e})
    }
    return res.json(acc)
});

app.post('/updateAvail', async(req, res) => {
    console.log("Updating availability");
    var acc ={"formatting issue" :"your json was bad!"};
    try{
        const body = req.body;
        if(body.name && body.bool!==null){

            acc = await admins.updateAvail(body.name, body.bool);
        }
    }catch(e){
        console.log(e)
        return res.status(400).json({error: e})
    }
    return res.json(acc)
});

app.post('/tempOrder', async(req, res) => {
    console.log("sending temp order");
    var acc ={"formatting issue" :"your json was bad!"};
    try{
        const body = req.body;
        if(body.strawbs || body.corn || body.squash){
            acc = await admins.tempOrder(body.strawbs, body.corn, body.squash);
        }
    }catch(e){
        console.log(e)
        return res.status(400).json({error: e})
    }
    return res.json(acc)
});

app.post('/sendOrder', async(req, res) => {
    console.log("sending order");
    var acc ={"formatting issue" :"your json was bad!"};
    try{
        const body = req.body;
        if(body.strawbs || body.corn || body.squash){
            acc = await admins.sendOrder(body.strawbs, body.corn, body.squash);
        }
    }catch(e){
        console.log(e)
        return res.status(400).json({error: e})
    }
    return res.json(acc)
});

app.post('/saveOrder', async(req, res) => {
    console.log("saving order");
    var acc ={"formatting issue" :"your json was bad!"};
    try{
        const body = req.body;
        if(body.order){
            acc = await admins.saveOrder(body.order);
        }
    }catch(e){
        console.log(e)
        return res.status(400).json({error: e})
    }
    return res.json(acc)
});

app.post('/makeCart', async(req, res) => {
    console.log("Making cart");
    var acc ={"formatting issue" :"your json was bad!"};
    try{
        const body = req.body;
        acc = await admins.makeCart(body.id);
    }catch(e){
        console.log(e)
        return res.status(400).json({error: e})
    }
    return res.json(acc)
});

app.post('/updateCart', async(req, res) => {
    console.log("Updating cart");
    var acc ={"formatting issue" :"your json was bad!"};
    try{
        const body = req.body;
        if(body.id && body.name && body.num){
            acc = await admins.updateCart(body.id, body.name, body.num);
        }
    }catch(e){
        console.log(e)
        return res.status(400).json({error: e})
    }
    return res.json(acc)
});

app.post('/removeFromCart', async(req, res) => {
    var acc ={"formatting issue" :"your json was bad!"};
    console.log("Removing from cart");
    try{
        const body = req.body;
        if(body.name && body.num){
            acc = await admins.removeFromCart(body.name, body.num);
        }
    }catch(e){
        console.log(e)
        return res.status(400).json({error: e})
    }
    return res.json(acc)
}); 

app.post('/clearCart', async(req, res) => {
    var acc ={"formatting issue" :"your json was bad!"};
    console.log("Clearing cart");
    try{
        acc = await admins.clearCart();
    }catch(e){
        console.log(e)
        return res.status(400).json({error: e})
    }
    return res.json(acc)
});

app.post('/addFruits', async(req, res) => {
    var acc ={"formatting issue" :"your json was bad!"};
    console.log("Adding fruits");
    try{
        acc = await admins.addFruits();
    }catch(e){
        console.log(e)
        return res.status(400).json({error: e})
    }
    return res.json(acc)
})
 
app.get("/*", async (req,res) => {
    return res.status(404).json({Error: "Page not found"})
});

app.listen(3001, () => {
    console.log("Mongo Server Going Up");
    console.log("Your routes will be running on http://localhost:3001");
  });