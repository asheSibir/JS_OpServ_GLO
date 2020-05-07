const path = require('path'); //сначала создаем в терминале npm i path -D!!!
module.export = {
    entry: { //точка входа
        main: './src/index.js',
    },
    output: { // точка выхода
        path: path.resolve(__dirname, './dist'), //папка с нашим проектом и dist
        filename: '[name].js', //имя файла, вот такой вариант для нескольких точек входа (input{})
        publicPath: '/dist' //без точки!
    }
}