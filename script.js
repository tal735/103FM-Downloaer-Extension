function getElementByXpath(path) {
  return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

function addDownloadButton(){

//make progress bar shorter to fit new button
var g = document.getElementsByClassName("mouthjs-progress")[0];
g.style.width = "calc(90% - 100px)";

//get media id
var identifier = document.getElementsByClassName('mouthjs-autoplay')[0].getAttribute('data-file');

//create download button
var a = document.createElement("a");
a.href = 'http://103fm.aod.streamgates.net/103fm_aod/' + identifier + '.mp3';
a.target="_blank";
a.title = "Download as MP3 or listen";
//image for download button
var img = document.createElement("img");
img.src = chrome.extension.getURL("/images/link50.png");
img.style = 'width: 50px;height: 50px;margin-bottom: 40px;margin-right: 20px;cursor: pointer;';
//set button image
a.appendChild(img);

//add button to HTML DOM before 'Play' button
var list = getElementByXpath('//*[@id="form1"]/div[6]/div');
list.insertBefore(a, list.childNodes[0]);  
}

//add button to html
addDownloadButton();
