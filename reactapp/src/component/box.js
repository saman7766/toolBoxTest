import React from "react";

class Box extends React.Component{

    state = { value: "" }

    onChange = (e) => this.setState({ value: e.target.value })

    render(){
        return(
            <div className="container">
                <div className="row justify-content-md-center">
                    <div className="col-lg-6">
                        <div className="input-group">
                            <input type="text" onChange={this.onChange} value={this.state.value} className="form-control" placeholder="Texto a la API..."></input>
                            <span className="input-group-btn">
                                <button onClick={()=>{this.props.handleClick(this.state.value)}} className="btn btn-primary" type="button">Call API!</button>
                            </span>
                        </div>
                    <div className="alert alert-success">{this.props.text}</div>
                </div>      
                </div>
            </div>
        )
    }
}

export default Box;