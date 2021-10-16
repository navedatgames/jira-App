let addbt = document.querySelector(".add")
let body = document.querySelector("body")

addbt.addEventListener("click",function(){
    let div = document.createElement("div")

    div.innerHTML = ` <div class="modal">
    <div class="text-area">
        <div class="inner-text-area" contenteditable="true"></div>
    </div>
    <div class="priroty">
        <div class="priroty-container">
            <div class="inner-container pink"></div>
            <div class="inner-container blue"></div>
            <div class="inner-container yellow"></div>
            <div class="inner-container black"></div>
        </div>
    </div>
</div>`

    body.append(div)
})

