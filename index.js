const app = "I don't do much."

var kittens = ['Milo','Otis','Garfield'];

function destructivelyAppendKitten(newKitten){
  kittens.push(newKitten);
}

function destructivelyPrependKitten(newKitten){
  kittens.unshift(newKitten)
}

function destructivelyRemoveLastKitten(){
  kittens.pop();
}

function destructivelyRemoveFirstKitten(){
  kittens.shift();
}

function appendKitten(newKitten){
  kittens = [...kittens, newKitten];
}

function prependKitten(newKitten){
  kittens = [newKitten, ...kittens];
}

function removeLastKitten(){
  kittens.slice(0,kittens.length-1)
}

function removeFirstKitten(){
  
}