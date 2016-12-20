module.exports = {
	entry: './app/app', //главный файл
	output: {
		path: __dirname + '/app', //директорию в которой будет основной js файл сборки
		filename: './bundle.js' //название файла сборки
	},

	module: {
		loaders: [ //лоадеры для js, html и css файлов
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel-loader"
			},
			{
				test: /\.html$/,
				exclude: /node_modules/,
				loader: "raw-loader"
			},
			{
				test: /\.css$/,
				exclude: /node_modules/,
				loader: "style-loader!css-loader"
			}
	  ]
	},
	
	devServer: { //настройки локального сервера, запуск с LR и HMR webpack-dev-server --inline --hot
		host: 'localhost',
		port: 8080,
		contentBase: __dirname + '/app' //корневая директория сервера
	},
	
	watch: true, //наблюдение за файлами и в случае изменения, пересобирает основной файл сборки (bundle.js)
	
	watchOptions: { //для ускорения пересборки основного файла
		aggregateTimeout: 100 //по умолчанию 300
	}

};