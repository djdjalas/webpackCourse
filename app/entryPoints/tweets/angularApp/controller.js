const twitterApi = require('Api/twitter');

module.exports = $scope => {
  $scope.tweets = twitterApi.getTweets();
  $scope.numberOfTweets = twitterApi.getTweetsCount();
};
