import request from '@/utils/request'

// 获取货币列表
export function getsCurrency(data) {
  return request({
    url: 'App/ChannelCurrency_ChannelCurrencyController/GetsCurrency',
    method: 'post',
    data
  })
}
