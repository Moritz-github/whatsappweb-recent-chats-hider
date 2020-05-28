// ==UserScript==
// @name         Whatsapp Recent Chats Hider
// @version      0.1
// @description  Hides your recent Chats from Friends once Button is clicked
// @match        https://web.whatsapp.com/
// @grant       GM_addStyle

// ==/UserScript==
var invokeUntilChatsLoaded = window.setInterval(function(){
    if (document.getElementById("pane-side") == null){
        return;
    }
    clearInterval(invokeUntilChatsLoaded);
    
    pageLoaded();
}, 100);

function pageLoaded(){
    addButton();
}
    
var button;
function addButton(){
    var buttonPosition = document.getElementById("side").children[0].children[0];

    button = document.createElement('div');
    button.innerHTML = '<button id="btnToggle" type="button">Hide</button>';
    button.setAttribute ('id', 'container');
    buttonPosition.appendChild(button);

    //adds an event listener
    document.getElementById("container").addEventListener ("click", switchRecentChatsVisibility, false);

    //css to style the button
    GM_addStyle ( `
        #container {
            position:   absolute;
            top:        0;
            background: palegreen;
            border:     3px outset black;
            margin-left:50px;
            margin-top: 10px;
            padding:    3px 20px;
            width:      10%;
            height:     20px;
            cursor:     pointer;
        }
        #btnToggle {
            font-size:  15px;
        }
    ` );
}

function switchRecentChatsVisibility() {
    if (document.getElementById("pane-side").style.display == "none"){
        document.getElementById("pane-side").style.display = "";
        
        button.style.background="palegreen";
        document.getElementById("btnToggle").innerHTML="Hide";
        return;
    }
    document.getElementById("pane-side").style.display = "none";

    button.style.background="orangered";
    document.getElementById("btnToggle").innerHTML="Show";
}

