const assert = require("assert");
const { JSDOM } = require("jsdom");

describe("Username validation", () => {
  let document;

  beforeEach(() => {
    const dom = new JSDOM(`
      <html>
        <body>
          <input type="text" id="username" />
        </body>
      </html>
    `);
    document = dom.window.document;

    document.getElementById("username").addEventListener("input", function () {
      var username = document.getElementById("username").value;
      var regex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*~])(?=.{8,})/;
      if (regex.test(username)) {
        document.getElementById("username").style.borderColor = "green";
      } else {
        document.getElementById("username").style.borderColor = "red";
      }
    });
  });

  //   test("should set border color to green for valid username", () => {
  //     const input = document.getElementById("username");
  //     input.value = "Valid1!";
  //     input.dispatchEvent(new dom.window.Event("input"));

  //     expect(input.style.borderColor).toBe("green");
  //   });

  //   test("should set border color to red for invalid username", () => {
  //     const input = document.getElementById("username");
  //     input.value = "invalid";
  //     input.dispatchEvent(new dom.window.Event("input"));

  //     expect(input.style.borderColor).toBe("red");
  //   });
});

test("hello world!", () => {
  assert.strictEqual(1 + 1, 2);
});
