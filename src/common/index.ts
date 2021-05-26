// 异步加载组件
export const _import = (file: string) => ():unknown => import('@/views/' + file)
export const _importLayout = () => ():unknown => import('@/components/Layout/index.vue')
