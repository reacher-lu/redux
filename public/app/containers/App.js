import React, { PropTypes, Component } from 'react'
import TitleBar from '../components/titleBar'
import { connect } from 'react-redux'
import ImmutableRenderMixin from 'react-immutable-render-mixin'
import * as ItemsActions from '../actions'
import { bindActionCreators } from 'redux'

var json = require("json!./pageData.json");
console.log('_products',json);

// const url = 'mock/pageData.json';
// fetch(url).then(response => response.json())
//   .then(data => console.log('data',data))
//   .catch(e => console.log("Oops, error", e))

class App extends Component {
    
    render() {
        const actions = this.props.actions
        // const pageData = this.props.pageData
        console.log('root props',this.props);
        return (
            <div>
                <TitleBar pageTitle={this.props.pageTitle} titleBar={actions.titleBar} titleBlur={actions.titleBlur} />
            </div>
        )
    }
}

App.mixins = [ImmutableRenderMixin]

App.propTypes = {
    pageTitle: PropTypes.string.isRequired
}

export default connect(state => ({
    pageTitle : 'xxxxoooo'
}), dispatch => ({
    actions: bindActionCreators(ItemsActions, dispatch)
}))(App)
