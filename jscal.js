var hiss=0,t=1;
var track=0;
var audio=new Audio("number.mp3");
var audio2=new Audio("operator.mp3");
function history (){
    return document.getElementById("History-val").innerText;
}
function printhis(num){
    document.getElementById("History-val").innerText=num;
}
function getop(){
    return document.getElementById("Output-val").innerText;
}
function printop(num){
    if(num=="")
        document.getElementById("Output-val").innerText=num;
    else
        document.getElementById("Output-val").innerText=getformatted(num);
}
function getformatted(num){

    var n=Number(num);
   // alert(n);
  var val=n.toLocaleString("en");
    return val;
}
function revnum(num){
     return Number(num.replace(/,/g,''));
}

var operator= document.getElementsByClassName("Operator ");
for(var i=0;i< operator.length;i++){
    operator[i].addEventListener('click',function(){
        audio2.play();
        if(this.id=="C"){
            printhis("");
            printop("0");
            hiss=0;
            t=1;
                        }
       else if(this.id=="CE")
        {  
            var val=getop();
                val=val.replace(/,/g,'');
            if(val){
              //  alert("Deleting the number :"+ val.charAt(val.length-1));
                val= val.substr(0,val.length-1);
                if(val.includes(".") || val.includes("-") ){
                    document.getElementById("Output-val").innerText=val;
                }
                    else
                printop(val);
                if(val.length==0){
                    t=0;
                    printop("0");}
        }
    }   
        else {
        var output=getop();
        output=output.replace(/,/g,"");
        var his= history();
            var res,d;
            if(this.id=="=" && hiss==0)
            {  
                 
                 his=his+output;

                if(his.includes("(")&&!his.includes(")") ){
                    his=his+")";
                 //   alert(his);
                }

                res=eval(his);
                    
                printop(res);
                printhis(his);
                hiss=1;
                t=1;
            }
            else if(this.id=="-" && t==1 && hiss==0 ){
                if(output==0)
                    output="";
                if(output){
                    output=output+this.id;
                document.getElementById("Output-val").innerText=output;
                                }
                else
                document.getElementById("Output-val").innerText=this.id;
            }

            else if(t==0 && output!="(")
            {

                if(this.id=="%"){
                    output=output/100;
                    his=his+output;
                    printhis(his);
                    printop("");
                }
                   else{ 
                    his=his+output;
                    his=his+this.id;
                   printhis(his);
                   printop("");
                }
            }
            if(hiss==1 && this.id!='=' && this.id!='C' && this.id!='CE'){
                d=output;
                printhis(d+this.id);
                printop("");
               // alert(d);
               hiss=0;
            }
                                        t=1;
        }
        
});
}
var number= document.getElementsByClassName("Number ");
for(var i=0;i< number.length;i++){
    number[i].addEventListener('click',function(){ 
       audio.load();
       audio.play();       
    if(hiss==1)
    {
      
        printop("");
        printhis("");
        hiss=0;
    }

    var output=getop();

    if(output==0)
        output="";

   
 if(Number.isInteger(revnum(output)) && Number.isInteger(Number(this.id)))
{           
            t=0;
            output=output+this.id;
           output= revnum(output);
            printop(output);
}
 else if(this.id=="."){
     t=0;
    if(output.includes("."))
        output=output+"";
        else
        output=output+".";
        
    document.getElementById("Output-val").innerText=output;
}
else if(output.includes(".") && this.id!=".")  {
    // alert("L");
    output=output+this.id;
    document.getElementById("Output-val").innerText=output;
 }
 else if(this.id=="("){
     if(!output.includes("(")){
         output=output+this.id;
         document.getElementById("Output-val").innerText=output;
     }
 }
 else if(this.id==")"  && history().includes("(") && output  ){
    if(!output.includes(")")){
        output=output+this.id;
        document.getElementById("Output-val").innerText=output;
    }
}
if(output.charAt(0)=="(" || output.charAt(0)=="-"){
    if(!output.includes(".") && this.id!="." && this.id!="(" && this.id!=")")
    {   t=0;
        var s,s1=output,s2,v,g;
        s2=output+this.id;
    if(output.charAt(1)=="("||output.charAt(1)=="-"){
        v=output.charAt(0)+output.charAt(1);
        s=s2.substr(2,output.length);
    }
    else{
        v=output.charAt(0);
        s=s2.substr(1,output.length);
    }
    if(s){
       g=s.replace(/,/g,'');
    s1=Number(g).toLocaleString("en");
    v=v+s1;
    document.getElementById("Output-val").innerText=v;
}
}
}
});
}
function dao(){
    document.getElementById('slide').classList.toggle('active');
}

function night(){
    var e=document.body;
    e.classList.toggle("darkmode");
}
