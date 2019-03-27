import React, { Component } from 'react';
import RadioRegion from "./components/radioRegion.jsx"
import RadioCounty from "./components/radioCounty.jsx"
import ToggleButton from 'react-bootstrap/ToggleButton'


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
	  ['Domazlice', 'Klatovy', 'Plzen-jih', 'Plzen-mesto','Plzen-sever', 'Tachov'],
	  ['Benesov', 'Beroun', 'Kladno','Kolin', 'Kutna Hora', 'Melnik', 'Mlada-Boleslav', 'Praha-Vychod', 'Praha-zapad', 'Pribram', 'Rakovnik'],
	  [],
	  ['Hradec Kralove', 'Jicin', 'Nachod', 'Rychnov nad Kneznou', 'Trutnov'],
	  ['Cheb', 'Karlovy Vary', 'Sokolov'],
	  ['Kromeriz', 'Uherske Hradiste', 'Vsetin', 'Zlin'],
	  ['Jesenik', 'Olomouc', 'Prostejov', 'Prerov', 'Sumperk'],
	  ['Blansko', 'Brno-Mesto', 'Brno-venkov', 'Breclav', 'Hodonin', 'Vyskov', 'Znojmo'],
	  ['Havlickuv Brod', 'Jihlava', 'Pelhrimov', 'Trebic', 'Zdar nad Sazavou'],
	  ['Bruntal', 'Frydek-Mistek', 'Karvina', 'Novy Jicin', 'Opava', 'Ostrava-mesto'],
	  ['Ceska Lipa', 'Jablonec nad Nisou', 'Liberec', 'Semily'],
	  ['Decin', 'Chomutov', 'Litomerice', 'Louny', 'Most', 'Teplice', 'Usti nad Labem'],
	  ['Chrudim', 'Pardubice', 'Svitavy', 'Usti nad Orlici']
    ]

    return (
		<div className="App">

		<div className="regions">
				<RadioRegion
					options={regions}
					callback ={
					//region selected is held in the App
					regionIndex=>{this.setState({region:regionIndex})}
					}
				/>
		</div>

			
			 {/* show h2 only for regions with counties */}

			{ counties[this.state.region] != 0  && <h2>Vyberte okres</h2> }

			<div className="counties">
				<RadioCounty
					options={this.state.region != null ? counties[this.state.region] : []}
				/>
			</div>
		</div>
    );
  }
}

export default App;





