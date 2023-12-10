export type CustomerType= {
    name: string
    address: {
        city: string
        house: number
    }
    hair_length: number
    laptop: {
        title: string
    }
}

export function barber(c: CustomerType, cut: number) {
    const copy = {
        ...c
    }
    copy.hair_length = c.hair_length / cut

    return copy
}

export function moveCustomer(c: CustomerType, city: string) {
    const copy = {
        ...c
    }
    copy.address = {
        ...copy.address,
        city: city
    }

    return copy
}

export function changeLaptop(c: CustomerType, laptop: string) {
    const copy = {
        ...c,
        laptop: {
            ...c.laptop,
            title: laptop
        }
    }
    return copy
}