// this by default is a server component
export default function Home() {
  // this is the culprit right here
  // note: this fails a production build in Codesandbox but builds fine when checked out
  // confirmed that production build does in fact still leak it
  const { CSB_EXEC_ID } = process.env;

  async function changeUserName() {
    "use server";
    // this is just to validate that the server action is working as intended
    console.log(CSB_EXEC_ID);
  }

  return (
    <form action={changeUserName as unknown as string}>
      Right click and inspect this to see the environment variable leaked.
      <br />
      Inside the form is input with name `$ACTION_0:1`, this is the environment
      variable above
      <br />
      <input
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        type="submit"
        value="submit"
      />
    </form>
  );
}
