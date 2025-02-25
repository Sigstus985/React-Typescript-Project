import React from "react";
import "./App.css";
import InputField from "./Components/InputField";

const App: React.FC = () => {
	return (
		<div className="App">
      <h1 className="header">Taskmaker</h1>

      <InputField></InputField>
		</div>
	);
}

export default App;
