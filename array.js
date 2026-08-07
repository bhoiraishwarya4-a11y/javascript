// //1.Create a program to reverse an array manually//
// let arr=[10,20,30,40,50];
// let reversearr=[];
// for(i=arr.length-1;i>=0;i--){
//     reversearr.push(arr[i])
// }
// console.log(reversearr);

// //2.Find the second-largest number in an array//
// let arrr=[10,50,30,80,20]
// let larget=-Infinity
// let secondlarget=-Infinity

// for(let i=0;i<arrr.length;i++){
//     if(arrr[i]>larget){
//         secondlarget=larget;
//         larget=arrr[i]
//     }else if(arrr[i]>secondlarget && arrr[i]!=larget)
//         secondlarget=arr[i]
// }
// console.log(secondlarget)


// //3.Merge two arrays without duplicates//
// let arr1=[10,20,30,40]
// let arr2=[30,40,50,60]
// let mergeArr=[]

// for (let i = 0; i < arr1.length; i++) {
//     if (!mergeArr.includes(arr1[i])) {
//         mergeArr.push(arr1[i]);
//     }
// }
// for (let i = 0; i < arr2.length; i++) {
//     if (!mergeArr.includes(arr2[i])) {
//         mergeArr.push(arr2[i]);
//     }
// }

// console.log(mergeArr);

// // 4.Find Frequency of Each Element
// let arr = [1,2,2,3,3,3,4];

// let freq = {};

// for(let item of arr){
//     if(freq[item]){
//         freq[item]++;
//     }else{
//         freq[item]=1;
//     }
// }

// console.log(freq);


// //5.implement Manual version of includes() methods//
// let arr3=[10,20,30,40,50];
// let search=30;
// let found=false;

// for(let i=0;i<arr3.length;i++){
//     if(arr3[i]===search){
//         found=true;
//         break;
//     }
// }
// if(found){
//     console.log("found")
// }else {
//     console.log("not found")
// }


// //6.Shift Elements Left by One Position//
// let number=[10,20,30,40,50]
// let newnum=[]
// for(i=1;i<number.length;i++){
//     newnum.push(arr[i])
// }
// console.log(newnum)

// // 7.Rotate Array Right by K Steps
// let arr=[1,2,3,4,5];
// let k=2;

// k=k%arr.length;

// for(let j=0;j<k;j++){

//     let last=arr[arr.length-1];

//     for(let i=arr.length-1;i>0;i--){
//         arr[i]=arr[i-1];
//     }

//     arr[0]=last;
// }

// console.log(arr);

// // 8.Remove Duplicate Elements

// let arr=[1,2,2,3,4,4,5];

// let unique=[];

// for(let item of arr){

//     if(!unique.includes(item)){
//         unique.push(item);
//     }

// }

// console.log(unique);

// //9. 2D Array Multiplication Table (1–10)
// let table=[];

// for(let i=1;i<=10;i++){

//     let row=[];

//     for(let j=1;j<=10;j++){
//         row.push(i*j);
//     }

//     table.push(row);
// }

// console.log(table);

// 10.Intersection of Two Arrays
let arr1=[1,2,3,4,5];
let arr2=[3,4,5,6,7];

let intersection=[];

for(let item of arr1){

    if(arr2.includes(item) && !intersection.includes(item)){
        intersection.push(item);
    }

}

console.log(intersection);