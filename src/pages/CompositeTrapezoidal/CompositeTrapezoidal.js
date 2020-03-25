import React, { Component } from 'react';

class CompositeTrapezoidal extends Component {
    render() {
        return (
            <div className="content">
            <div className="container-fluid">
                <div className="row">
                    <h3>&nbsp;&nbsp;Composite Trapezoidal</h3>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-header">
                                <br />
                                <div className="col-xs-12">
                                    <label htmlFor="text">Input Equal :</label>
                                    <input type="text" className="form-control" name="text" />
                                    <br /><label htmlFor="text">Input X Start :</label>
                                    <input type="text" className="form-control" name="text" />
                                    <br /><label htmlFor="text">Input X End :</label>
                                    <input type="text" className="form-control" name="text" /><br />
                                    <label htmlFor="text">Input N Split :</label>
                                    <input type="text" className="form-control" name="text" /><br />
                                </div>
                                <div><br />
                                    <center><button type="button" className="btn btn-success" onclick={this.cal}>ENTER</button></center><br />
                                    <center><button type="button" className="btn btn-danger" onclick={this.draw,this.bisectioneq}>API</button></center><br />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">
                                <div id="plot" className="pot1" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header ">
                                <h4><b>&nbsp;&nbsp;Output</b></h4>
                                <table id="output" style={{ padding: '0px 8px' }} className="table table-hover">
                                    <tbody><tr style={{ textAlign: 'center' }}>
                                        <th width="20%">Result</th>
                                        <th width="30%">Real</th>
                                        <th width="30%">Error</th>
                                    </tr>
                                        <tr className="list-data">
                                            <td width="20%" id="Iteration" style={{ textAlign: 'center' }} />
                                            <td width="25%" id="xl1" />
                                            <td width="25%" id="xr1" />
                                            <td width="30%" id="x" />
                                            <td width="30%" id="error" />
                                        </tr>
                                    </tbody></table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 

        );
    }
}

export default CompositeTrapezoidal;