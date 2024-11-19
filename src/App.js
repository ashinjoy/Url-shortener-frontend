import Routes from "./routes/route";
import  { Toaster } from 'react-hot-toast';



function App() {
  return (
    <div className="">
      <Toaster
        position="bottom-right"
        reverseOrder={false}
      />
      <Routes/>
    </div>
  );
}

export default App;
