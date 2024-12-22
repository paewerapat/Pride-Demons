import React from 'react'

function NotFound() {
    return (
        <div className='notfound-page'>
            <div className="text-show text-center text-light">
                <h1><i class="fa-solid fa-triangle-exclamation text-warning"/> 404</h1>
                <hr className='w-75 mx-auto'/>
                <h2>Sorry, the page not found.</h2>
                <h5>
                    The link you followed probably broken
                    or the page has been removed.
                </h5>
            </div>
        </div>
    )
}

export default NotFound