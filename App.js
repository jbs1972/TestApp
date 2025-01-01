import React from "react";
import ReactDOM from "react-dom/client";

const App = () => {
    return (
        <div className="parent">
            <div className="child">
                <h1 className="header">Hello, from First App.💕</h1>
            </div>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />)