import {createGreetingMessage, ManType} from "./05";

let people: Array<ManType> = []

beforeEach(() => {
    people = [
        {name: "Ivan Ivanov", age: 25},
        {name: "Petr Petrov", age: 30},
        {name: "Sidr Sidorov", age: 35},
    ]
})

test("should get array of greeting messages", () =>{

    const messages = createGreetingMessage(people)

    expect(messages.length).toBe(3);
    expect(messages[0]).toBe("Hello Ivan. Welcome to IT-Incubator");
    expect(messages[1]).toBe("Hello Petr. Welcome to IT-Incubator");
    expect(messages[2]).toBe("Hello Sidr. Welcome to IT-Incubator");
})