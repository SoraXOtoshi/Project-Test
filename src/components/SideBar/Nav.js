import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Collapse } from 'react-bootstrap';


class Nav extends Component {

  state = {};

  render() {
    let { location } = this.props;
    return (
      <ul className="nav">
        <li className={this.isPathActive('') || this.state.ROEMenuOpen ? 'active' : null}>
          <a onClick={() => this.setState({ ROEMenuOpen: !this.state.ROEMenuOpen })}
            data-toggle="collapse">
            
            <p>
              Root Of Equation
            <b className="caret"></b>
            </p>
          </a>
          <Collapse in={this.state.ROEMenuOpen}>
            <div>
              <ul className="nav">
              <li className={this.isPathActive('/bisection') ? 'active' : null}>
                  <Link to="/bisection">Bisection</Link>
                </li>
                <li className={this.isPathActive('/falseposition') ? 'active' : null}>
                  <Link to="/falseposition">False Position</Link>
                </li>
                <li className={this.isPathActive('/onepoint') ? 'active' : null}>
                  <Link to="/onepoint">One Point Iteration</Link>
                </li>
                <li className={this.isPathActive('/NewtonRaphson') ? 'active' : null}>
                  <Link to="/NewtonRaphson">Newton Raphson</Link>
                </li>
                <li className={this.isPathActive('/Secant') ? 'active' : null}>
                  <Link to="/Secant">Secant</Link>
                </li>
              </ul>
            </div>
          </Collapse>
        </li>
        <li className={this.isPathActive('/forms') || this.state.LAMenuOpen ? 'active' : null}>
          <a onClick={() => this.setState({ LAMenuOpen: !this.state.LAMenuOpen })} data-toggle="collapse">
            
            <p>Linear Algebra <b className="caret"></b></p>
          </a>
          <Collapse in={this.state.LAMenuOpen}>
            <div>
              <ul className="nav">
                <li className={this.isPathActive('/GaussElimination') ? 'active' : null}>
                  <Link to="/GaussElimination">Gauss Elimination</Link>
                </li>
                <li className={this.isPathActive('/GaussJordan') ? 'active' : null}>
                  <Link to="/GaussJordan">Gauss Jordan</Link>
                </li>
                <li className={this.isPathActive('/MatrixInversion') ? 'active' : null}>
                  <Link to="/MatrixInversion">Matrix Inversion</Link>
                </li>
                <li className={this.isPathActive('/LUDecomposition') ? 'active' : null}>
                  <Link to="/LUDecomposition">LU Decomposition</Link>
                </li>
                <li className={this.isPathActive('/CholeskyDecomposition') ? 'active' : null}>
                  <Link to="/CholeskyDecomposition">Cholesky Decomposition</Link>
                </li>
                <li className={this.isPathActive('/JacobiIteration') ? 'active' : null}>
                  <Link to="/JacobiIteration">Jacobi Ireration</Link>
                </li>
                <li className={this.isPathActive('/GaussSeidelIteration') ? 'active' : null}>
                  <Link to="/GaussSeidelIteration">Gauss Seidel Iteration</Link>
                </li>
                <li className={this.isPathActive('/ConjugateGradient') ? 'active' : null}>
                  <Link to="/ConjugateGradient">Conjugate Gradient</Link>
                </li>
              </ul>
            </div>
          </Collapse>
        </li>
        <li className={this.isPathActive('/tables') || this.state.IAEMenuOpen ? 'active' : null}>
          <a onClick={() => this.setState({ IAEMenuOpen: !this.state.IAEMenuOpen })} data-toggle="collapse">
            
            <p>Interpolation and Extrapolation <b className="caret"></b></p>
          </a>
          <Collapse in={this.state.IAEMenuOpen}>
            <div>
              <ul className="nav">
                <li className={this.isPathActive('/NewtonInterpolation') ? 'active' : null}>
                  <Link to="/NewtonInterpolation">Newton Interpolation</Link>
                </li>
                <li className={this.isPathActive('/LagrangeInterpolation') ? 'active' : null}>
                  <Link to="/LagrangeInterpolation">Lagrange Interpolation</Link>
                </li>
                <li className={this.isPathActive('/SplineInterpolation') ? 'active' : null}>
                  <Link to="/SplineInterpolation">Spline Interpolation</Link>
                </li>
              </ul>
            </div>
          </Collapse>
        </li>
        <li className={this.isPathActive('/maps') || this.state.LSRMenuOpen ? 'active' : null}>
          <a onClick={() => this.setState({ LSRMenuOpen: !this.state.LSRMenuOpen })} data-toggle="collapse">
            
            <p>Least-Squares Regression <b className="caret"></b></p>
          </a>
          <Collapse in={this.state.LSRMenuOpen}>
            <div>
              <ul className="nav">
                <li className={this.isPathActive('/Regression') ? 'active' : null}>
                  <Link to="/Regression">Regression</Link>
                </li>
                <li className={this.isPathActive('/MultipleRegression') ? 'active' : null}>
                  <Link to="/MultipleRegression">Multiple Regression</Link>
                </li>
              </ul>
            </div>
          </Collapse>
        </li>
        <li className={this.isPathActive('/maps') || this.state.NIMenuOpen ? 'active' : null}>
          <a onClick={() => this.setState({ NIMenuOpen: !this.state.NIMenuOpen })} data-toggle="collapse">
            
            <p>Numerical Integration <b className="caret"></b></p>
          </a>
          <Collapse in={this.state.NIMenuOpen}>
            <div>
              <ul className="nav">
                <li className={this.isPathActive('/CompositeTrapezoidal') ? 'active' : null}>
                  <Link to="/CompositeTrapezoidal">Composite Trapezoidal</Link>
                </li>
                <li className={this.isPathActive('/CompositeSimpson') ? 'active' : null}>
                  <Link to="/CompositeSimpson">Composite Simpson</Link>
                </li>
                <li className={this.isPathActive('/NewtonCotes') ? 'active' : null}>
                  <Link to="/NewtonCotes">Newton-Cotes</Link>
                </li>
              </ul>
            </div>
          </Collapse>
        </li>
        <li className={this.isPathActive('/maps') || this.state.NDMenuOpen ? 'active' : null}>
          <a onClick={() => this.setState({ NDMenuOpen: !this.state.NDMenuOpen })} data-toggle="collapse">
            
            <p>Numerical Differentiation <b className="caret"></b></p>
          </a>
          <Collapse in={this.state.NDMenuOpen}>
            <div>
              <ul className="nav">
                <li className={this.isPathActive('/FirstForward') ? 'active' : null}>
                  <Link to="/FirstForward">First Forward</Link>
                </li>
                <li className={this.isPathActive('/Backward') ? 'active' : null}>
                  <Link to="/Backward">Backward</Link>
                </li>
                <li className={this.isPathActive('/Central') ? 'active' : null}>
                  <Link to="/Central">Central</Link>
                </li>
                <li className={this.isPathActive('/MoreAccFirstForward') ? 'active' : null}>
                  <Link to="/MoreAccFirstForward">More Acc First Forward</Link>
                </li>
                <li className={this.isPathActive('/MoreAccBackward') ? 'active' : null}>
                  <Link to="/MoreAccBackward">More Acc Backward</Link>
                </li>
                <li className={this.isPathActive('/MoreAccCentral') ? 'active' : null}>
                  <Link to="/MoreAccCentral">More Acc Central</Link>
                </li>
              </ul>
            </div>
          </Collapse>
        </li>
        <li className={this.isPathActive('/maps') || this.state.ODEMenuOpen ? 'active' : null}>
          <a onClick={() => this.setState({ ODEMenuOpen: !this.state.ODEMenuOpen })} data-toggle="collapse">
            
            <p> Ordinary Differential Equation <b className="caret"></b></p>
          </a>
          <Collapse in={this.state.ODEMenuOpen}>
            <div>
              <ul className="nav">
                <li className={this.isPathActive('/Euler') ? 'active' : null}>
                  <Link to="/Euler">Euler</Link>
                </li>
                <li className={this.isPathActive('/Heun') ? 'active' : null}>
                  <Link to="/Heun">Heun</Link>
                </li>
                <li className={this.isPathActive('/ModifiedEuler') ? 'active' : null}>
                  <Link to="/ModifiedEuler">Modified Euler</Link>
                </li>
              </ul>
            </div>
          </Collapse>
        </li>
      </ul>
    );
  }

  isPathActive(path) {
    return this.props.location.pathname.startsWith(path);
  }
}

export default withRouter(Nav);