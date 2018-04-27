//controller
import $ from "jquery";
import Video from "./video.class";

$("document").ready(function(){
    //event associated with the video
    if ($(".video-player").length) {
        let video = new Video();
        video.init();
    }
})