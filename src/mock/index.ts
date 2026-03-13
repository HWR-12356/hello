import { mock} from 'mockjs'
let num1 = 0;
let num2 = 0;
let num3 = 0;
let column = mock({
    "data|10": [ //随机生成10条数据
        {
            'key': function() {
                return 'column-' + num1++;
            },
            'dataKey': function() {
                return 'column-' + num2++;
            },
            'title': function() {
                return 'Column ' + num3++;
            },
             'width': 150
        }
    ],
    code: 200,
    message: 'ok'
})

let num = 0;
let row0 = 0;
let row1 = 0;
let row2 = 0;
let row3 = 0;
let row4 = 0;
let row5 = 0;
let row6 = 0;
let row7 = 0;
let row8 = 0;
let row9 = 0;
let data = mock({
    'data|1000': [ //随机生成1000个数据
        {
            'id': function() {

                return 'Row-' + num++;
            },
            'parentId': null,
            'column-0': function fn() {
                return 'Row-' + row0++ + ' Col 0'
            },
            'column-1': function() {
                let num = 0;
                return 'Row' + row1++ + '- Col 1'
            },
            'column-2': function() {
                let num = 0;
                return 'Row' + row2++ + '- Col 2'
            },
            'column-3': function () {
                let num = 0;
                return 'Row' + row3++ + '- Col 3'
            },
            'column-4': function () {
                let num = 0;
                return 'Row' + row4++ + '- Col 4'
            },
            'column-5': function () {
                let num = 0;
                return 'Row' + row5++ + '- Col 5'
            },
            'column-6': function () {
                let num = 0;
                return 'Row' + row6++ + '- Col 6'
            },            
            'column-7': function () {
                let num = 0;
                return 'Row' + row7++ + '- Col 7'
            },
            'column-8': function () {
                let num = 0;
                return 'Row' + row8++ + '- Col 8'
            },
            'column-9': function () {
                let num = 0;
                return 'Row' + row9++ + '- Col 9'
            },
        }
    ],
    totalPages: 10000
})



console.log(data, '---')

mock('/table/column', 'get', () => {
    return column
})

mock('/table/data', 'get', () => {
    return data
})
