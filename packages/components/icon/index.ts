import yIcon from './src/y-icon.vue'
import { withInstall } from '@y-animation/utils'
const YIcon = withInstall (yIcon)
export default {
    YIcon
}

export {
    YIcon,
    yIcon as yIconComponent
}