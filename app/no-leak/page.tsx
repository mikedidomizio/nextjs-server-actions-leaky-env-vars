import { changeUserName } from "./my-server-action";

// this by default is also a server component
export default function Home() {
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
