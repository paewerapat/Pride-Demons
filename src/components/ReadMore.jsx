import React, { useState } from 'react'

function ReadMore({children, limit}) {

    const [isReadMore, setIsReadMore] = useState(false)
    function toggleReadMore() {
        setIsReadMore(!isReadMore)
    }

    return (
        <>
            {
                isReadMore ? children : children.substr(0, limit)
            }
            {
                limit < children.length && 
                <button onClick={toggleReadMore} style={{
                    color: '#AAA', outline: 'none', border: 'none', background: 'none', fontWeight: '500'
                }}>
                    { isReadMore ? 'Read Less' : 'Read More'}
                </button>
            }
        </>
    )
}

export default ReadMore