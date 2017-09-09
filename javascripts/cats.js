var CatStore = ((oldCatStore) =>{
 let cats = [];

 oldCatStore.getCats = () =>{
  return cats;
 }

 oldCatStore.setAllCats = (allMyCats) =>{
  cats = allMyCats;
 };

 oldCatStore.adoptCat = (catIndex) =>{
  cats[catIndex].ownerId = 1;
  let myCats = CatStore.getCats();
  let myOwners = CatStore.getOwners();
  CatStore.combineArrays(myCats, myOwners);
 };

  return oldCatStore;
})(CatStore || {});
