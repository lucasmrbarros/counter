const decreaseBtn = document.getElementById("decresseBtn");
const increaseBtn = document.getElementById("incresseBtn");
const resetBtn = document.getElementById("resetBtn");
const countLabel = document.getElementById("countLabel");

let count = 0;

increaseBtn.onclick =  function(){
    count ++;
    countLabel.textContent = count;
    
}

decreaseBtn.onclick = function(){
    count --;
    countLabel.textContent = count;
}

resetBtn.onclick = function(){
    count = 0;
    countLabel.textContent = count;
}