// this by default is a server component
export default function Home() {
  // this is the culprit right here (todo this fails building though)
  const { CSB_EXEC_ID } = process.env;

  async function changeUserName() {
    "use server";
    // this is just to validate that the server action is working as intended
    console.log(CSB_EXEC_ID);
  }

  return (
    <form action={changeUserName as unknown as string}>
      No leak
      <br />
      <input
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        type="submit"
        value="submit"
      />
    </form>
  );
}
