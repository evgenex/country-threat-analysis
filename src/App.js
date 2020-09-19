import React from "react";
import "./styles.css";
import { observer } from "mobx-react";

@observer
class App extends React.Component {

  componentDidMount=()=>{
    this.props.store.loadThreatModel();
    this.props.store.loadCountry();
  }

  render() {
    const store = this.props.store;

    return (
      <div className="App">
        <h1>{store.localThreatModel.pageTitle}</h1>
        <div className="Model">
          <h2>Threat Model: {store.localThreatModel.name}</h2>
          <h3>Rating Levels</h3>
          <ul>
            {store.localThreatModel.threatRatings.map((rating, index) => (
              <li key={index} className='Threat' style={{ color: rating.colour }}>{rating.name}</li>
            ))}
          </ul>
          <h3>Risk Factors</h3>
          <ul>
            {store.localThreatModel.threatFactors.map((factor, index) => (
              <li key={index} className='Factors'>{factor}</li>
            ))}
          </ul>
        </div>
        <div className="Countries">
          <h2>Country List</h2>
          <div>
            {store.localCountries.map((country) => (
              <button 
                key={country.countryCode}
                onClick={()=>{store.loadAssessment(country.countryCode)}}
                >
                {country.countryName}
                </button>
            ))}
          </div>
        </div>

        {store.selectedCountry.country!=='' &&
          <div className="CountryAssessment">
            <h2>Country Assessment</h2>
            <div className="Info">
              <div className="InfoBox">
                  <div className="InfoBoxHeader">
                    <div className="InfoBoxHeaderLine1">Overall Threat Level</div>
                    <div className="InfoBoxHeaderLine2">
                      {store.selectedCountry.overallRating.name}
                    </div>
                  </div>
                  <div className="InfoBoxMain">
                  {store.selectedCountry.riskFactors.map((item, index)=>
                      <div className="InfoBoxContent" key={index}>
                        <div className="InfoBoxContentText">
                          <span>{item.name}</span>
                          <span>{item.rating.name}</span>
                        </div>
                        <div className="InfoBoxContentLine">
                          <div className="InfoBoxContentLineIndicator" style={{backgroundColor: `${item.rating.colour}`, width: `${100/item.rating.ranking}%`}}/>
                        </div>
                    </div>)}
                  </div>
              </div>
            </div>
          </div>
        }
      </div>
    );
  }
}

export default App
