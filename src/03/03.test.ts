import {StudentType} from "../02/02";
import {addSkill} from "./03";

let student: StudentType;
beforeEach(() => {
    student = {
        id: 1,
        name: "Vladislav",
        age: 26,
        isActive: true,
        address: {
            streetTitle: "Lenina 101",
            city: {
                title: "Kirov",
                countryTitle: "Russia",
            }
        },
        technologies: [
            {
                id: 1,
                title: "HTML"
            },
            {
                id: 2,
                title: "CSS"
            },
            {
                id: 3,
                title: "React"
            }
        ]
    }
})

test("new tech skill should be added to student", () => {
    addSkill(student, "JS");
    expect(student.technologies.length).toBe(4);
    expect(student.technologies[3].title).toBe("JS")
})