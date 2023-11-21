type UsersType = {
    [key: string]: {id: number, name: string}
}

let users: UsersType

beforeEach(() => {
    users = {
        '101': {id: 101, name: "Dmitriy"},
        '404': {id: 404, name: "Anastasia"},
        '505': {id: 505, name: "Vasiliy"},
        '202': {id: 202, name: "Viktor"},
    }
})

test("should update corresponding user", () => {
    users['404'].name = "Nastya"

    expect(users['404'].name).toBe("Nastya")
})

test("should be delete user", () => {
    delete users['202']

    expect(users['202']).toBeUndefined()
})