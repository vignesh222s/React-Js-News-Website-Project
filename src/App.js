import React from "react";
import Header from "./components/header/header";
import { BackTop } from "antd";
import "./App.css";
function App() {
  return (
    <div>
      <Header />
      <BackTop>
        <div
          className="ant-back-top-inner"
          style={{
            backgroundColor: "#1088e9",
            height: "40px",
            width: "40px",
            lineHeight: "40px",
            borderRadius: "4px",
            color: "white",
            textAlign: "center",
            fontSize: "20px"
          }}
        >
          UP
        </div>
      </BackTop>
    </div>
  );
}

export default App;
