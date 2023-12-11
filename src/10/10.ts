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
    books: Array<string>,
    companies: Array<{id: number, title: string}>
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
    const copy: CustomerType = {
        ...c,
        laptop: {
            ...c.laptop,
            title: laptop
        }
    }
    return copy
}

export function addNewBooks(c: CustomerType, newBooks: Array<string>) {
    const copy = {
        ...c,
        books: {
            ...c.laptop,
            books: [...c.books, newBooks]
        }
    }
    return copy
}

export function updateCompanyTitle(
    c: CustomerType,
    companyId: number,
    newTitle: string
    ) {
    const copy: CustomerType = {
        ...c,
        companies: c.companies.map(c => c.id === companyId ? {...c, title: newTitle} : c)
        }
    return copy
    }