//Create a simple, JRPG battle system using two objects: one for an 'enemy' and the other for a 'player'. Each object should have properties for: attack, hp, and defense. Display both sets of stats on the document.

//Using a button, provide the ability for the player to "attack" the enemy, using this calculation: enemyHP -= playerAttack - enemyDefense. Have the enemy do the same to the player. Update the displayed HP on the page after the calculation. 

//create player and stats
let player = {
    hp: 200,
    attack: 20,
    defense: 8
}

//create enemy and stats
let enemy = {
    hp: 300,
    attack: 12,
    defense: 5
}

//write inital stats to the screen
document.write('You have ' + player.hp + ' hp left. <br> You have ' + player.attack + ' attack and ' + player.defense + ' defense. <br><br> The enemy has ' + enemy.hp + ' hp left. <br>They have an attack of ' + enemy.attack + ' and a defense of ' + enemy.defense + '<br> Check the console for battle updates.<br><br>');

//calculates damages the player gives and damage the player takes
let takenDamage = enemy.attack - player.defense;
let givenDamage = player.attack - enemy.defense;


//creates the attack button
let attackButton = document.createElement('button');
attackButton.innerHTML = 'Attack!';
document.body.appendChild(attackButton);

//runs userAttack function on click
attackButton.onclick = userAttack;

function userAttack(){
    //if enemy has health
    if(enemy.hp > 0){
        //update the battle status after doing the damage
        enemy.hp = enemy.hp - givenDamage;
        player.hp = player.hp - takenDamage;
        let battleText = "You have " + player.hp + " hp left. You have " + player.attack + " attack and " + player.defense + " defense. The enemy has " + enemy.hp + " hp left. They have an attack of " + enemy.attack + " and a defense of " + enemy.defense;
        console.log(battleText);
    }
    //if enemy is dead
    if(enemy.hp <=0){
        //print that the player won
        console.log("You win!");
    }
}

