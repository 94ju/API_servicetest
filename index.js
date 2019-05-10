const express=require('express');
const app=express();
const fetch =require('node-fetch');

app.get('/',(req,res)=>{
    res.send('Check API service');
})

app.get('/statetocode/:state',async(req,res)=>{
   
    const state=req.params.state;
    //getting data to find the code
    const statelist = await fetch("http://localhost:3000/getstate");
    const jsonstatelist =await statelist.json();
    const code =jsonstatelist.find(element => element.name===state).abbreviation;
    res.send({code:code});

});

app.get('/codetostate/:code',async(req,res)=>{
    const code=req.params.code;
    const codelist = await fetch("http://localhost:3000/getcode");
    const jsoncodelist = await codelist.json();
    const state =jsoncodelist[code];
    res.send({state:state});
});


app.listen(3001);