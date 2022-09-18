const calculateRewardPoints = (price) => {
    const moreThan50 = 1
    const moreThan100 = 2
    if (price > 100) {
        return (price - 100) * moreThan100 + 50 * moreThan50
    } else if (price > 50) {
        return (price - 50) * moreThan50
    } else {
        return 0
    }
}

const customer = {
    "1": {
        id: "123",
        name: "Ji",
        age: "29"
    },
    "2": {
        id: "456",
        name: "Steve",
        age: "19"
    }
}

const transactionMockData = [
    {
        transactionID: "1",
        price: 250,
        customerID: "123",
        rewards: calculateRewardPoints(250),
        transactionDate: new Date("July 20, 69 00:20:18").toString()
    },
    {
        transactionID: "2",
        price: 85,
        customerID: "123",
        rewards: calculateRewardPoints(85),
        transactionDate: new Date("June 10, 69 00:20:18").toString()
    },
    {
        transactionID: "1",
        price: 55,
        customerID: "456",
        rewards: calculateRewardPoints(55),
        transactionDate: new Date("May 12, 69 00:20:18").toString()
    },
    {
        transactionID: "2",
        price: 155,
        customerID: "456",
        rewards: calculateRewardPoints(155),
        transactionDate: new Date("July 20, 69 00:20:18").toString()
    }
]

export const fetchTransactionMockRecord = () =>
    new Promise((res, rej) => {
        setTimeout(() => {
            res(transactionMockData);
        }, 1000);
    });