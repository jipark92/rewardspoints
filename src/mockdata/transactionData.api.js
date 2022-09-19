import { faker } from '@faker-js/faker'
import { calculateRewardPoints } from '../mockdata/helper/calculateRewardsPoints';

export const transactionMockData = [
    //customer 1
    {
        transactionID: faker.database.mongodbObjectId(),
        productName: faker.commerce.productName(),
        price: 250,
        customerID: "123",
        rewards: calculateRewardPoints(250),
        purchaseDate: new Date("July 20, 2022 08:20:18").toDateString()
    },
    {
        transactionID: faker.database.mongodbObjectId(),
        productName: faker.commerce.productName(),
        price: 85,
        customerID: "123",
        rewards: calculateRewardPoints(85),
        purchaseDate: new Date("June 10, 2022 03:50:45").toDateString()
    },
    {
        transactionID: faker.database.mongodbObjectId(),
        productName: faker.commerce.productName(),
        price: 76,
        customerID: "123",
        rewards: calculateRewardPoints(76),
        purchaseDate: new Date("May 10, 2022 03:50:34").toDateString()
    },
    // customer 2
    {
        transactionID: faker.database.mongodbObjectId(),
        productName: faker.commerce.productName(),
        price: 55,
        customerID: "456",
        rewards: calculateRewardPoints(55),
        purchaseDate: new Date("May 12, 2022 05:30:15").toDateString()
    },
    {
        transactionID: faker.database.mongodbObjectId(),
        productName: faker.commerce.productName(),
        price: 155,
        customerID: "456",
        rewards: calculateRewardPoints(155),
        purchaseDate: new Date("July 27, 2022 01:10:11").toDateString()
    },
    {
        transactionID: faker.database.mongodbObjectId(),
        productName: faker.commerce.productName(),
        price: 325,
        customerID: "456",
        rewards: calculateRewardPoints(325),
        purchaseDate: new Date("July 15, 2022 07:05:15").toDateString()
    },
    // customer 3
    {
        transactionID: faker.database.mongodbObjectId(),
        productName: faker.commerce.productName(),
        price: 51,
        customerID: "789",
        rewards: calculateRewardPoints(51),
        purchaseDate: new Date("May 12, 2022 05:30:15").toDateString()
    },
    {
        transactionID: faker.database.mongodbObjectId(),
        productName: faker.commerce.productName(),
        price: 35,
        customerID: "789",
        rewards: calculateRewardPoints(35),
        purchaseDate: new Date("July 27, 2022 01:10:11").toDateString()
    },
    {
        transactionID: faker.database.mongodbObjectId(),
        productName: faker.commerce.productName(),
        price: 125,
        customerID: "789",
        rewards: calculateRewardPoints(125),
        purchaseDate: new Date("June 15, 2022 07:05:15").toDateString()
    }
]
