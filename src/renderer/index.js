var title = document.createElement("h1");
title.innerText = "Current version is: ";
var versionNumber = document.createElement("span");
versionNumber.innerText = "x,y,z";
title.appendChild(versionNumber);
document.body.appendChild(title);
var messages = document.createElement("div");
messages.id = "messages";
document.body.appendChild(messages);

const {ipcRenderer} = require('electron');
ipcRenderer.on('message', function(event, text) {
  var messages = document.getElementById("messages");
  var message = document.createElement('div');
  message.innerHTML = text;
  messages.appendChild(message);
})