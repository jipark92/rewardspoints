import React from 'react'
import { useState, useEffect } from 'react';
import { fetchTransactionMockData } from '../helper/fetchTransactionMockData';
import SearchByDate from './SearchByDate';
import SearchByCustomerID from './SearchByCustomerID';
import TableLayout from './TableLayout';
import '../css/content.css'

export default function Content() {

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

    const filterMapInformation = () => {
        return transMockData
            // filter by customer id
            .filter((data) => {
                if (searchCustomerID === "") return data
                if (data.customerID.includes(searchCustomerID)) return data
            })
            // filter by months
            .filter((data) => {
                if (new Date(data.purchaseDate).getMonth().toString() === searchDate) return data
                if (searchDate === undefined) return data
                if (searchDate === "ALL") return data
            })
            .map((data, i) => {
                const { transactionID, productName, price, rewards, customerID, purchaseDate } = data
                return (
                    <tr key={"user" + i}>
                        <td>{customerID}</td>
                        <td>{transactionID}</td>
                        <td>{productName}</td>
                        <td>${price}.00</td>
                        <td>{rewards}</td>
                        <td>{purchaseDate.slice(0, -42)}</td>
                    </tr>
                )
            })
    }

    return (
        <>
            <section className="search-container">
                <SearchByCustomerID
                    searchCustomerID={searchCustomerID}
                    setsearchCustomerID={setsearchCustomerID}
                />

                <SearchByDate
                    searchDate={searchDate}
                    setsearchDate={setsearchDate}
                />
            </section>

            <section className='content-container'>
                {isLoading ?
                    <TableLayout
                        filterMapInformation={filterMapInformation}
                    />
                    : "LOADING DATA......."
                }
            </section>
        </>
    )
}