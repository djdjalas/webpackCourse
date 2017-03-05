const appConfig = require('appConfig');

function print(prop: string) {
  console.log(prop);
};

print(appConfig.app.owner);
print(appConfig.app.leadDev.name);
//print(2);
