let list = document.querySelector('ul');
list.addEventListener('click', function(check) {
  if (check.target.tagName === 'LI') {
    check.target.classList.toggle('checked');
  }
}, false);

function newElement() {
    let input = document.getElementById('todoInput');
    let todoText = input.value.trim();

    if (todoText === '') {
        alert('Please enter a task.');
        return;
    }
    let li = document.createElement("li");
    let inputValue = document.getElementById("todoInput").value.trim();
    let txt = document.createTextNode(inputValue);
    
    li.appendChild(txt);
  
    document.getElementById("myUL").appendChild(li);
    document.getElementById("todoInput").value = "";
}