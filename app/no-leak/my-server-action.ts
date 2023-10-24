"use server";
const { CSB_EXEC_ID } = process.env;

export async function changeUserName() {
  const myVar = CSB_EXEC_ID;

  // this is just to validate that the server action is working as intended
  console.log(myVar);
}
