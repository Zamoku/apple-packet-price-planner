const priceBoxApples = document.querySelector(".price_box_apples");
const numberApples = document.querySelector(".number_apples");
const packetSize = document.querySelector(".packet_size");
const requiredProfit = document.querySelector(".required_profit");

const calculateBtn = document.querySelector(".calculate_btn")

const numberOfPackets = document.querySelector(".number_packets");
const costPerApple = document.querySelector(".cost_per_apple");
const costPerPacket = document.querySelector(".cost_per_packet");
const recomendedPrice = document.querySelector(".recomended_price");

let numPackets = 0;
let costApple = 0;
let costPacket = 0;
let recomPrice = 0;

const applePacket = ApplePacket()

function setAppleValues(){

    applePacket.setBoxAppleCost(Number(priceBoxApples.value))
    applePacket.setNumberOfApples(Number(numberApples.value)) 
    applePacket.setSizePacket(Number(packetSize.value))
    applePacket.setProfit(Number(requiredProfit.value))
  
}

function getAppleValues(){

    numberOfPackets.innerHTML = applePacket.getBoxAppleCost().toFixed(2);
    costPerApple.innerHTML = applePacket.getPricePerApple().toFixed(2);
    costPerPacket.innerHTML = applePacket.getPricePerPacket().toFixed(2);
    recomendedPrice.innerHTML = applePacket.getRecommendedPrice().toFixed(2);

    
    
}


calculateBtn.addEventListener('click', setAppleValues);
calculateBtn.addEventListener('click', getAppleValues);

