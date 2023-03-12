import { App } from 'vue'
import { yButton } from './botton'
import { yLoading } from './loading'
import {yInput} from './input'
import { YIcon } from './icon'


export {
    yButton,
    yLoading,
    yInput,
    YIcon
}
const components =  [
    yButton,
    yLoading,
    yInput,
    YIcon
]


// 全局注册

const install = (app:App<Element>)=>{
    components.forEach((item)=>{
        app.use(item)
    })
}

export default install

