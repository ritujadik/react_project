import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Greeting from "./Home.jsx";
import AboutElem from "./About.jsx";
import Form from "./Form.jsx";
import Newform from "./Newform.jsx";
import Toggle from "./Toggle.jsx";
import Rituja from "./FormInput.jsx";
import EULA from "./Checkbox.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/*<App />*/}
    {/*<Greeting />*/}
    {/*<AboutElem />*/}
    {/*<Form />*/}
    {/*<Newform />*/}
    {/*<Toggle />*/}
    {/*<EULA />*/}
    <Rituja />
  </StrictMode>
);
