/* JS - A prototype-based language */
/* Practice: person1 -->(inherits from prototype) Person() --> (inherits from prototype) Object */

// defining a constructor called Person
function Person(first, last, gender, age, interests) {
  this.name = {
    first: first,
    last: last
  }
  this.gender = gender;
  this.age = age;
  this.interests = interests;
  
  this.greeting = () => {
    let str = this.name.first + ", " + this.name.last + '.';
    console.log('Hi~I am ' + str + ' How are you');
  }

  this.showInterests = () => {
    let str = this.name.first;

    if (this.interests.length === 0) {
      console.log("Sorry~ " + str + " dosen't have any hobby and interest." );
    } else if (this.interests.length === 1) {
        console.log('My interest is ' + this.interests + '.');
    } else if (this.interests.length > 1) {
        let str = "My interests are ";
        for (let i=0; i<this.interests.length; i++) {
          if (i === this.interests.length-1) {
            str += "and " + this.interests[i] + "."
          }
          else {
            console.log('hi')
            str += this.interests[i] + ', ';
          }  
        }  
        return console.log(str);  
    }
  } 
}

// Creating a new object instance calles person1 inheriting from prototye Person().
let person1 = new Person('Enyo', 'Lin', 'female', 25, ['programming', 'cooking', 'shopping'] );

console.log(person1);
/********************************************
  Person {
    name: { first: 'Enyo', last: 'Lin' },
    gender: 'female',
    age: 25,
    interests: [ 'programming', 'cooking' ],
    greeting: [Function] 
  }
**********************************************/
person1.greeting(); // Hi~I am Enyo. How are you
person1.showInterests(); // My interests are programming, cooking, and shopping. 

//
let person2 = Object.create(person1);
console.log(person2.__proto__); // 將回傳 person1 物件
/*********************************************************
  Person {
    name: { first: 'Enyo', last: 'Lin' },
    gender: 'female',
    age: 25,
    interests: [ 'programming', 'cooking', 'shopping' ],
    greeting: [Function],
    showInterests: [Function] 
  }
**********************************************************/
console.log(person1 === person2); //false
console.log(person1 === person2.__proto__); //true

// 每個物件實例都具備 1 個建構子屬性，指向「用以建立實例」的原始建構子函式
let person3 = new person1.constructor('Karen', 'Stephenson', 26, 'female', ['playing drums', 'mountain climbing']);
console.log(person3);
/*********************************************************
  Person {
    name: { first: 'Karen', last: 'Stephenson' },
    gender: 26,
    age: 'female',
    interests: [ 'playing drums', 'mountain climbing' ],
    greeting: [Function],
    showInterests: [Function]
  }
**********************************************************/
console.log(person3.name.first); //Karen
console.log(person3.age); //female

// 修改Prototype
Person.prototype.farewell = function() {
  console.log(this.name.first + ' has left the building. Bye for now!');
}

person1.farewell(); //Enyo has left the building. Bye for now!


/**************** ******** ******** ******** ******** ******** ******** ******** ***** 
 *  In fact, 較常用的pattern：在Constructor裡定義properties, 使用prototype來定義methods **
 * ******** ******** ******** ******** ******** ******** ******** ******** ******** **/

function Person(first, last, gender, age, interests) {
  // property definitions
  this.name = {
    first: first,
    last: last
  }
  this.gender = gender;
  this.age = age;
  this.interests = interests;
}

// First method definition
Person.prototype.greeting = () =>{}

// Second method definition
Person.prototype.showInterests = () =>{}

// etc.