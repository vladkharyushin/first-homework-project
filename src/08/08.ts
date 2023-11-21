type UsersType = {
    [key: string]: {id: number, name: string}
}

export const users: UsersType = {
    '101': {id: 101, name: "Dmitriy"},
    '404': {id: 404, name: "Anastasia"},
    '505': {id: 505, name: "Vasiliy"},
    '202': {id: 202, name: "Viktor"},
}

//add:
let user = {id: 303, name: "Igor"};
users[user.id] = user;

//delete:
delete users[user.id];

//update:
users[user.id].name = "Vlad"