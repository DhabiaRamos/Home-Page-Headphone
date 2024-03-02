let imgProduct = document.querySelector('.product-img')

let whiteHP = document.querySelector('.white-headphone')
let goldenHP = document.querySelector('.golden-headphone')
let blackHP = document.querySelector('.black-headphone')


whiteHP.addEventListener('click', function () {
    imgProduct.src = 'assets/white-headphone.png'
})

goldenHP.addEventListener('click', function () {
    imgProduct.src = 'assets/golden-headphone.png'
})

blackHP.addEventListener('click', function () {
    imgProduct.src = 'assets/black-headphone.png'
})