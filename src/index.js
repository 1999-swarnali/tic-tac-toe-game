const squares = document.querySelectorAll(".square");
const main = document.querySelector(".main");
const current = document.getElementById("current");
let currentX = true;
let count = 0;
const arrX = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
];
const arrO = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
];
squares.forEach((square) => {
    square.addEventListener('click', (e) => {
        if (currentX && !e.target.classList.contains("visited")) {
            e.target.innerHTML = "X";
            current.innerText = "O";
            e.target.style.poinerEvents = "none";
            e.target.classList.add("visited");
            count++;
            let indexX = Array.from(squares).indexOf(e.target);
            if (indexX <= 2) {
                arrX[0][indexX]=1;
                
            } else if (indexX > 2 && indexX < 6) {
                arrX[1][indexX-3]=1;
              
            } else {
                arrX[2][indexX-6]=1;
            }
            if(arrX[0][0]&&arrX[0][1]&&arrX[0][2]){
                document.querySelector(".overlay").classList.add("active");
                document.getElementById("winner").innerHTML = "Winner - X";
                return;
            }
            if(arrX[1][0]&&arrX[1][1]&&arrX[1][2]){
                document.querySelector(".overlay").classList.add("active");
                document.getElementById("winner").innerHTML = "Winner - X";
                return;
            }
            if(arrX[2][0]&&arrX[2][1]&&arrX[2][2]){
                document.querySelector(".overlay").classList.add("active");
                document.getElementById("winner").innerHTML = "Winner - X";
                return;
            }
            if(arrX[0][0]&&arrX[1][0]&&arrX[2][0]){
                document.querySelector(".overlay").classList.add("active");
                document.getElementById("winner").innerHTML = "Winner - X";
                return;
            }
            if(arrX[0][1]&&arrX[1][1]&&arrX[2][1]){
                document.querySelector(".overlay").classList.add("active");
                document.getElementById("winner").innerHTML = "Winner - X";
                return;
            }
            if(arrX[0][2]&&arrX[1][2]&&arrX[2][2]){
                document.querySelector(".overlay").classList.add("active");
                document.getElementById("winner").innerHTML = "Winner - X";
                return;
            }
            if(arrX[0][0]&&arrX[1][1]&&arrX[2][2]){
                document.querySelector(".overlay").classList.add("active");
                document.getElementById("winner").innerHTML = "Winner - X";
                return;
            }
            if(arrX[0][2]&&arrX[1][1]&&arrX[2][0]){
                document.querySelector(".overlay").classList.add("active");
                document.getElementById("winner").innerHTML = "Winner - X";
                return;
            }
          
            currentX = false;
        } else if (!currentX && !e.target.classList.contains("visited")) {
            e.target.innerHTML = "O";
            current.innerText = "X";
            e.target.style.poinerEvents = "none";
            e.target.classList.add("visited");
            count++;
            let indexO = Array.from(squares).indexOf(e.target);
            if (indexO <= 2) {
                arrO[0][indexO]=1;
                
            } else if (indexO > 2 && indexO < 6) {
                arrO[1][indexO-3]=1;
              
            } else {
                arrO[2][indexO-6]=1;
            }

            if(arrO[0][0]&&arrO[0][1]&&arrO[0][2]){
                document.querySelector(".overlay").classList.add("active");
                document.getElementById("winner").innerHTML = "Winner - O";
                return;
            }
            if(arrO[1][0]&&arrO[1][1]&&arrO[1][2]){
                document.querySelector(".overlay").classList.add("active");
                document.getElementById("winner").innerHTML = "Winner - O";
                return;
            }
            if(arrO[2][0]&&arrO[2][1]&&arrO[2][2]){
                document.querySelector(".overlay").classList.add("active");
                document.getElementById("winner").innerHTML = "Winner - O";
                return;
            }
            if(arrO[0][0]&&arrO[1][0]&&arrO[2][0]){
                document.querySelector(".overlay").classList.add("active");
                document.getElementById("winner").innerHTML = "Winner - O";
                return;
            }
            if(arrO[0][1]&&arrO[1][1]&&arrO[2][1]){
                document.querySelector(".overlay").classList.add("active");
                document.getElementById("winner").innerHTML = "Winner - O";
                return;
            }
            if(arrO[0][2]&&arrO[1][2]&&arrO[2][2]){
                document.querySelector(".overlay").classList.add("active");
                document.getElementById("winner").innerHTML = "Winner - O";
                return;
            }
            if(arrO[0][0]&&arrO[1][1]&&arrO[2][2]){
                document.querySelector(".overlay").classList.add("active");
                document.getElementById("winner").innerHTML = "Winner - O";
                return;
            }
            if(arrO[0][2]&&arrO[1][1]&&arrO[2][0]){
                document.querySelector(".overlay").classList.add("active");
                document.getElementById("winner").innerHTML = "Winner - O";
                return;
            }
            currentX = true;
        }
        // console.log(arrX,arrO,count);

        if (count >=9) {
            document.querySelector(".overlay").classList.add("active");
            document.getElementById("winner").innerHTML = "Draw";
            return;     
        }

    })
})
document.getElementById("closeBtn").addEventListener('click', () => {
    document.querySelector(".overlay").classList.remove("active");
    location.reload(true);
})