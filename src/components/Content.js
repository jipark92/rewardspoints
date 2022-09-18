import React from 'react'
import { useState, useEffect } from 'react';
import { fetchTransactionMockData } from '../helper/fetchTransactionMockData';
import SearchByDate from './SearchByDate';
import SearchByCustomerID from './SearchByCustomerID';
import TableLayout from './TableLayout';
import '../css/content.css'

export default function Content() {

    const [transMockData, setTransMockData] = useState([])
    const [searchCustomerID, setSearchCustomerID] = useState("")
    const [searchDate, setSearchDate] = useState()
    const [isLoading, setIsLoading] = useState(false)

    //calculate total rewards.
    //need dynamic solution. ex: if more user gets added.
    let totalRewardPoints = transMockData.reduce((total, data) => {
        const { customerID, rewards } = data
        if (customerID === "123") total.user123totalReward += rewards
        if (customerID === "456") total.user456totalReward += rewards
        if (customerID === "789") total.user789totalReward += rewards
        return total
    }, {
        user123totalReward: 0,
        user456totalReward: 0,
        user789totalReward: 0
    })

    //mount data
    useEffect(() => {
        fetchTransactionMockData()
            .then(res => {
                setTransMockData(res)
                setIsLoading(true)
            })
    }, [])

    //update data with total rewards
    useEffect(() => {
        setTransMockData([
            ...transMockData,
            {
                customerID: "123",
                productName: <b>TOTAL REWARDS</b>,
                rewards: <b>{totalRewardPoints.user123totalReward}</b>
            },
            {
                customerID: "456",
                productName: <b>TOTAL REWARDS</b>,
                rewards: <b>{totalRewardPoints.user456totalReward}</b>
            },
            {
                customerID: "789",
                productName: <b>TOTAL REWARDS</b>,
                rewards: <b>{totalRewardPoints.user789totalReward}</b>
            }
        ])
    }, [isLoading])

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
            //sort numerically
            .sort((a, b) => {
                if (a.customerID < b.customerID) {
                    return -1
                }
                else {
                    return 1
                }
            })
            .map((data, i) => {
                const { transactionID, productName, price, rewards, customerID, purchaseDate } = data
                return (
                    <tr key={"user" + i}>
                        <td>{customerID}</td>
                        <td>{transactionID}</td>
                        <td>{productName}</td>
                        <td>{price}</td>
                        <td>{rewards}</td>
                        <td>{purchaseDate}</td>
                    </tr>
                )
            })
    }

    return (
        <>
            <section className="search-container">
                <SearchByCustomerID
                    searchCustomerID={searchCustomerID}
                    setSearchCustomerID={setSearchCustomerID}
                />

                <SearchByDate
                    searchDate={searchDate}
                    setSearchDate={setSearchDate}
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