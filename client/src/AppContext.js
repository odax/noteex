import React, { Component } from 'react'
import PropTypes from 'prop-types'

//create new context
const AppContext = React.createContext();

//provider
export class AppContextProvider extends Component {
    state = {

    }
  render() {
    return (
        <AppContext.Provider
            value = {{
                AppState: this.state
            }}
        >
            {this.props.children}
        </AppContext.Provider>
    );
  }
}

AppContextProvider.propTypes = {
    children: PropTypes.any
};

export const AppContextConsumer = AppContext.Consumer;