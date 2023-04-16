   function bilal(){

   let userMonth=document.querySelector(`#mainMonths`).value    



        //   convert user input to index number(because userinput is a string) 


if(userMonth=="January"){
  userMonth=1

} else if (userMonth=="February"){
  userMonth=2
} 
else if (userMonth=="March"){
  userMonth=3
} 
else if (userMonth=="April"){
  userMonth=4
} 
else if (userMonth=="May"){
  userMonth=5
} 
else if (userMonth=="Jun"){
  userMonth=6
} 
else if (userMonth=="July"){
  userMonth=7
} 
else if (userMonth=="August"){
  userMonth=8
} 
else if (userMonth=="September"){
  userMonth=9
} 
else if (userMonth=="October"){
  userMonth=10
} 
else if (userMonth=="November"){
  userMonth=11
} 
else if (userMonth=="December"){
  userMonth=12
} else{
  alert("Please select month")
};




//   Current Time of device

let currentTime=new Date();


//   get current Month from current time of device
let currentMonth=currentTime.getMonth();



let month=userMonth - (currentMonth+1);



if(month< 0){
      month=month+12
  }else{
      month=month
  };
  let addingMonths= "Months";



//   addingMonths=Number(addingMonths)
  
  if(month===1 || month===0){
      addingMonths="Month";}
  else{
      addingMonths= "Months";
  };
  


  let combine1= `${month} ${addingMonths}`







  // print the answer
  
  document.querySelector(`#result1`).innerText=combine1;
    
  document.querySelector(`#blockNone`).style.display="block";



   }











       
// setTimeout(function()  {
//     document.getElementById('blockNone').style.display = 'none';
// }, 3000); // 3000 milliseconds = 3 seconds

