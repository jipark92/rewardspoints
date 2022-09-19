import { useEffect, useState } from "react"
import { fetchTransactionMockData } from "../mockdata/helper/fetchTransactionMockData"

export const useIsLoadingAndFetchData = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [transMockData, setTransMockData] = useState([])

    useEffect(() => {
        fetchTransactionMockData()
            .then(res => {
                setTransMockData(res)
                console.log(transMockData)
                setIsLoading(true)
            })
    }, [])

    return { isLoading, transMockData, setTransMockData }
}