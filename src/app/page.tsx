import Button from "@mui/material/Button";

export default function Home() {
  return (
    <div>
      <div className="flex bg-gray-200 m-4 p-8 gap-8 items-center">
        <p className="text-lg">
          Make life in Samsara more mindful. Get started right now.
        </p>
        <Button variant="contained" color="primary">
          Start Session
        </Button>
      </div>
      <div className="flex flex-col gap-4 bg-gray-200 m-4 p-4">
        <h1 className="text-2xl text-center font-bold">Your Sessions 🧘🏽</h1>
        <p className="bg-gray-300 rounded-lg p-4">
          You currently have no sessions. Start one now.
        </p>
      </div>
    </div>
  );
}
