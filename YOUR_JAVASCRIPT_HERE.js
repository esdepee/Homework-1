// Write your JS here

var hero = {
  name: "dude",
  heroic: false,
  inventory: [],
  health: 10,
  mana: 5,
  weapon: {
    type:'brick',
    damage: 2,

  }
};

function rest(hero){
  // console.log(hero.health)
  hero.health = 10;
  return hero;

  // document.getElementById('inn').addEventListener("click", rest());
  // inn.onclick = hero.health = 10;
  // var innButton = document.getElementById('inn');
  // innButton.onclick = rest();
};

function pickUpItem(hero, item){
hero.inventory.push(item);

}

function equipDagger(){
 var weapon ={
      type:'dagger',
      damage: 2,
  }

  hero.inventory.push(weapon);
}

function equipWeapon(hero){
  if (hero.inventory.length != 0){
    hero.weapon = hero.inventory[0];
  }
}

rest()
console.log(hero.health)
