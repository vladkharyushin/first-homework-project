const ages = [10, 20, 22, 100, 85, 90, 5];

function predicate(age: number) {
    return age > 90;
}

const  oldAges = [100];

type CourseType = {
    title: string
    price: number
}

const courses = [
    {title: "CSS", price: 120},
    {title: "JS", price: 200},
    {title: "REACT", price: 150}
]
const cheapPredicate = (courses: CourseType) => {
    return courses.price < 160;
}
const cheapCourses = [
    {title: "CSS", price: 120},
    {title: "REACT", price: 150}
];