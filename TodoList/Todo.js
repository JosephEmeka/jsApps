// const wrapper = document.getElementById("wrapper");
// console.log(wrapper)
//
// const title = document.getElementsByClassName("title");
// console.log(title)
// console.log(Array.isArray(Array.from(title)));
// let head = document.getElementsByTagName("header");
// console.log(head)
// const  bookLists = document.querySelector("#book-list")
// console.log(bookLists)
// const  allBookList = document.querySelectorAll("#book-list ul li .name")
// console.log(bookLists)
// console.log(allBookList[1].textContent)
// console.log(Array.isArray(allBookList))
//
// allBookList.forEach((book) => {
//     console.log(book.textContent)
// })
// allBookList.forEach((book) => {
//     console.log(book.innerHTML)
// })
//
// allBookList.forEach((book) => {
//     book.textContent += "(test)";
//     console.log(book.textContent)
// })
//
// const addBooks = document.querySelector("#add-book")
// // console.log(addBook.textContent)
// console.log(addBooks.previousElementSibling)
// console.log(addBooks.parentNode)
// console.log(addBooks.previousSibling)
//

// const taskList = document.querySelector("#task-list ul");
// console.log(taskList)
// taskList.addEventListener('click', (e) => {
//     let className = e.target.className;
//     if(className === "delete") {
//         let li = e.target.parentNode
//         taskList.removeChild(li)
//     }
// })

const searchTask = document.forms["search-tasks"];
const taskList = document.querySelector('#task-list ul');
const listOfTask = document.querySelectorAll('#task-list ul li .name');

searchTask.addEventListener('keyup', function(e) {
    let inputText = e.target.value.toLowerCase();
    listOfTask.forEach((task) => {
        let title = task.value.toLowerCase();
        let parentNode = task.parentNode.parentNode;
        if(title.includes(inputText)){
            parentNode.style.display = 'block';
        } else {
            parentNode.style.display = 'none';
        }
    });
});

const addTaskForm = document.forms["add-task"];
const taskList = document.querySelector('#task-list ul');

addTaskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const taskTitle = addTaskForm.querySelector("#taskTitle").value.trim();
    if(taskTitle){
        const liTag = document.createElement("li");
        const inputTag = document.createElement("input");
        const spanTag = document.createElement("span");

        inputTag.classList.add('name');
        spanTag.classList.add('delete');

        inputTag.value = taskTitle;
        spanTag.textContent = "delete";

        liTag.appendChild(inputTag);
        liTag.appendChild(spanTag);

        taskList.appendChild(liTag);
    }
    addTaskForm.reset();
});