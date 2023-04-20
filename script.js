 
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
  alert("Please select month of birthday")
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



   //  (for the alert if some one did'nt select dates)

// if(userDate=== [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]){
//   userDate = userDate
// }else{
//   alert("Please select date of birthday")
// };


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



//   (-1 month error)

if(month === -1){
  month = 11
}else{
  month = month
}



//  now for hours


let currentHour = currentTime.getHours();

//  for the correction of 0 in hour method and also accordingly date 

if(currentHour===0){
  currentHour=24;
  date = date -1 ;
}else{
  currentHour=currentHour
}



let hour = 24 - currentHour ;

///  now for (-) dates
// if(hour <1){
//   hour + 12 ;
// }else{
//   hour = hour
// };



    //  for hours and hour in result
let addingHour= "Hours";
if(hour === 1 || hour=== 0){
  addingHour= "Hour"
}else{
  addingHour= addingHour
};

//   combine answerr of month  and addingmonths(why we are taking here and not above with it's 
//    sector   because the month in (-) of date will not reduce the month when date will become -)


    let combine1= `${month} ${addingMonths}`;


let combine2 = `${date} ${addingDate}`;


let combine3 = `${hour} ${addingHour}  ` ;


  // print the answer
  
  document.querySelector(`#result1`).innerText=combine1;
    
  document.querySelector(`#blockNone`).style.display="block";

document.querySelector(`#result2`).innerHTML=combine2 ;

document.querySelector(`#result3`).innerHTML=combine3;
   };

// Repeat myFunction every hour (3600000 milliseconds)

setInterval(bilal,3600000)









       

