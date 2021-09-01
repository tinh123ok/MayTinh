function dongho(){
    let d = new Date();
    document.querySelector("#demo").innerHTML =
    d.getHours() + ":" + d.getMinutes()+ ":" + d.getSeconds();
}
let dem_gio= setInterval(dongho,1000);  
let kq = "0";
let value='';

function nut(value){
    if(kq!="0")
    {
        document.getElementById("operation").innerHTML=" ";
        document.getElementById("operation").innerHTML+=value;
        document.getElementById("result").innerHTML=0;
        kq="0";
    }
    else{
        if(document.getElementById("operation").innerHTML=='0')
        {
            document.getElementById("operation").innerHTML= ' ';
            document.getElementById("operation").innerHTML+= value;
        }
        else{
            document.getElementById("operation").innerHTML+= value;
        }
    }
}
function nut_C(){
    document.getElementById("operation").innerHTML= 0;
    document.getElementById("result").innerHTML= 0;
}
function nut_Enter(){
    kq = document.getElementById("operation").innerHTML;
    kq=eval(kq);
    document.getElementById("result").innerHTML=kq;
}
function nut_dau(value){
    let luu = document.getElementById("operation").innerHTML;
    if(kq!="0"){
        document.getElementById("operation").innerHTML=kq;
        document.getElementById("operation").innerHTML+=value;
        document.getElementById("result").innerHTML="0";
        kq="0";
    }else{
        if(ktra(luu,value)==true)
        {
            document.getElementById("operation").innerHTML= luu.substring(0,luu.length-1);
            document.getElementById("operation").innerHTML+=value;
        }
        else{
            document.getElementById("operation").innerHTML+=value;
        }
    }
    
}
function ktra(job,value){

    if(job[job.length-1]=="+"&& value=="+"||
    job[job.length-1]=="+"&& value=="-"||
    job[job.length-1]=="+"&& value=="/"||
    job[job.length-1]=="+"&& value=="*"){
        return true;
    }
    if(job[job.length-1]=="-"&& value=="+"||
    job[job.length-1]=="-"&& value=="-"||
    job[job.length-1]=="-"&& value=="/"||
    job[job.length-1]=="-"&& value=="*"){
        return true;
    }
    if(job[job.length-1]=="*"&& value=="+"||
    job[job.length-1]=="*"&& value=="-"||
    job[job.length-1]=="*"&& value=="/"||
    job[job.length-1]=="*"&& value=="*"){
        return true;
    }
    if(job[job.length-1]=="/"&& value=="+"||
    job[job.length-1]=="/"&& value=="-"||
    job[job.length-1]=="/"&& value=="/"||
    job[job.length-1]=="/"&& value=="*"){
        return true;
    }
    else{
        return false;
    }

    
}




