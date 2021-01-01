function writeCards(name,event){
  for(let i=0;i<name.length;i++){
    console.log(`Thank you, ${name[i]}for the wonderful ${event} gift!` );
    
  }
  return name,event;
}
writeCards(["Lisa","Kaitlin","Jan"],'surprise');


function countDown(nb){
  while(nb>=0){
    console.log(nb--);
    
  }
}
countDown(10);
