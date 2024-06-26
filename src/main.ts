import { createApp } from 'vue';
// global css

import '@/assets/styles/index.scss';
import 'element-plus/theme-chalk/dark/css-vars.css';
import 'uno.css';
import 'amfe-flexible'; //postcss
import './utils/rem';
import ECharts from 'vue-echarts';
// App、router、store
import App from './App.vue';
import store from './store';
import router from './router';

// 自定义指令
import directive from './directive';

// 注册插件
import plugins from './plugins/index'; // plugins
import { download } from '@/utils/request';

// 预设动画
import animate from './animate';

// svg图标
import 'virtual:svg-icons-register';
import ElementIcons from '@/plugins/svgicon';

// permission control
import './permission';

import { useDict } from '@/utils/dict';
import { getConfigKey, updateConfigByKey } from '@/api/system/config';
import { parseTime, addDateRange, handleTree, selectDictLabel, selectDictLabels } from '@/utils/ruoyi';

// 国际化
import i18n from '@/lang/index';

const app = createApp(App);
// 全局方法挂载
app.config.globalProperties.useDict = useDict;
app.config.globalProperties.getConfigKey = getConfigKey;
app.config.globalProperties.updateConfigByKey = updateConfigByKey;
app.config.globalProperties.download = download;
app.config.globalProperties.parseTime = parseTime;
app.config.globalProperties.handleTree = handleTree;
app.config.globalProperties.addDateRange = addDateRange;
app.config.globalProperties.selectDictLabel = selectDictLabel;
app.config.globalProperties.selectDictLabels = selectDictLabels;
app.config.globalProperties.animate = animate;

// echart响应式布局
app.config.globalProperties.$echartsResize = function (chartRef: any) {
  window.addEventListener('resize', function () {
    if (chartRef && chartRef.value) {
      chartRef.value.resize();
    }
  });
};

app.component('v-chart', ECharts);
app.use(ElementIcons);
app.use(router);
app.use(store);
app.use(i18n);
app.use(plugins);
// 自定义指令
directive(app);

app.mount('#app');
