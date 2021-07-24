// Opdracht A
const addTheWordCool = function (array) {
    // add your code
}
console.log("Add cool:", addTheWordCool(["nice", "awesome", "tof"]));
// resultaat: ["nice", "awesome", "tof", "cool"]
const addCool = ["nice", "awesome", "tof"]
console.log(addCool.push("cool"))
console.log(addCool)


// Opdracht B
let amountOfElementsInArray = ['appels', 'peren', 'citroenen']
console.log(amountOfElementsInArray.length);
// 3


// Opdracht C
let selectBelgiumFromBenelux = ["Belgie", "Nederland", "Luxemburg"]
let findFirst = selectBelgiumFromBenelux.find(function (element) {
    return element[0];
})
console.log(findFirst);


// Opdracht D
let lastElementInArray = ["Haas", "Cavia", "Kip", "Schildpad"]
let findLast = lastElementInArray.reverse(function (item) {
    return item[0];
})
console.log(findLast[0]);


// Opdracht E
const presidents = ["Trump", "Obama", "Bush", "Clinton"]
const impeachTrumpSlice = function (array) {
    console.log(presidents.slice(1));
}
const impeachTrumpSplice = function (array) {
    console.log(presidents.splice(1));
}
console.log(impeachTrumpSlice(presidents)); // ["Obama", "Bush", "Clinton"]
console.log(impeachTrumpSplice(presidents)); // ["Obama", "Bush", "Clinton"]
// splice muteert de array, slice niet. 


// Opdracht F
let stringsTogether = ['Winc', 'Academy', 'is', 'leuk', ';-}']
console.log(stringsTogether.join(' '));


// Opdracht G
let array1 = [1, 2, 3]
let array2 = [4, 5, 6]
console.log(array1.concat(array2));

