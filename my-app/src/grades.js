import React from 'react';


export default class Grades extends React.Component{

constructor(props) {
    super(props);
    this.state = {f : -2 }
  }

myChange = (event)=> {       
    console.log("lkskd") 
    const val = event.target.value;
    this.setState({f: val});
};

render(){
    let data = this.props.data;
    const rows = data.filter((student) => { return student.grade > this.state.f }).map((student) => {
        return(
            <tr key = {student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.grade}</td>
            </tr>
        )
    })

    return (
        <div>
            <p>Grades</p>
            Show grades above: <input onChange={this.myChange}/>
                <table className="table">
                    {rows}
                </table>
        </div>
    );
}
}