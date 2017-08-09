console.log('Loaded!');
var nameInput=document.getElementById('name');
var name=varInput.value;
var submit=document.getElementById("submit_btn");
submit.onclick=function(){
    
    var names=['name1','name2','name3']
    list=""
    for(var i=0;i<names.lenght;i++)
    {
        list+=<li>+names[i]+</li>
    }
    var ul=document.getElementById('namelist')
    ul.innerHTML=list;
};