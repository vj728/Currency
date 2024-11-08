let A = document.getElementById("first");
let B = document.getElementById("firs-sec");
let C = document.getElementById("second-sec");
let D = document.getElementById("btn");

let res  = document.getElementById("result");

function convert(){

  A = Number(A.value);
  B = B.value;
  C = C.value;
  let result ;

  if(B==="usa"){

     if(C==="ind"){
      result  = Math.round(A *84.36).toFixed(2);
      res.textContent = `${result} rupees `;
    }
  }
  else if(B==="ind"){

    if(C==="usa"){
     result  =( A/84.36).toFixed(2.);
     res.textContent = `${result} dollar `;
   }
 }
  
  
 
}