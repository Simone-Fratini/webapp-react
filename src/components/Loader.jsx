import React from "react";
import "../css/loader.css";

function Loader() {
    return (
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div class="loader scale-75">
                <div class="square" id="sq1"></div>
                <div class="square" id="sq2"></div>
                <div class="square" id="sq3"></div>
                <div class="square" id="sq4"></div>
                <div class="square" id="sq5"></div>
                <div class="square" id="sq6"></div>
                <div class="square" id="sq7"></div>
                <div class="square" id="sq8"></div>
                <div class="square" id="sq9"></div>
            </div>
        </div>
    );
}

export default Loader;
