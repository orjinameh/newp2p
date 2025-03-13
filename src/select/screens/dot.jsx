import React, { useState } from 'react'
import pilogo from "../../assets/pilogs.png"
import Modal from '../../props/modal'
import { Link } from 'react-router-dom'

function DOT() {
    const [DOT, setDOT] = useState(0)
    const [modal, setModal] = useState(false)
    return (
        <form action="sumbit" className='form' onSubmit={(e)=>{e.preventDefault();setModal(true)}}>
            <h1 className='form-h1'>Swap to DOT</h1>
            <div className='form-first'>
                <div className="form-first1">
                    <img src={pilogo} alt="" />
                    <label htmlFor="piAmount" >Enter Amount (Pi):</label>
                </div>
                <input type="number" required onChange={(e)=>setDOT(e.target.value*1.5)} placeholder='Enter Amount'/>
            </div>
            <div className='form-first'>
                <div className="form-first1">
                    <label htmlFor="piAmount">Enter DOT Address</label>
                </div>
                <input type="string" required placeholder='Enter DOT Address'/>
            </div>
            <div className="formConvert">
                <h3>Converted Amount</h3>
                <p>{DOT} DOT</p>
            </div>
            <button type='submit'>Swap</button>
            {modal&&
            <Modal>
                <p>Are you sure you input the right DOT address?</p>
                <div className='yes-no'>
                    <Link to='/connect'><button className='yes'>yes</button></Link>
                    <button className='no' onClick={()=>setModal(false)}>no</button>
                </div>
            </Modal>}
        </form>
    )
}

export default DOT