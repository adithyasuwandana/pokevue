import Vue from 'vue'
import router from 'vue-router'
import home from './pages/Home.vue'
import pokemon from './pages/Pokemon.vue'

Vue.use(router)

const rout = new router({
    mode: 'history',
    routes:[
        {
            path:'/',
            name: 'home',
            component: home
        },
        {
            path: '/pokemon',
            name: 'pokemon',
            component : pokemon
        }
    ]
})

export default rout