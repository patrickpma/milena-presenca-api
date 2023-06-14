const express = require('express');
const server = express();
const cors = require('cors');

server.get('/livros/form', (req, res) => {
    return res.json({ mensagem: 'Nossa api esta' })
})

server.get('/convidados', (req, res) => {
    const convidados = [
        {
            "id": "0001",
            "nome": "Patrick",
            "confirmado": false
        }
    ]
    return res.json(convidados)
})

server.post('/convidados/:id', function (req, resp) {
    console.log(req.body);

    // const livroDao = new LivroDao(db);
    // livroDao.adiciona(req.body).then(resp.redirect('/livros')).catch(erro => console.log(erro));
});
server.use(express.json);
server.use(cors({origin: '*'}));
server.listen(3500, () => {
    console.log('server is running...')
});