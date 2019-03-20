import React, {Component} from 'react';
import {connect} from 'react-redux';

export default (ChildComponent) => {
    class ComposedComponent extends Component {

        componentDidMount() {
            this.unauthRedirect();
        }

        componentDidUpdate(prevProps, prevState, snapshot) {
            this.unauthRedirect();
        }

        unauthRedirect = () => {
            if(!this.props.auth){
                console.log("unathorized");
                this.props.history.push('/');
            }
        };

        render(){
            return <ChildComponent {...this.props} />;
        }
    }

    const mapStateToProps = (state) => {
        return { auth: state.auth };
    };


    return connect(mapStateToProps,null)(ComposedComponent);
}