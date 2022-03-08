// listar de metodos do controller

// index: listar muitos (get '/contatos')
//  show: Levantar um contato (get "/contatos:id")
// create: Salvar um novo contato (post '/contatos')
// destroy: remove um contato (delete '/contatos/:id')
// update altera um contato (put '/contatos/:id')

module.exports={
    
        index: (req, res) => {
            return res.send('index');
        },
        show: (req, res) => {
            return res.send('show');
        },
        create: (req, res) => {
            return res.send('create');
        },
        destroy: (req, res) => {
            return res.send('destroy');
        },
        update: (req, res) => {
            return res.send('update');
        },
        search: (req,res)=>{
            return res.send('search')
        }
    
    
    
}
