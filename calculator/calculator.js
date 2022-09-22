
 var screenmemory = '';

 var array=[];
 var buttonHover = document.getElementsByTagName('button');

function number(number) {
  
  document.getElementById('calc').value+=number;
  screenmemory+=number;
  // alert(screenmemory);

}
function backspace(){

  var a=document.getElementById('calc').value
 var lastChar = a.substring(a.length-1,a.length);
 
 if(lastChar == '/' ||lastChar =='%' || lastChar== '*' || lastChar == '+' || lastChar== '-' ) { 
  // remove last element in array
  array.pop();
  // array.splice(-1);

 } else {
  // remove last element in screenmemory
  screenmemory = screenmemory.substring(0,screenmemory.length-1);
  }

   document.getElementById('calc').value=a.substring(0,a.length-1)
 
}


function clearentry(){

  var b=document.getElementById('calc').value;
  var length=0;
  var lastChar=b.substring(b.length-1,b.length);
  if(lastChar != '/' || lastChar != '%' || lastChar != '*' || lastChar != '+' || lastChar != '-'){
    if(array.length !=0){
      for( i=0; i< array.length;i++){
        length += array[i].length;
      }
      document.getElementById('calc').value=b.substring(0,length);
    }else{
      document.getElementById('calc').value='';
    }


    screenmemory ='';
  }
}


function clear1(){
  document.getElementById('calc').value='';
  screenmemory="";
  array=[];
}


function operator(operator){

	document.getElementById('calc').value+=operator;
  if(screenmemory != '') {
    array.push(screenmemory); 
  }

  screenmemory='';
	array.push(operator);
}
  function result(){
 	array.push(screenmemory);
  	
    var result;

   var k=[];
  // for(i=0;i<array.length;i++) {
  //   alert(array[i])
  // }
 	for(i=0;i<array.length;i++)
 	{
  

 		switch(array[i]){
 			case '+':
       if(k.length===0){
 			 result=parseInt(array[i-1]) + parseInt(array[i+1]);
       k.push(result);
     }else{
       result=k[0] + parseInt(array[i+1]);
       k=[];
       k.push(result);
     }
 			
 			break;

 			case '-':
       if(k.length==0){
 			 result=parseInt(array[i-1]) - parseInt(array[i+1]);
       k.push(result);
     }else{
       result=k[0] - parseInt(array[i+1]);
       k=[];
       k.push(result);
     }
 			
 			break;

 			case '*':
      if(k.length==0){
 			 result=parseInt(array[i-1]) * parseInt(array[i+1]);
       k.push(result);
     }else{
      result=k[0] * parseInt(array[i+1]);
      k=[];
      k.push(result);
      }
 			
 			break;

 			case '/':
        if(k.length==0){
 			 result=parseInt(array[i-1]) / parseInt(array[i+1]);
       k.push(result);
     }else{
      result=k[0] / parseInt(array[i+1]);
      k=[];
      k.push(result);
     }
 		   //alert(k[0]);
 			break;

 		case '%':

       if(k.length==0){
       result=parseInt(array[i-1]) % parseInt(array[i+1]);
       k.push(result);
     }else{
      result=k[0] % parseInt(array[i+1]);
      k=[];
      k.push(result);
     }
  
 			break;

 		}
 	}document.getElementById('calc').value=result;
     screenmemory=result.toString();
 	array=[];
  k=[];
  
 }

document.addEventListener("keyup",function(event){
  
 
  if(event.key=='0' || event.key=='1' || event.key=='2' || event.key=='3' || event.key=='4' || event.key=='5' || event.key=='6' ||event.key=='7' || event.key=='8' || event.key=='9'){
     number(event.key)
  }
  else if(event.key=='+' || event.key=='-' || event.key=='*' || event.key=='%' || event.key=='/'){
     operator(event.key)
  }
  else if(event.key=='Enter'){
    result(event.key);
  }
   else if(event.key=='Delete'){
    clearentry();
  }
  else if(event.key=='Backspace'){
    backspace();
  }
  else if(event.key=='Escape'){
    clear1();
  }
 
  
 
});

// document.getElementById("keydown",function(event){
//   if(event.which=='Backspace'){
//     backspace(event.which);
//   }
// })

// function myFunction(event){
//   var x=event.key;

//   document.getElementById('calc')=x;

// }



 