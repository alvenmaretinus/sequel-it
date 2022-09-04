import { ResultTableData } from "../types/TableData"
import data from '../mock.json'

export const simulateFetchTableData = async (query: string): Promise<ResultTableData> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data)
    }, Math.random() * 1500)
  })
}
