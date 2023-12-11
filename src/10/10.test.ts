import {addNewBooks, barber, changeLaptop, CustomerType, moveCustomer, updateCompanyTitle} from "./10";

test('reference type test', () => {
    let customer: CustomerType = {
        name: "Vlad",
        address: {
            city: "Kirov",
            house: 13
        },
        hair_length: 12,
        laptop: {
            title: "huawei"
        },
        books: [
            'js',
            'html',
            'css',
            'react'
        ],
        companies: [
            {
                id: 1,
                title:"AVD"
            },
            {
                id: 2,
                title: "Aгат"
            }
        ]
    }
    const cutCustomer = barber(customer, 2)

    expect(cutCustomer.hair_length).toBe(6)
    expect(customer.hair_length).toBe(12)
    expect(cutCustomer.address).toBe(customer.address)
})

test("change address", () => {
    let customer: CustomerType = {
        name: "Vlad",
        address: {
            city: "Kirov",
            house: 13
        },
        hair_length: 12,
        laptop: {
            title: "huawei"
        },
        books: [
            'js',
            'html',
            'css',
            'react'
        ],
        companies: [
            {
            id: 1,
            title:"AVD"
            },
            {
                id: 2,
                title: "Aгат"
            }
        ]
    }
    const movedCustomer = moveCustomer(customer, "Moscow")

    expect(customer).not.toBe(movedCustomer)
    expect(customer.address).not.toBe(movedCustomer.address)
    expect(customer.laptop).toBe(movedCustomer.laptop)
    expect(movedCustomer.address.city).toBe("Moscow")
})

test("change laptop", () => {
    let customer: CustomerType = {
        name: "Vlad",
        address: {
            city: "Kirov",
            house: 13
        },
        hair_length: 12,
        laptop: {
            title: "huawei"
        },
        books: [
            'js',
            'html',
            'css',
            'react'
        ],
        companies: [
            {
                id: 1,
                title:"AVD"
            },
            {
                id: 2,
                title: "Aгат"
            }
        ]
    }
    const customerCopy = changeLaptop(customer, "Macbook")

    expect(customer).not.toBe(customerCopy)
    expect(customer.address).toBe(customerCopy.address)
    expect(customer.laptop).not.toBe(customerCopy.laptop)
    expect(customerCopy.laptop.title).toBe("Macbook")
    expect(customer.laptop.title).toBe("huawei")
})

test("add new books", () => {
    let customer: CustomerType = {
        name: "Vlad",
        address: {
            city: "Kirov",
            house: 13
        },
        hair_length: 12,
        laptop: {
            title: "huawei"
        },
        books: [
            'js',
            'html',
            'css',
            'react'
        ],
        companies: [
            {
                id: 1,
                title:"AVD"
            },
            {
                id: 2,
                title: "Aгат"
            }
        ]
    }
    const customerCopy = addNewBooks(customer, ['rest api', 'ts'])

    expect(customer).not.toBe(customerCopy)
    expect(customer.books).not.toBe(customerCopy.books)
    expect(customer.laptop).toBe(customerCopy.laptop)
    expect(customer.address).toBe(customerCopy.address)
})

test("update company title", () => {
    let customer: CustomerType = {
        name: "Vlad",
        address: {
            city: "Kirov",
            house: 13
        },
        hair_length: 12,
        laptop: {
            title: "huawei"
        },
        books: [
            'js',
            'html',
            'css',
            'react'
        ],
        companies: [
            {
                id: 1,
                title: "AVD"
            },
            {
                id: 2,
                title: "Aгат"
            }
        ]
    }
    const customerCopy = updateCompanyTitle(customer, 2, "Agat")

    expect(customer).not.toBe(customerCopy)
    expect(customer.address).toBe(customerCopy.address)
    expect(customer.companies).not.toBe(customerCopy.companies)
    expect(customerCopy.companies[1].title).toBe("Agat")
})