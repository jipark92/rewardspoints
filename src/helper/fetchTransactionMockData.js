import { transactionMockData } from "../mockdata/transactionData.api";

export const fetchTransactionMockData = () =>
    new Promise((res, rej) => {
        setTimeout(() => {
            res(transactionMockData);
        }, 2500);
    });