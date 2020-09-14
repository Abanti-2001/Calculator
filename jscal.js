var hiss=0;
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
                        }
       else if(this.id=="CE")
        {  
            var val=getop();
                val=val.replace(/,/g,'');
            if(val){
              //  alert("Deleting the number :"+ val.charAt(val.length-1));
                val= val.substr(0,val.length-1);
                
                if(val.includes(".")){
                    //alert("dot");
                    document.getElementById("Output-val").innerText=val;
                }
                    else
                printop(val);
                if(val.length-1==0){
                    track=0;
                    printop("0");}
        }
    }
        else{
        var output=getop();
        var his= history();
if(this.id=='-'&& track==0 && output.charAt(0)==0)
{   
    //alert(track);
    output='-';
    document.getElementById("Output-val").innerText=this.id;
    track=+1;
}

     else   if(output!=""  ){
            output=output==""?output:revnum(output);
            his=his+output;
            var res,d;
            if(this.id=="=" && hiss==0)
            {
                res=eval(his);
                printop(res);
                printhis(his);
                hiss=1;
            }
            else{
                   his=his+this.id;
                   printhis(his);
                   printop("");
            }
            if(hiss==1 && this.id!='=' && this.id!='C' && this.id!='CE' ){
                d=output;
                printhis(d+this.id);
                hiss=0;
                alert(d);
            }
        }
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
      //  alert("Yes");
        printop("");
        printhis("");
        hiss=0;
    }

    var output=getop();
    if(this.id!=".")
{
    if(revnum(output)!=NaN && !output.includes(".")){
  //  alert("Num");
    output=output+this.id;
    printop(revnum(output));
}
}
else if(this.id=="."){
    if(output.includes("."))
        output=output+"";
        else
        output=output+".";
    document.getElementById("Output-val").innerText=output;
}
 if(output.includes(".") && this.id!=".")  {
    // alert("L");
    output=output+this.id;
    document.getElementById("Output-val").innerText=output;
 }
    
});
}



