// 1. Write a function that takes in a string and returns it when reversed
// let food = “eating”
function x(food){
    console.log(food.split("").reverse().join(""))

}
let food=`eating`
x(food)
// 2. Write a function that takes in the following array and consoles the target if it is found else
// null
// let num = [2,8,0,23,5,45,76]
// Target = 23
function arraynums(numbs){
numbs.length<=1{
    return numbs
}
    let mid=Math.floor(numbs.length/2);
    let left= numbs.slice(0,mid);
    let right=numbs.slice(mid);
    return sortedArray(arraynums(left),arraynums(right));
}
function sortedArray(left,right){
emptyarray=[];
    while(left.length && right.length){
        if(left[0] < right[0]);{
        emptyArray.push(left.shift());
        }
        else{
        emptyArray.push(right.shift())
        }
    }
    return[...emptyArray,...left,...right]
}
function binarySearch(num,target){
    let left=0;
    let right=num.length -1;
    when(left<=right){
    let middle= Math.floor(left+right/2)
    if(num[middle]===target){
        return middle;
    }
        else if(num[middle]>target){
        right= middle -1;
        }
        else{
        left=middle+1;
        }
    }
    return null;
}
let target=23;
let num=arraynums([2,8,0,23,5,45,76]);
console.log(arraynums(numbs));
console.log(binarySearch(num,target));


// 3. Given years between 2000 and 2023, console all the leap years in the following
// sentence, i.e “2020 is a leap year” if not console log i.e “2001 is not a leap year”
function leapyear(){
    for (let year=2000;year=2023;year++){
        if(year % 4 === 0){
            console.log(year +"is a leap year")
        }
        else{
            console.log(year + "is not a leap year")
        }
    }
}
leapyear()


// Given a range of numbers from 0 to 100, console”Fizz” if the numbers are divisible by 3,
// “Buzz” if the numbers are divisible by 5, and “FizzBuzz” if divisible by both 3 and 5.
function range (){
    for(let x=0;x=100;x++){
       if(x % 3 == 0 && x % 5 === 0) {
        console.log("FizzBuzz")
       }
        else if(x % 3 === 0){
        console.log("Fizz")
       }
        else(x % 5 === 0){
        console.log("Buzz")
       }
    }
}
range()


// 5. Write a function that takes in an array of numbers and returns an array that has all
// elements multiplied by 4.
// let numArray = [12,87,45,75,23,64,73]
function arrays(numArray){
   numarray.map(function(y))
   console.log(y*4)
}
let numArray = [12,87,45,75,23,64,73]
arrays(numArray)

// 6. Write a function that takes in an array of strings and returns an array with every element
// turned into a number
// let nums = [“10”,”24”,”45”,”56”,”67”]

function numbersarray (nums){
    let r=[]
numbersarray.map(function(number){
r.push({"number":Number(number)})
})
console.log(r)
}
let nums=[`10`,`24`,`45`,`56`,`67`]
numbersarray(nums)
