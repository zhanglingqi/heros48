import VueRouter from 'vue-router';
import Vue from 'vue';
//导入路由
import HeroesList from '../views/heroes/List.vue';
import EquipsList from '../views/equips/List.vue';
import WeaponsList from '../views/weapons/List.vue';

// 注册VueRouter插件  this.$router  this.$route
Vue.use(VueRouter);

//创建路由对象
var router = new VueRouter({
  linkExactActiveClass: 'active',
  // 路由规则
  routes: [
	{ path: '/', redirect: '/heroes' },
    { name: 'heroes', path: '/heroes', component: HeroesList },
    { name: 'equips', path: '/equips', component: EquipsList },
    { name: 'weapons', path: '/weapons', component: WeaponsList }
  ]
});

//模块中导出
export default router;