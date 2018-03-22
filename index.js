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
  kittens = [newKitten, ...kittens];
}

function prependKitten(newKitten){
  kittens = 
}