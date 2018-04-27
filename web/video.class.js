import $ from "jquery";

class Video {
    constructor(){}

    getDevice(width){
        if(width < 1024){
            return true;
        }
        return false;
    }

    init(){

    }


    parseJSON(user) {
        return {
            fullName: user.firstName + ' ' + user.lastName,
            loggedIn: true,
        };
    }

    fetchCurrentArtist(callback) {
        return $.ajax({
            success: user => callback(this.parseJSON(user)),
            type: 'GET',
            url: 'http://example.com/currentArtist',
        });
    }


    getRandomQuotes(url, data ) { 
        $.ajax({ 
            url: url, 
            success: data => {return data;}, 
            fail: ()=> {return false}, 
            complete: ()=> {return "";} 
        }); 
    }
}

export default Video;
