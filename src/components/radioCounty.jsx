import React from "react"
import "../styles/radio.css"

export default class RadioCounty extends React.Component
{
    render()
    {
        return(
        <div className="buttons">

            {this.props.options.map((option, index) => {
                return (
                    <div className="optionCounty" key={index} >
                        <input type="radio" name="radioCounty" />
                        <span className="myButtonStyle">{option}</span>
                    </div>
                )})
            }

        </div>
        );
    };

}