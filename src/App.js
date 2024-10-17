import React from "react";
import './App.css';
import MoveList from './MoveList';

function App() {
    return (
        <div className="ogolny">
            <div className="App">
                <div className="naglowek"><b>Repertuar</b> na czwartek 17 października 2024</div>
                <MoveList />
            </div>
        </div>
    );
}

export default App;
