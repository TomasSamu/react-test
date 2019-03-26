import React, { Component } from 'react';
import Radio from "./components/radio.jsx"

class App extends Component {
  constructor(){
    super()
    this.state = {
        region: null,
        county:null
    }
  }

  render() {

  const regions = ['Plzensky', 'Stredocesky', 'Praha', 'Kralovehradecky', 'Karlovarsky', 'Zlinsky', 'Olomoucky',
                   'Jihomoravsky', 'Vysocina', 'MoravskoSlezsky', 'Liberecky', 'Ustecky', 'Pardubicky']

  const counties = [
      ['Domazlice', 'Klatovy', 'Tachov'] 
    ]

    return (
		<div className="App">
			<div className="regions">
				<Radio 
					options={regions}
					callback ={
					//region selected is held in the App
					regionIndex=>{this.setState({region:regionIndex})}
					}
				/>
			</div>

			<div className="counties">
				<Radio 
					options={this.state.region != null ? counties[this.state.region] : []}
					callback ={
					county=>{this.setState({county:county})}
					}
				/>
			</div>
		</div>
    );
  }
}

export default App;





