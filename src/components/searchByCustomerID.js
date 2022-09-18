import React from 'react'

export default function SearchByCustomerID({ searchCustomerID, setSearchCustomerID }) {
    return (
        <>
            <label>CUSTOMER ID: </label>
            <input
                type="text"
                placeholder='customer ID'
                onChange={(e) => {
                    setSearchCustomerID(e.target.value)
                }}>
            </input>
        </>
    )
}
