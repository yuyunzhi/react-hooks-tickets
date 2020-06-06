import React, { useCallback, useMemo } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import './App.css';

import Header from "../common/Header";
import DepartDate from "./DepartDate";
import HighSpeed from "./HighSpeed";
import Journey from "./Journey";
import Submit from "./Submit";

import {
    exchangeFromTo,
    showCitySelector,
} from './actions';

function App(props) {

    const {
        from,
        to,
        dispatch
    } = props

    const onBack = useCallback(() => {
        window.history.back();
    }, []); // 只渲染一次，useCallback避免了header重新渲染

    const cbs = useMemo(() => {
        return bindActionCreators(
            {
                exchangeFromTo,
                showCitySelector,
            },
            dispatch
        );
    }, []);

    return (
        <div className="App">
            <div className="header-wrapper">
                <Header title="火车票" onBack={onBack} />
            </div>
            <Journey from={from} to={to} {...cbs} />
            <DepartDate/>
            <HighSpeed/>
            <Submit/>
        </div>
    );
}

export default connect(
    function mapStateToProps(state) {
        return state
    },
    function mapDispatchToProps(dispatch) {
        return { dispatch}
    }
)(App);
