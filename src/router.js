import Router from 'vue-router'
import course from './views/courseList';
import addCourse from './views/add_course';
import newsList from './views/newsList';
import addNews from './views/addNews';
import deail from './views/newsDetail';
import classroom from './views/classroom';
import addRoom from './views/addRoom';
import teacher from './views/teacherList';
import addTeacher from './views/addTeacher';
import training from './views/training'
export default new Router({
	mode:'history',
	routes: [
		{
      path: '/',
      name: 'course',
      component: course
    },
    {
      path:'/newsList',
      name:'list',
      component:newsList
    },
    {
      path:'/addNews',
      name:'addNews',
      component:addNews
    },
    {
      path:'/add_course',
      name:'addCourse',
      component:addCourse
    },
    {
      path:'/deail',
      name:'newsDeail',
      component:deail
    },
    {
      path:'/room',
      name:'room',
      component:classroom
    },
    {
      path:'/addRoom',
      name:'addroom',
      component:addRoom
    },
    {
      path:'/teacher',
      name:'teacher',
      component:teacher
    },
    {
      path:'/addTeacher',
      name:'addTeacher',
      component:addTeacher
    },
    {
      path:'/training',
      name:'training',
      component:training
    }
	]
})
