let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");



form.addEventListener("submit", (e)=>{
    //prevents automatic refreshing
    e.preventDefault();
    console.log("button clicked")
    formValidation();
})

//if/else statement for input being blank or not
let formValidation = () => {
    if(input.value === ""){
        msg.innerHTML = "Post cannot be blank"
        console.log("failure, input is blank")
    }
    else{
        console.log("success!")
        msg.innerHTML = ""
        acceptData();
    }
};

let data = {};

let acceptData = () => {
    data["text"] = input.value;
    console.log(data);
    createPost();
};

let createPost = () => {
    posts.innerHTML += `
    <div>
        <p>${data.text}</p>
        <span class="options">
            <i onClick="editPost(this)" class="fa-solid fa-trash"></i>
            <i onClick="deletePost(this)" class="fa-solid fa-pen-to-square"></i>
        </span> 
    </div>
    `;
    input.value = "";
}



let deletePost = (e) => {
    e.parentElement.parentElement.remove();
}


let editPost = (e) => {
    input.value = e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();
}