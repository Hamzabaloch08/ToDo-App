const getul = document.getElementById('ul');

function add() {
    const input = document.getElementById('inp');
    // add text button
    const li = document.createElement('li');
    let liText = document.createTextNode(input.value);
    li.appendChild(liText);
    getul.appendChild(li);
    input.value = ''
    // add text button
    // remove li button
    const removeButton = document.createElement('button');
    let removeButtonText =  document.createTextNode('Remove');
    removeButton.appendChild(removeButtonText);
    li.appendChild(removeButton)
    removeButton.setAttribute('id','removeBtn')
    removeButton.setAttribute('onclick','removeLi(this)')
    // remove li button
    //edit button
    const editButton = document.createElement('button')
    let editButtonText = document.createTextNode('edit')
    editButton.appendChild(editButtonText)
    li.appendChild(editButton)
    editButton.setAttribute('id','editbtn')
    editButton.setAttribute('onclick','editValueBtn(this)')
    //edit button 

}

function removeAll() {
    getul.innerHTML = ''
}

function removeLi(del){
    del.parentNode.remove()
}

function editValueBtn(editValue){
    let editpromt = prompt('Enter edit value',editValue.parentNode.firstChild.nodeValue)
    editValue.parentNode.firstChild.nodeValue = editpromt
}