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
import training from './views/training';
import addTrain from './views/addTrain';
import planTrain from './views/planTrain';
import trainVideo from './views/trainVideo';
import addTrainVideo from './views/addTrainVideo';
import grades from './views/grades';
import course_Detail from './views/coures_detail';
import treeList from './views/treeList'

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
        },
        {
            path:'/addTrain',
            name:'addTrain',
            component:addTrain
        },
        {
            path:'/planTrain',
            name:'planTrain',
            component:planTrain
        },
        {
            path:'/trainVideo',
            name:'trainVideo',
            component:trainVideo
        },
        {
            path:'/addTrainVideo',
            name:'addTrainVideo',
            component:addTrainVideo
        },
        {
            path:'/grades',
            name:'grades',
            component:grades
        },
        {
            path:'/course_Detail',
            name:'addDetail',
            component:course_Detail
        },
        {
            path:'/treeList',
            name:'tree',
            component:treeList
        }
	]
})
