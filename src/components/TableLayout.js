import React from 'react'
import Table from 'react-bootstrap/Table';

export default function TableLayout({filterMapInformation}) {
    return (
        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                    <th>Transaction ID</th>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Rewards</th>
                    <th>Customer ID</th>
                    <th>Purchase Date</th>
                </tr>
            </thead>
            <tbody>
                {filterMapInformation()}
            </tbody>
        </Table>
    )
}
