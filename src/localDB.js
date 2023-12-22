
const getFromDB = () => {
  const storeData = localStorage.getItem('tasks');
  if(storeData) {
    return JSON.parse(storeData);
  }
  return [];
}

// const saveToDB = (id) => {
//   const previousStoreData = getFromDB();
//   const exist = previousStoreData.find(i => i == id);
//   if(!exist) {
//     previousStoreData.push(id);
//     const stringfyData = JSON.stringify(previousStoreData);
//     localStorage.setItem('donationCart', stringfyData);
//   }

// } 

export {getFromDB}