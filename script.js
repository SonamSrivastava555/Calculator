const buttons=document.querySelectorAll('button')
const input=document.querySelector('input')
string="";

let arr=Array.from(buttons)
arr.forEach((button)=>{
button.addEventListener('click',(e)=>{
    if(e.target.innerHTML== '='){
        string=eval(string)
      
        input.value=string;
    }
    else if(e.target.innerHTML== 'AC'){
        string="";
        input.value=string;
    }
    else if(e.target.innerHTML== 'DEL'){
        input.value=input.value.slice(0,-1);
    }
    else{
        string=string+e.target.innerHTML;
        input.value=string;}
    
})
})

