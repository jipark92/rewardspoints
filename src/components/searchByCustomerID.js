import React from 'react'

export default function SearchByCustomerID({ searchCustomerID, setsearchCustomerID }) {
    return (
        <>
            <input
                type="text"
                placeholder='search customer ID'
                onChange={(e) => {
                    setsearchCustomerID(e.target.value)
                }}>
            </input>
        </>
    )
}
