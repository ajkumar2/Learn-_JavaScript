let phone_no = 345
let phone_no1 = "3452"

console.log(typeof phone_no);
console.log(phone_no);

console.log(typeof phone_no1);
console.log(phone_no1);


//  convert in number to string 
let valueinphone_no1 = Number(phone_no1)
console.log(typeof valueinphone_no1);
console.log("after conversion", valueinphone_no1);

// if i pass the string like that "2345asdf" or suppose user enter in the form 
let phone_no2 = "3452adsf"

// then conversion will be affect

let valueinphone_no2 = Number(phone_no2)
console.log(typeof valueinphone_no2);
console.log(" No value print because phone_no2 is 3452asdf ", valueinphone_no2);









