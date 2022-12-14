import { createRouter, createWebHistory } from 'vue-router'
import Price from '../views/Price.vue'
import Home from '../views/Home.vue'
import Services from '../views/Services.vue'
import Contact from '../views/Contact.vue'
import privateLaw from '../views/privateLaw.vue'


const router = createRouter({
  scrollBehavior(to, from, savedPosition) { 
    if(to.params.scrollTo){
      return {
        top: to.params.top,
        el: to.params.scrollTo,
        behavior: 'smooth',
      }
    }
    else{
      return{
        top: 0,
        behavior: 'smooth',
      }
    }

  },
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
  {
    path: '/Cennik',
    name: 'Price',
    component: Price,
    meta: {
      title: 'Gabinet "Dobre Słowo" - Cennik',
    }
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Gabinet "Dobre Słowo" - Strona Główna'
    }
  },
  {
    path: '/Uslugi',
    name: 'Services',
    component: Services ,
    meta: {
      title: 'Gabinet "Dobre Słowo" - Usługi'
    }
  },
  {
    path: '/Kontakt',
    name: 'Contact',
    component: Contact,
    meta: {
      title: 'Gabinet "Dobre Słowo" - Kontakt'
    }
  },
  {
    path: '/Polityka-Prywatnosci',
    name: 'privateLaw',
    component: privateLaw,
    meta:{
      title: 'Gabinet "Dobre Słowo" - Polityka Prywatności'
    }
  }

  ]
})

router.beforeEach((to, from, next) =>{
  document.title = `${to.meta.title}`; 
  next();
})
export default router
