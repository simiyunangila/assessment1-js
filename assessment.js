// 1. Write a function that takes in a string and returns it when reversed
// let food = “eating”
function x(food){

}
let food=`eating`
console.log(x(food))
// 2. Write a function that takes in the following array and consoles the target if it is found else
// null
// let num = [2,8,0,23,5,45,76]
// Target = 23
function arraynums(){

}


// 3. Given years between 2000 and 2023, console all the leap years in the following
// sentence, i.e “2020 is a leap year” if not console log i.e “2001 is not a leap year”
function leapyear(y){
    for (w=[];w<y.length;w++){

    }

}


// Given a range of numbers from 0 to 100, console”Fizz” if the numbers are divisible by 3,
// “Buzz” if the numbers are divisible by 5, and “FizzBuzz” if divisible by both 3 and 5.
function range (numbers){
    for(x=0;x<numbers.length;x++){
       if(numbers.length/3==0 && numbers.length/5==0) {
        return[`FizzBuzz`]
       }else if(numbers.length/3==0){
        return[`Fizz`]
       }else{
        return[`Buzz`]
       }
    }
}
let numbers=[]
console.log(range(numbers))


// 5. Write a function that takes in an array of numbers and returns an array that has all
// elements multiplied by 4.
// let numArray = [12,87,45,75,23,64,73]
function arrays(numArray){
    for(z=[];z<numArray.length;z++){
        z.push(numArray*4)
    }
}
let numArray = [12,87,45,75,23,64,73]
console.log(arrays(numArray))

// 6. Write a function that takes in an array of strings and returns an array with every element
// turned into a number
// let nums = [“10”,”24”,”45”,”56”,”67”]

function numbersarray (nums){
for (newarr=[];newarr<nums.length;newarr++){
    newarr.push(nums*1)
}
}
let nums=[`10`,`24`,`45`,`56`,`67`]
console.log(numbersarray(nums))
