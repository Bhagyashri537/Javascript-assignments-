console.log('person1: shows tickets');
console.log('person2: shows tickets');

const promiseWifeBringingTicket = new Promise((resolve,reject) => {
   setTimeout(() =>{
      resolve('ticket');
   },2000)
})
const getPopcorn = promiseWifeBringingTicket.then((t) =>{
    console.log('wife: I have the tickets')
    console.log('husbnd: we should go in')
    console.log('wife: no I am hungry')
    return new Promise((resolve,reject) => resolve(`${t} popcorn`))
})
const getButter = getPopcorn.then((t) => {
    console.log('wife:i got some popcorn')
    console.log('husband:we should go in')
    console.log('wife: no I need butter on my popcorn')
    return new Promise((resolve,reject) => resolve(`${t} butter`))
})
const getColdDrink = getButter.then((t) => {
    console.log('husband: anything else')
    console.log('wife: get some cold drink also')
    return new Promise((resolve,reject) => resolve(`${t} cold drink`))
})

console.log('person4: shows tickets');
console.log('person5: shows tickets');