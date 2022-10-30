const products = [
    { id: '1', name: 'Camiseta Boca', price: 12000, category: 'camiseta', img: '../camisetaBoca.webp' , description:'Camiseta Boca Juniors Original 22/23', stock: 20},
    { id: '2', name: 'Botines Puma', price: 18000, category: 'botines', img:'../BotinesPuma.webp', stock: 20, description:'Botines puma modelo 21/22'},
    { id: '3', name: 'Camiseta River', price: 12000, category: 'camiseta', img:'../camisetaRiver.webp', stock: 20, description:'Camiseta River temporada 22/23'},
    { id: '4', name: 'Guantes Adidas', price: 11000, category: 'guante', img:'../GuantesAdidas.webp', stock: 20, description:'Guantes Adidas edicion Mundial Qatar 2022'},
    { id: '5', name: 'Camiseta Argentina', price: 15000, category: 'camiseta', img: '../camisetaArg.webp' , description:'Camiseta Argentina Mundial Qatar 2022'},
    { id: '6', name: 'Guantes Nike', price: 11500, category: 'guante', img: '../GuantesNike.webp' , description:'Guantes de arquero Nike temp 22/23'},
    { id: '7', name: 'Botines Adidas', price: 14000, category: 'botines', img: '../BotinesAdidas.webp' , description:'Botines Adidas'}
]


export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 1000)
    })
}

export const getProduct = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 1000)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 1000)
    })
}

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 500)
    })
}