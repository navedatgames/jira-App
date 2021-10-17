let addbt = document.querySelector(".add")
let body = document.querySelector("body")
let grid = document.querySelector(".grid")

addbt.addEventListener("click",function(){  
    let preModal = document.querySelector(".modal")
    if(preModal!=null)  return;
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
            <div class="inner-container black selected"></div>
        </div>
    </div>
</div>`
    let allModal = div.querySelectorAll(".inner-container");
    let tickerColor = "black";
    for(let i =0;i<allModal.length;i++){
        allModal[i].addEventListener("click",function(e){
            for(let j =0;j<allModal.length;j++){
                allModal[j].classList.remove("selected")
            }
            e.currentTarget.classList.add("selected")
            tickerColor = e.currentTarget.classList[1];
           
        })
    }

    let textarea = div.querySelector(".inner-text-area");

    textarea.addEventListener("keypress",function(e){
        if(e.key=="Enter"){
            
    
            let tickerDiv = document.createElement("div")

            tickerDiv.innerHTML =  ` <div class="ticket">
            <div class="color ${tickerColor}"></div>
            <div class="id">#aed123</div>
            <div class="task">${e.currentTarget.innerText}</div>


            </div>`;

            div.remove();

            grid.append(tickerDiv)

           
        }
    })

    body.append(div)
})

