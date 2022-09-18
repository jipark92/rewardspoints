import { transactionMockData } from "../mockdata/transactionData.api";

//fetch data
export const fetchTransactionMockData = () =>
    new Promise((res, rej) => {
        setTimeout(() => {
            res(transactionMockData);
        }, 2500);
    });