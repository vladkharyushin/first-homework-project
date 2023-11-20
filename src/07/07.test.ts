// eslint-disable-next-line jest/valid-title
test("", () => {
        let props = {
            name: "Vlad",
            age: 32,
            lessons: [{title: "1",}, {title: "2"}],
            address: {
                street: {
                    title: "Lenina"
                }
            }
        }

        const {age, lessons} = props;
        const {title} = props.address.street
        const [lesson1, lesson2] = props.lessons

        expect(age).toBe(32);
        expect(lessons.length).toBe(2);
        expect(title).toBe("Lenina")
        expect(lesson1.title).toBe("1")
        expect(lesson2.title).toBe("2")
    })