var input1= document.getElementById("input1");
var input2= document.getElementById("input2");
var btn1= document.getElementById("btn1");
var namee= document.getElementById("name");
var cong= document.getElementById("cong");
var win= document.getElementById("win");
var withdrow= document.getElementById("withdrow");
var hide= document.getElementById("hide1");
var hide2= document.getElementById("hide2");
var hide3= document.getElementById("hide3");
var hide4= document.getElementById("hide4");
var hide5= document.getElementById("hide5");

var inputA= document.getElementById("inputA");
var inputB= document.getElementById("inputB");
var inputC= document.getElementById("inputC");
var inputD= document.getElementById("inputD");
var inputE= document.getElementById("inputE");

var inputa= document.getElementById("inputa");
var inputb= document.getElementById("inputb");
var inputc= document.getElementById("inputc");
var inputd= document.getElementById("inputd");
var inpute= document.getElementById("inpute");

var submit= document.getElementById("submit");
var pp= document.getElementById("pp");
var a=0;

submit.addEventListener("click",function(){
      inputa.innerHTML=x+Y+z;
      inputb.innerHTML=X+y-Z;
      inputc.innerHTML=z*Z+y;
      inputd.innerHTML=Y*y-x;
      inpute.innerHTML=x+X*z;
      rahe33();
});
function rahe33(){
        if(inputA.value==x+Y+z){
            a++;
        }
        if(inputB.value==X+y-Z){
            a++;
        }
        if(inputC.value==z*Z+y){
            a++;
        }
        if(inputD.value==Y*y-x){
            a++;
        }
        if(inputE.value==x+X*z){
            a++;
        }
        if(a<10){
            if(a==5){
                pp.innerHTML=`Excilent!! You Solve All Problems`;
            }
           else if(a==4){
                pp.innerHTML=`Wow!! You Solve 4 Problems`;
            }
           else {
                pp.innerHTML=`You Solve Only ${a} Problems!!`;
            }
        }
}
var mobile=/(88|\+88|\+88-|88-)?01[3-9]{1}[0-9]{2}-?[0-9]{6}$/
var nam=/[a-zA-Z_]{8-20}/

var x=Math.floor(Math.random()*10);
var y=Math.floor(Math.random()*10);
var z=Math.floor(Math.random()*10);
var X=Math.floor(Math.random()*10);
var Y=Math.floor(Math.random()*10);
var Z=Math.floor(Math.random()*10);

hide1.innerHTML=`${x} + ${Y} + ${z} = `;
hide2.innerHTML=`${X} + ${y} - ${Z} = `;
hide3.innerHTML=`${z} * ${Z} + ${y} = `;
hide4.innerHTML=`${Y} * ${y} - ${x} = `;
hide5.innerHTML=`${x} + ${X} * ${z} = `;

btn1.addEventListener("click",function(){
    rahe1();
})

btn2.addEventListener("click",function(){
    alert(`Nothing is free in this world ${input1.value}!`);
    alert(`keep Work harder. Eid Mubarak ${input1.value}`);
})

function rahe1(){
        if(input2.value.match(mobile)){   
         namee.innerHTML=input1.value;
        cong.innerHTML="Congratulation!!!";
       win.innerHTML=`You Win ${Math.floor(Math.random()*1000)} Tk`;
       withdrow.innerHTML=`For withdrow click restart button`;
        }
    else{
        alert(`Wrong Mobile Number ${input2.value}...!!!!!`);
    }
}

