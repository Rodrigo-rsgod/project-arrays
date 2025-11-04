
// console.log(`item: ${item}, Posição: ${index}, Array:${array}`);

// });
const list = document.querySelector('ul');
const buttonshowAll = document.querySelector('.show-all');
let myLi = '';


function showAll() {
     // Limpa o conteúdo da lista antes de adicionar novos itens
     myLi = '';

     // Garante que o conteúdo só aparece após o clique
    menuOptions.forEach((product) => {
        myLi += `
             
         <li>
            <img src= ${product.src} alt="${product.name}">
            <p>${product.name}</p>
            <p class="item-price">R$ ${product.price}</p>
        </li>

               `

    })


list.innerHTML = myLi

}
// 👉 Só executa quando o botão for clicado
buttonshowAll.addEventListener('click', showAll)