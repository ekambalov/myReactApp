import * as axios from "axios"

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    headers: {
        'API-KEY' : 'f384fc6b-9311-417a-b150-47e6f62d372a'
    }
    
})


export const UsersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return  instance.get(`users?page=${currentPage}&count=${pageSize}`)
                  .then(response => response.data)
      },
    
    unfollow(userId) {
        return   instance.delete (`/follow/${userId}`)
                    .then(response => response.data)
    },
    follow(userID){
        return instance.post (`/follow/${userID}`)
                    .then(response => response.data)
    },
    getAuth() {
        return instance.get(`/auth/me`)
                    .then(responce => responce.data )
    },
    getProfile(userId) {
        return instance.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(response => response.data) 
    }
}

