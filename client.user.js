// ==UserScript==
// @name         Discord Scratch
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://scratchx.org/*
// @grant        none
// @require      https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js
// @require      https://gist.githubusercontent.com/NitroCipher/479a8dd270793b76afcd63cbf2b3550b/raw/2c48a8063b193b6395bbb9d1591651b9653b2fbf/cord.min.js
// ==/UserScript==

(function() {
    'use strict';
    var token = ""; //Put your Discord bot token here
    $(document).ready(function() {
        document.queue = [];
        var s = document.createElement("script");
        s.type = "text/javascript";
        s.src = "https://gist.githubusercontent.com/NitroCipher/479a8dd270793b76afcd63cbf2b3550b/raw/2c48a8063b193b6395bbb9d1591651b9653b2fbf/cord.min.js";
        // Use any selector
        $("head").append(s);

        const client = new Discord.Client();

        client.on('ready', () => {
            document.title = (`Logged in as ${client.user.tag}!`);
            document.userID = client.user.tag;
            document.dClient = client;
        });

        client.on('message', msg => {
            if (msg.content === 'ping') {
                msg.reply('pong');
            }
            //alert(msg.author.username +": " + msg.content);
            document.queue.push(msg);
        });

        client.login(token);
    });
    // Your code here...
})();
