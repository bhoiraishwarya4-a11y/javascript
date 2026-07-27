let name1="aishwarya"
let name2="bhoir"
let name=name1+" "+name2;
console.log(name)
console.log(name.length)


let text=`i love java

script`
console.log(text)
console.log(text.length)
console.log(text.charAt(2))
console.log(text[2])
console.log(text.at(2))
console.log(text.toLowerCase())
console.log(text.toUpperCase())

let a="hello"
let b="rahul"
console.log(a.concat(" , " , b ," !!! "))

let password="akdjdiewjdwj"
let pass=password.includes("x")
console.log(pass)

let text="i lova javascript"
console.log(text.indexOf("java"))
console.log(text.lastIndexOf("a"))
console.log(text.charAt(7))
console.log(text.startsWith("i"))
console.log(text.endsWith("t"))

let msg="hello"
console.log(msg.slice(3,5))
console.log(msg.slice(8,4))

let msg1="hello"
console.log(msg1.substring(3,5))
console.log(msg1.substring(8,4))

//lenght//
let name="aishwarya"
console.log(name.length)

let password="Admin@123"
if(password.length>=8){
    console.log("strong passsword")
}else{
    console.log("weak password")
}

//touupercase//
let city="pune"
console.log(city.toUpperCase())

let text="javascript"
result=text.toUpperCase();
console.log(result)

//tolowercase//
let email="ABC@GMAIL.COM";
// console.log(email.toUpperCase())

if(email.toUpperCase()==="ABC@GMAIL.COM"){
    console.log("you can login")
}else{
    console.log("you cant login")
}

//trim//
let name="       aishwarya      "
console.log(name.length)
console.log(name.trim().length)

if(name.trim()==="aishwarya"){
    console.log("login")
}

//trimstart//
let text="        rahul      "
console.log(text.trimStart().length)

//trimend//
let text1="             kunal          "
console.log(text1.trimEnd().length)

//slice//
let text3="i love javascript"
console.log(text3.slice(3,6))
console.log(text3.slice(11))
console.log(text3.slice(16,4))
console.log(text3.slice(3))

//substring//
let text4="i love javascript"
console.log(text4.substring(3,6))
console.log(text4.substring(11))
console.log(text4.substring(13,4))
console.log(text4.substring(-1))
console.log(text4.substring(5))

//substr//
let text4="i love javascript"
console.log(text4.substr(3,7))
console.log(text4.substr(18,2))
console.log(text4.substr(-5))
console.log(text4.substr(5))


//replace//
let fruits="apple apple mango"
console.log(fruits.replace("apple" ,"orange"))
console.log(fruits.replace("p","x"))

//replaceall//
let fruits1="apple apple mango"
console.log(fruits1.replaceAll("apple" ,"orange"))
console.log(fruits1.replaceAll("p","x"))

//split()//
let flower="rose,lotus,sunflower,lilly";
console.log(flower.split(","))
console.log(flower.split(" "))

//include()//
let sentence="i love javascript"
console.log(sentence.includes("java"))
console.log(sentence.includes("python"))
if(sentence.includes("love")){
    console.log("you are best")
}
let substr="hello word"
console.log(substr.substring(1,7))
console.log(substr.substr(1,7))


//startend//
let text="omkar bhoir"
console.log(text.startsWith("o"));
console.log(text.startsWith("b"));


//endwith//
let text1="omkai bhoir"
console.log(text1.endsWith("i"))
console.log(text1.endsWith("r"))