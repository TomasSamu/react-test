import React from "react"
import "../styles/radio.css"

export default class RadioRegion extends React.Component
{
    render()
    {
        //map through individual regions
        return(
        <div className="buttons">
            {this.props.options.map((option, index) => { 
                return (
                    <div className="optionRegion" key={index} onChange={e=>{this.props.callback(index)}}>
                        <input type="radio" name="radioRegion" />
                        <span className="myButtonStyle">{option}</span>
                    </div>
                )})
            }

        </div>
        );
    };

}


