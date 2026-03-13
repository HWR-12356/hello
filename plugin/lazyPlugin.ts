import { useIntersectionObserver} from '@vueuse/core'

export const lazyPlugin = {
    install(app) {
        //懒加载指令逻辑
        app.directive('img-lazy', {
            mounted(el, binding) {
                // el: 指令绑定的那个元素 img
                //binding: binding.value指令等于号后面绑定的表达式的值 图url
                useIntersectionObserver(
                    el,
                    ([{ isIntersecting }]) => {
                        if (isIntersecting) {
                        // 进入视口区域
                        el.src = binding.value;
                        }
                    },
                )
            }
        })
    }
}