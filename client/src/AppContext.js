import React, { Component } from 'react'

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

export const AppContextConsumer = AppContext.Consumer;