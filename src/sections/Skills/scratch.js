class App extends React.Component {
    state = {
      currencies: [
        {
          currencyName: 'Bitcoin',
          marketCap: 106330074359
        },
        {
          currencyName: 'Ethereum',
          marketCap: 32402945322
        },
        {
          currencyName: 'XRP',
          marketCap: 11864383092
        },
        {
          currencyName: 'Bitcoin Cash',
          marketCap: 9612908814
        },
        {
          currencyName: 'EOS',
          marketCap: 4644155391
        },
        {
          currencyName: 'Stellar',
          marketCap: 4084424747
        }
      ]
    }
  
    render() {
      return (
        <div>
           <Graph 
             currencies={this.state.currencies} 
             graphTitle="Top 6 Cryptocurrencies by Market Capitalization(%)"
           />
        </div>
      )
    }
}
  
  
class Graph extends React.Component {
    state = {}
  
    renderLines() {
      return Array(10).fill(null).map((el, i) => (
        <Line 
          left={i * 10} 
          key={i}
        />
      ))
    }
  
    renderBars() {
      const { currencies } = this.props;
      
      let sumOfAllCurrencies = currencies.reduce((acc, currency) => {
        return acc + currency.marketCap;
      }, 0);
      
      return currencies.map((currency) => {
        const percent = (currency.marketCap / sumOfAllCurrencies) * 100; 
        return (
          <Bar 
            percent={percent}
            key={currency.currencyName}
          />
        )
      });
    }
  
    render() {
      return (
        <div className="graph-wrapper">
          <h2> { this.props.graphTitle } </h2>
          
          <div className="graph">
            <BarTextContent currencies={this.props.currencies} />
            
            <div className="bar-lines-container">
              { this.renderLines() }
              { this.renderBars() }
            </div>
            
            <div style={{ width: '12%' }} />
            <Markers />      
          </div>
          
        </div>
      )
    }
}
  
const Markers = () => {
    const markerArr = Array(11).fill(null);
    
    return (
      <div className="markers">
        {
          markerArr.map((el, i) => (
           <span className="marker" style={{ left: `${i * 10}%` }}>
            { i * 10 }
           </span>
          ))
        }
      </div>
    )
}
  
const Bar = ({ percent }) => {
    return (
      <div className="bar" style={{ width: `${percent}%` }} />
    )
}
  
const BarTextContent = ({ currencies }) => {
    return (
      <div className="bar-text-content">
        {
          currencies.map((currency) => (
            <div className="text">
              {currency.currencyName }
            </div>
          ))
        }
      </div>
    )
}
  
const Line = ({ left }) => {
    return (
      <div 
        className="line" 
        style={{ left: `${left}%` }}
      />
    )
}
