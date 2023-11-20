export type ManType = {
    name: string
    age: number
}
const people: Array<ManType> = [
    {name: "Ivan Ivanov", age: 25},
    {name: "Petr Petrov", age: 30},
    {name: "Sidr Sidorov", age: 35},
]
const dmitriyIncubator = (man: ManType) => {
    return {
        stack: ["css", "html", "js", "tdd", "react"],
        firstName: man.name.split(" ")[0],
        lastName: man.name.split(" ")[1]
    }
}
const devs1 = [
    {
        stack: ["css", "html", "js", "tdd", "react"],
        firstName: "Ivan",
        lastName: "Ivanov"
    },
    {
        stack: ["css", "html", "js", "tdd", "react"],
        firstName: "Petr",
        lastName: "Petrov"
    },
    {
        stack: ["css", "html", "js", "tdd", "react"],
        firstName: "Sidr",
        lastName: "Sidorov"
    },
]
const devs2 = [
    dmitriyIncubator(people[0]),
    dmitriyIncubator(people[1]),
    dmitriyIncubator(people[2]),
]
const devs3 = people.map(dmitriyIncubator);

const messages = people.map(man => `Hello ${man.name.split(" ")[0]}. Welcome to IT-Incubator`)

export const createGreetingMessage = (people: Array<ManType>) => {
    return people.map(man => `Hello ${man.name.split(" ")[0]}. Welcome to IT-Incubator`)
}