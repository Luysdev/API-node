import app from "./src/app";

const port = 3000;

// escuta a porta  
app.listen(port,()=>{
    console.log(`servidor rodando no endereço http://localhost:${port}`);
})