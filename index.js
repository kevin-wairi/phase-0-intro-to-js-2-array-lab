// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    return cats.push(name);
}

function destructivelyPrependCat(name){
    return cats.unshift(name);   
}

function destructivelyRemoveLastCat(name){
    return  cats.pop(name);
}

function destructivelyRemoveFirstCat(name){
    return  cats.shift(name);
}

function appendCat(name){
    return  cats.slice(0,name);
}

function appendCat(name){
    let copyName = [...cats,name];
       return copyName;
  }
  
  function prependCat(name){
    let copyName = [name,...cats];
       return copyName;
  }
  
function removeLastCat(){
    return cats.slice(0,cats.length-1);
}

function removeFirstCat(){
    return cats.slice(1);
}