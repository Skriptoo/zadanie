import axios from "axios"
//import { TagDescriptive } from "../../interfaces/tags"

export const tagsService = {
    getTags: async (pageSize: number, pageNumber: number, sort: string, order: string) => {
        return axios.get(`${import.meta.env.VITE_API_URL}`, {params: {site: 'stackoverflow', pagesize: pageSize, page: pageNumber, sort: sort, order: order}})
    },
}

