let obj1 = {
    name: 'John',
    age: 30,
    address: {
        city: 'New York',
        country: 'USA'
    },
    hobbies: ['reading', 'painting']
};
let obj1DeepCopy = {...obj1, address: {...obj1.address}, hobbies: [...obj1.hobbies]}
// console.log(obj1)
// console.log(obj1DeepCopy)
// console.log(obj1 === obj1DeepCopy)

let obj2 = {
    name: 'Alice',
    age: 25,
    family: {
        parents: {
            father: 'Bob',
            mother: 'Carol'
        },
        siblings: ['David', 'Eve']
    }
};
let obj1DeepCopy2 = {
    ...obj2,
    family: {...obj2.family, parents: {...obj2.family.parents}, siblings: [...obj2.family.siblings]}
}
// console.log(obj2)
// console.log(obj1DeepCopy2)
// console.log(obj2 === obj1DeepCopy2)


let obj3 = {
    name: 'John',
    age: 30,
    address: {
        city: 'New York',
        country: 'USA',
        coordinates: {
            latitude: 40.7128,
            longitude: -74.0060
        }
    },
    hobbies: ['reading', 'painting'],
    friends: [
        {
            name: 'Alice',
            age: 28
        },
        {
            name: 'Bob',
            age: 32
        }
    ]
};
let obj3DeepCopy = {...obj3,address: {...obj3.address, coordinates: {...obj3.address.coordinates}}, hobbies: [...obj3.hobbies],friends: [...obj3.friends.map(el=>el)]}
console.log(obj3)
console.log(obj3DeepCopy)
console.log(obj3 === obj3DeepCopy)


let obj4 = {
    name: 'John',
    age: 30,
    address: {
        city: 'New York',
        country: 'USA',
        coordinates: {
            latitude: 40.7128,
            longitude: -74.0060,
            additionalInfo: {
                elevation: 10,
                timezone: 'EST'
            }
        }
    },
    hobbies: ['reading', 'painting'],
    friends: [
        {
            name: 'Alice',
            age: 28,
            address: {
                city: 'Boston',
                country: 'USA'
            }
        },
        {
            name: 'Bob',
            age: 32,
            address: {
                city: 'San Francisco',
                country: 'USA'
            }
        }
    ]
};
let obj4DeepCopy