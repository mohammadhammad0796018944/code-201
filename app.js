'use strict';

let thetrue=0;
let userName=prompt("enter your gamer name ").toLowerCase();
alert("welcome back boos "+userName);
alert("now you enter question with yes or no");
let mygame=prompt("do you know what fifa fav game");
let arried=prompt("do you think I am married");
let ps4device=prompt("do you think I have ps4 device");
let proingames =prompt("do you think I am pro in games");
let devicecolor=prompt("do you know what is my device color red");
let blueraygames=prompt("can guess what is my blue ray games");



let gameskind=prompt('can you guess any of my gameskind'); 
let mygameskind=["Fifa","Need for speed heat","sport"];
for(let a=0;a<7;a++){

for(let i=1;i<mygameskind.length;i++){
   if(gameskind===mygameskind[i]){
   alert("you gused it ");
   console.log("play");
   a=8;
   thetrue++;
   break;
}else{
    gameskind=prompt('can you guess any of my gameskind');
}
}
}

alert ("my gameskind are"+ mygameskind);



// how mutch games i have 

if(myblueraygames!=corectblueraygames){
   let counter=0;
   while((myblueraygames!=corectblueraygames)&&counter<4){
    myblueraygames=prompt("can you guess what is how mane blue ray games i have");
      if(myblueraygames>50 && myblueraygames<60){
         alert("you are far");
      }else if(myblueraygames>61 && myblueraygames<80){
         if(myblueraygames=75){
            alert("you are corect") ;
            thetrue++;
            counter=7;

         }else{
         alert("you are near the correct")
         }
      }
      else{
         alert("you are far")
      }
      counter++;
   }
   
if(counter>5){
   alert("the correct is 75")


}
}


alert("you corectly mygame"+ thetrue +"time");

   if(mygame.toLowerCase()=="yes"||mygame.toLowerCase()=="no"||mygame.toLowerCase()=="y"||mygame.toLowerCase()=="n"){
     
      console.log("your  is correct")
   }else{
    alert("please change this" +mygame+"with yes or no") ;
    
    
   }
   if(mygame.toLowerCase()=="yes"||mygame.toLowerCase()=="y"){
      thetrue++;
}










if(arried.toLowerCase()=="yes"||arried.toLowerCase()=="no"||arried.toLowerCase()=="y"||arried.toLowerCase()=="n"){
     
    console.log("your  is correct")
 }else{
  alert("please change this   " +arried+" with yes or no  ") ;
  
  
 }
 if(arried.toLowerCase()=="yes"||arried.toLowerCase()=="y"){
    thetrue++;
}










if(ps4device.toLowerCase()=="yes"||ps4device.toLowerCase()=="no"||ps4device.toLowerCase()=="y"||ps4device.toLowerCase()=="n"){
     
    console.log("your  is correct")
 }else{
  alert("please change this   " +ps4device+" with yes or no  ") ;
  
  
 }
 if(ps4device.toLowerCase()=="yes"||ps4device.toLowerCase()=="y"){
    thetrue++;
}












if(proingames.toLowerCase()=="yes"||proingames.toLowerCase()=="no"||proingames.toLowerCase()=="y"||proingames.toLowerCase()=="n"){
     
    console.log("your  is correct")
 }else{
  alert("please change this   " +proingames+" with yes or no  ") ;
  
  
 }
 if(proingames.toLowerCase()=="yes"||proingames.toLowerCase()=="y"){
    thetrue++;
}















if(devicecolor.toLowerCase()=="yes"||devicecolor.toLowerCase()=="no"||devicecolor.toLowerCase()=="y"||devicecolor.toLowerCase()=="n"){
     
    console.log("your  is correct")
 }else{
  alert("please change this   " +devicecolor+" with yes or no  ") ;
  
  
 }
 if(devicecolor.toLowerCase()=="yes"||devicecolor.toLowerCase()=="y"){
    thetrue++;
}

















