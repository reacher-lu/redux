import React, { PropTypes, Component } from 'react'
import TitleBar from '../components/titleBar'
import * as actionsArrs from '../actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ImmutableRenderMixin from 'react-immutable-render-mixin'

class App extends Component {
    
    render() {
        const { titles } = this.props
        const { titleBar,titleBlur,titleChange } = this.props.actions
        return (
            <div>
                <TitleBar pageTitle={titles.get('pageTitle')} titleBar={titleBar} titleBlur={titleBlur} titleChange={titleChange} />
            </div>
        )
    }
}

App.mixins = [ImmutableRenderMixin]

App.propTypes = {
    titles: PropTypes.string.isRequired,
    actions: PropTypes.object.isRequired
}

function mapStateToProps(state) {
    console.log('mapstate',state);
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
