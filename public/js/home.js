// Simulando os contatos em uma variável
let contatos = [
    {
        "id":1,
        "nome":"Kakashi Hatake",
        "emails":["kakashi@anbu.com"],
        "telefones":["99999-1111","98888-1234"]
    },
    {
        "id":2,
        "nome":"Sakura Haruno",
        "emails":["sakura@konoha.com"],
        "telefones":["99999-2222","98888-3333"]
    },
    {
        "id":3,
        "nome":"Hinata Hyuga",
        "emails":["Hinata@hyugas.com"],
        "telefones":["99999-3333","98888-4444"]
    },
    {
        "id":4,
        "nome":"Vovó Tsunade",
        "emails":["tsunade@hokages.com"],
        "telefones":["99999-4444","98888-5555"]
    },
    {
        "id":5,
        "nome":"Shikamaru Nara",
        "emails":["shikamaru@konoha.com"],
        "telefones":["99999-5555","98888-6666"]
    },
    {
        "id":6,
        "nome":"Ino",
        "emails":["ino@yamanakas.com"],
        "telefones":["99999-6666","98888-7777"]
    },
    {
        "id":7,
        "nome":"Choji Akimichi",
        "emails":["choji@akimichis.com"],
        "telefones":["99999-7777","98888-8888"]
    }
]

console.log(contatos);


//função que mostra todos os contatos

let showContatos=(contatos)=>{

    // fazer um for percorrendo esse contatos
    contatos.forEach(
        c=>{
            // criar um elemento section
           let section= document.createElement('section');
            
           // criar o cod html dos emails
            let htmlDosEmails='';
            c.emails.forEach(
                e=>{ htmlDosEmails +=`<a href"mailto:${e}">${e}</a>`}
            )
            let tel='';
            c.telefones.forEach(
                t=>{tel+=`
                <li><a href="tel:${t}">${t}</a></li>`}
            )
            //  criar o codigo html que será conteudo da section
        let html=`
            <h3>${c.nome}</h3>
            <div>
                ${htmlDosEmails}
            </div>
            <ul>
               ${tel}
            </ul>
            <a href="#">Editar</a>
            `;

            // add o codigo html ao elemento section
            section.innerHTML=html;

            // adicionando a section do contato no main 
                //  capturar a main (querySelector) 
         let main= document.querySelector('main')

            // add ao section ao main 
            main.appendChild(section)
                
        }
    )
}

let buscaContatos=(trecho)=>{
// filtrar os contatos somente os que póssuem 
// o trecho no nome
let contatosFiltrados= contatos.filter(
    c=>c.nome.includes(trecho)
)

// mostrar os conatos filtrados
showContatos(contatosFiltrados);


}
showContatos(contatos);