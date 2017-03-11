var IS_IOS = /iphone|ipad/i.test(navigator.userAgent);
var IS_CHROME = false ///Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);

//BASE_URL = 'http://127.0.0.1:3000'
BASE_URL = 'https://vast-stream-69053.herokuapp.com'

function getDocumentHeight() {
    return Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
    );
}

function log() {
  console.log(arguments);
  // for(var i = 0; i < arguments.length; 
    
  // }
}