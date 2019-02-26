import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 31b301a1ab3e82aa22180de26c56abab849136c9f8bcd176b8be871bf189f609'
    }
})