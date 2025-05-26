
const microApps = [
    {
        name: 'test', // 子应用名称
        entry: 'http://localhost:7663/', //子应用运行地址
        activeRule: '/test-web',//匹配的路由
        sanbox: true //解决css冲突
    },
    {
        name: 'sub-vite', // app name registered
        entry: 'http://127.0.0.1:3002/sub-vite/', //项目地址
        activeRule: '/sub-vite',
        sanbox: true //解决css冲突
    },
]

const apps = microApps.map(item => {
    return {
        ...item,
        container: '#test-web', // 子应用挂载的div
        props: {
            routerBase: item.activeRule // 下发基础路由
        }
    }
})

export default apps
