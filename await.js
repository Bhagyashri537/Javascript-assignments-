console.log('person1: shows tickets')
console.log('person2: shows tickets')

const preMovie = async() => {
const promiseWifeBringingTicket = new Promise((resolve,reject) =>{
    setTimeout(() => resolve('ticket'), 3000)
})

const getPopcorn = new Promise((resolve,reject) => resolve(`popcorn`));
const getButter = new Promise((resolve,reject) => resolve(`butter`));
const getColdDrink = new Promise((resolve,reject) => resolve(`colddrink`));
 
let ticket = await promiseWifeBringingTicket;

console.log('wife: i have the tickets')
console.log('husband: we should go in')
console.log('wife: no i am hungry')

let popcorn = await getPopcorn;
console.log('wife:i got some popcorn')
console.log('husband:we should go in')
console.log('wife: no I need butter on my popcorn')

let butter = await getButter; 
    console.log('wife: i got some butter on popcorn')
    console.log('anything else')
    console.log('wife: yeah one more thing')

let colddrink = await getColdDrink;
    console.log('husband: ok what you want')
    console.log('wife: i nedd cold drink also')

return ticket;
}
preMovie().then((m) => console.log(`person3 shows ${m}`))
console.log('person4: shows tickets')
console.log('person5: shows tickets')

