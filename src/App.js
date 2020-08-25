/** @format */

import React from "react";
import "./App.css";

function App() {
    return (
        <div className="App">
            <form action="form_action.asp" method="post">
                <p>
                    First name: <input type="text" name="fname" />
                </p>
                <p>
                    Last name: <input type="text" name="lname" />
                </p>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default App;
