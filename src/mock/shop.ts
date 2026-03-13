import Mock,  {mock} from 'mockjs'
const Random = Mock.Random;

const tableData = mock({
    'data|1000': [
        {
            // 自增的 id
            'id|+1': 1,
            // 随机中文标题作为 name
            'name': '@ctitle(5, 15)',
            'categories|1': ['生鲜食品', '酒水冲饮', '美容护理',  '厨卫清洁', '手机数码'],
            // 10 - 999 之间的随机价格
            'price|10-999': 1,
            'images': Random.image('100x100', '#02adea', '#FFF', 'Mock.js'),
            // 0 - 9999 之间的随机库存
            'stock|0-9999': 1,
            'introduction': '@ctitle(10, 50)'
        }
    ]
})

mock('/api/table', 'post', (options: { body: string }) => {
    const {page, pageSize} = JSON.parse(options.body)
    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    const currentPageData = tableData.data.slice(start, end)
    return {
        code: 200,
        message: 'success',
        data: {
            list: currentPageData,
            total: tableData.data.length
        }
    }
})