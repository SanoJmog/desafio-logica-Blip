let characterName = "SanoJmog"
let expCharacter = 10500

if(expCharacter <= 1000) {
    console.log("O Herói de nome " + characterName + ", está no nível Ferro." )
}
else if(expCharacter > 1000 && expCharacter <= 2000) {
    console.log("O Herói de nome " + characterName + ", está no nível Bronze.")
}
else if(expCharacter > 2001 && expCharacter <= 5000) {
    console.log("O Herói de nome " + characterName + ", está no nível Prata.")
}
else if(expCharacter > 5001 && expCharacter <= 7000) {
    console.log("O Herói de nome " + characterName + ", está no nível Ouro.")
}
else if(expCharacter > 7001 && expCharacter <= 8000) {
    console.log("O Herói de nome " + characterName + ", está no nível Platina.")
}
else if(expCharacter > 8001 && expCharacter <= 9000) {
    console.log("O Herói de nome " + characterName + ", está no nível Ascendente.")
}
else if(expCharacter > 9001 && expCharacter <= 10000) {
    console.log("O Herói de nome " + characterName + ", está no nível Imortal.")
}

else {
    console.log("O Herói de nome " + characterName + ", é um MONSTRO RADIANTE.")
}

