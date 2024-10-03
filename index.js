import express from "express";
import axios from "axios";

const app = express();
const PORT = 3020;
const API_URL = "https://api.adviceslip.com/";

app.use(express.static("public"));


app.get("/", (req,res)=>{
    res.render("index.ejs", {advice:"click below button for advice"});
});


// app.get("/advice-me", async(req,res)=>{
//     try {
//         const result = await axios.get(API_URL + "advice");
//         console.log(result.data.slip.advice);
//         res.render("index.ejs", {
//             advice:result.data.slip.advice,
//         });
//     } catch (error) {
//         res.status(500).send(error.message);
//     }
        
// });


app.get("/advice-me", async(req,res)=>{
    try{
    const result = await axios.get(API_URL+"advice");
    res.render("index.ejs", {advice: result.data.slip.advice});
    }catch(error){
        res.status(500).send(error.message);
    }
});


app.listen(PORT, ()=>{
    console.log(`running on ${PORT}`);
    
});