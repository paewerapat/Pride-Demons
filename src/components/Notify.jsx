import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify';
import LinearProgress from '@mui/material/LinearProgress';

function Notify() {

    const { notify } = useSelector(state => state);

    useEffect(() => {
        if(notify.success){
            toast.success(`${notify.success}`)
        }else if(notify.error){
            toast.error(`${notify.error}`)
        }
    }, [notify])

    return (
        <div className='fixed-top'>
            {
                notify.loading && <LinearProgress className='linear-progress'/>
            }
        </div>
    )
}

export default Notify