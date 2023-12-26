/**
 * 用到的依赖:leaflet
 */
import MissingImg from './missing.png'
import * as L from 'leaflet'
import 'leaflet/dist/leaflet.css'

/**
 * 配置项
 * 缩放,默认true
 * 比例尺,默认false
 */
export type LeafletOptionsType = {
  showZoom?: boolean
  showScale?: boolean
}

/**
 * 初始化地图
 * @param mapId 地图dom的id
 * @param url 瓦片图的url
 * @param center 初始时的中心点
 * @returns
 * mapRef 地图实例
 * currentLnglat {lng:number,lat:number} 鼠标当前所在位置
 */
export const useLeaflet = (
  mapId: string,
  url: string,
  center: [number, number],
  options?: LeafletOptionsType
) => {
  const mapRef = ref()
  const currentLnglat = ref({
    lng: 0,
    lat: 0
  })
  // 视图范围
  const bounds = L.latLngBounds(L.latLng(-90, -180), L.latLng(90, 180))
  // 地图配置
  const osm = L.tileLayer(url, {
    maxNativeZoom: 15,
    maxZoom: 15,
    errorTileUrl: MissingImg
  })
  onMounted(() => {
    mapRef.value = L.map(mapId, {
      center,
      zoomControl: !(options && !options.showZoom),
      zoom: 13,
      minZoom: 0,
      maxZoom: 15,
      attributionControl: false,
      layers: [osm],
      maxBounds: bounds
    })
    /** 监听鼠标移动事件 */
    mapRef.value.on('mousemove', function (e: any) {
      currentLnglat.value.lat = e.latlng.lat.toFixed(5)
      currentLnglat.value.lng = e.latlng.lng.toFixed(5)
    })
    // 比例尺
    if (options?.showScale) {
      L.control.scale().addTo(mapRef.value)
    }
  })
  /** 卸载地图 */
  onBeforeUnmount(() => {
    mapRef.value.remove()
  })
  return { mapRef, currentLnglat }
}
