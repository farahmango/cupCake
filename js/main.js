var name1=document.getElementById("name");
var helpname=document.getElementById("helpname");
var nameformat=/^[a-zA-Z0-9_$.]{5,16}$/;


var count=document.getElementById("count");
var helpcount=document.getElementById("helpcount");
var type=document.getElementById("type");
var helptype=document.getElementById("helptype");
var time=document.getElementById("time");
var helptime=document.getElementById("helptime");
var aler=document.getElementById("aler");
var helpaler=document.getElementById("helpaler");
var submit=document.querySelector("#btn");
var welcomeBtn=document.getElementById("welcomeBtn");
var showBtn=document.getElementById("showBtn");

showBtn.addEventListener("click",function (){
  // var user =localStorage.getItem( 'username')
  welcomeBtn.innerHTML="Welcome" + " "+localStorage.getItem("username") 


})

submit.addEventListener("click",function (){

  if(name1.value==""){
    helpname.innerHTML="please fill the Name";
    helpname.style.color="red"
    name1.style.border="3px solid red" 

    
    }else{
    if(name1.value.match(nameformat)){
        helpname.innerHTML="";
        name1.style.border="3px solid #3ff312"
        localStorage.setItem("username",name1.value)

    
    }
    else{
        helpname.innerHTML="Name not valid";
        helpname.style.color="red"
    
    }
    }
    if(count.value>=1 &&count.value<15){
      count.style.border="3px solid #3ff312"
  }
  else{
     count.style.border="3px solid red" 
     helpcount.innerHTML="count must between 1 and 15"
    helpcount.style.color="red"
    }

    if (type.value == "None") {
     
      helptype.innerHTML ="Please fill out the cupcake type";
      helptype.style.color = "red";
      type.style.border="3px solid red" 
    } else {
      helptype.innerHTML = "Okay";
      helptype.style.color = "rgb(15, 228, 15)";
      type.style.border="3px solid #3ff312"
    }

    if (time.value == "None") {
     
      helptime.innerHTML ="Please fill out the time delivery";
      helptime.style.color = "red";
      time.style.border="3px solid red" 
    } else {
      helptime.innerHTML = "Okay";
      helptime.style.color = "green";
      time.style.border="3px solid #3ff312"
    }

    if(type.value =="Chocolate" && aler.value =="Dairy Free"){
      helpaler.innerHTML="type of cake is not dairy free"
      helpaler.style.color="red"
      aler.style.border="3px solid red" 

      
      }
      if(type.value=="Pecan" && aler.value=="Nut Free"){
        
        helpaler.innerHTML="type of cake is not dairy free"
        helpaler.style.color="red"
        aler.style.border="3px solid red" 
  
        
      }
      if(time.value=="4:00 PM" && type.value=="Chocolate"){
       
        helptime.innerHTML="that this type of cake cannot be delivered at 4 PM."
        helptime.style.color="red"
        time.style.border="3px solid red" 
      }

  }
    )


    

var cup_cakes=[ 
    {"name":"Chocolate","calories":"high","weight":"200gm"}, 
    {"name":"Carrot","calories":"medium","weight":"150gm"}, 
    {"name":"Banana","calories":"high","weight":"200gm"}, 
    {"name":"Strawberry","calories":"low","weight":"160gm"}, 
    {"name":"Peanut","calories":"medium","weight":"200gm"} 
   ]; 

   var tbody1 = document.getElementById("tbody1")
   function show_cupcakes() {
     //write code that shows the cupcakes in the table as per the instructions
     for (i=0;i<=4;i++){
       var trEl = document.createElement("tr")
       tbody1.appendChild(trEl)
       var tdElement1 = document.createElement("td")
       trEl.appendChild(tdElement1)
       tdElement1.innerText=cup_cakes[i].name
       var tdElement2 = document.createElement("td")
       trEl.appendChild(tdElement2)
       tdElement2.innerText=cup_cakes[i].calories
       var tdElement3 = document.createElement("td")
       trEl.appendChild(tdElement3)
       tdElement3.innerText=cup_cakes[i].weight
       if (cup_cakes[i].calories=="high")
       {tdElement2.style.backgroundColor="red"}
       if (cup_cakes[i].calories=="medium")
       {tdElement2.style.backgroundColor="orange"}
       if (cup_cakes[i].calories=="low")
       {tdElement2.style.backgroundColor="green"}
     }
   }

   show_cupcakes();
