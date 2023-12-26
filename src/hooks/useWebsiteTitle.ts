import { useTitle } from '@vueuse/core'
import { ConstKeys } from '@/enums/const-enums'
export const useWebsiteTitle = () => {
  const route = useRoute()
  const title = ref('')
  watch(
    () => route.path,
    () => {
      title.value = (route.meta.title as string) + ConstKeys.PROJECTNAME
      useTitle(title.value)
    },
    {
      immediate: true
    }
  )
}
