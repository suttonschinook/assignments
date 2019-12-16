
class Player {
    constructor (){
        this.name = "Mario"
        this.totalCoins = 0
        this.status = "small"
        this.hasStar = false
    }
    setName(namePicked){
         this.name = namePicked
    }
    gotHit() {
        if(this.status === "small"){
            this.status = "DEAD"
        }else if(this.status === "BIG"){
            this.status = "small"
        }else{
            this.status = "BIG"
        }
    }
    gotPowerUp(){
        if(this.status === "small"){
            this.status = "BIG"
        }else if(this.status === "BIG"){
            this.status = "Powered Up"
            this.hasStar = true
        }
    }
    addCoin(){
        this.totalCoins += 1
    }
    print(){
        console.log(`\n\nName: ${this.name} \nStatus: ${this.status} \nCoins: ${this.totalCoins} \nHas Star: ${this.hasStar}`)
        return 'Hi'
    }
}

let gameActive = true
let character = new Player()

const generateRandomChance = () =>{
    return Math.floor(Math.random() * 3)
}
const intervalId = setInterval(goGame, 1000)
function goGame(){
    if (character.status === "DEAD"){
        clearInterval(intervalId)
    }
    character.print()
    let chance = generateRandomChance()
    if(chance === 0){
        character.gotHit();
    }else if(chance === 1){
        character.gotPowerUp()
    }else{
        character.addCoin()
    }
}