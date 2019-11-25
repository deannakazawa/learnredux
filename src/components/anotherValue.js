import React from 'react'
import {connect} from "react-redux"

function AnotherValue(props) {
    return (
        <div>
            <h1>{props.value}</h1>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        value: state.value
    }
}

export default connect (mapStateToProps)(AnotherValue)