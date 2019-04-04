
const instructors = [
    { name: 'Aaron', specialty: 'Entomology', medals: 7 },
    { name: 'Carolyn', specialty: 'Fencing', medals: 5 },
    { name: 'Kenn', specialty: 'Norse Mythology', medals: 8 },
    { name: 'Paul', specialty: 'Tuvan throat singing', medals: 4 },
    { name: 'Quincy', specialty: 'Quantum Mechanics', medals: 2 },
    { name: 'Tom', specialty: 'Chemistry', medals: 3 }   
]
let instructor_names = [];

for(let i = 0; i < instructors.length; i++){
    if(instructors[i].medals >= 5){
        instructor_names.push(instructors[i].name);
    }
}
console.log(instructor_names);

//use .filter
const instructorNames = instructors.filter( instructor => instructor.medals >=5);
console.log(instructorNames); //this lists whole object of instructors with 5 or more medals

//creates me NEW array and doesnt alter the original


//practice
//fix the code:
// If done correctly, in your terminal you should see after console logging 
// instructorInfo -> { name: 'Aaron', specialty: 'Entomology', medals: 7 }

const instructorInfo = instructors.filter(instructor => instructor.name == 'Aaron');

console.log(instructorInfo[0]);


