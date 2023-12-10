import {barber, changeLaptop, CustomerType, moveCustomer} from "./10";

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
        }
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
        }
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
        }
    }
    const customerCopy = changeLaptop(customer, "Macbook")

    expect(customer).not.toBe(customerCopy)
    expect(customer.address).toBe(customerCopy.address)
    expect(customer.laptop).not.toBe(customerCopy.laptop)
    expect(customerCopy.laptop.title).toBe("Macbook")
    expect(customer.laptop.title).toBe("huawei")
})

