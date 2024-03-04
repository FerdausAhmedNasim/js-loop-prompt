//Logical operators Ex. (&&,||,!)

// let name="Asad";
// let deg= "MSc";
// let sub="Math";
// let marks=70;


// if (sub=="English" || (deg=="MSc" && (marks <=70)))
//  {
//     alert(name);
// }

// else{
//     alert("Failed");
// }



//JavaScript Loops
// var i=1;

// for ( i; i<10; i++) {
//     document.write(i+"<br>");
//     }

// var cnt = 1;
// while (cnt<10) {
//     document.write("ok"+cnt+"<br>");
//     cnt++;
// } 


// var i=2;

// document.write("Numbers"+"<br>");

// do

// {
//     document.write(i+"<br>");
//     i=i+2;
// }

// while (i<=20);


let sum = 0;

while (true) {
    let value =+prompt("Enter a number");
    if(!value)break;
    sum+=value;
}

document.write('sum is'+sum);

