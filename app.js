// FUNCTIONS, SWITCH STATEMENTS, WHILE… DOWHILE LOOPS 



    // Question no 1
    function power(a,b){
        return Math.pow(a,b);
    }
    document.write(power(2,4));




// Question no 2
function isLeap(year){
    return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}
document.write(isLeap(2020));





//      Question no 3
function area(a,b,c){
    function S(){
        return (a+b+c)/2;
    }
    return S()*(S()-a)*(S()-b)*(S()-c);
}
document.write(area(4,4,4));




// Question no 4
function result(sub1,sub2,sub3){
    total= 500;
    function average(){
        return (sub1+sub2+sub3)/3;
    }
    function percentage(){
        return (sub1+sub2+sub3)*100/total  +"%";
    }
    return "average:"+average()+"<br>Percentage:"+percentage();
}
document.write(result(200,199,60));




// // Question no 5
String.prototype.findindex,Array.prototype.findindex=function(a){
for(var i=0;i<this.length;i++ ){
    if(a==this[i]){
        return i;
        break
    }
}
}
document.write(["b","u","a","h"].findindex("a"));





// Question no 6
function delVowel(str){
    if(str.length>25){
        document.write("string should not longer than 25 characters");
    }
    else{
        var newstr=[];
        for(var i=0;i<str.length;i++){
            if(str[i]!="a"&&str[i]!="e"&&str[i]!="i"&&str[i]!="o"&&str[i]!="u"){
                newstr.push(str[i]);
            }
        }
        return newstr.join("");
    }
}
document.write(delVowel("soma fatima"));





// Question no 7
function findOccurrences() {
    var str = "safiugae";
    var count = 0;
    let haveSeenVowel = false;
  
    for (const letter of str.toLowerCase()) {
      switch (letter) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
          {
            if (haveSeenVowel) {
              count++;
              haveSeenVowel = false;
            } else {
              haveSeenVowel = true;
            }
            break;
          }
        default:
          haveSeenVowel = false
      }
    }
  
    return count
  }
  
  console.log(findOccurrences());





// Question no 8
function convert(){
 km_distance=+prompt("enter distance in km");
    function toMeter(){
        return km_distance*1000;
    }
    function toFeet(){
        return km_distance*3280.84;
    }
    function toInches(){
        return km_distance*39370.1;
    }
    function toCentiMeter(){
        return km_distance*100000;
    }
    document.write(km_distance+" km is equals to:"+toMeter()+" meters<br>");
    document.write(km_distance+" km is equals to:"+toInches()+" inches<br>");
    document.write(km_distance+" km is equals to:"+toFeet()+" feet<br>");
    document.write(km_distance+" km is equals to:"+toCentiMeter()+" centimeters<br>");

}
convert();





// Question no 9
function calcOvertime(){
    var workingHours=+prompt("enter your working hours");
    if(workingHours>40){
        return (workingHours-40)*12+" rupees.";
    }
    else{
        return 0;
    }

}
document.write(calcOvertime());





// Question no 10
var cash=+prompt("enter amount to withdraw");
var hundred=0;
var fifty=0;
var ten=0;
var a=cash;
while (cash>=10) {
    if(cash>=100){
        cash-=100;
        hundred++;
    }
    else if(cash>=50){
        cash-=50;
        fifty++;
    }
    else if(cash>=10){
        cash-=10;
        ten++;
    }

    
}
document.write("for amount of "+a+" rupees ,"+"you will have "+hundred+" hunderd notes ,"+fifty+" fifty notes & "+ten+" ten notes.");







// chapter 43 to 48
// Events

//Q no 1

function kk(){
    alert("Hello World");
}



//Q no 2

function phones(){
    alert("Thanks For Purchasing");
}



//Q no 3


function deleteBtn1(){
    document.getElementById('dlt-btn1').parentElement.parentElement.remove();
}
function deleteBtn2(){
    document.getElementById('dlt-btn2').parentElement.parentElement.remove();
}
function deleteBtn3(){
    document.getElementById('dlt-btn3').parentElement.parentElement.remove();
}
function deleteBtn4(){
    document.getElementById('dlt-btn4').parentElement.parentElement.remove();
}



//Q no 4

function changeImage(){
    var a = document.getElementById('imgforchange');
    a.src = 'img/2.jpg';
}

function changeImageBefore(){
    var a = document.getElementById('imgforchange');
    a.src = '../img/1.jpg';
}



//Q no 5

function increase(){
    var a = document.getElementById('counter');
    a.value++;
}

function decrease(){
    var a = document.getElementById('counter');
    a.value--;
}





// Chapter 49 to 52
//Events


//Q no 1

function formsubmit(){
    var fname = document.getElementById('fname');
    var lname = document.getElementById('lname');
    var email = document.getElementById('email');
    var pnumber = document.getElementById('pnumber');
    var password = document.getElementById('password');
    document.write("<h1>First Name: " + fname.value + "</h1>");
    document.write("<h1>Last Name: " + lname.value + "</h1>");
    document.write("<h1>Email: " + email.value + "</h1>");
    document.write("<h1>Phone Number: " + pnumber.value + "</h1>");
    document.write("<h1>Password: " + password.value + "</h1>");
}




//Q no 2

function moreText(){
    var a = document.getElementById('para1');
    var b = document.getElementById('readmorebtn');
    b.style.display = 'none';
    a.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti autem magni facere. Corporis alias dolor nulla quisquam, architecto laudantium, aperiam ab sapiente eum repellendus explicabo laboriosam qui necessitatibus ipsam tenetur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti autem magni facere. Corporis alias dolor nulla quisquam, architecto laudantium, aperiam ab sapiente eum repellendus explicabo laboriosam qui necessitatibus ipsam tenetur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti autem magni facere. Corporis alias dolor nulla quisquam, architecto laudantium, aperiam ab sapiente eum repellendus explicabo laboriosam qui necessitatibus ipsam tenetur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti autem magni facere. Corporis alias dolor nulla quisquam, architecto laudantium, aperiam ab sapiente eum repellendus explicabo laboriosam qui necessitatibus ipsam tenetur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti autem magni facere. Corporis alias dolor nulla quisquam, architecto laudantium, aperiam ab sapiente eum repellendus explicabo laboriosam qui necessitatibus ipsam tenetur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti autem magni facere. Corporis alias dolor nulla quisquam, architecto laudantium, aperiam ab sapiente eum repellendus explicabo laboriosam qui necessitatibus ipsam tenetur.";
}



//Q no 3

function formSubmit(){
    var a = document.getElementById('stdname');
    var b = document.getElementById('stdclass');
    var c = document.getElementById('stdage');
    var d = document.getElementById('stdlist');
    var i = 0;
    var e = document.createElement('tr');
    var row = "<td>" + a.value + "</td><td>"+ b.value + "</td><td>" + c.value + "</td><td><button id='edit-btn' onclick='editBtn(this)'>Edit</button></td><td><button id='dlt-btn' onclick='deleteBtn(this)'>Delete</button></td>";
    d.appendChild(e).innerHTML = row;
}


function deleteBtn(e){
    e.parentElement.parentElement.remove();
}

function editBtn(f){
    f.parentElement.parentElement.remove();
    var a = document.getElementById('stdname');
    var b = document.getElementById('stdclass');
    var c = document.getElementById('stdage');
    c.value = f.parentNode.previousSibling.innerHTML;
    b.value = f.parentNode.previousSibling.previousSibling.innerHTML;
    a.value = f.parentNode.previousSibling.previousSibling.previousSibling.innerHTML;
}


// chapter  53 to 57

//Q no 1

var i = 10;
function zoomIn(){
    var a = document.getElementById('para');
    i+=10
    a.style.fontSize = i+'px';
}

function zoomOut(){
    var a = document.getElementById('para');
    i+=-10
    a.style.fontSize = i+'px';
}




//Q no 2

function showImage(e){
    var a = document.getElementById('modaling');
    a.src = e.src;
}













// chapter 58 to 67
//DOM


//Q no 1

// i

var a = document.getElementById('main-content');

//ii

console.log(a.childNodes)

//iii

var b = document.getElementsByClassName('render');

for(var i = 0 ; i < b.length ; i++){
    console.log(b[i].innerHTML);
}

//iv

var c = document.getElementById('first-name');

c.value = "safiullah";


//v

var d = document.getElementById('last-name');
var e = document.getElementById('email');

d.value = "Malik";
e.value = "safiullahmalik515151@gmail.com";





//Q no 2

//i

var get1 = document.getElementById('form-content');

console.log(get1.nodeType);


//ii

var get2 = document.getElementById('lastName');

console.log(get2.nodeType);
console.log(get2.childNodes);


//iii

var get3 = document.getElementById("lastName");

console.log(get3.nodeValue = "Update");


//iv

var get4 = document.getElementById('main-content');

console.log(get4.firstChild);
console.log(get4.lastChild);


//v 

var get5= document.getElementById('lastName');

console.log(get5.nextSibling);
console.log(get5.previousSibling);


//vi

var get6 = document.getElementById('email');

console.log(get6.parentNode);
console.log(get6.nodeType);
