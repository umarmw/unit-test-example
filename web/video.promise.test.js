import Video from "./video.class";
import $ from "jquery";
let video = new Video();

jest.mock('jquery');

test("Verify if promise is", () => {
  expect(true).toBeTruthy();
});