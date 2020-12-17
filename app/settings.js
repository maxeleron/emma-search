function getSettingsObj() {
  chrome.storage.sync.get('chosenPreset', ({chosenPreset})=>{
    if(chosenPreset === undefined){
      console.log('Hey, I am in if undefined');
      //Restoring settings 
      chrome.storage.sync.set({"chosenPreset": "simplified", "biggerText": true, "hotKeysEnabled": true, "expandEnabled": false}, (obj)=> obj);

      // return {
      //   "chosenPreset": "simplified", 
      //   "biggerText": true, 
      //   "hotKeysEnabled":true, 
      //   "expandEnabled":false
      // }
    }
  })
  //if there are local settings implement them
  chrome.storage.sync.get(["chosenPreset", "biggerText", "hotKeysEnabled", "expandEnabled"],
    function(obj) {
      let {chosenPreset, biggerText, hotKeysEnabled, expandEnabled} = obj;
      console.log('Implementing existing settings settings are already set');      
      console.log('Settings saved', chosenPreset);
      console.table({chosenPreset, biggerText, hotKeysEnabled, expandEnabled});
      // Notify that we saved.
      return obj;
    }
  );
}


function save(newPreset, newText, newKeys, newExpand) {
  chrome.storage.sync.set({"chosenPreset": newPreset, "biggerText": newText, "hotKeysEnabled": newKeys, "expandEnabled": newExpand}, ()=>{});
  
  // Notify that we saved.
  console.log('Settings Saved');
}

getSettingsObj()