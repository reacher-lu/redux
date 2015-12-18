import React, { PropTypes, Component } from 'react'
import ReactDom from 'react-dom'
import { tools } from '../utils'
import ImmutableRenderMixin from 'react-immutable-render-mixin'

console.log(tools);

export default class TitleBar extends Component {

    maxLength = 20

    mixins = [ImmutableRenderMixin]

    handleChange (titleChange,e) {
        let val = e.target.value.trim()
        titleChange(val)
    }

    handleSubmit (titleChange) {
        let val = this.refs.input.value.trim()
        titleChange(val)
    }

    render () {
    	console.log('props',this.props)
        const { titleBar,pageTitle,titleChange } = this.props
        return (
            <div>
                <h1 className="" onClick={titleBar.bind(this)}>{pageTitle}</h1>
                <input 
                    onBlur={this.handleChange.bind(this,titleChange)} 
                    onKeyUp={this.handleChange.bind(this,titleChange)} 
                    defaultValue={pageTitle} placeholder="请输入页面标题" 
                    ref="input" 
                    className="title" 
                    maxLength = {this.maxLength} />
            	<button className="btn-ss" onClick={this.handleSubmit.bind(this,titleChange)}>提交</button>
                <checkTips title={pageTitle}/>
                {
                    (() => {
                        if(pageTitle.length>=this.maxLength){
                            return (
                                <div ref="titleRemind" className="title-remind">标题不超过20字</div>
                            )
                        }
                    })()
                } 
            </div>
        )
    }
}
