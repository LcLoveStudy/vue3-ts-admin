/**
 * 用到的依赖:leaflet,leaflet-minimap
 */
import MiniMap from 'leaflet-minimap'
import * as L from 'leaflet'
import MissingImg from './missing.png'
/**
 * 创建鹰眼图
 * @param map 地图实例
 * @param url 鹰眼图url
 * @param position  鹰眼图所在位置 'bottomleft' | 'bottomright' | 'topleft' | 'topright'
 */
export const useMiniMap = (
  map: any,
  url: string,
  position: 'bottomleft' | 'bottomright' | 'topleft' | 'topright'
) => {
  const mapx = L.tileLayer(url, {
    maxNativeZoom: 11,
    maxZoom: 11,
    errorTileUrl: MissingImg
  })
  new MiniMap(mapx, {
    zoomAnimation: true,
    aimingRectOptions: {
      color: 'blue',
      weight: 1,
      fillColor: 'skyblue'
    }
  })
    .addTo(map)
    .setPosition(position)
}
