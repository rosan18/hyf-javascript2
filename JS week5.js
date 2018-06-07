let numbers=[1,2,3,4];
let newNumbers= numbers.filter(num => num % 2 !==0);
console.log(newNumbers);


let oddNumbers = [1,3];
 newNumbers = oddNumbers.map(num => num *2);
console.log(newNumbers);

let monday = [
    {
        name     : 'Write a summary HTML/CSS',
        duration : 180
    },
    {
        name     : 'Some web development', 
        duration : 120
    },
    {
        name     : 'Fix homework for class10',
        duration : 20
    },
    {
        name     : 'Talk to a lot of people',
        duration : 200
    }
];

let tuesday = [
    {
        name     : 'Keep writing summary',
        duration : 240
    },
    {
        name     : 'Some more web development',
        duration : 180
    },
    {
        name     : 'Staring out the window',
        duration  : 10
    },
    {
        name     : 'Talk to a lot of people',
        duration : 200
    },
    {
        name     : 'Look at application assignments new students',
        duration : 40
    },
    {
        name     : 'Look at application assignments new students',
        duration : 40
    }
];

 let tasks = monday.concat(tuesday);
 let newTasks = tasks.map(object => object.name)
 console.log(newTasks);

 let timeHour =tasks.map(object=> {
     object.duration /=60;
     return object;
 })
     console.log(timeHour);

let removeTime = timeHour.filter(timeHour =>timeHour.duration < 2);
console.log(removeTime);

let durationRate = timeHour.map(timeHour => timeHour.duration * 6);
console.log(durationRate);
