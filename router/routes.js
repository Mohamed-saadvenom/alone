import { createWebHistory, createRouter } from 'vue-router'
import DashboardPage from '@/components/DashboardPage.vue'
import MoivePage from '@/components/MoivePage.vue'
import SeriePage from '@/components/SeriePage.vue'
import InfoPage from '@/components/InfoPage.vue'
import SeriesInfo from '@/components/SeriesInfo.vue'
import FindMoviePage from '@/components/FindMoviePage.vue'
import FindAllSeriesPage from '@/components/FindAllSeriesPage.vue'
import LogIN from '@/components/LogIN.vue'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
const routes = [

  { path: "/", component: LogIN },
  { path: '/DashboardPage', component: DashboardPage, name: 'dashboardpage', meta: { requiresAuth: true } },
  { path: '/MoviePage', component: MoivePage, meta: { requiresAuth: true } },
  { path: '/SeriesPage', component: SeriePage, meta: { requiresAuth: true } },

  { path: '/InfoPage/:id', component: InfoPage, name: 'infopage', meta: { requiresAuth: true } },
  { path: '/SeriesInfo/:id', component: SeriesInfo, name: 'seriesinfo', meta: { requiresAuth: true } },
  { path: '/FindMoviePage/:keyword', component: FindMoviePage, meta: { requiresAuth: true } },
  { path: "/FindAllSeriesPage/:keyword", component: FindAllSeriesPage, meta: { requiresAuth: true } }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})
const getcurrentuser = () => {
  return new Promise((resolve, reject) => {
    const removelistener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removelistener();
        resolve(user)
      },
      reject
    )
  })
}
router.beforeEach(async (to, from, next) => {


  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (getcurrentuser) {
      console.log('User authenticated, proceeding to next');
      next();
    } else {
      console.log('User not authenticated, redirecting to /');
      next("/");
    }
  } else {
    console.log('No auth required, proceeding to next');
    next();
  }
});
export default router