// 1. Simple object
let man = {
    name: 'John',
    age: 28
};
let copyMan = {...man}
// console.log(man)
// console.log(copyMan)


// 2. Array of primitives
let numbers = [1, 2, 3];
let copyNumbers = [...numbers]
// console.log(numbers)
// console.log(copyNumbers)
// console.log(copyNumbers === numbers)


// 3. Object inside an object
let man1 = {
    name: 'John',
    age: 28,
    mother: {
        name: 'Kate',
        age: 50
    }
};
let copyMan1 = {...man1, mother: {...man1.mother}}
// console.log(man1)
// console.log(copyMan1)
// console.log(copyMan1 === man1)


// 4. Array of primitives inside an object
let man2 = {
    name: 'John',
    age: 28,
    friends: ["Peter", "Steven", "William"]
};
let copyMan2 = {...man2, friends: [...man2.friends]}
// console.log(man2)
// console.log(copyMan2)
// console.log(copyMan2===man2)


// 5 Array of objects
let people = [
    {name: "Peter", age: 30},
    {name: "Steven", age: 32},
    {name: "William", age: 28}
];
let copyPeople = [...people]
// console.log(people)
// console.log(copyPeople)
// console.log(copyPeople === people)


// 6 Array of objects inside object
let man3 = {
    name: 'John',
    age: 28,
    friends: [
        {name: "Peter", age: 30},
        {name: "Steven", age: 32},
        {name: "William", age: 28}
    ]
};
let copyMan3 = {...man3, friends: [...man3.friends]}
// console.log(man3)
// console.log(copyMan3)
// console.log(copyMan3 === man3)


// 7 Object inside an object, inside an object
let man4 = {
    name: 'John',
    age: 28,
    mother: {
        name: "Kate",
        age: 50,
        work: {
            position: "doctor",
            experience: 15
        }
    }
};
let copyMan4 = {...man4, mother: {...man4.mother, work: {...man4.mother.work}}}
// console.log(man4)
// console.log(copyMan4)
// console.log(man4 === copyMan4)


// 8 Array of objects inside object -> object
let man5 = {
    name: 'John',
    age: 28,
    mother: {
        name: "Kate",
        age: 50,
        work: {
            position: "doctor",
            experience: 15
        },
        parents: [
            {name: "Kevin", age: 80},
            {name: "Jennifer", age: 78},
        ]
    }
};
let copyMan5 = {...man5, mother: {...man5.mother, work: {...man5.mother.work}, parents: [...man5.mother.parents]}}
// console.log(man5)
// console.log(copyMan5)
// console.log(man5===copyMan5)

// 9 Object inside an object -> array -> object ->  object
let man6 = {
    name: 'John',
    age: 28,
    mother: {
        name: "Kate",
        age: 50,
        work: {
            position: "doctor",
            experience: 15
        },
        parents: [
            {
                name: "Kevin",
                age: 80,
                favoriteDish: {
                    title: "borscht"
                }
            },
            {
                name: "Jennifer",
                age: 78,
                favoriteDish: {
                    title: "sushi"
                }
            },
        ]
    }
};
//  your code
let copyMan6 = {
    ...man6,
    mother: {...man6.mother, work: {...man6.mother.work}, parents: [...man6.mother.parents.map(el => el)]}
}
// console.log(man6)
// console.log(copyMan6)
// console.log(copyMan6 === man6)


//10 Array of objects inside an object -> object -> array -> object ->  object
let man7 = {
    name: 'John',
    age: 28,
    mother: {
        name: "Kate",
        age: 50,
        work: {
            position: "doctor",
            experience: 15
        },
        parents: [
            {
                name: "Kevin",
                age: 80,
                favoriteDish: {
                    title: "borscht",
                    ingredients: [
                        {title: "beet", amount: 3},
                        {title: "potatoes", amount: 5},
                        {title: "carrot", amount: 1},
                    ]
                }
            },
            {
                name: "Jennifer",
                age: 78,
                favoriteDish: {
                    title: "sushi",
                    ingredients: [
                        {title: "fish", amount: 1},
                        {title: "rise", amount: 0.5}
                    ]
                }
            },
        ]
    }
};
let copyMan7 = {...man7, mother: {...man7.mother, work: {...man7.mother.work}, parents: [...man7.mother.parents]}}
// Напишите функцию deeperClone(obj), которая принимает объект
// obj в качестве аргумента и возвращает его глубокую копию.
// Глубокая копия означает, что все свойства и вложенные объекты
// должны быть скопированы рекурсивно, чтобы изменения в копии не затрагивали оригинал.
function deeperClone(obj) {

}

// Задачка о клонировании массива:
// Напишите функцию deepCopyArray(arr),
// которая принимает массив arr в качестве аргумента и возвращает его глубокую копию.
// Глубокая копия массива означает, что все элементы должны быть скопированы,
// включая вложенные массивы и объекты.
function deepCopyArray(arr) {
}

function reverseWords(str) {

}