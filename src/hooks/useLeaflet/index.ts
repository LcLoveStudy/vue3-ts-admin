import type { LatLngExpression } from 'leaflet'
import MissingImg from './missing.png'
import * as L from 'leaflet'
import 'leaflet/dist/leaflet.css'
/**
 * 初始化地图
 * @param mapId 地图dom的id
 * @param url 瓦片图的url
 * @param center 初始时的中心点
 * @returns
 * mapRef 地图实例
 * currentLnglat 鼠标当前所在位置
 */
export const useLeaflet = (mapId: string, url: string, center: LatLngExpression) => {
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
      zoomControl: true,
      zoom: 13,
      minZoom: 0,
      maxZoom: 15,
      attributionControl: false,
      layers: [osm],
      maxBounds: bounds
    })
    mapRef.value.on('mousemove', function (e: any) {
      currentLnglat.value.lat = e.latlng.lat.toFixed(5)
      currentLnglat.value.lng = e.latlng.lng.toFixed(5)
    })
  })
  return { mapRef, currentLnglat }
}
