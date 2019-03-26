import React from "react"
import "../styles/radio.css"

export default class Radio extends React.Component
{
    render()
    {
        return(
        <div className="buttons">

            {this.props.options.map((option, index) => {
                return (
                    <div className="option" key={index} onChange={e=>{this.props.callback(index)}}>
                        <input type="radio" name="radioBtn" />
                        <span className="myButtonStyle">{option}</span>
                    </div>
                )})
            }

        </div>
        );
    };

}