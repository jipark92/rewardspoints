export const renderLogic = ()=>{
    return transMockData
    .filter((data, i) => {
        if (searchCustomerID === "") {
            return data
        } else if (data.customerID.includes(searchCustomerID)) {
            return data
        }
    })
    .filter((data, i) => {
        if (new Date(data.purchaseDate).getMonth().toString() === searchDate) {
            return data
        } else if (searchDate === undefined) {
            return data
        } else if (searchDate === "ALL") {
            return data
        }
    })
    .map((data, i) => {
        const { transactionID, productName, price, rewards, customerID, purchaseDate } = data
        return (
            <ul key={i}>
                <li> Transaction ID: {transactionID}</li>
                <li> Product Name: {productName}</li>
                <li> Price: {price}</li>
                <li> Rewards: {rewards}</li>
                <li> Customer ID: {customerID}</li>
                <li> Purchase Date: {purchaseDate.slice(0, -42)}</li>
            </ul>
        )
    })
}