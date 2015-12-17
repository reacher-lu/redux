import React from 'react'
import ImmutableRenderMixin from 'react-immutable-render-mixin'

let TitleBar = React.createClass({
    mixins: [ImmutableRenderMixin],
    render() {
        return (
        	<button className="" onClick={this.props.titleBar}>点我啊</button>

            // <div className="pure-form">
            //     <input type="text" onKeyUp={this.props.filterItem} placeholder="请输入查找的item" />
            // </div>
        )
    }
})

export default TitleBar
