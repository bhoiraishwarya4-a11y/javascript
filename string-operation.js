// strPara = "small efforts today lead to achievements tomorrow";

// //convert given string to capitalization//

// function convertToUpperCase(str){
//     return str.toUpperCase()
// }
// strUpperCase = convertToUpperCase(strPara)

// console.log(strUpperCase);

// //convert given string to lower case

// function convertToLowerCase(str){
//     return str.toLowerCase()
// }
// strLowerCase = convertToLowerCase(strPara)

// console.log(strLowerCase);


// //extract the first word of a sentense
// const extractFirstWord=(str) => {
//     return str.split(" ")[0]
// }
// Firstletter=extractFirstWord(strPara)
// console.log(Firstletter)

// //split a string into an array//

// const convertinsplit=(str)=>{
//     return str.split(" ")
// }
// splitinarray=convertinsplit(strPara)
// console.log(splitinarray)

// //replace all spaces in a string with hyphen//


// // function spacewithhyphen(str){
// //     arrayWord = str.split(" ")
// //     strWithHyphen = arrayWord.join("-")
// //     return strWithHyphen
// // }
// //   strHyphen=spacewithhyphen(strPara)
// //   console.log(strHyphen)

// //replace string by using replaceall//
// function spacewithhyphen(str){
//     return str.replaceAll(" ","-")
// }
//   strHyphen=spacewithhyphen(strPara)
//   console.log(strHyphen)

// //check if the string is start and end with same character//
// function matchfirstandlast (str){
//     firstchar = str.charAt(0)
//     lastchar =  str.charAt(str.length-1)
//     if(firstchar==lastchar){
//         return 'a string start and end with the same character'
//     }else{
//         return 'a string start and end with the different character'
//     }
// }
// matchSTR = matchfirstandlast(strPara)
// console.log(matchSTR)
    

//Count the Number of Vowels in a Given String//

// let str = "small efforts today lead to achievements tomorrow";
// function countvowels(str){
//     let count=0;
//     for(i=0;i < str.length;i++){
//         if("aeiouAEIOU".includes(str[i])){
//             count++;
//         }

//     }
//       return count;
// }
// console.log(countvowels(str));

// //Check if a String is Palindrome//
// function ispalindrome(str){
//      let reversed=" ";
//      for(let i=str.length-1;i>=0;i--){
//         reversed+=str[i];
//      }
//      return str===reversed;
// }
// console.log(ispalindrome(str))

// //convert the first letter of each word to uppercase//

// function capitalizeWords(str){

//     let words = str.split(" ");

//     for(let i=0;i<words.length;i++){

//         words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);

//     }

//     return words.join(" ");
// }

// console.log(capitalizeWords(str));

// //Reverse the Characters in a String Manually//


function reverseString(str){

    let reverseStr = "";

    for(let i = str.length - 1; i >= 0; i--){

        reverseStr = reverseStr + str[i];

    }

    return reverseStr;
}

console.log(reverseString(str));


//Remove all Non-Alphanumeric Characters//
let str = "small@ efforts# today! lead$ to% achievements& tomorrow123";

function removeSpecialCharacters(str){

    return str.replace(/[^a-zA-Z0-9 ]/g, "");

}

console.log(removeSpecialCharacters(str));