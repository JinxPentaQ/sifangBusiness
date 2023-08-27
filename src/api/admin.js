import request from '@/utils/request'

// 登录
export function login(data) {
  return request({
    url: 'App/Business_BusinessController/Login',
    method: 'post',
    data
  })
}
// 绑定谷歌验证器
export function createGoogleAuth(params) {
  return request({
    url: 'App/Business_BusinessController/CreateGoogleAuthenticator',
    method: 'post',
    params
  })
}
// 修改密码
export function modAdminPwd(params) {
  return request({
    url: 'App/Business_BusinessController/ModPwd',
    method: 'post',
    params
  })
}

export function getInfo() {
  return request({
    url: 'App/Business_BusinessController/GetInfo',
    method: 'post'
  })
}

export function getHomeData(params) {
  return request({
    url: 'App/Business_BusinessController/GetBusinessHome',
    method: 'post',
    params
  })
}
// 重置谷歌密钥
export function resetBusinessPK(params) {
  return request({
    url: 'App/Business_BusinessController/ResetBusinessPK',
    method: 'post',
    params
  })
}
// 设置商户后台登录白名单
export function modBusiness(params) {
  return request({
    url: 'App/Business_BusinessController/ModBusiness',
    method: 'post',
    params
  })
}
// admin 相关商户API配置白名单
export function modBusinessAPIConfig(params) {
  return request({
    url: 'App/Business_BusinessController/ModBusinessAPIConfig',
    method: 'post',
    params
  })
}