test("should take man older then 90", () => {
    const ages = [10, 20, 22, 100, 85, 90, 5];

    function predicate(age: number) {
        return age > 90;
    }
    const oldAges = ages.filter(predicate)

    expect(oldAges.length).toBe(1);
    expect(oldAges[0]).toBe(100);
})

test("should take courses cheaper then 160", () => {
    const courses = [
        {title: "CSS", price: 120},
        {title: "JS", price: 200},
        {title: "REACT", price: 150}
]
    const cheapPredicate = (courses: CourseType) => {
        return courses.price < 160;
    }
    const cheapCourses = courses.filter(cheapPredicate)

    expect(cheapCourses.length).toBe(2);
    expect(cheapCourses[0].title).toBe("CSS");
    expect(cheapCourses[1].title).toBe("REACT");
})

test("get only uncompleted tasks", () => {
    const tasks = [
        {id: 1, title: "Bread", isDone: false},
        {id: 2, title: "Milk", isDone: true},
        {id: 3, title: "Eggs", isDone: false},
        {id: 4, title: "Meat", isDone: true},
    ]
    const uncomplitedTasks = tasks.filter(task => !task.isDone);
    expect(uncomplitedTasks.length).toBe(2);
    expect(uncomplitedTasks[0].id).toBe(1);
    expect(uncomplitedTasks[1].id).toBe(3);
})