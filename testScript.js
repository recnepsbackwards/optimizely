var myJavaScript =
  "function optimizelyCheck() {if (optimizely) { " +
    "var variations = optimizely.get('data').variations;" +
    "var keys = Object.keys(variations);" +
    "var keysLength = keys.length;" +
    "for (var i=0; i < keysLength; i++) {" +
    "console.log(variations[[keys[i]]].actions[0].changes[0])" +
    "}" +
  "}" +
  "else {" +
    "console.log('no');"+
  "}}";
var scriptTag = document.createElement("script");
scriptTag.innerHTML = myJavaScript;
document.head.appendChild(scriptTag);
optimizelyCheck();
