import LinkComponent from "./components/LinkComponent";
import TwitterComponent from "./components/TwitterComponent";

function App() {
  return (
    <div className="bg-slate-950 w-screen h-screen flex flex-col space-y-10 items-center justify-center">
      <LinkComponent />
      <TwitterComponent />
    </div>
  );
}

export default App;
