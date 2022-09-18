import React from 'react'

export default function SearchByDate({ searchDate, setsearchDate }) {
    return (
        <>
            <select
                onChange={(e) => {
                    setsearchDate(e.target.value)
                    console.log(searchDate)
                }}
            >
                <option value="0">January</option>
                <option value="1">Febuary</option>
                <option value="2">March</option>
                <option value="3">April</option>
                <option value="4">May</option>
                <option value="5">June</option>
                <option value="6">July</option>
                <option value="7">August</option>
                <option value="8">September</option>
                <option value="9">October</option>
                <option value="10">November</option>
                <option value="11">December</option>
                <option value="ALL">ALL</option>

            </select>
        </>
    )
}
