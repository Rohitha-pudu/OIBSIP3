/*$(document).ready(function(){
    $("#q").click(function(){
        $("body").toggleClass("que");
        $("#container").toggleClass("a");
        $("#enter1").toggleClass("b2");
        
    });
});*/
function resetTemp(){
    val.value==0;
    result.value==NULL;
}
function convertTemp(){
    let val=document.getElementById("enter");
    let input=document.getElementById("drop-input");
    let output=document.getElementById("drop-output");
    let result=document.getElementById("result");
    

   /* val.addEventListener("keyup",convertTemp);
    input.addEventListener("change",convertTemp);
    output.addEventListener("change",convertTemp);
*/
    let inpval=input.value;
    let outval=output.value;

    if(inpval==="celsius" && outval==="fahrenheit")
    {
        result.value=Number((val.value)*9/5)+32;
    }
    else if(inpval==="celsius" && outval==="celsius")
    {
        result.value=val.value;
    }
    if(inpval==="fahrenheit" && outval==="celsius")
    {
        result.value=Number((val.value)-32)*5/9;
    }
    else if(inpval==="fahrenheit" && outval==="fahrenheit")
    {
        result.value=val.value;
    }
}


