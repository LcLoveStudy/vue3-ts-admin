/**
 * 用到的依赖:leaflet,@types/leaflet
 */
import MissingImg from './missing.png'
import * as L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { useMiniMap } from './useMiniMap'
/**
 * 配置项
 * showZoom:缩放控件,默认true
 * showScale:比例尺控件,默认false
 * miniMap:鹰眼图控件{ show:默认false,position:位置 }
 */
export type LeafletOptionsType = {
  showZoom?: boolean
  showScale?: boolean
  miniMap?: {
    show?: boolean
    position?: 'bottomleft' | 'bottomright' | 'topleft' | 'topright'
  }
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
      zoomControl:
        (options && options.showZoom === undefined) || (options && options.showZoom) || !options,
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
    // 鹰眼图
    if (options?.miniMap?.show) {
      useMiniMap(
        mapRef.value,
        url,
        options && options.miniMap && options.miniMap.position
          ? options.miniMap.position
          : 'bottomleft'
      )
    }
  })
  /** 卸载地图 */
  onBeforeUnmount(() => {
    mapRef.value.remove()
  })
  return { mapRef, currentLnglat }
}
export * from './useMiniMap'
