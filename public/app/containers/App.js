import React, { PropTypes, Component } from 'react'
import TitleBar from '../components/titleBar'
import * as actionsArrs from '../actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ImmutableRenderMixin from 'react-immutable-render-mixin'

let json = require("json!../../mock/pageData.json")
console.log('_products',json)

// const url = 'mock/pageData.json'
// fetch(url).then(response => response.json())
//   .then(data => console.log('data',data))
//   .catch(e => console.log("Oops, error", e))

class App extends Component {
    
    render() {
        const { titles } = this.props
        const { titleBar,titleBlur,titleChange } = this.props.actions
        // const pageData = this.props.pageData
        console.log('root props',titles.pageTitle)
        return (
            <div>
                <TitleBar pageTitle={titles.get('pageTitle')} titleBar={titleBar} titleBlur={titleBlur} titleChange={titleChange} />
            </div>
        )
    }
}

App.mixins = [ImmutableRenderMixin]

App.propTypes = {
    pageTitle: PropTypes.string.isRequired,
    actions: PropTypes.object.isRequired
}

function mapStateToProps(state) {
    // console.log('mapstate',state);
  return {
    titles: state.titles
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actionsArrs, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
