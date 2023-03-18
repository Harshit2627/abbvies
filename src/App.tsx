import "./App.css";
import { Router } from "./routing";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    //   <ConfigProvider
    //   theme={{
    //     algorithm: theme.defaultAlgorithm,
    //     token: {
    //       colorPrimary: '#00b96b',
    //     },
    //     components:{Layout: {colorPrimary:"cyan-2"}}
    //   }}
    // >
    <BrowserRouter>
      <Router />
    </BrowserRouter>
    // </ConfigProvider>
  );
}

export default App;
