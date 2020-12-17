/* Settings (took from another my github repo)
==================*/

const settingsDict = {
    "chosenPreset": document.getElementById("presetSelect"),
    "biggerText": document.getElementById("textSizeToggle"),
    "hotKeysEnabled": document.getElementById("hotKeysToggle"),
    "expandEnabled": document.getElementById("expandCardsToggle"),
  }
    
  //Settings ui elements
  
  function fitUItoSettings(){
      chrome.storage.sync.get(["chosenPreset", "biggerText", "hotKeysEnabled", "expandEnabled"],
      function({chosenPreset, biggerText, hotKeysEnabled, expandEnabled}) {
        // Notify that we saved.
        console.log('Fitting UI to settings');
        document.getElementById("presetSelect").value = chosenPreset;
        document.getElementById("textSizeToggle").checked = biggerText;
        document.getElementById("hotKeysToggle").checked = hotKeysEnabled;
        document.getElementById("expandCardsToggle").checked = expandEnabled;
      }
    );
  }
  
  //Getting settings ui elements
  const settingsSection = document.getElementById("settingsSection");
  
  settingsSection.addEventListener("change", () => {
    save(settingsDict["chosenPreset"].value, 
    settingsDict["biggerText"].checked,
    settingsDict["hotKeysEnabled"].checked,
    settingsDict["expandEnabled"].checked);
  });
  /*==============
  end:Settings*/

  setTimeout(() => { fitUItoSettings() }, 1);

