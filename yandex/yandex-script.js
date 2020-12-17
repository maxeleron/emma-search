'use strict'
//let emmaSearchSettingsObj = new Settings();
//alert('Hi Yandex script is working')

//1-link open by Enter feature
window.addEventListener('keyup', (e)=>{
  //let searchInput = document.querySelector('.input__control');
  if (e.keyCode === 13 && hotKeysEnabled) {// there should be smart enter reading in future
      //clicks on the first link when Enter hited
      alert('Enter hited')
      //document.querySelector("#search-result > li:nth-child(3) > div.organic.typo.typo_text_m.typo_line_s.i-bem > h2 > a").click()
    }
})

//const {chosenPreset, biggerText, hotKeysEnabled, expandEnabled} = getSettingsObj();
//alert('Hi Yandex script is working', chosenPreset)

var chosenPresetVar, biggerTextVar, hotKeysEnabledVar, expandEnabledVar;
//var chosenPreset = 20;
function onFulfilled(){
  console.log('(2) Here chosenPresetVar  = ' + chosenPresetVar);
//console.log('I decrared variables '+' for example chosenPreset: '+chosenPreset )

if(chosenPresetVar === 'none'){ //20){ 
  alert('IT IS NONE');
}
}

function onRejected(){
  console.error('something went wrong while operating chrome storage')
}

//var chosenPreset, biggerText, hotKeysEnabled, expandEnabled = setTimeout(() => {getSettingsObj()},10);
var promise = new Promise(function(resolve, reject) {
  resolve(chrome.storage.sync.get(["chosenPreset", "biggerText", "hotKeysEnabled", "expandEnabled"],
    function({chosenPreset, biggerText, hotKeysEnabled, expandEnabled}) {
      // Notify that we saved.
      console.log('I assign values to variables');
      chosenPresetVar = chosenPreset;
      console.log('(1) Here chosenPresetVar  = ' + chosenPresetVar);
      biggerTextVar = biggerText;
      hotKeysEnabledVar = hotKeysEnabled;
      expandEnabledVar = expandEnabled;
    })
    )

})

promise
  .then(onFulfilled, onRejected);

// hi Max
// your aim is to get variables from chrome.storage.sync
// to be able implement settings in yandex-script
// 
// Learn about promises - that should help, but it is not clear enough