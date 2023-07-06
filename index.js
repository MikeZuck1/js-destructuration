// Import stylesheets
import './style.css';

const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

const submarineTitan = {
  model : 'submarine titan',
  yearOfConstruction :  2015,
  crewMembersCount : 8, 
  weightInKilograms : 36749,
  color : 'white',  
    profondeMiles() {
      console.log(''); 
    }
}; 

const {model} = submarineTitan; 
console.log(model);

const an_arr = ['a', 'b', 'c'];
console.log(Object.keys(an_arr)); 

const an_obj = {0 : 'a', 1 : 'b', 2 : 'c'};
console.log(Object.keys(an_obj));

const obj  = {100 : "a", 7 : "b", 2 : "C"};
console.log(Object.keys(obj));


const arr_1 = {name : 'Jon', age : 34, occupation : 'Programmer'}; // target 
const arr_2 = {entreprise : 'Google', yearOfexp : 10}; // source 

console.log(Object.assign(arr_1, arr_2, {expToGoogle : 5, typeOfContract : 'LT - Long Term'}));
// prints : { name: 'Jon', age: 34, occupation: 'Programmer', entreprise: 'Google', yearOfexp: 10, expToGoogle: 5, typeOfContract: 'LT - Long Term }

const vampire = {
  name : 'Dracula', 
  residence : 'Transylvania',
  preferences : {
    day : 'stay inside',
    night : 'satisfy appetite' 
  }
};

// utilisation de l'affectation destructurée => pour extraire certaines valeurs des objets
const {name} = vampire; 
console.log(name);