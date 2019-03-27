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
                    <label className="option" key={index} >{option}
                        <input type="radio" name="radioCounty" />
                        <span className="myStyle"></span>
                    </label>
                )})
            }

        </div>
        );
    };

}