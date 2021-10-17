let addbt = document.querySelector(".add")
let body = document.querySelector("body")
let grid = document.querySelector(".grid")

let colors = ["pink", "blue","yellow","black"]

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

    //color choose and select
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
    //ticket creation
    let textarea = div.querySelector(".inner-text-area");

    textarea.addEventListener("keypress",function(e){
        if(e.key=="Enter"){
            
    
            let tickerDiv = document.createElement("div")

            tickerDiv.innerHTML =  ` <div class="ticket">
            <div class="color ${tickerColor}"></div>
            <div class="id">#aed123</div>
            <div class="task">${e.currentTarget.innerText}</div>


            </div>`;

            //color change
            let ticketColor = tickerDiv.querySelector(".color")

            ticketColor.addEventListener("click",function(e){
                let currentColor = e.currentTarget.classList[1];
                console.log(currentColor)
                let index = -1;
                for(let i =0;i<colors.length;i++){
                    if(currentColor==colors[i]) index = i;
                }

                index++;
                index = index%4;
                let newcolor = colors[index];

                ticketColor.classList.remove(currentColor);
                ticketColor.classList.add(newcolor);
            })

            div.remove();

            grid.append(tickerDiv)

           

           
        }
    })

    body.append(div)
})

