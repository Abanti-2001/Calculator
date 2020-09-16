var hiss=0,t=0;
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
            track=0;
            hiss=0;
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
                    track=0;
                    printop("0");}
        }
    }   
        else {
        var output=getop();
        output=output.replace(/,/g,"");
        var his= history();
      //  alert(output);
       
if(this.id=='-'&& track==0 && output.charAt(0)==0 && t==0)
{   
    //alert(track);
    output='-';
    document.getElementById("Output-val").innerText=this.id;
   // alert(this.id);
    track=1;
}

     else if(output && output!="-")  
      { 
            //alert(output);
            var res,d,b;
            if(this.id=="%" && t==0)
            {       
                    output=output/100;
                    his=his+output;
                    printhis(his+"x");
                    printop("");
            }
           else if(this.id=="=" && hiss==0)
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
                
            }
            else if(this.id!="=" && t==0)
            {

                    his=his+output;
                        his=his+this.id;
                   printhis(his);
                   printop("");
            }
            if(hiss==1 && this.id!='=' && this.id!='C' && this.id!='CE' ){
                d=output;
                printhis(d+this.id);
                hiss=0;
               // alert(d);
            }
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
       t=0;        
    if(hiss==1 && output!="-")
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
            
            output=output+this.id;
           output= revnum(output);
            printop(output);
}
 else if(this.id=="."){
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
 if(this.id=="("){
     if(!output.includes("(")){
         document.getElementById("Output-val").innerText="(";
     }
 }
 else if(this.id==")" && output.includes("(")){
    if(!output.includes(")")){
        
        document.getElementById("Output-val").innerText=")";
    }
}
 if(output.charAt(0)=="("||output=="-"){
        output=output+this.id;
      
        var s,v,s1;
        s1=output.substr(1,output.length);
        s1=revnum(s1);
        
        s=Number(s1);
        v=s.toLocaleString("en");
        if(output.charAt(0)=="(")
        output="("+v;
        else
        output="-"+v;
        document.getElementById("Output-val").innerText=output;
     
}
    
});
}
function dao(){
    document.getElementById('slide').classList.toggle('active');
}


