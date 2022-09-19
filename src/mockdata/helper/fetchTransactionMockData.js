import { transactionMockData } from "../transactionData.api";

//mimic fetch
export const fetchTransactionMockData = () =>
    new Promise((res, rej) => {
        setTimeout(() => {
            res(transactionMockData);
        }, 2500);
    });