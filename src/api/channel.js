import request from '@/utils/request'

// 获取货币列表
export function getsChannel(data) {
  return request({
    url: 'App/ChannelCurrency_ChannelCurrencyController/getsChannel',
    method: 'post',
    data
  })
}