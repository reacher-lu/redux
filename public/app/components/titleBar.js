import React, { PropTypes, Component } from 'react'
import { tools } from '../utils'
import ImmutableRenderMixin from 'react-immutable-render-mixin'


console.log(tools);

class TitleBar extends Component {

    mixins = [ImmutableRenderMixin]

    handleBlur (titleBlur,e) {
        let val = e.target.value.trim()
        console.log('111',val)
        titleBlur(val)
    }

    handleKeyDown (e) {
        console.log(e.target.value)
    }

    render () {
    	console.log('props',this.props)
        const { titleBlur,titleBar,pageTitle } = this.props
        return (
            <div>
                <h1 className="" onClick={titleBar.bind(this)}>{pageTitle}</h1>
                <input onBlur={this.handleBlur.bind(this,titleBlur)} onKeyDown={this.handleKeyDown} defaultValue={pageTitle} placeholder="请输入页面标题" refs="input" className="title" />
                <span refs="titleRemind" className="title-remind"></span>
            	<button className="">提交</button>
            </div>
        )
    }
}

export default TitleBar
