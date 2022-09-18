import React from 'react'
import { useState, useEffect } from 'react';
import { fetchTransactionMockData } from '../mockdata/transactionData.api'
import SearchByDate from './SearchByDate';
import SearchByCustomerID from './searchByCustomerID';

export default function Information() {

    const [transMockData, setTransMockData] = useState([])
    const [searchCustomerID, setsearchCustomerID] = useState("")
    const [searchDate, setsearchDate] = useState()
    const [isLoading, setIsLoading] = useState(false)
    const [totalReward, setTotalReward] = useState(0);

    useEffect(() => {
        fetchTransactionMockData()
            .then(res => {
                setTransMockData(res)
                setIsLoading(true)
            })
    }, [])

    return (
        <div>
            {/* search customer ID */}
            <SearchByCustomerID
                searchCustomerID={searchCustomerID}
                setsearchCustomerID={setsearchCustomerID}
            />

            <SearchByDate
                searchDate={searchDate}
                setsearchDate={setsearchDate}
            />

            {/* render all information with filter customerID function */}
            {isLoading ? transMockData
                .filter((data, i) => {
                    //customer ID filter
                    if (searchCustomerID === "") {
                        return data
                    } else if (data.customerID.includes(searchCustomerID)) {
                        return data
                    }
                })
                //date filter
                .filter((data, i) => {
                    // console.log(new Date(data.transactionDate).getMonth())
                    if (new Date(data.purchaseDate).getMonth().toString() === searchDate) {
                        return data
                    } else if (searchDate === undefined) {
                        return data
                    } else if (searchDate === "ALL"){
                        return data
                    }
                })
                .map((data, i) => {
                    //destructure data
                    const { transactionID, productName, price, rewards, customerID, purchaseDate } = data
                    return (
                        <ul key={i}>
                            <li> Transaction ID: {transactionID}</li>
                            <li> Product Name: {productName}</li>
                            <li> Price: {price}</li>
                            <li> Rewards: {rewards}</li>
                            <li> Customer ID: {customerID}</li>
                            <li> Purchase Date: {purchaseDate.slice(0,-42)}</li>
                        </ul>
                    )
                }) : "LOADING DATA..."}
        </div>
    )
}
