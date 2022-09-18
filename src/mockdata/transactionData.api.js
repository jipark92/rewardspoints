import { faker } from '@faker-js/faker'

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

// const customer = {
//     "1": {
//         id: "123",
//         name: "Ji",
//         age: "29"
//     },
//     "2": {
//         id: "456",
//         name: "Steve",
//         age: "19"
//     }
// }

const transactionMockData = [
    //customer 1
    {
        transactionID: "1",
        productName: faker.commerce.productName(),
        price: 250,
        customerID: "123",
        rewards: calculateRewardPoints(250),
        purchaseDate: new Date("July 20, 2022 08:20:18").toString()
    },
    {
        transactionID: "2",
        productName: faker.commerce.productName(),
        price: 85,
        customerID: "123",
        rewards: calculateRewardPoints(85),
        purchaseDate: new Date("June 10, 2022 03:50:45").toString()
    },
    {
        transactionID: "3",
        productName: faker.commerce.productName(),
        price: 76,
        customerID: "123",
        rewards: calculateRewardPoints(76),
        purchaseDate: new Date("May 10, 2022 03:50:34").toString()
    },
    // customer 2
    {
        transactionID: "1",
        productName: faker.commerce.productName(),
        price: 55,
        customerID: "456",
        rewards: calculateRewardPoints(55),
        purchaseDate: new Date("May 12, 2022 05:30:15").toString()
    },
    {
        transactionID: "2",
        productName: faker.commerce.productName(),
        price: 155,
        customerID: "456",
        rewards: calculateRewardPoints(155),
        purchaseDate: new Date("July 27, 2022 01:10:11").toString()
    },
    {
        transactionID: "3",
        productName: faker.commerce.productName(),
        price: 325,
        customerID: "456",
        rewards: calculateRewardPoints(325),
        purchaseDate: new Date("July 15, 2022 07:05:15").toString()
    },
    // customer 3
    {
        transactionID: "1",
        productName: faker.commerce.productName(),
        price: 51,
        customerID: "789",
        rewards: calculateRewardPoints(51),
        purchaseDate: new Date("May 12, 2022 05:30:15").toString()
    },
    {
        transactionID: "2",
        productName: faker.commerce.productName(),
        price: 35,
        customerID: "789",
        rewards: calculateRewardPoints(35),
        purchaseDate: new Date("July 27, 2022 01:10:11").toString()
    },
    {
        transactionID: "3",
        productName: faker.commerce.productName(),
        price: 125,
        customerID: "789",
        rewards: calculateRewardPoints(125),
        purchaseDate: new Date("June 15, 2022 07:05:15").toString()
    }
]



export const fetchTransactionMockData = () =>
    new Promise((res, rej) => {
        setTimeout(() => {
            res(transactionMockData);
        }, 2500);
    });