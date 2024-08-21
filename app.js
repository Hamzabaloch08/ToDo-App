// ToDo App
const getul = document.getElementById('ul');

function add() {
    const input = document.getElementById('inp');
    // add text button
    const li = document.createElement('li');
    let liText = document.createTextNode(input.value);
    li.appendChild(liText);
    getul.appendChild(li);
    // add text button
    // remove li button
    const removeButton = document.createElement('button');
    let removeButtonText =  document.createTextNode('REMOVE');
    removeButton.appendChild(removeButtonText);
    li.appendChild(removeButton)
    removeButton.setAttribute('id','removeBtn')
    removeButton.setAttribute('onclick','removeLi(this)')
    // remove li button
    //edit button
    const editButton = document.createElement('button')
    let editButtonText = document.createTextNode('EDIT')
    editButton.appendChild(editButtonText)
    li.appendChild(editButton)
    editButton.setAttribute('id','editbtn')
    editButton.setAttribute('onclick','editValueBtn(this)')
    //edit button 
    input.value = ''
}


// remove all li Function
function removeAll() {
    getul.innerHTML = ''
}
// remove All li function

// remove singleli function
function removeLi(del){
    del.parentNode.remove()
}
// remove singleli function

// edit value function
function editValueBtn(editValue){
    let editpromt = prompt('Enter edit value',editValue.parentNode.firstChild.nodeValue)
    editValue.parentNode.firstChild.nodeValue = editpromt
}
// edit value function
// ToDo App