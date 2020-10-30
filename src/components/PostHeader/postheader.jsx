import React from 'react'
import './postheader.css'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'

function PostHeader() {
    return (
        <div className="postheader">
            <ArrowBackIcon
                style={{ marginTop: '8px' }}
            />

            <h2>
                Olx Clone
                </h2>
        </div>
    )
}

export default PostHeader
