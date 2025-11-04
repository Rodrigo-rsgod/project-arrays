
// console.log(`item: ${item}, Posição: ${index}, Array:${array}`);

// });
const list = document.querySelector('ul');
const buttonshowAll = document.querySelector('.show-all');
const buttonsmapAll = document.querySelector('.map-all');

let myLi = '';


function showAll(productsArray) {
     // Limpa o conteúdo da lista antes de adicionar novos itens
     myLi = '';

     // Garante que o conteúdo só aparece após o clique
    productsArray.forEach((product) => {
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

function mapAllItens() {
  const newprices = menuOptions.map((product) => ({
    ...product,
    price: product.price * 0.9, //10% de desconto - esse calculo da 10% de desconto

  }))


showAll(newprices)

}

// 👉 Só executa quando o botão for clicado
buttonshowAll.addEventListener('click', () => showAll(menuOptions))
buttonsmapAll.addEventListener('click', mapAllItens)