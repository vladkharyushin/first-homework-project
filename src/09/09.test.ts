import {AdminsType, UserType} from "./09";

function increaseAge(u: UserType)  {
    u.age++
}

test("big test", () => {
    const user: UserType = {
        name: "Vlad",
        age: 26
    }
    increaseAge(user)
    expect(user.age).toBe(27)

    const superman = user
    superman.age = 1000
    expect(superman.age).toBe(1000)
})

test("array test", () => {
    const users = [
        {
            name: "Vlad",
            age: 26
        },
        {
            name: "Nastya",
            age: 25
        }
    ]
    const admins: AdminsType[] = users
    admins.push({name: "Nikita", age: 26})
    expect(users[2]).toEqual({name: "Nikita", age: 26})
})

test("reference type test", () => {
    const address = {
        title: "Kirov"
    }
    const user1 = {
        name: "Vlad",
        age: 26,
        address: address
    }
    const user2 = {
        name: "Nastya",
        age: 26,
        address: address
    }
    address.title = "Vyatka"
    expect(user1.address).toBe(user2.address)
    expect(user1.address.title).toBe("Vyatka")
})

test("reference array test", () => {
    const address = {
        title: "Kirov"
    }
    const user1 = {
        name: "Vlad",
        age: 26,
        address: address
    }
    const user2 = {
        name: "Nastya",
        age: 26,
        address: address
    }
    const users = [user1, user2, {name: "Nikita", age: 25, address: address}]

    const admins = [user1, user2]

    admins[0].name = "Vladislav"

    expect(users[0].name).toBe("Vladislav")
})