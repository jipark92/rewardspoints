import { useEffect, useState } from "react"
import { fetchTransactionMockData } from "../helper/fetchTransactionMockData"

export const useIsLoadingAndFetchData = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [transMockData, setTransMockData] = useState([])

    useEffect(() => {
        fetchTransactionMockData()
            .then(res => {
                setTransMockData(res)
                setIsLoading(true)
                console.log(transMockData)
            })
    }, [])
    
    return {isLoading, transMockData, setTransMockData}
}