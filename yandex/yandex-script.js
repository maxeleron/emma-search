'use strict'

function pageStyler(preset){
  //----Styles for any preset
  
  //Change search button
  document.querySelector(".websearch-button__text").innerHTML = '🔍';
  //Hiding 'Found xxx results'
  document.querySelector("#search-result-aside").style.display = 'none';
  //Hiding Bing, Google search engines links
  document.querySelector("div.competitors").style.display = 'none';

  //All settings for simplified view implemented
  if(preset === 'simplified') return; 

  //Hiding footer
  document.querySelector("div.serp-footer__main").style.display = 'none';
  //Hiding location, settings, feedback, language string
  document.querySelector(".serp-footer__search-settings").style.display = 'none';
  //Hiding Yandex logo
  document.querySelector(".serp-header__logo").style.display = 'none';


  //All settings for simplified view implemented
  if(preset === 'clean') return; 

  //Hide Collections button
  document.querySelector(".header-favorites-button").style.display = 'none';
  //Hide Notifications button
  document.querySelector(".notifier__box").style.display = 'none';
  //Hiding "People also search"
  document.querySelector(".related").style.display = 'none';
  //Hiding user name
  document.querySelector(".user-account__name").style.display = 'none';

}

function increaseTextSize(){
  console.log('I increase the text size');
  let searchSpan = document.querySelector("div.serp-header__search2 > form > div.search2__input > span");
  searchSpan.style.fontSize = '16px';
  searchSpan.style.lineHeight = '20px';
}

function enableHotKeys(){
  //window.addEventListener();
}

//Implement user settings
chrome.storage.sync.get(["chosenPreset", "biggerText", "hotKeysEnabled", "expandEnabled"],
  ({chosenPreset, biggerText, hotKeysEnabled, expandEnabled}) => {
    switch (chosenPreset) {
      case 'none':
        //do nothing no preset were chosen
        break;
      case 'simplified':
      case 'clean':
      case 'ultraclean':
        //Implement simplified view
        pageStyler(chosenPreset);
      break;
      default:
        console.error("Unknown preset - " + chosenPreset );
    }

    if(biggerText) increaseTextSize();
    if(hotKeysEnabled) enableHotKeys();

});
