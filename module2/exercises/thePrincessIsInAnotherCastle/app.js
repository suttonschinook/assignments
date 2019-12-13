class Player {
    constructor (){
        this.name = "Mario"
        this.totalCoins = 0
        this.status = "small"
        this.hasStar = false
        this.gameActive = true
    }
    setName(namePicked){
         this.name = namePicked
    }
    gotHit(){
        if(this.stauts === "small"){
            this.status === "DEAD"
            this.gameActive === false
        }else if(this.status === "BIG"){
            this.status === "small"
        }else{
            this.status === "BIG"
        }
    }
    gotPowerUp(){
        if(this.stauts === "small"){
            this.status === "BIG"
        }else if(this.status === "BIG"){
            this.status === "Powered Up"
            this.hasStar === true
        }
    }
    addCoin(){
        this.totalCoins = this.totalCoins++
    }
    print(){
        console.log({
            "Name" : Player.name,
            "Status" : Player.status, 
            "Coins" : Player.totalCoins,
            "Has Star" : Player.hasStar,
        })
    }
}
