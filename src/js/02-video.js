import throttle from "lodash.throttle";
import Player from "@vimeo/player";

    const iframe = document.querySelector('iframe');
    const player = new Player(iframe);
  
    player.on('timeupdate', throttle(onPlayed, 1000));

    function onPlayed(event){
        localStorage.setItem("videoplayer-current-time", event.seconds)
    }
    player.setCurrentTime(localStorage.getItem("videoplayer-current-time") || 0);


    
    // || 0

    // ).catch(function(error) {
        // console.log(error)

    // });

   // player.setCurrentTime(30.456).then(function(seconds) {
        // seconds = the actual time that the player seeked to
    //}).catch(function(error) {
      //  switch (error.name) {
        //    case 'RangeError':
                // the time was less than 0 or greater than the video’s duration
          //      break;
    
            //default:
                // some other error occurred
              //  break;
        //}
    //});