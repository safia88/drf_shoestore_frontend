import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      shoes: []
    };
  }
  componentDidMount() {
    fetch('http://localhost:8000/api/shoe/')
      .then(res => res.json())
      .then(data => this.setState({ shoes: data }))
  }
  render() {
    return (
      <React.Fragment>
        <h1>This is my Shoe Store</h1>
        {this.state.shoes.map(item => {
          return (
            <ul>
              <li>
                Brand Name: {item.brand}
              </li>
              <li>
                Color: {item.color}
              </li>
              <li>
                Fasten Type: {item.fasten_type}
              </li>
              <li>
                Manufacturer: {item.manufacturer}
              </li>
              <li>
                Material: {item.material}
              </li>
              <li>
                Type: {item.shoe_type}
              </li>
              <li>
                Size: {item.size}
              </li>
            </ul>
          );
        })}
      </React.Fragment>
    );
  }
}

export default App;
