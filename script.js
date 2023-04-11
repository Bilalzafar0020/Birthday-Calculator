
   function bilal(){

   let userMonth=document.querySelector(`#mainMonths`).value    
userMonth=Number(userMonth);

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
  
  
  let addingMonths= `Months`;
  addingMonths=Number(addingMonths)
  
  if(month===1){
      addingMonths=`Month`;
  }else{
      addingMonths= `Months`;
  };
  
  let combine= `${month} ${addingMonths}`;
  console.log(combine);
  // print the answer
  
  document.querySelector(`#result1`).innerHTML=combine;
    
  document.querySelector(`#blockNone`).style.display="block";


   }













       
// setTimeout(function()  {
//     document.getElementById('blockNone').style.display = 'none';
// }, 3000); // 3000 milliseconds = 3 seconds

