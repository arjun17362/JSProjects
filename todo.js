var t=document.getElementById("t1");
var b =document.getElementById("add");
var input=document.getElementById("t1");
var v=document.getElementById("rv");
var deleteAll=document.getElementById("dl");

b.addEventListener('click',function(){
    var p=document.createElement('p');
    p.innerText=input.value;
    v.appendChild(p);
    input.value="";
    var d=document.createElement('button');
    d.className="fa fa-trash";
    var update=document.createElement('button');
    update.className="fa fa-pencil";
    p.appendChild(update);
    d.style.width="1cm";
    d.style.paddingLeft="0.5%";
    d.style.marginLeft="1cm";
    p.style.borderColor="black";
    p.style.borderLeft="2cm";
    update.style.width="1cm";
    update.style.paddingLeft="0.5%";
    update.style.marginLeft="1cm";
    p.appendChild(d);
    d.addEventListener('click',function(){
        v.removeChild(p);
    })
    update.addEventListener('click',function (){
        input.value=p.innerText;
        v.removeChild(p);
    })
})
deleteAll.addEventListener('click',function(){
   v.replaceWith('',input.innerText);
   
})



