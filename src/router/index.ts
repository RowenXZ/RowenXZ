import Index from "../pages/index";
import Catch from "../pages/catch";
import Calling from "../pages/calling";
import Question from "../pages/question";
import Success from "../pages/success";
interface router {
    path:string,
    component:any,
    children?:Array<router>
}

const routers:Array<router> = [
    {
        path:'/',
        component: Index,
        // children:[
        //     {
        //         path:'/demo1',
        //         component:Demo1
        //     },
        //     {
        //         path:'/demo2',
        //         component:Demo2
        //     },
        //     {
        //         path:'/demo3',
        //         component:Demo3
        //     }
        // ]
    },
    {
        path:'/catch',
        component:Catch
    },
    {
        path:'/calling',
        component: Calling
    },
    {
        path:'/form',
        component: Question
    },
    {
        path:'/success',
        component: Success
    }
]
export default routers