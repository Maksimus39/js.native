// let user = {
//     name: 'John',
//     age: 30
// }
//
// //alert(count(user))
//
// function count(user) {
//     return Object.values(user).length
// }
//
// console.log(count(user))
//
//
// let salaries = {
//     'John': 100,
//     'Pete': 300,
//     'Mary': 250
// }
//
// function sumSalaries(salaries) {
//     return Object.values(salaries).reduce((ac, value) => ac + value, 0)
// }
//
// console.log(sumSalaries(salaries))


const arr = [1, 2, 3, 2, 1, 3, 4, 5, 4]
const count = arr.reduce((ac, val) => {
    ac[val] = (ac[val] || 0) + 1
    return ac
}, {})
console.log(count)


const newValue = Object.entries(count)
console.log(newValue)

