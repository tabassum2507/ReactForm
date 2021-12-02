import "./App.css";
import { useState } from "react";
import FormInput from "./components/FormInput";

function App() {
  const [ username, setUsername] = useState(" ");

  console.log(username)
  return (
    <div className="app">
      <form>
        <FormInput placeholder="Username" setUsername/>
        <FormInput placeholder="Email Id"/>
        <FormInput placeholder="Phone Number"/>
        <FormInput placeholder="Age"/>



      </form>
    </div>
  );
}

export default App;
