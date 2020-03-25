import React, { Component } from 'react';
import * as mathjs from 'mathjs';

const math = mathjs.create(mathjs.all)

class bisection extends Component {

    constructor(props) {
        super(props);
        this.bisection = this.bisection.bind(this);
        this.findxm = this.findxm.bind(this);
        this.funcal = this.funcal.bind(this);
        this.cleantable = this.cleantable.bind(this);
    }

    bisection = () => {

        var table = document.getElementById("output");
        var xl = document.getElementById("text2").value;
        var xr = document.getElementById("text3").value;
        var x_old = xr;
        var xm = 0;
        var n = 0;
        var check = parseFloat(0.000000);
        if(document.getElementById("output").getElementsByTagName("tr").length>0){
                this.cleantable();
        }
        do{

                if(xl != xr){
                        xm = this.findxm(xl,xr);
                        check = Math.abs(xm-x_old).toFixed(8);
                }else{
                    check = 0;
                }

                n++;

                // Create an empty <tr> element and add it to the 1st position of the table:
                var row = table.insertRow(n);

                // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);
                var cell4 = row.insertCell(3);
                var cell5 = row.insertCell(4);

                // Add some text to the new cells:

                cell1.innerHTML = n;
                cell1.setAttribute("id","cell");
                cell2.innerHTML = xl;
                cell2.setAttribute("id","cell");
                cell3.innerHTML = xr;
                cell3.setAttribute("id","cell");
                cell4.innerHTML = xm;
                cell4.setAttribute("id","cell");
                cell5.innerHTML = check;
                cell5.setAttribute("id","cell");

                if(parseFloat(xl)<parseFloat(xr)){
                    if(this.funcal(xl)<this.funcal(xr)){
                            if(this.funcal(xm)>0){
                                    xr = xm
                            }
                            else if(this.funcal(xm)<0){
                                    xl = xm
                            }
                            else if(this.funcal(xm)==0){
                                 xr = xm;
                                 xl = xm;
                            }
                    }
                    else if(this.funcal(xl)>this.funcal(xr)){
                            if(this.funcal(xm)<0){
                                    xr = xm
                            }
                            else if(this.funcal(xm)>0){
                                    xl = xm
                            }
                            else if(this.funcal(xm)==0){
                                 xr = xm;
                                 xl = xm;
                            }
                    }
                }
                x_old = xm
        }while(check>0.00001&&n<100)
    }


    //คำนวนหา Xm
    findxm = (xl,xr) => {
            return (parseFloat(xl)+parseFloat(xr))/2
    }

    // แก้สมาการ X
    funcal = (X) => {
        var expression = document.getElementById("text1").value;
        expression = math.compile(expression);
        let scope = {x:parseFloat(X)};
        return expression.eval(scope);
    }

    //ลบ table
    cleantable = () => {
            var count = document.getElementById("output").getElementsByTagName("tr").length;
            for(var j=1;j<count;j++)
            {
                    document.getElementById("output").deleteRow(1);
            }
    }
   
    render() {
        return (
            <div className="content">
            <div className="container-fluid">
                <div className="row">
                    <h3>&nbsp;&nbsp;Bisection</h3>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-header">
                                <br />
                                <div className="col-xs-12">
                                    <label htmlFor="text">Input Equal :</label>
                                    <input type="text" className="form-control" placeholder="EX: 2X+1" name="text" id="text1"/>
                                    <br /><label htmlFor="text">Number Start (XL) :</label>
                                    <input type="text" className="form-control" placeholder="3" name="text" id="text2"/>
                                    <br /><label htmlFor="text">Number End (XR) :</label>
                                    <input type="text" className="form-control" placeholder="5" name="text" id="text3"/><br />
                                </div>
                                <div><br />
                                    <center><button type="button" className="btn btn-success" onClick={this.bisection}>ENTER</button></center><br />
                                    <center><button type="button" className="btn btn-danger">API</button></center><br />
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
                                        <th width="20%">Iteration</th>
                                        <th width="25%">X<sub>L</sub></th>
                                        <th width="25%">X<sub>R</sub></th>
                                        <th width="30%">X<sub>M</sub></th>
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

export default bisection;