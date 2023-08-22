import "./App.css";

import HomePage from "./HomePAge";
import { Provider } from "react-redux";
import Store from "./Store";
import { BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Provider store={Store}>
        <div className="App">
          <HomePage />
        </div>
      </Provider>
    </BrowserRouter>
  );
}
