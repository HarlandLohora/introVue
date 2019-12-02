let product = new Vue({
    el: '#app',
    data: {
        product: 'Socks',
        image: './img/green.jpg',
        inStock: 0,
        details: ["80% cotton", "20% polyester", "Gender-neutral"],
        variants: [
            {
                variantId: 2234,
                variantColor: 'Green'
            },
            {
                variantId: 2235,
                variantColor: 'Blue'
            }
        ]
    } 
})