const drums = document.querySelectorAll('.drum');

drums.forEach((el)=>{
    // console.log(el);
    // el.addEventListener('click', onClick);

    //annonymus function using as input
    el.addEventListener('click', function(){
        // this.innerHTML
        var ourInner = this.innerHTML;
        console.log(ourInner); //character => w, a, s, d...
        checkButtom(ourInner); 
        addAnimation(ourInner);
        
    });
});

//!!!!! => addEventListener => is HIGHER ORDER FUNCTION
//!!!!! => function inside of it => is CALLBACK FUNCTION
// when button clicked it calls a callback function

//!!! SWITCH CASE below !!!//

function checkButtom(key) {

    switch (key) {
            case 'w':
                var tom1 = new Audio('sounds/tom-1.mp3')
                tom1.play();
                
                break;

            case 'a':
                var tom2 = new Audio('sounds/tom-2.mp3');
                tom2.play();

                break;

            case 's':
                var tom3 = new Audio('sounds/tom-3.mp3');
                tom3.play();

                break;

            case 'd':
                var tom4 = new Audio('sounds/tom-4.mp3');
                tom4.play();

                break;

            case 'j':
                var snare = new Audio('sounds/snare.mp3');
                snare.play();

                break;

            case 'k':
                var crash = new Audio('sounds/crash.mp3');
                crash.play();

                break;

            case 'l':
                var kick = new Audio('sounds/kick-bass.mp3');
                kick.play();
        
            default:
                console.log('MISSING')
                break;
        }
 
};

document.addEventListener('keydown', (e)=>{
    console.log(e) //returns charakter of key
    checkButtom(e.key);
    addAnimation(e.key)
    
});

function addAnimation(animate) {
   var forAnimation = document.querySelector('.' + animate);
   forAnimation.classList.add("pressed")
   setInterval(()=>{
       forAnimation.classList.remove("pressed")
   }, 100) 
}


/*Objects*
 
let bellBoy = {
    name: "Danylo",
    age: 25,
    hasWorkPermit: true,
    languages: ['English', 'French']
};

let housekeeper ={
    name: "Hannah",
    age: 25,
    experience: "Milhouse",
    hasWorkPermit: true,
    languages: ["English", "Russian"]
};

bellBoy.canadianPR = true;
housekeeper.canadianPR = true;

console.log(bellBoy.name + " know " + bellBoy.languages[0]);
console.log(`${housekeeper.name} is ${housekeeper.age} y.o.`);

 */

/*METHODS*
 
/* FOR EXAMPLE*

var audio = new Audio('sounds/tom-1.mp3')
audio.play();
it was as:
function Audio(fileLocation){
    this.fileLocation = fileLocation;
    this.play = function(){
        //Tap into the audio hardware
        //Check the file at the file location exists
        //Check the file in file location is a sound file
        //Play the file at fileLocation
    };
};

*/

/* CONSTRUCTOR FUNCTION
 FIRST CHARACTER SHOUD BE CAPITALIZED*

 
 function BellBoys(name, age, hasWorkPermit, languages){
    this.name = name;
    this.age = age;
    this.hasWorkPermit = hasWorkPermit;
    this.languages = languages;
};
function HouseKeeper(name, age, experience, hasWorkPermit, languages){
    this.name = name;
    this.age = age;
    this.experience = experience;
    this.hasWorkPermit = hasWorkPermit;
    this.languages = languages;
}

let bellBoy1 = new BellBoys('Mark', 1, false, ['Semi-Russian', 'Semi-Balgarian']);
let bellBoy2 = new BellBoys('Kolya', 21, false, ['English', 'Russian']);

let housekeeper1 = new HouseKeeper('Julia', 25, false, false, ['Russian', 'Balgarian']);

console.log(bellBoy1.languages[1]);
console.log(bellBoy2.name);

console.log(housekeeper1);
*/ 

/*Higher order function and Passing function as argument *

Higher order function => are functions that can take other functions as inputs
    
const multiply = (num1, num2) => {
    return num1 * num2;
};

const devide = (num1, num2) => {
    return num1 / num2;
};

const sum = (num1, num2) => {
    return num1 + num2;
};

const subtract = (num1, num2) => {
    return num1 - num2;
}


function calculator (num1, num2, operator){
    return operator(num1, num2);
};

console.log(calculator(2, 7, subtract));

*/

/*Callback*

 function myAddEventListener (typeOfEvent, itWillReturn){

    //Detect event code...

    var eventOfMyFunction = {
        eventType: 'training',
        isDanyloProgrammer: true,
        myStudyDeadLine: 3 + ' month'
    }

    if(eventOfMyFunction.eventType === typeOfEvent){
        itWillReturn(eventOfMyFunction);
    }
};


myAddEventListener('training', (event) => {
    event.somethingNew = 'hi there';
    // console.log(event);
})



======================================================================

const danyloEvent = (typeOfEvent, callback) =>{

    //Detect event code...what happened
    //and then

    var characters = {
        name: 'Danylo Kyrf',
        age: 25,
        before: 'Third Engineer',
        after: 'Web Developer',
        target: 'JSLearning'
    };

    if(typeOfEvent === characters.target){
        callback(characters);
    }

};


danyloEvent('JSLearning', (event) => {
    console.log(event.name + ' in age of ' + event.age + " left position of " + event.before +  " and start trying to become a " + 
    event.after + " and started " + event.target)
});


 */

/*Constructor function* 

function NewSeaman(name, surname, age, sallary, isValidTankerDocuments, isValidEndorsement){
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.sallary = sallary;
    this.isValidTankerDocuments = isValidTankerDocuments;
    this.isValidEndorsement = isValidEndorsement;
    this.rediness = function(dateMonth){
        dateMonth = prompt('Enter you date of rediness: (dd/mm)')
        console.log(dateMonth)
    }    
}

var firstSeaman = new NewSeaman('Danylo', 'Kyrf', 25, 5000, true, true);
var available = firstSeaman.rediness();


=====================================================================

function Migrant (name, age, whrePlanToMigrate, hasPermit){
    this.name = name;
    this.age = age;
    this.whrePlanToMigrate = whrePlanToMigrate;
    this.hasPermit = hasPermit;
    this.job = function(){
        console.log("I'll learn JavaScript and start work as web developer in Canada")
    };
};

var myMigration = new Migrant('Danylo', 25, 'to Canada', true);


myMigration.job();


*/



// for(i = 0; i < drums.length; i++){
//     drums[i].addEventListener('click', () => {
//         console.log(i)

//         var audio = new Audio('sounds/kick-bass.mp3');
//         audio.play();    
//     })
// };



 











