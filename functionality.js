function createListItem(){
    let li = document.createElement('li');
    li.addEventListener('click',toggleDone);
    li.addEventListener('doubleClick',editItem);
    li.textContent = input.value;

    addDivAndButton(li);
    input.value = ' ';

}
function editItem(event){
    let item = event.target.innerHTML;              //saves the  initial value of the item
    let itemInput = document.createElement('input');    //creates an input to replace the item
    itemInput.type ="text";
    input.value = item;                                 //sets value of input to initial value of item
    itemInput.classList.add('edit');
    itemInput.addEventListener('keypress',saveItem);
    itemInput.addEventListener('click',saveItem);
    event.target.parentNode.prepend(itemInput)          //adds the input to the DOM(Document Object Model)
    event.target.remove();                              //removes the initial item from DOM
    itemInput.select();                                   //select the value when you double click,otherwise you have to click again to type
}
function saveItem(event){
    let inputValue = event.target.value;           // save the initial value of input element
    if(event.target.value.lenght > 0  && (event.keyCode === 13 || event.type === 'click'))
        {
            let li = document.createAttribute.createElement('li');      //create a list element
            li.addEventListener('click',toggleDone);
            li.addEventListener('doubleClick',editItem);
            li.textContent = event.target.value;                //sets value of list element to the initial input value
            event.target.parentNode.prepend(li);
            event.target.remove();                  //remove input element from the DOM
        
        }
}