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
            <SearchByCustomerID
                searchCustomerID={searchCustomerID}
                setsearchCustomerID={setsearchCustomerID}
            />

            <SearchByDate
                searchDate={searchDate}
                setsearchDate={setsearchDate}
            />

            {isLoading ? //redner logic : "LOADING DATA..."}
        </div>
    )
}