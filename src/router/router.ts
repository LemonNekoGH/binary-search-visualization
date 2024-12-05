import { createMemoryHistory, createRouter } from 'vue-router'

import Welcome from "../components/Welcome.vue";
import BinaryDemo from "../components/BinaryDemo.vue";
import SelectionSort from '../components/SelectionSort.vue';

const routes = [
    {path: '/', redirect: 'home'},
    {path: '/home', name:'Home',component: Welcome},
    {path: '/demo', name: 'Demo',component: BinaryDemo},
    {path: '/selection-sort', name: 'SelectionSort', component: SelectionSort},
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export default router