import React, { PropTypes, Component } from 'react'
import ReactDom from 'react-dom'
import { tools } from '../utils'
import ImmutableRenderMixin from 'react-immutable-render-mixin'


console.log(tools);

class TitleBar extends Component {

    maxLength = 20

    mixins = [ImmutableRenderMixin]

    handleBlur (titleBlur,e) {
        let val = e.target.value.trim()
        // console.log('111',val,ReactDom.findDOMNode(this.refs.titleRemind))
        titleBlur(val)
        if(val.length>=this.maxLength) this.refs.titleRemind.innerHTML = '标题不超过20字'
    }

    handleKeyDown (e) {
        console.log(e.target.value)
    }

    handleSubmit () {
        let val = this.refs.input.value.trim()
        titleChange(val)
    }

    render () {
    	console.log('props',this.props)
        const { titleBlur,titleBar,pageTitle,titleChange } = this.props
        return (
            <div>
                <h1 className="" onClick={titleBar.bind(this)}>{pageTitle}</h1>
                <input onBlur={this.handleBlur.bind(this,titleBlur)} onKeyDown={this.handleKeyDown} defaultValue={pageTitle} placeholder="请输入页面标题" ref="input" className="title" />
                <span ref="titleRemind" className="title-remind"></span>
            	<button className="" onClick={this.handleSubmit.bind(this)}>提交</button>
            </div>
        )
    }
}

export default TitleBar
