'use strict'

/* Settings (took from another my github repo)
==================*/
class Settings {
    constructor() {
      //if settings don`t ever saved, give settings to a user
      if (!localStorage["emmaSearchSettingsObj"]) {
        this.restoreDefaults();
      }
      //if there are local settings implement them to current game
      else {
        const { chosenPreset, biggerText, hotKeysEnabled, expandEnabled} = JSON.parse(
          localStorage.getItem("emmaSearchSettingsObj")
        );
        this.chosenPreset = chosenPreset;
        this.biggerText = biggerText;
        this.hotKeysEnabled = hotKeysEnabled;
        this.expandEnabled = expandEnabled;
      }
    }
    save() {
      localStorage.setItem("emmaSearchSettingsObj", JSON.stringify(this));
    }
    restoreDefaults() {
      this.chosenPreset = "simplified";
      this.biggerText = true;
      this.hotKeysEnabled = true;
      this.expandEnabled = false;
      this.save();
    }
  }
  
  //Local Settings Object
  let emmaSearchSettingsObj = new Settings();
  
  //Getting settings ui elements
  const settingsSection = document.getElementById("settingsSection");
  
  //Settings ui elements
  const presetSelect = document.getElementById("presetSelect");
  const textSizeToggle = document.getElementById("textSizeToggle");
  const hotKeysToggle = document.getElementById("hotKeysToggle");
  const expandCardsToggle = document.getElementById("expandCardsToggle");
  
  // Setting ui elements up to date with emmaSearchSettingsObj
  presetSelect.value = emmaSearchSettingsObj.chosenPreset;
  textSizeToggle.checked = emmaSearchSettingsObj.biggerText;
  hotKeysToggle.checked = emmaSearchSettingsObj.hotKeysEnabled;
  expandCardsToggle.checked = emmaSearchSettingsObj.expandEnabled;

  settingsSection.addEventListener("change", () => {
    emmaSearchSettingsObj.chosenPreset = presetSelect.value;
    emmaSearchSettingsObj.biggerText = textSizeToggle.checked;
    emmaSearchSettingsObj.hotKeysEnabled = hotKeysToggle.checked;
    emmaSearchSettingsObj.expandEnabled = expandCardsToggle.checked;
  
    emmaSearchSettingsObj.save();
  });
  /*==============
  end:Settings*/
  