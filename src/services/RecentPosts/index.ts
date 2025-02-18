import { envConfig } from "@/src/config/envConfig"

export const getRecentPosts = async () => {
    const res = await fetch(`${envConfig.baseApi}items?sortBy=-createdAt&limit=3`)
    const data = await res.json()
    return data
}