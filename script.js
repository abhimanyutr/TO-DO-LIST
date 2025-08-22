function taskAdd()
{
    task = document.getElementById("input").value;
     console.log(task);
     if(task==="")
     {
        alert("Please Fill the field");
     }
     else{
        // alert(`your task ${task} added sucessfully`);
        let li = document.createElement('li');
        li.innerHTML=`<div class="d-flex justify-content-between mt-3 fw-bold align-items-center"><img src="https://icons.veryicon.com/png/o/miscellaneous/yellow-simple-icon/tick-18.png" width="35px"> ${task} <button onclick="editTask(this)"  class="ms-5 text-muted bg-transparent border-0 "><i class="fa-solid text-success fw-bold fa-pen" ></i>Edit</button> <button onclick="deleteContent(this)" class="border-0 p-2 "><i class="fa-solid text-danger fa-trash"></i></button></div>`;
        tasklist.appendChild(li);
        input.value=" ";
     }
}
function editTask(button)
{
  console.log(button);
  li = button.parentNode;
  console.log(li.childNodes[1]);
  
//   console.log(li.childNodes[1]);
  currentText = li.childNodes[1].textContent;
  console.log(currentText);
  editText = prompt("Enter :",currentText)
  if(editText)
  {
   li.childNodes[1].textContent=editText
  }
  
  // prompt("Enter :",tasklist)
}
function deleteContent(button)
{
   // deleteData = button.parentNode.childNodes;
   deleteData = button.closest("li")
   console.log(deleteData);
   
   deleteData.remove();
}