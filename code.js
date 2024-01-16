console.log("welcome")
let btn = document.querySelectorAll(".box");
let display = document.querySelector(".dispplay")
let xo = true;
let neww = document.querySelector(".new-btn");
// let firstuser=prompt("enter player one");
// let sencondPlayer=prompt("enter play two");
let firstuser="musali";
let sencondPlayer="Nannamma";


let count=0;
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];


disablea=()=>{
    for(let boxs of btn){
        boxs.disabled=true;
    }
}


btn.forEach((a) => {

    a.addEventListener("click", () => {
        val = parseInt(a.value);
        
        console.log(val)
        if (xo === true) {
            a.innerHTML = "X";
            xo = false;
        }
        else {
            a.innerHTML = "O";
            xo = true;
        }

        a.disabled = true;
        // console.log(win[0]);
        winner();
        count++;
        if(count==9){
            gameDraw();
        }
    }
        
    
    )}  
    )
    const gameDraw = () => {
        display.innerText = `Game was a Draw.`;
        display.classList.remove("hide");
        disablea();
};


const winner = () => {
    for (let pattern of winPatterns) {
        console.log(pattern[0],pattern[1],pattern[2])
        // console.log(
           let v1= btn[pattern[0]].innerText;
           let v2=btn[pattern[1]].innerText;
           let v3=  btn[pattern[2]].innerText;
// console.log(v1);
if(v1!="" && v2!="" && v3!=""){
    if(v1==v2 && v2==v3){
        console.log("winner")
        if(v1==="X"){
            display.innerText="winner is "+firstuser;
            disablea();

            

            }
            else {
                // display.classList.remove("hide")
                display.innerText="winner is"+sencondPlayer;
                disablea();

             
            }
            display.classList.remove("hide")
        }
    }

}
}
// reset=()=>{
    


neww.addEventListener("click", ()=>{
    console.log("pressed");
    window.location.reload(true);
    
});
    





