const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    
    // Verificando se o campo authorization existe nos headers
    if(!req.headers.authorization){
        return res.status(403).json({"msg":"Requisição sem campo de autorização"});
    }

    // Capturar o token
    let token = req.headers.authorization.replace('Bearer ','');

    // Validar o token extraindo o seu conteúdo
    let usuario;
    try {
        usuario = jwt.verify(token, 'jacarenosecoanda');
    } catch (error) {
        return res.status(403).json({"msg":"Token inválido"});
    }
    
    // "Pendurar" as info extraídas do token no req
    req.usuario = usuario;

    // Chamo a next
    next();
}