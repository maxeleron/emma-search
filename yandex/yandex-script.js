'use strict'

//Implement user settings
chrome.storage.sync.get(["chosenPreset", "biggerText", "hotKeysEnabled", "expandEnabled"],
    ({chosenPreset, biggerText, hotKeysEnabled, expandEnabled}) => {
      if(chosenPreset == 'clean') console.log('I will do clean');
      else console.log('I will do this preset ',chosenPreset)
});
