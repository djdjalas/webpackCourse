# webpackCourse

## Installation
> Install npm https://nodejs.org/en/ & yarn https://yarnpkg.com/en/
```sh
$ cd webpackCourse
$ yarn
$ yarn run
```

```javascript
{
  "webpackfromterminal": "webpack ./app.js ./bundle.js",
  "webpack": "webpack",
  "webpack-dev-server": "webpack-dev-server",
  "webpack:build-development": "webpack --env=development",
  "webpack:serve-development": "webpack-dev-server --env=development",
  "webpack:build-production": "webpack --env=production",
  "webpack:serve-production": "webpack-dev-server --env=production",
  "serve-local:production": "cd build-prod; http-server -p 8000 -o",
  "serve-local:development": "cd build-dev; http-server -p 7000 -o",
  "surge-deploy:production": "yarn run webpack:build-production; surge -p build-prod -d prod-webpack-course.surge.sh",
  "surge-deploy:development": "yarn run webpack:build-development; surge -p build-dev -d dev-webpack-course.surge.sh",
  "surge-deploy:all": "yarn run surge-deploy:production; yarn run surge-deploy:development"
}
```
