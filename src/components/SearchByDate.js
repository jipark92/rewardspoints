import React from 'react'

export default function SearchByDate({ searchDate, setsearchDate }) {
    return (
        <>
            <label>MONTH:</label>
            <select
                onChange={(e) => {
                    setsearchDate(e.target.value)
                }}
            >
                <option value="ALL">ALL</option>
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
            </select>
        </>
    )
}