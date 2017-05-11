import React from 'react';

export default class Musicians extends React.Component{
    constructor(props) {
    super(props);
    this.state = {musicians: this.props.data,
      filterVal: -2
    };
  }
  onFilterChange =(evt) => {
  this.setState({filterVal: evt.target.value});
  }
  render() {
    let data = this.state.musicians;
    const rows = data.filter(musician=> musician.stars >=this.state.filterVal).map((musician) =>
      <tr key={musician.id}>
        <td>{musician.id}</td>
        <td>{musician.name}</td>
        <td>{musician.stars}</td>
      </tr>
    );
    return (
      <div>
        <h3>List of musicians</h3>
        <p>Show artists above: <input onChange={this.onFilterChange}/><br/></p>
        <table className="table">
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Stars</th>
          </tr>
          {rows}
        </table>
      </div>
    )
  }
}
