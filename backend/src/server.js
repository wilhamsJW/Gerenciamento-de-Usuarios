const express = require('express');      //express é uma framework para Node.js, existem diversas funcionalidades prontas dentro dele, inclusive as rotas da aplicação
const mongoose = require('mongoose');   //mongoose = é uma lib ou ferramenta que irá ajudar a trabalhar com o mongodb; quando formos usar os métodos http iremos usar o mongoose
const routes = require('./routes');    //se coloca ./, se não o node entende q é uma dependecia, assim como express acima não tem ./ pq é uma dependeçia ou lib, mas routes é um arquivo
const cors = require('cors');         //protege pra que niguém consuma minha api, apenas o endereço q eu solicitei dentro dele como exemplo abaixo
const path = require('path');        //para usar todas os caminhos da sua aplicação, path faz parte do express

const app = express();

mongoose.connect('mongodb+srv://usuario:usuario@cluster0.xkef2.mongodb.net/annotations?retryWrites=true&w=majority', {
    useNewUrlParser: true,   //essa duas linhas são configurações do mongodb e para evitar uns avisos no terminal
    useUnifiedTopology: true,
})

// mongoose.connect('mongodb+srv://wilhams:wilhams@novoprojetodeestudos.zwhx7.mongodb.net/NovoProjetoDeEstudos?retryWrites=true&w=majority', {
//     useNewUrlParser: true,   //essa duas linhas são configurações do mongodb e para evitar uns avisos no terminal
//     useUnifiedTopology: true,
// })

app.use(cors()); 
app.use(express.json()); 
                                                                           
app.use(routes);  
app.listen(6060);