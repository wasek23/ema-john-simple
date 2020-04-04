import React from 'react';
// import fakeData from '../../fakeData';

const Inventory = () => {
    const addInventory = () => {
        // console.log('before post', fakeData.length);

        // fetch('https://ema-john.herokuapp.com/addProduct', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(fakeData)
        // }).then(res => res.json()).then(data => {
        //     console.log('Successfully post', data);
        // });
    }

    return (
        <div>
            <h1 className="textCenter">Inventory coming soon.....</h1>
            <button onClick={addInventory} className="btn">Add inventory</button>
        </div>
    );
};

export default Inventory;