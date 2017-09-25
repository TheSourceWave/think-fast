import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuetify from 'vuetify';
import Bounce from 'bounce.js';

import App from 'components/app.vue';
import Leaderboard from 'components/leaderboard.vue';
import GameOver from 'components/game-over.vue';

Vue.use(Vuetify);
Vue.use(VueRouter);

require('./style.sass');

const routes = [
  {path: '/', component: App},
  {path: '/leaderboard', component: Leaderboard},
  {path: '/gameover', component: GameOver}
]

const router = new VueRouter({
  mode: 'hash',
  routes: routes
});

const v = new Vue({
  router: router,
  el: '#app',
  data: {
    window: window,
    app: {
      name: '<span class="think-fast">ThinkFast!</span>'
    }, loading: {
      reload : false
    }
  }, methods: {
    reload() {
      this.loading.reload = true;
      window.location.reload(true);
    }
  }
});

var b = new Bounce()
.scale({
  from: {x:1.2, y:1.5},
  to: {x:3,y:3}
})
.translate({
  from: {x:0,y:0},
  to: {x:0,y:25}
})
.define('bounce-pulse');
