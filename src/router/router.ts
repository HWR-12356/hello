import {createRouter, createWebHistory} from 'vue-router'
const Table = () =>  import('../pages/right/Right.vue')
const Table1 = () =>  import('../components/Person.vue')
const Modal = () => import('../components/Form.vue')
const routes = [
    {   
        path: '/table', 
        components: {
            default: Table,
            // namedView: Table1,
    }},
    {   name: 'person',
        path: '/modal',
        components: {
            default: Table1,
            // namedView: Table1,
        },
        meta: {
         keepAlive: true
        }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
})

export {router};