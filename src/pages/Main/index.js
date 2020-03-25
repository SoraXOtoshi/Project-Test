import React from 'react';
import { Route, Router } from 'react-router-dom';
import { connect } from 'react-redux';
import cx from 'classnames';
import { setMobileNavVisibility } from '../../reducers/Layout';
import { withRouter } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import SideBar from '../../components/SideBar';
import ThemeOptions from '../../components/ThemeOptions';
import MobileMenu from '../../components/MobileMenu';
/**
 * Pages
 */
import Dashboard from '../Dashboard';
import Components from '../Components';
import UserProfile from '../UserProfile';
import MapsPage from '../MapsPage';
import Forms from '../Forms';
import Charts from '../Charts';
import Calendar from '../Calendar';
import Tables from '../Tables';
import bisection from '../bisection/bisection';
import falseposition from '../falseposition/falseposition';
import onepoint from '../onepoint/onepoint';
import NewtonRaphson from '../NewtonRaphson/NewtonRaphson';
import Secant from '../Secant/Secant';
import GaussElimination from '../GaussElimination/GaussElimination';
import GaussJordan from '../GaussJordan/GaussJordan';
import MatrixInversion from '../MatrixInversion/MatrixInversion';
import LUDecomposition from '../LUDecomposition/LUDecomposition';
import CholeskyDecomposition from '../CholeskyDecomposition/CholeskyDecomposition';
import JacobiIteration from '../JacobiIteration/JacobiIteration';
import GaussSeidelIteration from '../GaussSeidelIteration/GaussSeidelIteration';
import ConjugateGradient from '../ConjugateGradient/ConjugateGradient';
import NewtonInterpolation from '../NewtonInterpolation/NewtonInterpolation';
import LagrangeInterpolation from '../LagrangeInterpolation/LagrangeInterpolation';
import SplineInterpolation from '../SplineInterpolation/SplineInterpolation';
import Regression from '../Regression/Regression';
import MultipleRegression from '../MultipleRegression/MultipleRegression';
import CompositeTrapezoidal from '../CompositeTrapezoidal/CompositeTrapezoidal';
import CompositeSimpson from '../CompositeSimpson/CompositeSimpson';
import NewtonCotes from '../NewtonCotes/NewtonCotes';
import FirstForward from '../FirstForward/FirstForward';
import Backward from '../Backward/Backward';
import Central from '../Central/Central';
import MoreAccFirstForward from '../MoreAccFirstForward/MoreAccFirstForward';
import MoreAccBackward from '../MoreAccBackward/MoreAccBackward';
import MoreAccCentral from '../MoreAccCentral/MoreAccCentral';
import Euler from '../Euler/Euler';
import Heun from '../Heun/Heun';
import ModifiedEuler from '../ModifiedEuler/ModifiedEuler';



const Main = ({
  mobileNavVisibility,
  hideMobileMenu,
  history
}) => {
  history.listen(() => {
    if (mobileNavVisibility === true) {
      hideMobileMenu();
    }
  });
  return (
    <div className={cx({
      'nav-open': mobileNavVisibility === true
    })}>
      <div className="wrapper">
        <div className="close-layer" onClick={hideMobileMenu}></div>
        <SideBar />

        <div className="main-panel">
          <Header />
          <Route exact path="/" component={bisection} />
          <Route  path="/bisection" component={bisection}/>
          <Route path="/falseposition" component={falseposition} />
          <Route path="/onepoint" component={onepoint} />
          <Route path="/NewtonRaphson" component={NewtonRaphson} />
          <Route path="/Secant" component={Secant} />
          <Route path="/GaussElimination" component={GaussElimination} />
          <Route path="/CompositeTrapezoidal" component={CompositeTrapezoidal} />
          <Route path="/CompositeSimpson" component={CompositeSimpson} />
          <Route path="/NewtonCotes" component={NewtonCotes} />
          <Route path="/FirstForward" component={FirstForward} />
          <Route path="/Backward" component={Backward} />
          <Route path="/Central" component={Central} />
          <Route path="/MoreAccFirstForward" component={MoreAccFirstForward} />
          <Route path="/MoreAccBackward" component={MoreAccBackward} />
          <Route path="/MoreAccCentral" component={MoreAccCentral} />
          <Route path="/Euler" component={Euler} />
          <Route path="/Heun" component={Heun} />
          <Route path="/ModifiedEuler" component={ModifiedEuler} />
          <Route path="/GaussJordan" component={GaussJordan} />
          <Route path="/MatrixInversion" component={MatrixInversion} />
          <Route path="/LUDecomposition" component={LUDecomposition} />
          <Route path="/CholeskyDecomposition" component={CholeskyDecomposition} />
          <Route path="/JacobiIteration" component={JacobiIteration} />
          <Route path="/GaussSeidelIteration" component={GaussSeidelIteration} />
          <Route path="/ConjugateGradient" component={ConjugateGradient} />
          <Route path="/NewtonInterpolation" component={NewtonInterpolation} />
          <Route path="/LagrangeInterpolation" component={LagrangeInterpolation} />
          <Route path="/SplineInterpolation" component={SplineInterpolation} />
          <Route path="/Regression" component={Regression} />
          <Route path="/MultipleRegression" component={MultipleRegression} />

          <Footer />
        </div>
      </div>
    </div>
  )
};

const mapStateToProp = state => ({
  mobileNavVisibility: state.Layout.mobileNavVisibility
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  hideMobileMenu: () => dispatch(setMobileNavVisibility(false))
});

export default withRouter(connect(mapStateToProp, mapDispatchToProps)(Main));