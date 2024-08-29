import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
/*import "./index.css";*/
import Greeting from "./Home.jsx";
import AboutElem from "./About.jsx";
import Form from "./Form.jsx";
import Newform from "./Newform.jsx";
import Toggle from "./Toggle.jsx";
import FormInput from "./FormInput.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/*<App />*/}
    {/*<Greeting />*/}
    {/*<AboutElem />*/}
    {/*<Form />*/}
    {/*<Newform />*/}
    {/*<Toggle />*/}
    <FormInput />
  </StrictMode>
);
