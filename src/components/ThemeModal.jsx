import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { GLOBALTYPES } from '../redux/actions/globalTypes';

function ThemeModal() {

    const dispatch = useDispatch();
    const [color, setColor] = useState("");

    function changeTheme(e) {
        e.preventDefault();
        console.log(color)
        localStorage.setItem("theme", color)
        dispatch({
            type: GLOBALTYPES.THEME,
            payload: color
        })
    }

    return (
        <div className="modal fade" id="themeModal" tabIndex={-1} aria-labelledby="connectModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-sm">
                <form className="modal-content" onSubmit={changeTheme}>
                    <div className="modal-header">
                        <h5 className="modal-title" id="connectModalLabel">Select Theme</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div className="modal-body">
                        <div className="group-color">
                            <div className="group-select">
                                <div className='default'></div>
                                <input type="radio" value="default" name="color" onChange={(e)=>setColor(e.target.value)}/>
                                <label htmlFor="Default">Default: </label>
                            </div>
                            <div className="group-select">
                                <div className="dark-blue"></div>
                                <input type="radio" value="dark-blue" name="color" onChange={(e)=>setColor(e.target.value)} />
                                <label htmlFor="Default">Dark/Blue </label>
                            </div>
                            <div className="group-select">
                                <div className="white-red"></div>
                                <input type="radio" value="white-red" name="color" onChange={(e)=>setColor(e.target.value)} />
                                <label htmlFor="Default">White/Red </label>
                            </div>
                            <div className="group-select">
                                <div className="white-blue"></div>
                                <input type="radio" value="white-blue" name="color" onChange={(e)=>setColor(e.target.value)} />
                                <label htmlFor="Default">White/Blue </label>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button>Save changes</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ThemeModal