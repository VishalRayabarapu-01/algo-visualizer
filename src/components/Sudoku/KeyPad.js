import React from 'react';
import './node.css'
const KeyPad = ({ numbers }) => {
    return (
        <div className="p-3">
            <div className="row mt-2 pt-2">
                {numbers.map((number) => (
                    <div key={number} className="col-4 mb-2">
                        <button style={{ fontFamily: 'Inclusive Sans' }} className="btn fs-3 btn-primary p-3 btn-lg w-100">{number}</button>
                    </div>
                ))}
            </div>
            <div className="row">
                <div className="col mt-1 pt-1">
                    <label htmlFor="customRange1" style={{ fontFamily: 'Inclusive Sans' }} className="fw-bold">Speed :</label>
                    <input type="range" className="form-range" />
                </div>
                <div className="col">
                    <button style={{ fontFamily: 'Inclusive Sans' }} className="btn btn-primary btn-lg w-100 mt-3 pt-1">Visualize</button>
                </div>
            </div>
            <div className="row">

                <div className="col">
                    <button style={{ fontFamily: 'Inclusive Sans' }} className="btn btn-primary btn-lg w-100 mt-3 pt-1">New Game</button>
                </div>
            </div>
        </div>
    );
};

export default KeyPad;
