import { createApp } from 'vue'

import Cookies from 'js-cookie'

import 'normalize.css/normalize.css'

import ElementPlus from 'element-plus'
//
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

// 数据字典
import dict from './components/Dict'

// 权限指令
import checkPer from '@/utils/permission'
import permission from './components/Permission'
import './assets/styles/element-variables.scss'
// global css
import './assets/styles/index.scss'

// 代码高亮
import VueHighlightJS from 'vue-highlightjs'
import 'highlight.js/styles/atom-one-dark.css'

import App from './App'
import store from './store'
import router from './router/routers'

import SvgIcon from '@/components/SvgIcon'
import './assets/icons' // icon
import './router/index' // permission control
import 'echarts-gl'

const app = createApp(App)
app.use(store)
app.use(router)
app.use(checkPer)
app.use(VueHighlightJS)
app.use(mavonEditor)
app.use(permission)
app.use(dict)
app.use(SvgIcon)
app.use(ElementPlus, { size: Cookies.get('size') || 'small' })
app.config.productionTip = false
app.mount('#app')
