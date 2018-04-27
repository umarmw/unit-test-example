import Video from "./video.class";
import $ from "jquery";
let video = new Video();

test("Verify if it matches mobile", () => {
    let windowWidth = "720";
    expect(video.getDevice(windowWidth)).toBeTruthy();
});

test("Verify if it doesnt match mobile", () => {
    let windowWidth = "1200";
    expect(video.getDevice(windowWidth)).toBeFalsy();
});

// test("Verify if it doesnt match mobile", () => {
//     const spy = jest.fn();
//     const payload = [1, 2, 3];

//     jest
//     .spyOn($, "ajax")
//     .mockImplementation(({ success }) => spy(success(payload)));

//     video.getID("bana");

//     expect(spy).toHaveBeenCalledTimes(1);
//     expect(spy).toHaveBeenCalledWith(payload);
// });

// jest.mock('jquery');

// test("Very if random quotes json via mock has not received", ()=> {
//     jest.resetModules()
//     const spy = jest.spyOn(video, 'getRandomQuotes');
//     let data = "xyz";
//     const result = video.getRandomQuotes('https://api.myjson.com/bins/bqzwr', data);
//     expect(spy).toHaveBeenCalled();
//     expect(result).toBe(undefined);
//   });


// it('calls the callback when $.ajax requests are finished', () => {

//     jest.resetModules()

//     //const fetchCurrentUser = require('../fetchCurrentUser');
  
//     // Create a mock function for our callback
//     const callback = jest.fn();
//     video.fetchCurrentUser(callback);

//     const spy = jest.spyOn(video, 'fetchCurrentUser');
//     // Now we emulate the process by which `$.ajax` would execute its own
//     // callback
   
//     $.ajax.mock.calls[0 /*first call*/][0 /*first argument*/].success({
//       firstName: 'Bobby',
//       lastName: 'Marley',
//     });
//     // var result = callback.mock.calls[0 /*first call*/][0 /*first arg*/];
//     // console.log('result of call back full name ... '+result.fullName);
//     expect(callback).toHaveBeenCalledTimes(1);
//     // And finally we assert that this emulated call by `$.ajax` incurred a
//     // call back into the mock function we provided as a callback
//     expect(callback.mock.calls[0 /*first call*/][0 /*first arg*/]).toEqual({
//       fullName: 'Bobby Marley',
//       loggedIn: true,
//     });
//   });