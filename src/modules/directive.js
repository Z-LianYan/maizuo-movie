

import Vue from 'vue'

let handlers = {
    'scroll-hide': (el,binding,context,e) => {
        //距离
        let distance = el.getAttribute('scroll-hide-distance')
        if (document.documentElement.scrollTop > distance) {
            //更改数据为true
            if(!context[binding.expression]){
                context[binding.expression] = true;
            }
            return false;
        }else{
            if(context[binding.expression]){
                context[binding.expression] = false;
            }
            return false;
        }
    },
    'back-top': () => {
        document.documentElement.scrollTop = 0
    }
}


//传入一个数据，在某一个时刻去改为true/false
Vue.directive('scroll-hide',{
    // bind (el,binding,vnode) {
    //     console.log(el,binding,vnode)
    //     console.log(vnode.context)
    // },
    bind (el,binding,{context}) {
        //在这里给window绑定scroll事件监听
        window.addEventListener('scroll', handlers[binding.name].bind(this,el,binding,context))
    },
    unbind (el,binding) {
        //当使用指令的元素或者组件被销毁的时候会执行
        window.removeEventListener('scroll',handlers[binding.name])
    }
})


Vue.directive('back-top', {
    //因为使用组件的元素可能会被不断的切换，bind只执行一次，再切换显示组件的时候相当于又创建了新的元素，需要重新绑
    inserted (el, binding) {
       
        let event_type = binding.arg || 'click'
        el.addEventListener(event_type,function () {
            console.log(1)
            handlers[binding.name]()
        })
    },
    unbind (el, binding) {
        let event_type = binding.arg || 'click'
        el.removeEventListener(event_type,handlers[binding.name])
    }
})