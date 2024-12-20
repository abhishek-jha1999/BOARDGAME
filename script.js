let boxes=document.querySelectorAll(".box");
let para=document.querySelector("p");
let reset=document.querySelector("#reset-btn");

let winningPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
//to change turns alternativetely
let turn=true;

for( let box of boxes){
    box.addEventListener("click",()=>{
        if(turn){
            box.innerText="X";
            turn=false;
        }else{
            box.innerText="0";
            turn=true;
        }
        box.disabled=true;
        checkWinner();
    });
}

function checkWinner(){
    for (let pattern of winningPatterns){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;

        if(pos1!=""&& pos1===pos2 && pos2===pos3){
            console.log(`winner found ${pos1}`);
            para.innerText=`Winner is ${pos1}`;
            para.style.visibility="visible";
            disableBoard();
            return;
        }
    }
}
//disableBoard is called when a player is winner

function disableBoard(){
    for(let box of boxes){
        box.classList.add("disabled");        
    }
}

let resetGame=()=>{
    for(box of boxes){
        box.innerText="";
        
    }
    turn=true;
    //clearing UI board
    for(box of boxes){
        box.disabled=false;
        box.classList.remove("disabled")

    }
    para.style.visibility="hidden"
    
    
}
reset.addEventListener("click",resetGame);

