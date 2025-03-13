import React, { useState } from 'react'
import pilogo from "../../assets/pilogs.png"
import Modal from '../../props/modal'
import { Link } from 'react-router-dom'

function ADA() {
    const [ADA, setADA] = useState(0)
    const [modal, setModal] = useState(false)
    return (
        <form action="sumbit" className='form' onSubmit={(e)=>{e.preventDefault();setModal(true)}}>
            <h1 className='form-h1'>Swap to ADA</h1>
            <div className='form-first'>
                <div className="form-first1">
                    <img src={pilogo} alt="" />
                    <label htmlFor="piAmount" >Enter Amount (Pi):</label>
                </div>
                <input type="number" required onChange={(e)=>setADA(e.target.value*1.40)} placeholder='Enter Amount'/>
            </div>
            <div className='form-first'>
                <div className="form-first1">
                    <label htmlFor="piAmount">Enter ADA Address</label>
                </div>
                <input type="string" required placeholder='Enter ADA Address'/>
            </div>
            <div className="formConvert">
                <h3>Converted Amount</h3>
                <p>{ADA} ADA</p>
            </div>
            <button type='submit'>Swap</button>
            {modal&&
            <Modal>
                <p>Are you sure you input the right ADA address?</p>
                <div className='yes-no'>
                    <Link to='/connect'><button className='yes'>yes</button></Link>
                    <button className='no' onClick={()=>setModal(false)}>no</button>
                </div>
            </Modal>}
        </form>
    )
}

export default ADA