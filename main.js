//Passo 1 - pegar os personagens no JS para poder verificar quando o usuário passar o mouse em cima de um deles

const personagens = document.querySelectorAll('.personagem');

// passo 2 - adicionar a classe selecionado no personagem que o usuario passar o cursor do mouse
personagens.forEach(personagem => {
    personagem.addEventListener('mouseenter', () => {

        if(window.innerWidth < 450){
            window.scrollTo({top: 0, behavior: 'smooth'});
        }

        // passo 3 - verificar se já existe um personagem selecionado, se sim devemos remover a seleção dele
        const personagemSelecionado = document.querySelector('.selecionado');
        console.log(personagemSelecionado);
        personagemSelecionado.classList.remove('selecionado');

        personagem.classList.add('selecionado');       

        //objetivo 2 - quando passar o mouse em cima do personagem na listagem, trocar a imagem, o nome e a descrição do pernagem grande

        //passo 1 - pegar o elemento do personagem grande para adicionar as informaçoes nele
        const imagemPersonagemGrande = document.querySelector('.personagem-grande');

        //passo 2 - alterar a imagem do personagem
        const idPersonagem = personagem.attributes.id.value;
        
        imagemPersonagemGrande.src = `./img/card-${idPersonagem}.png`;
        

        //passo 3 - alterar o noeme a descrição do personagem grande
        const nomePersonagem = document.getElementById('nome-personagem');

        nomePersonagem.innerText = personagem.getAttribute('data-name');

        // passo 4 - alterar a descrição do personagem grande
        const descricaoPersonagem = document.getElementById('descricao-personagem');
        descricaoPersonagem.innerText = personagem.getAttribute('data-description');

    })
});