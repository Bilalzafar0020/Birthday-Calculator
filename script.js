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


//   for (-) values
if(month< 0){
      month=month+12
  }else{
      month=month
  };


  //  for months and month in answer   
  let addingMonths= "Months";

  if(month===1 || month===0){
      addingMonths="Month";}
  else{
      addingMonths= "Months";
  };
  






//   now  for date  (to print date for the remaing of birthday) 

 let  userDate=document.querySelector(`#mainDates`).value 
userDate = Number(userDate)


let currentDate = currentTime.getDate(); 
currentDate=Number(currentDate)



let date = userDate - currentDate;


    ///  now for (-) dates 

    if(date < 0 ){
      date= date + 30 ;
      month =   month - 1;
    }else{
      date = date
    };


//  for date and dates in result
let addingDate = "Days";

if(date ===1 || date === 0){
  addingDate = "Day"
}else{
  addingDate = addingDate
};


//   combine answerr of month  and addingmonths(why we are taking here and not above with it's 
//    sector   because the month in (-) of date will not reduce the month when date will become -)


    let combine1= `${month} ${addingMonths}`;


let combine2 = `${date} ${addingDate}`;




  // print the answer
  
  document.querySelector(`#result1`).innerText=combine1;
    
  document.querySelector(`#blockNone`).style.display="block";

document.querySelector(`#result2`).innerHTML=combine2 ;

   };











       
// setTimeout(function()  {
//     document.getElementById('blockNone').style.display = 'none';
// }, 3000); // 3000 milliseconds = 3 seconds

