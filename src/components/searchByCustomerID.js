import React from 'react'

export default function SearchByCustomerID({ searchCustomerID, setsearchCustomerID }) {
    return (
        <>
            <label>CUSTOMER ID: </label>
            <input
                type="text"
                placeholder='customer ID'
                onChange={(e) => {
                    setsearchCustomerID(e.target.value)
                }}>
            </input>
        </>
    )
}
