function writeCards(name,event){
  for(let i=0;i<name.length;i++){
    console.log(`Thank you, ${name[i]}for the wonderful ${event} gift!` );
    
  }
  return name,event;
}
writeCards(["Lisa","Kaitlin","Jan"],'surprise');


function writeCards(names, ocassion) {
  let newArray = []
  for (let i = 0; i < names.length; i++) {

    newArray.push(`Thank you, ${names[i]}, for the wonderful ${ocassion} gift!`);
    // console.log(`Thank you ${names[i]}, for the wonderful ${ocassion} gift!`);
  }
  return newArray;
}

function countDown(nb){
  while(nb>=0){
    console.log(nb--);
    
  }
}
countDown(10);
