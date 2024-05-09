import { useTitle } from '@vueuse/core'
import { ConstEnums } from '@/enums/const-enums'
export const useWebsiteTitle = () => {
  const route = useRoute()
  const title = ref('')
  watch(
    () => route.path,
    () => {
      title.value = (route.meta.title as string) + ConstEnums.PROJECT_NAME
      useTitle(title.value)
    },
    {
      immediate: true
    }
  )
}
