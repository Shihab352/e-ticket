

function scrollToSetion(move) {
    const section = document.getElementById(move);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }

}

const allBtn = document.getElementsByClassName("seat-btn");
let count = 0;
let leftSeat =40;
for (const btn of allBtn) {
    btn.addEventListener("click", function (e) {
    
        count = count + 1;
        leftSeat -= 1;
    const seatName = e.target.innerText;
    e.target.classList.add("bg-lime-600");

e.target.setAttribute("disabled", false);
 const selectedSeatContainer = document.getElementById("selected-seat-container");   
const li = document.createElement("li");
const p = document.createElement("p");
p.innerText = seatName;
const p2 = document.createElement("p");
p2.innerText = "Economy";
const p3 = document.createElement("p");
p3.innerText="550";

li.appendChild(p);
li.appendChild(p2);
li.appendChild(p3);

const seatCount = document.getElementById("seat-count").innerText;
if(seatCount > 3){
    alert ("You can not select more than 4 seats")
    return;
}
// btn.style.backgroundColor = "#1DD100";
selectedSeatContainer.appendChild(li);

totalPrice("total-price", 550);
grandTotalPrice("grand-total", 550);



// setInnerText("grand-total", sum2);
setInnerText("seat-count", count);
setInnerText("seats-left", leftSeat);
    });
}



function totalPrice (id,value){
    const totalPrice = document.getElementById(id).innerText;
    const convertedTotalPrice = parseInt(totalPrice);
    const sum = convertedTotalPrice + value;
    setInnerText(id, sum);
}

function grandTotalPrice (){
    const totalPrice = document.getElementById("total-price").innerText;
    const convertedTotalPrice = parseInt(totalPrice);

    const couponNumber=document.getElementById("coupon-number").value;
    if(couponNumber == "NEW15"){
        setInnerText("grand-total", convertedTotalPrice - (convertedTotalPrice * 0.15) );
    }
    else if(couponNumber == "couple20"){
        setInnerText("grand-total", convertedTotalPrice - (convertedTotalPrice * 0.20));
    }
    else{
        setInnerText("grand-total", convertedTotalPrice);
    }
      
}

function Success (){
    document.querySelector("header").classList.add("hidden");
    document.querySelector("main").classList.add("hidden");
    document.querySelector("footer").classList.add("hidden");
    document.getElementById("success-section").classList.remove("hidden");
    
}


function backToMainSection (){
    document.querySelector("header").classList.remove("hidden");
    document.querySelector("main").classList.remove("hidden");
    document.querySelector("footer").classList.remove("hidden");
    document.getElementById("success-section").classList.add("hidden");

    let count = 0;
let leftSeat =40;
setInnerText("seat-count", count);
setInnerText("seats-left", leftSeat);
const seatBtn = document.getElementsByClassName("seat-btn");
console.log(seatBtn);


}


function setInnerText (id , value){
    document.getElementById(id).innerText = value;
}