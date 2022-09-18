import './css/App.css';
import { useState, useEffect } from 'react';
import { fetchTransactionMockRecord } from './mockdata/transactionData.api'

function App() {

    const [transMockData, setTransMockData] = useState([])

    useEffect(() => {
        fetchTransactionMockRecord()
            .then(res => {
                setTransMockData(res)
                console.log(transMockData)
            })
    })


    return <div className='App'>
        {transMockData.map((data, i) => {
            return (
                <ul key={i}>
                    <li> tID {data.transactionID}</li>
                    <li> price {data.price}</li>
                    <li> rewards {data.rewards}</li>
                    <li> cID {data.customerID}</li>
                    <li> date {data.transactionDate}</li>
                </ul>
            )
        })}
    </div>;
}

export default App;
