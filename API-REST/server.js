import app from './src/app.js';

//constantes usam como padrão letras maiusculas
const PORT = 3000;

// escuta a porta  
app.listen(PORT,()=>{
    console.log(`servidor rodando no endereço http://localhost:${PORT}`);
})

//subir o servidor