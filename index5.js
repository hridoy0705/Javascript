
  //caculate even or odd number
var num = 12;

if(num % 2==0)
console.log("Even");

else
console.log("odd");


  //caculate letter gread
var marks = prompt("Enter the valu of marks :");
         if (marks > 100 || marks<0)
        console.log("invalid marks");

     else if(marks>=80 && marks <=100)
    console.log("A+");

    else if(marks>=70 && marks <=79)
    console.log("A");

      else if(marks>=60 && marks <=69)
     console.log("A-");

    else if(marks>=50 && marks <=59)
    console.log("B");

     else if(marks>=40 && marks <=49)
    console.log("B-");

    else
    console.log("faill");

  //caculate positive number
    var num = prompt("Enter a number :");
    if (num>0)
        console.log("Positive");

    if (num<0)
        console.log("Negative");

    else (num==0)
        console.log("Zero");



    var num1 = prompt("Enter num1 :");
    var num2 = prompt("Enter num2 :");
    var num3 = prompt("Enter num3 :");

    if (num1>num2 && num1>num3)
        document.write("Large number =" +num1);

     else if (num1<num2 && num2>num3)
        document.write("Large number =" +num2);


      else
        document.write("Large number =" +num3);

