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

test("Very if random quotes json via mock has not received", ()=> {
    const spy = jest.spyOn(video, 'getRandomQuotes');
    let data = "x";
    const result = video.getRandomQuotes('https://api.myjson.com/bins/bqzwr', data);
    expect(spy).toHaveBeenCalled();
    expect(result).toBe(undefined);
  });

//   jest.mock('../mocks/request')

//   describe('#getUser() using Promises', () => {
//     // it('should load user data', () => {
//     //   return video.getID('olay')
//     //   .then(data => {
//     //     expect(data).toBeDefined()
//     //     expect(data.entity.id).toEqual('3457693')
//     //   })
//     // })


//     it('should load user data', async () => {
//         const data = await video.getID('olay')
//         expect(data).toBeDefined()
//         expect(data.entity.id).toEqual('3457693')
//       })


//   })


jest.mock('jquery');

beforeEach(() => jest.resetModules());

it('calls into $.ajax with the correct params', () => {

  //const fetchCurrentUser = require('../fetchCurrentUser');

  // Call into the function we want to test
  const dummyCallback = () => {};
  video.fetchCurrentUser(dummyCallback);

  // Now make sure that $.ajax was properly called during the previous
  // 2 lines
  expect($.ajax).toBeCalledWith({
    success: expect.any(Function),
    type: 'GET',
    url: 'http://example.com/currentUser',
  });
});

it('calls the callback when $.ajax requests are finished', () => {

  //const fetchCurrentUser = require('../fetchCurrentUser');

  // Create a mock function for our callback
  const callback = jest.fn();
  video.fetchCurrentUser(callback);

  // Now we emulate the process by which `$.ajax` would execute its own
  // callback
  $.ajax.mock.calls[0 /*first call*/][0 /*first argument*/].success({
    firstName: 'Bobby',
    lastName: 'Marley',
  });

  // And finally we assert that this emulated call by `$.ajax` incurred a
  // call back into the mock function we provided as a callback
  expect(callback.mock.calls[0 /*first call*/][0 /*first arg*/]).toEqual({
    fullName: 'Bobby Marley',
    loggedIn: true,
  });
});
