import React from 'react';
import YourSvg from "../../images/inprogress.svg";

const Logocomponent = () => {
    return (
        <div className="Logoimp">
         <img src={YourSvg} alt="Your SVG" width ="100" height ="100" />
         {/* test img above, replace as required, example in keto page for now*/}
         <i className="fas fa-steak"/> 
        </div>
    );
};

export default Logocomponent;

