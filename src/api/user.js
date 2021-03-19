import request from '@/utils/request'

// const prefix = '/vue-element-admin/'

const prefix = '/'

export function login(data) {
  return request({
    url: prefix + 'user/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: prefix + 'user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: prefix + 'user/logout',
    method: 'post'
  })
}
