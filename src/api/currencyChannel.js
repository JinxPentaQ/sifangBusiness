import request from '@/utils/request'

// 获取货币列表
export function getsChannelCurrency(data) {
  return request({
    url: 'App/ChannelCurrency_ChannelCurrencyController/GetsChannelCurrency',
    method: 'post',
    data
  })
}


