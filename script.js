let addbt = document.querySelector(".add")
let body = document.querySelector("body")

addbt.addEventListener("click",function(){
    let div = document.createElement("div")

    div.classList.add("modal")

    body.append(div)
})

