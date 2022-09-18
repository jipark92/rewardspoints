import React from 'react'

//destructure props(cleaner personally)
export default function searchByCustomerID({ searchCustomerID, setsearchCustomerID }) {

    return (
        <>
            <input
                type="text"
                placeholder='search customer ID'
                defaultValue={searchCustomerID}
                onChange={(e) => {
                    setsearchCustomerID(e.target.value)
                    // console.log(props.searchCustomerID)
                }}>
            </input>
        </>
    )
}
