import request from '@/utils/request.js'

export function apiGetBooks () {
  return request({
    url: '/books',
    method: 'get'
  })
}

export function apiGetBook (id) {
  return request({
    url: `/books/${id}`,
    method: 'get'
  })
}

export function apiGetBookDetail (id) {
  return request({
    url: `/profile/${id}`,
    method: 'get'
  })
}

export function apiPathBookDetail (data) {
  return request({
    url: `/profile/${data.id}`,
    method: 'put',
    data
  })
}
