/*JS EXERCISES

21) Given variables x = "John" and y = "Doe", write on the console "John <> Doe"
22) Create an object with properties such name, surname, email
23) Delete the email property from the previously created object
24) Create an array with 10 strings in it
25) Print in the console every string from the previous array
26) Create an array with 100 random numbers in it
27) Write a function to get the maximum and minimum values from the previously created array
28) Create an array of arrays, in which every array has 10 random numbers
29) Create a function that gets 2 arrays as parameters and returns the longest one
30) Create a function that gets 2 arrays of numbers as parameters and returns the one with the higher sum of values

DOM EXERCISES

31) Get the element with an id of "container" from the page
32) Get every <td> element from the page
33) Use a loop for printing the text inside of every <td> element in the page
34) Write a function to change the heading of the page
35) Write a function to add an extra row to the table
36) Write a function to add a class of "test" to each row in the table
37) Write a function to add a red background to every link in the page
38) Console log "Page loaded" when the page is correctly loaded
39) Write a function to add new items to a unordered list
40) Write a function to empty a list
*/



//21) Given variables x = "John" and y = "Doe", write on the console "John <> Doe"

let x = "John"
let y = "Doe"
console.log(x + " <> " + y)

//22) Create an object with properties such name, surname, email

let myDetails = { name: "Harika", surname: "Kommuri", email: "harikakommuri35@gmail.com" }

//23) Delete the email property from the previously created object

delete myDetails.email
console.log(myDetails)

//24) Create an array with 10 strings in it

strArray = ["string1", "string2", "string3", "string4", "string5", "string6", "string7", "string8", "string9", "string10"]


//25) Print in the console every string from the previous array

for (let i = 0; i < strArray.length; i++) {
    console.log(strArray[i])
}

//26) Create an array with 100 random numbers in it

let randomArr = []
let maxNum = 100
for (let i = 0; i < maxNum; i++) {
    let randomNumbers = Math.floor(Math.random() * maxNum)
    randomArr.push(randomNumbers)
}
console.log(randomArr)

//27) Write a function to get the maximum and minimum values from the previously created array

function getMaxAndMin(arr) {
    let max = arr[0]
    let min = arr[0]

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        } else if (arr[i] < min) {
            min = arr[i]
        }
    }
    return { max, min }
}

console.log(getMaxAndMin(randomArr))

//28) Create an array of arrays, in which every array has 10 random numbers

let arrayOfArrays = []

for (let i = 0; i < 10; i++) {
    let innerArray = []
    for (let j = 0; j < 10; j++) {
        innerArray.push(Math.floor(Math.random() * 10))
    }
    arrayOfArrays.push(innerArray)
}

console.log(arrayOfArrays)

//29) Create a function that gets 2 arrays as parameters and returns the longest one

function longestArr(arr1, arr2) {
    if (arr1.length > arr2.length) {
        return arr1
    } else
        return arr2
}

console.log(longestArr([1, 2, 3, 4], [5, 6, 7, 8, 9, 10]))

//30) Create a function that gets 2 arrays of numbers as parameters and returns the one with the higher sum of values

function higherSum(arr3, arr4) {
    let sum = 0
    for (let i = 0; i < arr3.length; i++) {
        sum = sum + arr3[i]
    }
    let sum1 = 0
    for (let i = 0; i < arr4.length; i++) {
        sum1 = sum1 + arr4[i]
    }

    if (sum > sum1) {
        console.log("The higher sum is from the first array and the sum is", sum)
    } else
        console.log("The higher sum is from the second array and the sum is", sum1)
}

higherSum([1, 2, 3], [4, 5, 6, 7])


//31) Get the element with an id of "container" from the page

let containerNode = document.getElementById("container")

//32) Get every <td> element from the page
//33) Use a loop for printing the text inside of every <td> element in the page

function tdElements() {
    let tdNode = document.getElementsByTagName("td")
    for (let i = 0; i < tdNode.length; i++) {
        tdNode[i].innerText = "Hello!"
    }
}

//34) Write a function to change the heading of the page

function changeHeading() {
    let headingNode = document.querySelector("h1")
    headingNode.innerText = "Hello! I am the new Heading"
}

//35) Write a function to add an extra row to the table

function addRow() {

    let tableNode = document.getElementById("table")
    let row = tableNode.insertRow()
    row.innerText = "Hello! I am the new row"
}

//36) Write a function to add a class of "test" to each row in the table

function addClass() {
    let rowNode = document.getElementsByTagName("tr")
    for (let i = 0; i < rowNode.length; i++) {
        rowNode[i].classList.add("test")
    }
}

//37) Write a function to add a red background to every link in the page

function addBgColor() {
    let linksNode = document.getElementsByTagName("a")
    for (let i = 0; i < linksNode.length; i++) {
        linksNode[i].style.backgroundColor = "red"
    }
}

//38) Console log "Page loaded" when the page is correctly loaded

window.onload = function () {
    console.log("Page loaded")
}

//39) Write a function to add new items to a unordered list

function addNewItems() {
    let ulListNode = document.getElementsByTagName("ul")
    let newul = document.createElement("li")
    newul.innerText = "New list item added!"
    for (let i = 0; i < ulListNode.length; i++) {
        ulListNode[i].appendChild(newul)
    }
}

//40) Write a function to empty a list

function emptyList() {
    let ulListNode = document.getElementsByTagName("ul")
    for (let i = 0; i < ulListNode.length; i++) {
        ulListNode[i].classList.add("visibility")
    }
}







