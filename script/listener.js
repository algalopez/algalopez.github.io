/*
        _             _                      
       | |           | |                     
   __ _| | __ _  __ _| | ___  _ __   ___ ____
  / _` | |/ _` |/ _` | |/ _ \| '_ \ / _ \_  /
 | (_| | | (_| | (_| | | (_) | |_) |  __// / 
  \__,_|_|\__, |\__,_|_|\___/| .__/ \___/___|
           __/ |             | |             
          |___/              |_|             
*/

const STATE_LOADING = "loading"
const STATE_INTERACTIVE = "interactive"
const STATE_COMPLETE = "complete"

if (document.readyState == STATE_LOADING) {
    document.addEventListener('DOMContentLoaded', listener_start);
} else {
    listener_start();
}

function listener_start() {
    console.log('Web loaded')

    executeButton = document.getElementById("execute");
    executeButton.addEventListener('click', script_executeQuery);

    startVis();
}
