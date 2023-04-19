// let input = document.querySelector("#newtodo")
// let addButton = document.querySelector(".btn-primary")
// let clearBtn = document.querySelector(".btn-danger")
// let todolist = document.querySelector(".todolist")
// let errorMsg = document.querySelector(".errorMsg")
// let noElement=document.querySelector("#noElement");

// addButton.addEventListener("click", (e) => {
//     if (input.value.trim() == "") {
//         errorMsg.innerText = "input cannot be empty"
//     } else {
//         errorMsg.innerText = ""
//         if(!noElement.classList.contains("d-none")){
//             noElement.classList.add("d-none")
//         }
//         let todo = addInput(input.value.trim());
//         todolist.append(todo)
//         input.value = ""
//     }
// })

// input.addEventListener("keydown", function(){
//     if(input.value.trim()!= ""){
//         errorMsg.innerText = ""
//     }
// })

// clearBtn.addEventListener("click", function(){
//     todolist.innerHTML = ""
//     noElement.classList.remove("d-none")
// })

// function addInput(value) {

//     let todoItem = document.createElement("div");
//     todoItem.classList.add("todoItem");
//     todoItem.classList.add("d-flex")

//     let todoItemText = document.createElement("h4");
//     todoItemText.innerText = value;

//     let deleteBtn = document.createElement("button")
//     deleteBtn.classList.add("btn")
//     deleteBtn.classList.add("btn-danger")
//     deleteBtn.innerText = "Delete"
//     deleteBtn.addEventListener("click", function(e){
//         let res = confirm("Do you want to delete this todo?")
//         if(res){
//             this.parentElement.remove()
//             if(todolist.childNodes.length == 0){
//                 noElement.classList.remove("d-none")
//             }
//         }
//     })

//     todoItem.append(todoItemText);
//     todoItem.append(deleteBtn);
//     return todoItem;

// }



// students array yaradin. Studentin fullname, age, email olsun.
// bu array-i table-a geyindirin


const students = [
    {
        name: "Yazgul Memmedli",
        email: "yazgul@gmail.com",
        age: 21,
    },
    {
        name: "Ilahe Meherremove",
        email: "ilahe@gmail.com",
        age: 21,
    },
    {
        name: "Aysel Emrahova",
        email: "aysel@gmail.com",
        age: 21,
    },
    {
        name: "Cavidan Shushayev",
        email: "cavidan@gmail.com",
        age: 21,
    },
    {
        name: "Gulnar Nagiyeva",
        email: "gulnar@gmail.com",
        age: 21,
    },
]


const tableBody = document.querySelector("tbody");

students.forEach(elem => {
    let newRow = createRow(elem);
    tableBody.appendChild(newRow);
})


function createRow({name, age, email}){
    let row = document.createElement("tr")

    let nameTd = document.createElement("td")
    nameTd.innerText = name;

    let ageTd = document.createElement("td")
    ageTd.innerText = age;

    let emailTd = document.createElement("td")
    emailTd.innerText = email;

    row.append(nameTd, emailTd, ageTd)

    return row;
}

