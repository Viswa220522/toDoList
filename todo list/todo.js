const container=document.querySelector('.container')
const button=document.getElementById("buttonToAdd");
button.addEventListener("click",function(){
    const copyList=document.getElementById("textToDo");
    const inputText=copyList.value.trim();
    if(inputText !==""){
        const para =document.createElement('p');
        const checkBox=document.createElement('input')
        checkBox.type="checkbox";
        const del=document.createElement("button");
        del.textContent="Delete Task";
        para.setAttribute("id","listPara");
        del.setAttribute("id","listDel");
        checkBox.setAttribute("id","listCheckBox");
        del.addEventListener("click",function(){
            this.parentNode.remove();
        });
    
        para.textContent=copyList.value;
        copyList.value="";
        para.appendChild(checkBox);
        para.appendChild(del);
        container.appendChild(para);
    }else{
        copyList.placeholder="Please enter the task!";
    }
})