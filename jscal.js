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
    var val=n.toLocaleString("en");
    return val;
}
function revnum(num){
     return Number(num.replace(/,/g,''));
}

var operator= document.getElementsByClassName("Operator ");
for(var i=0;i< operator.length;i++){
    operator[i].addEventListener('click',function(){
        if(this.id=="C"){
            printhis("");
            printop("0");
        }
       else if(this.id=="CE")
        {
            var val=revnum(getop()).toString();
            if(val){
                val= val.substr(0,val.length-1);
                printop(val);
        }
    }
        else{
        var output=getop();
        var his= history();
        if(output!=""){
            output=output==""?output:revnum(output);
            his=his+output;
            if(this.id=="=")
            {
                var res=eval(his);
                printop(res);
                printhis("");
            }
            else{
                   his=his+this.id;
                   printhis(his);
                   printop("");
            }
        }
    }
});
}
var number= document.getElementsByClassName("Number ");
for(var i=0;i< number.length;i++){
    number[i].addEventListener('click',function(){
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
