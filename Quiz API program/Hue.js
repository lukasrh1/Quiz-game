//const request = require("request");

const username = "qUr5gJcnyrewiluVUZIJRuvD6PZWHjX1CFLfnn-Z";
const bridgeIP = "192.168.0.102";
let urlLights = "";
let whichLight = 19;

urlLights = "http://" + bridgeIP + '/api/' + username + '/lights/';

function setLight(data){
    let path = urlLights + whichLight + "/state/";
    const content = JSON.stringify(data);
    httpDo(path, 'PUT', content, 'text', lightResponse);  // Request

}

function lightResponse (data) {
    //print(data);
}

function setHue(value){
    
    const hue = {
        hue: value, 
        on: true,
        transitiontime: 1,
    }

    setLight(hue);
}

function setBri(value){
    
    const bri = {
        bri: value, 
        on: true,
        transitiontime: 0,
    }

    setLight(bri);
}

function setSat(value){
    
    const sat = {
        sat: value, 
        on: true,
        transitiontime: 0,
    }

    setLight(sat);
}