//  De-structuring

const course = {
    courseName: "Js in hindi",
    price: 999,
    courseInstructor: "hitesh"
}

// course.courseInstructor

const { courseInstructor: instructor } = course // de-structuring

console.log(instructor);

// intro example to json = javascript object Notation
// {
//     name: "ashutosh",
//     coursename: "Js in hindi",
//     price: "free"
        
// }

[
    {},
    {},
    {}
]