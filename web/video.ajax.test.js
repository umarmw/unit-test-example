import Video from "./video.class";
import $ from "jquery";
let video = new Video();

jest.mock('jquery');

it('calls the callback when $.ajax requests are finished', () => {

    jest.resetModules()
  
    // Create a mock function for our callback
    const callback = jest.fn();
    video.fetchCurrentArtist(callback);

    const spy = jest.spyOn(video, 'fetchCurrentArtist');
    // Now we emulate the process by which `$.ajax` would execute its own
    // callback
   
    $.ajax.mock.calls[0 /*first call*/][0 /*first argument*/].success({
      firstName: 'Bobby',
      lastName: 'Marley',
    });
    // var result = callback.mock.calls[0 /*first call*/][0 /*first arg*/];
    // console.log('result of call back full name ... '+result.fullName);
    expect(callback).toHaveBeenCalledTimes(1);
    // And finally we assert that this emulated call by `$.ajax` incurred a
    // call back into the mock function we provided as a callback
    expect(callback.mock.calls[0 /*first call*/][0 /*first arg*/]).toEqual({
      fullName: 'Bobby Marley',
      loggedIn: true,
    });
  });