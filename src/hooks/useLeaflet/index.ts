import type { LatLngExpression } from 'leaflet'
import MissingImg from './missing.png'
import * as L from 'leaflet'
import 'leaflet/dist/leaflet.css'
/**
 * 初始化地图
 * @param url
 */
export const useLeaflet = (mapId: string, url: string, center: LatLngExpression) => {
  const mapRef = ref()
  const bounds = L.latLngBounds(L.latLng(-90, -180), L.latLng(90, 180))
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
  })
  return { mapRef }
}
