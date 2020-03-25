import React, { Component } from 'react';
import * as mathjs from 'mathjs';
const math = mathjs.create(mathjs.all)

class Secant extends Component {

    constructor(props) {
        super(props);
        this.Secant = this.Secant.bind(this);
        this.funcal = this.funcal.bind(this);
        this.cleantable = this.cleantable.bind(this);
    }
    Secant = () => {
        var table = document.getElementById("output");
        var expression = document.getElementById("text1").value;
        var x0 = document.getElementById("text2").value;
        var x1 = document.getElementById("text3").value;
        var x2 = 0;
        var x = 0;
        var n = 0;
        var check = parseFloat(0.000000);
        if(document.getElementById("output").getElementsByTagName("tr").length>0){
                this.cleantable();
        }
        do{

                x = x1-((this.funcal(x1,expression)*(x1-x0))/(this.funcal(x1,expression)-this.funcal(x0,expression)));
                check = Math.abs((x-x1)/x).toFixed(8);
                console.log(check);
                n++;
                console.log(n);
                // Create an empty <tr> element and add it to the 1st position of the table:
                var row = table.insertRow(n);

                // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);

                // Add some text to the new cells:
                cell1.setAttribute("id","cell");
                cell2.setAttribute("id","cell");
                cell3.setAttribute("id","cell");

                cell1.innerHTML = n;
                cell2.innerHTML = x;
                cell3.innerHTML = check;
                x0 = x1;
                x1 = x;

        }while(check>0.00001 && n<100)
    }



    // แก้สมาการ X
    funcal = (X,expression) => {
        expression= math.compile(expression);
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
                    <h3>&nbsp;&nbsp;Secant</h3>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-header">
                                <br />
                                <div className="col-xs-12">
                                    <label htmlFor="text">Input Equal :</label>
                                    <input type="text" className="form-control" placeholder="EX: 1/2" name="text" id="text1"/>
                                    <br /><label htmlFor="text">Number Start (X0) :</label>
                                    <input type="text" className="form-control" placeholder="3" name="text" id="text2"/>
                                    <br /><label htmlFor="text">Number Start (X1) :</label>
                                    <input type="text" className="form-control" placeholder="5" name="text" id="text3"/><br></br>
                                </div>
                                <div><br /><br></br>
                                    <center><button type="button" className="btn btn-success" onClick={this.Secant}>ENTER</button></center><br />
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
                                        <th width="25%">X</th>
                                        <th width="30%">|x<sub>i</sub>-x<sub>i-1</sub>|</th>
                                    </tr>
                                        <tr className="list-data">
                                            <td width="20%" id="Iteration" style={{ textAlign: 'center' }} />
                                            <td width="25%" id="x" />
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

export default Secant;