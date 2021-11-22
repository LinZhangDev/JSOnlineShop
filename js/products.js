let shoes = [
    {
        name:'Shoe Name 1',
        price: 29.99,
        img: "./img/shoes1.jpg"
    },
    {
        name:'Shoe Name 2',
        price: 34.99,
        img: "./img/shoes2.jpg"
    },
    {
        name:'Shoe Name 3',
        price: 72.99,
        img: "./img/shoes3.jpg"
    },
].map(v => ({...v, tag: 'shoes'}))

let pcs = [
    {
        name:'PC Name 1',
        price: 1159.99,
        img: "./img/pc1.jpg"
    },
    {
        name:'PC Name 2',
        price: 1349.99,
        img: "./img/pc2.jpg"
    },
    {
        name:'PC Name 3',
        price: 2021.99,
        img: "./img/pc3.jpg"
    },
].map(v => ({...v, tag: 'pc'}))

let keyboards = [
    {
        name:'Keyboard Name 1',
        price: 169.99,
        img: "./img/kb1.jpg"
    },
    {
        name:'Keyboard Name 2',
        price: 99.99,
        img: "./img/kb2.jpg"
    },
    {
        name:'Keyboard Name 3',
        price: 229.99,
        img: "./img/kb3.jpg"
    },

].map(v => ({...v, tag: 'keyboard'}))

let consoles = [
    {
        name:'Console Name 1',
        price: 345.99,
        img: "./img/console1.jpg"
    },
    {
        name:'Console Name 2',
        price: 255.99,
        img: "./img/console2.jpg"
    },
    {
        name:'Console Name 3',
        price: 545.99,
        img: "./img/console3.jpg"
    },
].map(v => ({...v, tag: 'console'}))


let phones = [
    {
        name:'Phone Name 1',
        price: 1300.99,
        img: "./img/phone1.jpg"
    },
    {
        name:'Phone Name 2',
        price: 1199.99,
        img: "./img/phone2.jpg"
    },
    {
        name:'Phone Name 3',
        price: 1299.99,
        img: "./img/phone3.jpg"
    },
].map(v => ({...v, tag: 'phone'}))

let productAll = shoes.concat(pcs,keyboards,consoles,phones);
let cartList = [];


/* create product list --------------------- start */
const productList = document.querySelector('.product-list');
const itemSection = document.querySelector('.section-item');

function showSelectProducts(list){
    list.forEach((product)=>{
        let productDiv = document.createElement('div');
        productDiv.classList.add('product-div');
        /* add img to div */
        let productImg = document.createElement('img');
        productImg.classList.add('product-img');
        productImg.src = product.img;
        productDiv.appendChild(productImg);
        /* add name to div */
        let productName = document.createElement('div');
        productName.classList.add('product-name');
        productName.innerHTML = product.name;
        productDiv.appendChild(productName);
        /* add tag to div */
        let productTag = document.createElement('div');
        productTag.classList.add('product-tag');
        productTag.innerHTML = product.tag;
        productDiv.appendChild(productTag);
        /* add price to div */
        let productPrice = document.createElement('div');
        productPrice.classList.add('product-price');
        productPrice.innerHTML = "$ "+product.price;
        productDiv.appendChild(productPrice);
    
        productList.appendChild(productDiv);
    
        /* show and hide item section ---  start */
        const divItem = document.querySelector('.section-item');
        productDiv.addEventListener('click',function(){   
            if(divItem.classList.contains('inactive')){
                divItem.classList.remove('inactive');
                divItem.classList.add('active');
                document.body.classList.add('divActive');
                showItem(product);
            }
        })
        /* show and hide item section ---  end */
    })
    
}

showSelectProducts(productAll);

function showItem(product){
    const divItem = document.querySelector('.section-item');

    /* add close btn to div */
    itemSection.innerHTML = '';
    let btnCloseItem = document.createElement('button');
    btnCloseItem.classList.add('btn-close');
    btnCloseItem.classList.add('btn-close-item');
    btnCloseItem.addEventListener('click',function(){   
        if(divItem.classList.contains('active')){
            divItem.classList.remove('active');
            divItem.classList.add('inactive');
            document.body.classList.remove('divActive');
        }
    })
    itemSection.appendChild(btnCloseItem);

    let itemDiv = document.createElement('div');
    itemDiv.classList.add('item-wrapper');
    /* add img to div */
    let itemImg = document.createElement('img');
    itemImg.classList.add('item-img');
    itemImg.src = product.img;
    itemDiv.appendChild(itemImg);
    /* add name to div */
    let itemName = document.createElement('div');
    itemName.classList.add('item-name');
    itemName.innerHTML = product.name;
    itemDiv.appendChild(itemName);
    /* add tag to div */
    let itemTag = document.createElement('div');
    itemTag.classList.add('item-tag');
    itemTag.innerHTML = product.tag;
    itemDiv.appendChild(itemTag);
    /* add description to div */
    let itemDes = document.createElement('div');
    itemDes.classList.add('item-des');
    itemDes.innerHTML = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro voluptatum impedit consequuntur nulla";
    itemDiv.appendChild(itemDes);
    /* add price to div */
    let itemPrice = document.createElement('div');
    itemPrice.classList.add('item-price');
    itemPrice.innerHTML = "$ "+product.price;
    itemDiv.appendChild(itemPrice);
    /* add btn to div */
    let itemAddBag = document.createElement('button');
    itemAddBag.classList.add('btn-addbag');
    itemAddBag.innerHTML = "Add To Bag";
    itemAddBag.addEventListener('click',function(){
        cartList.push(product);
        itemAddBag.innerHTML = 'Success';
        itemAddBag.style.backgroundColor = "lightgreen";
        setTimeout(function(){
            if(divItem.classList.contains('active')){
                divItem.classList.remove('active');
                divItem.classList.add('inactive');
                document.body.classList.remove('divActive');
            }
        },500)
        showCartAmount();
    })
    itemDiv.appendChild(itemAddBag);

    itemSection.appendChild(itemDiv);
}
/* create product list --------------------- end */

/* create cart list --------------------- start */
/* show cart list length on homepage */
const cartAmount = document.querySelector('.cart-amount');
function showCartAmount(){
    if(cartList.length == 0){
        cartAmount.innerHTML = ''
    }else{
        cartAmount.innerHTML = cartList.length;
    }
}
/* show || hide section cart */
const divCart = document.querySelector('.section-cart');
const cartContainer = document.querySelector('.cart-list');

document.querySelector('.btn-cart').addEventListener('click',function(){   
    if(divCart.classList.contains('inactive')){
        divCart.classList.remove('inactive');
        divCart.classList.add('active');
        document.body.classList.add('divActive');
        showCartList();
        countTotal();
    }
})
document.querySelector('.btn-close-cart').addEventListener('click',function(){   
    if(divCart.classList.contains('active')){
        divCart.classList.remove('active');
        divCart.classList.add('inactive');
        document.body.classList.remove('divActive');
        showCartAmount();
    }
})

/* create cart list */
function showCartList(){
    if(cartList.length==0){
        cartContainer.innerHTML = "Your Cart is Empty";
        cartContainer.style.textAlign = "center";
    }else{
        /* clean cart container */
        cartContainer.innerHTML = '';
        cartContainer.style.textAlign = "left";
        cartList.forEach((product)=>{
            let cartDiv = document.createElement('div');
            cartDiv.classList.add('cart-item');
            /* add img to div */
            let cartImg = document.createElement('img');
            cartImg.classList.add('cart-img');
            cartImg.src = product.img;
            cartDiv.appendChild(cartImg);
            /* add name to div */
            let cartName = document.createElement('div');
            cartName.classList.add('cart-name');
            cartName.innerHTML = product.name;
            cartDiv.appendChild(cartName);
            /* add price to div */
            let cartPrice = document.createElement('div');
            cartPrice.classList.add('cart-price');
            cartPrice.innerHTML = "$ "+product.price;
            cartDiv.appendChild(cartPrice);
            /* add btn to div */
            let cartDelete = document.createElement('button');
            cartDelete.classList.add('cart-delete');
            cartDelete.innerHTML = "Remove";
            cartDelete.addEventListener('click',function(){
                cartList.splice(cartList.indexOf(product),1);
                cartDiv.remove();
                countTotal();
            })
            cartDiv.appendChild(cartDelete);
        
            cartContainer.appendChild(cartDiv);
        })
    }
}
/* count total price */
const totalPrice = document.querySelector('.cart-total')
let countTotal = () =>{
    let total = 0;
    for(let i=0; i<cartList.length; i++){
        total += cartList[i].price
    }
    
    totalPrice.innerHTML='Total($): '+total.toFixed(2);
}
/* create cart list --------------------- end */

/* filter div show & hide --------------------- start */
const catBtn = document.querySelector('.btn-category');
const catArrow = document.querySelector('.btn-arrow-c');
const catDiv = document.querySelector('.filter-category');
const sortBtn = document.querySelector('.btn-sortby');
const sortArrow = document.querySelector('.btn-arrow-s');
const sortDiv = document.querySelector('.filter-sorted');

catBtn.addEventListener('click',function(){
    if(catDiv.classList.contains('inactive')){
        catDiv.classList.remove('inactive');
        catDiv.classList.add('active');
        catArrow.innerHTML = '▲'
        /* remove sortDiv active when catDiv become active */
        if(sortDiv.classList.contains('active')){
            sortDiv.classList.remove('active');
            sortDiv.classList.add('inactive');
            sortArrow.innerHTML = '▼'
        }
    }else{
        if(catDiv.classList.contains('active')){
            catDiv.classList.remove('active');
            catDiv.classList.add('inactive');
            catArrow.innerHTML = '▼'
        }
    }
})
/* filter-category-btn function --------------------- start */
const filterCatBtns = document.querySelectorAll('.filter-category-btn');
filterCatBtns.forEach((btn)=>{
    btn.addEventListener('click',function(){
        if(btn.innerHTML == 'All'){
            productList.innerHTML = '';
            showSelectProducts(productAll);
            showSortProducts(productAll);
            filterCatBtns.forEach((btn)=>{
                btn.style.color = 'black';
            });
            btn.style.color = 'red';
        }
        if(btn.innerHTML == 'Shoes'){
            productList.innerHTML = '';
            showSelectProducts(shoes);
            showSortProducts(shoes);
            filterCatBtns.forEach((btn)=>{
                btn.style.color = 'black';
            });
            btn.style.color = 'red';
        }
        if(btn.innerHTML == 'PC'){
            productList.innerHTML = '';
            showSelectProducts(pcs);
            showSortProducts(pcs);
            filterCatBtns.forEach((btn)=>{
                btn.style.color = 'black';
            });
            btn.style.color = 'red';
        }
        if(btn.innerHTML == 'Keyboards'){
            productList.innerHTML = '';
            showSelectProducts(keyboards);
            showSortProducts(keyboards);
            filterCatBtns.forEach((btn)=>{
                btn.style.color = 'black';
            });
            btn.style.color = 'red';
        }
        if(btn.innerHTML == 'Consoles'){
            productList.innerHTML = '';
            showSelectProducts(consoles);
            showSortProducts(consoles);
            filterCatBtns.forEach((btn)=>{
                btn.style.color = 'black';
            });
            btn.style.color = 'red';
        }
        if(btn.innerHTML == 'Phones'){
            productList.innerHTML = '';
            showSelectProducts(phones);
            showSortProducts(phones);
            filterCatBtns.forEach((btn)=>{
                btn.style.color = 'black';
            });
            btn.style.color = 'red';
        }
    })
})
/* filter-category-btn function --------------------- end */

sortBtn.addEventListener('click',function(){
    if(sortDiv.classList.contains('inactive')){
        sortDiv.classList.remove('inactive');
        sortDiv.classList.add('active');
        sortArrow.innerHTML = '▲'
        /* remove catDiv active when sortDiv become active */
        if(catDiv.classList.contains('active')){
            catDiv.classList.remove('active');
            catDiv.classList.add('inactive');
            catArrow.innerHTML = '▼'
        }
    }else{
        if(sortDiv.classList.contains('active')){
            sortDiv.classList.remove('active');
            sortDiv.classList.add('inactive');
            sortArrow.innerHTML = '▼'
        }
    }
})

/* filter div show & hide --------------------- end */

/* filter-sorted-btn function --------------------- start */
const filterSortBtns = document.querySelectorAll('.filter-sorted-btn');
showSortProducts(productAll);
function showSortProducts(list){
    filterSortBtns.forEach((btn)=>{
        btn.addEventListener('click',function(){
            if(btn.innerHTML == 'Name A - Z'){
                let sortedList = list.sort((a,b)=>a.name.localeCompare(b.name))
                productList.innerHTML = '';
                showSelectProducts(sortedList);
            }
            if(btn.innerHTML == 'Price low - high'){
                let sortedList = list.sort((a,b)=>{
                    return a.price - b.price;
                })
                productList.innerHTML = '';
                showSelectProducts(sortedList);
            }
            if(btn.innerHTML == 'Price high - low'){
                let sortedList = list.sort((a,b)=>{
                    return b.price - a.price;
                })
                productList.innerHTML = '';
                showSelectProducts(sortedList);
            }
        })
    })
}

/* filter-sorted-btn function --------------------- end */