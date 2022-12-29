import LandingPage from "./components/LandingPage";

function App() {
  return (
    <div className="App flex bg-zinc-800 h-screen flex-col pt-5">
      <LandingPage />
      <div className="flex justify-center">
        <div className="border-t-2 w-1/5 mt-10 border-gray-200" />
      </div>
    </div>
  );
}

export default App;
