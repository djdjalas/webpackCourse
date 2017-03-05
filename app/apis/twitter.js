const mockTweets = require('./mocks/MOCK_DATA');
module.exports = {
  getTweets() {
    return mockTweets;
  },
  getTweetsCount() {
    return mockTweets.length;
  }
};
