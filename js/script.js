const controle1 = document.querySelector('[data-btn="controle-1"]');
const controle2 = document.querySelector('[data-btn="controle-2"]');
const controle3 = document.querySelector('[data-btn="controle-3"]');
const controle4 = document.querySelector('[data-btn="controle-4"]');

controle1.addEventListener('click', showPressedContent)
controle2.addEventListener('click', showPressedContent)
controle3.addEventListener('click', showPressedContent)
controle4.addEventListener('click', showPressedContent)

function showPressedContent(event) {
   const controleId = event.target.id.split('-')[1];
    console.log(event.target)

   const divConteudos = document.querySelector(".conteudos");
   const length = divConteudos.childNodes.length
    let t;
    for(let i = 0; i < length; i++) {
        if (divConteudos.childNodes[i].nodeName === 'DIV') {
            const conteudo = divConteudos.childNodes[i];

            if(conteudo.classList.contains(`conteudo-${controleId}`)) {
                t = conteudo;
            }

            if(!conteudo.classList.contains("hide")) {
                conteudo.classList.add("hide");
            }
        };
    }
    t.classList.remove("hide")
}