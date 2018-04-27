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
            fullName: user+ ' '+user.firstName + ' ' + user.lastName,
            loggedIn: true,
        };
    }

    fetchCurrentUser(callback) {
        return $.ajax({
            success: user => callback(this.parseJSON(user)),
            type: 'GET',
            url: 'http://example.com/currentUser',
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

    getID(brand){
        $.ajax({
            url: "https://example.api/${brand}",
            success: data => {return data;}
            });
    }
}

export default Video;
