import request from '@utils/request'

export function addDepart(){
    return request({
        url:'/company/department',
        method:'post'
    })
}

export function selectDepart(){
    return request({
        url:'/company/department',
        method:'get'
    })
}

export function updateDepart(){
    return request({
        url:`/company/department/${id}`,
        method:'put'
    })
}

export function delDepart(){
    return request({
        url:`/company/department/${id}`,
        method:'delete'
    })
}

export function selectDepartDecil(){
    return request({
        url:`/company/department/${id}`,
        method:'get'
    })
}