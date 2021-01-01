function writeCards(name,event){
  let newArray = []
  for(let i=0;i<name.length;i++){
    console.log(`Thank you, ${name[i]}for the wonderful ${event} gift!` );
    
  }
  return newArray;
}
//writeCards(["Lisa","Kaitlin","Jan"],'surprise');

writeCards(name,event)


function countDown(nb){
  while(nb>=0){
    console.log(nb--);
    
  }
}
countDown(10);
