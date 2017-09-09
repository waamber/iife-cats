var CatStore = ((oldCatStore) =>{

 oldCatStore.catLoadWorks = function(){
  let catData = JSON.parse(this.responseText).cats;
  CatStore.setAllCats(catData);
  CatStore.ownerXHR();
 };

 oldCatStore.ownerLoadWorks = function(){
  let ownerData = JSON.parse(this.responseText).owners;
  CatStore.setAllOwners(ownerData);
  let catArray = CatStore.getCats();
  let ownerArray = CatStore.getOwners();
  CatStore.combineArrays(catArray, ownerArray);
 };

 oldCatStore.shitBroke = () =>{
  console.log("shit broke, bruh");
 };
 
 oldCatStore.catXHR = () =>{
  let myCats = new XMLHttpRequest;
  myCats.addEventListener("load", CatStore.catLoadWorks);
  myCats.addEventListener("error", CatStore.shitBroke);
  myCats.open("GET", "./db/cats.json");
  myCats.send();
 };

 oldCatStore.ownerXHR = () =>{
  let myOwners = new XMLHttpRequest;
  myOwners.addEventListener("load", CatStore.ownerLoadWorks);
  myOwners.addEventListener("error", CatStore.shitBroke);
  myOwners.open("GET", "./db/owners.json");
  myOwners.send();
 };

return oldCatStore;
})(CatStore || {});

