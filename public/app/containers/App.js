import React from 'react'
import TitleBar from '../components/titleBar'
import { connect } from 'react-redux'
import ImmutableRenderMixin from 'react-immutable-render-mixin'
import * as ItemsActions from '../actions'
import { bindActionCreators } from 'redux'

// import _products from './pageData.json'

// console.log('_products',_products);

// const url = 'mock/pageData.json';
// fetch(url).then(response => response.json())
//   .then(data => console.log('data',data))
//   .catch(e => console.log("Oops, error", e))


let App = React.createClass({
    mixins: [ImmutableRenderMixin],
    propTypes: {
        pageTitle: React.PropTypes.string.isRequired
    },
    render() {
        const actions = this.props.actions
        const pageData = this.props.pageData
        console.log('root props',this.props);
        return (
            <div>
                <TitleBar pageTitle={this.props.pageTitle} titleBar={actions.titleBar} titleBlur={actions.titleBlur} />
            </div>
        )
    }
})

export default connect(state => ({
    pageTitle : 'xxxxoooo'
}), dispatch => ({
    actions: bindActionCreators(ItemsActions, dispatch)
}))(App)
