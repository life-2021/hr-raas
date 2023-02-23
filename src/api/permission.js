import request from '@utils/request'
//更新权限
export function updatePermission(data){
    return request({
        url:`/sys/permission/${id}`,
        method:'put',
        data
    })
}
//获取权限详情
export function getPermissionDetail(id){
    return request({
        url:`/sys/permission/${id}`,
    })
}
//删除权限
export function delPermission(id){
    return request({
        url:`/sys/permission/${id}`,
        method:'delete'
    })
}
//新增权限
export function addPermission(data){
    return request({
        url:'/sys/permission',
        method:'post',
        data
    })
}
//获取权限
export function getAllPermission(params){
    return request({
        url:'/sys/permission',
        params
    })
}