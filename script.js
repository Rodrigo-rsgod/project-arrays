
// console.log(`item: ${item}, Posição: ${index}, Array:${array}`);

// });
const list = document.querySelector('ul');
const buttonshowAll = document.querySelector('.show-all');
const buttonsmapAll = document.querySelector('.map-all');
const sumAll = document.querySelector('.sum-all');
const filterAll = document.querySelector('.filter-all');

let myLi = '';

function formatCurrency(value) {
     const newvalue = value.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL',

     })
         return newvalue

    }


function showAll(productsArray) {
    // Limpa o conteúdo da lista antes de adicionar novos itens
    myLi = '';

    // Garante que o conteúdo só aparece após o clique
    productsArray.forEach((product) => {
        myLi += `
             
         <li>
            <img src= ${product.src} alt="${product.name}">
            <p>${product.name}</p>
            <p class="item-price"> ${formatCurrency(product.price)}</p>
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

function sumAllItems(){
  const totalValue = menuOptions.reduce((acc,curr)  => acc + curr.price, 0)

list.innerHTML =  `
        <li>
            <p>O valor total dos itens é ${formatCurrency(totalValue)}</p>
        </li>
       `
}

function filterAllItems(){
    const filterJustVegan = menuOptions.filter( (product) => product.vegan)
   
    showAll(filterJustVegan)
}

// 👉 Só executa quando o botão for clicado
buttonshowAll.addEventListener('click', () => showAll(menuOptions))
buttonsmapAll.addEventListener('click', mapAllItens)
sumAll.addEventListener('click', sumAllItems)
filterAll.addEventListener('click', filterAllItems)