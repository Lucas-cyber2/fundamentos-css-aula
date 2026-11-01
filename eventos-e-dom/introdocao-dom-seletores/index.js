//getElementById - busca um elemento pelo atributo id

// const button = document.getElementById("button")

// console.log(button);

//getElementsByClassName - busca os elemtnos pelo nome da classe

// const h1 = document.getElementsByClassName("title")

// console.log(h1);

//querySelectorAll - busca todos os elementos que correspondem ao seletor css
// const button = document.querySelectorAll("#button")
// console.log(button);

//querySelector - busca o primeiro elemento que corresponde ao seletor css
const p = document.querySelector(".paragraph")
p.textContent = "Novo texto do parágrafo"
