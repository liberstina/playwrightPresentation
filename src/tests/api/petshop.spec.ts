//petshop.spec.ts
import { test, expect } from "@playwright/test";

const postRequst = {
  username: "AutomationPlaywright22",
  fistName: "API",
  lastName: "Webinar",
  email: "playwright@test.com",
  password: "Play20Wright22",
  phone: "123456789",
};

const getResponse = {
  id: Number,
  username: String,
  fistName: String,
  lastName: String,
  email: String,
  password: String,
  phone: String,
  userStatus: String,
};

const postResponse = {
  code: 200,
  type: "unknown",
  message: String,
};

test.describe.parallel("Create, read and delete user", () => {
  test("Post, get and delete user ", async ({ request }) => {
    //post
    const responseCreate = await request.post("v2/user", {
      data: JSON.stringify(postRequst),
    });
    await expect(responseCreate).toBeOK();
    const responseBody = JSON.parse(await responseCreate.text());
    console.log(await responseBody);
    console.log("User is created successfully with id " + responseBody.message);
    expect(responseBody.message).toBeTruthy();
    postResponse.message = responseBody.message;

    //get
    const responseCheck = await request.get(
      `v2/user/${postRequst.username}`,
      {}
    );
    await expect(responseCheck).toBeOK();

    getResponse.id = await responseCheck.body().then((b) => {
      let data = JSON.parse(b.toString());
      return data.id;
    });

    getResponse.username = await responseCheck.body().then((b) => {
      let data = JSON.parse(b.toString());
      return data.username;
    });
    console.log(
      "User is checked successfully with username " + getResponse.username
    );

    //delete
    
    const responseDelete = await request.delete(
      `v2/user/${postRequst.username}`,
      {}
    );
    await expect(responseDelete).toBeOK();
    const message = await responseDelete.body().then((b) => {
      let data = JSON.parse(b.toString());
      return data.message;
    });
    console.log(
      "User with the username " + message + " is successfully deleted"
    );
    
  });
});
