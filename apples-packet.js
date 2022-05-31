function ApplePacket(){

    let the_box_cost = 0
    let the_num_apples = 0
    let the_size_apple = 0
    let the_profit = 0
    let priceApples = 0
    let numberOfPackets = 0
    let pricePacket = 0
    let recomPrice = 0

    let profit = 0
    let box_cost = 0
    let num_apples = 0
    let size_apple = 0
    let total_number_packets = 0

    function getBoxAppleCost(){
        return the_box_cost
    }
    function setBoxAppleCost(box_cost){
        the_box_cost = box_cost
    }
    function setNumberOfApples(num_apples){
        the_num_apples = num_apples
    }
    function getNumberOfApples(){
        return the_num_apples
    }
    function setSizePacket(size_apple){
        the_size_apple = size_apple
    }
    function getSizePacket(){
        return the_size_apple
    }
    function setProfit(profit){
        the_profit = profit
    }
    function getProfit(){
        return the_profit
    }
    function getNumberOfPackets(){
        numberOfPackets = getNumberOfApples() / getSizePacket()
        return numberOfPackets
    }
    function getPricePerApple(){
        priceApples = getBoxAppleCost() / getNumberOfApples()
         return priceApples
    }
    function getPricePerPacket(){
        pricePacket = getBoxAppleCost() / getSizePacket()
        return pricePacket
        
    }
    function getRecommendedPrice(){
        recomPrice = (getProfit() / 100) * getPricePerPacket()
        return recomPrice
    }
    return{
        setBoxAppleCost,
        getBoxAppleCost,
        setNumberOfApples,
        getNumberOfApples,
        setSizePacket,
        getSizePacket,
        setProfit,
        getProfit,
        getNumberOfPackets,
        getPricePerApple,
        getPricePerPacket,
        getRecommendedPrice
    }
}