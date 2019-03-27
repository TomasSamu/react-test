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
                    <label className="option" key={index} onChange={e=>{this.props.callback(index)}}>{option}
                        <input type="radio" name="radioRegion" />
                        <span className="myStyle"></span>
                    </label>
                )})
            }

        </div>
        );
    };

}


