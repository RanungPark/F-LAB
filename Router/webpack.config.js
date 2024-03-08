const path = require('path');

module.exports = {
  entry: ['@babel/polyfill', './src/App.js'], // 진입점(entry point) 파일 경로
  output: {
    path: path.resolve(__dirname, 'dist'), // 번들링된 파일의 출력 경로
    filename: 'js/bundle.js' // 번들링된 파일의 이름
  },
  module: {
    rules: [
      {
        test: /\.js$/, // JavaScript 파일에 대한 로더를 설정
        include: [
          path.resolve(__dirname, 'src/js')
        ],
        exclude: /node_modules/, // 번들링에서 제외할 경로
        use: {
          loader: 'babel-loader', // 바벨 로더를 사용하여 ES6+ 코드를 변환
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-class-properties']
          },
        }
      }
    ]
  },
  devtool: 'source-map',
  mode: 'development'
};