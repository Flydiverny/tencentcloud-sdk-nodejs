/*
 * Copyright (c) 2018 THL A29 Limited, a Tencent company. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

/**
 * 接口能力扩展，用于填充电信的加速Token，并为未来参数提供兼容空间
 */
export interface Capacity {
  /**
   * 电信鉴权的Token。要加速的电信手机终端访问 http://qos.189.cn/qos-api/getToken?appid=TencentCloud 页面，获取返回结果中result的值
   */
  CTCCToken?: string

  /**
   * 终端所处在的省份，建议不填写由服务端自动获取，若需填写请填写带有省、市、自治区、特别行政区等后缀的省份中文全称
   */
  Province?: string
}

/**
 * 移动网络加速目标地址结构体
 */
export interface DestAddressInfo {
  /**
   * 加速业务目标 ip 地址数组
   */
  DestIp: Array<string>
}

/**
 * DeleteQos请求参数结构体
 */
export interface DeleteQosRequest {
  /**
   * 单次加速唯一 Id
   */
  SessionId: string
}

/**
 * 设备信息结构体
 */
export interface DeviceInfo {
  /**
      * 运营商
1：移动 
2：电信
3：联通
4：广电
99：其他
      */
  Vendor?: number

  /**
      * 设备操作系统：
1：Android
2： IOS
99：其他
      */
  OS?: number

  /**
      * 设备唯一标识
IOS 填写 IDFV
Android 填写 IMEI
      */
  DeviceId?: string

  /**
   * 用户手机号码
   */
  PhoneNum?: string

  /**
      * 无线信息
1：4G
2：5G
3：WIFI
99：其他
      */
  Wireless?: number
}

/**
 * DeleteQos返回参数结构体
 */
export interface DeleteQosResponse {
  /**
   * 单次加速唯一 Id
   */
  SessionId: string

  /**
   * 本次加速会话持续时间（单位秒）
   */
  Duration: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateQos返回参数结构体
 */
export interface CreateQosResponse {
  /**
   * 单次加速唯一 Id
   */
  SessionId: string

  /**
   * 当前加速剩余时长（单位秒）
   */
  Duration: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 移动网络加速源地址结构体
 */
export interface SrcAddressInfo {
  /**
   * 用户私网 ipv4 地址
   */
  SrcIpv4?: string

  /**
   * 用户公网 ipv4 地址
   */
  SrcPublicIpv4?: string

  /**
   * 用户 ipv6 地址
   */
  SrcIpv6?: string
}

/**
 * CreateQos请求参数结构体
 */
export interface CreateQosRequest {
  /**
   * 加速业务源地址信息，SrcIpv6和（SrcIpv4+SrcPublicIpv4）二选一，目前Ipv6不可用，全部填写以Ipv4参数为准。
   */
  SrcAddressInfo: SrcAddressInfo

  /**
   * 加速业务目标地址信息
   */
  DestAddressInfo: DestAddressInfo

  /**
      * 加速套餐
T100K：上/下行保障 100kbps
T200K：上/下行保障 200kbps
T400K：上/下行保障 400kbps
BD1M：下行带宽保障1Mbps
BD2M：下行带宽保障2Mbps
BD4M：下行带宽保障4Mbps
BU1M：上行带宽保障1Mbps
BU2M：上行带宽保障2Mbps
BU4M：上行带宽保障4Mbps
      */
  QosMenu: string

  /**
   * 申请加速的设备信息，包括运营商，操作系统，设备唯一标识等。
   */
  DeviceInfo?: DeviceInfo

  /**
   * 期望加速时长（单位分钟），默认值30分钟
   */
  Duration?: number

  /**
   * 接口能力扩展，如果是电信用户，必须填充CTCC Token字段
   */
  Capacity?: Capacity

  /**
   * 应用模板ID
   */
  TemplateId?: string
}
