

let items = []


fetch('./listItem.json')
        .then((response) => response.json())
        .then((json) => getItems(json))


function getItems(items){
    const listProduct = document.getElementById("listProduct");
    listProduct.innerHTML = ''
    items.forEach(item => {
        listProduct.appendChild(setItem(item))

    });
}


function setItem(ite){

    const item =  document.createElement("div")
    item.className = 'item'
    item.innerHTML = `
    <div class="contentItem">
        <img src="${ite.img}" alt="" class="pic">
        <span class="name">${ite.name}</span>
        <div class="groupPrice">
            <span class="priceSale">${ite.pricesale}</span>
            <span class="price">${ite.price}</span>
        </div>
    </div>
    `
    item.onclick= function(){
        window.location.href = `./detailItem.html?id=${ite.id}`
    }

    return item

    
}
