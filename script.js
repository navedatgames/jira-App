let addbt = document.querySelector(".add")
let body = document.querySelector("body")
let grid = document.querySelector(".grid")
let delbt = document.querySelector(".delete")

let colors = ["pink", "blue","yellow","black"]


//local storage create kiya hai

if(localStorage.getItem("Alltickets")==undefined){
    let allTickets = {}

    allTickets = JSON.stringify(allTickets)
    localStorage.setItem("Alltickets",allTickets)
}








addbt.addEventListener("click",function(){  

    deleteMode = false;
    delbt.classList.remove("delete-selected")
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
            let id  = uid();
            let task = e.currentTarget.innerText
            //bring data from data storage
            allTickets = JSON.parse(localStorage.getItem("Alltickets"))
            //update
            ticketObj = {
                color:tickerColor,
                taskValue:task
            }

            allTickets[id] = ticketObj
            //save the data
            allTickets = JSON.stringify(allTickets)
            localStorage.setItem("Alltickets",allTickets)

            
            
    
            let tickerDiv = document.createElement("div")
            tickerDiv.classList.add("ticket")
            tickerDiv.setAttribute("data-id",id)
            tickerDiv.innerHTML =  ` <div data-id = "${id}" class="color ${tickerColor}"></div>
            <div class="id">${id}</div>
            <div data-id = "${id}" class="task" contenteditable = "true">${task}</div>


            </div>`;

            //color change
            let ticketColor = tickerDiv.querySelector(".color")
            let tickettask = tickerDiv.querySelector(".task");

            tickettask.addEventListener("input",function(e){
                let curTicktetId = e.currentTarget.getAttribute("data-id")
                let updateTask = e.currentTarget.innerText;
                
                let allTickets = JSON.parse(localStorage.getItem("Alltickets"))

                allTickets[curTicktetId].taskValue = updateTask

                localStorage.setItem("Alltickets",JSON.stringify(allTickets))
            })

            ticketColor.addEventListener("click",function(e){
                let curTicktetId = e.currentTarget.getAttribute("data-id")
                let currentColor = e.currentTarget.classList[1];
                let index = -1;
                for(let i =0;i<colors.length;i++){
                    if(currentColor==colors[i]) index = i;
                }

                index++;
                index = index%4;
                let newcolor = colors[index];

                let allTickets = JSON.parse(localStorage.getItem("Alltickets"))

                allTickets[curTicktetId].color = newcolor;

                allTickets = JSON.stringify(allTickets)

                localStorage.setItem("Alltickets",allTickets)

                ticketColor.classList.remove(currentColor);
                ticketColor.classList.add(newcolor);
            })

            tickerDiv.addEventListener("click",function(e){
                if(deleteMode){
                    let curTicketId = e.currentTarget.getAttribute("data-id")
                    let allTickets = JSON.parse(localStorage.getItem("Alltickets"))

                    delete allTickets[curTicketId]

                    localStorage.setItem("Alltickets",JSON.stringify(allTickets))

                    e.currentTarget.remove();
                }
            })

            div.remove();

            grid.append(tickerDiv)

           

           
        }
    })

    body.append(div)
})
let deleteMode = false;
delbt.addEventListener("click",function(e){
    if(e.currentTarget.classList.contains("delete-selected")){
    e.currentTarget.classList.remove("delete-selected");
    deleteMode = false;
    }
    else{
        e.currentTarget.classList.add("delete-selected")
        deleteMode = true;
    }
})

