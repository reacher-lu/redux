import React from 'react'
import ImmutableRenderMixin from 'react-immutable-render-mixin'

let TitleBar = React.createClass({
    
    mixins: [ImmutableRenderMixin],

    handleBlur (titleBlur,e) {
        let val = e.target.value.trim()
        console.log('111',val)
        titleBlur(val)
    },

    handleKeyDown (e) {
        console.log(e.target.value)
    },

    render () {
    	console.log('props',this.props)
        const { titleBlur,titleBar,pageTitle } = this.props
        return (
            <div>
                <input onBlur={this.handleBlur.bind(this,titleBlur)} onKeyDown={this.handleKeyDown} defaultValue={pageTitle} placeholder="请输入页面标题" refs="input" className="title" />
                <span refs="titleRemind" className="title-remind"></span>
            	<button className="" onClick={titleBar.bind(this)}>{pageTitle}</button>
            </div>
        )
    }
})

export default TitleBar
