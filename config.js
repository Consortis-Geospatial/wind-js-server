const config = {
    serverPort: process.env.PORT || 7000,
    millisecondsForRetriveNewData: process.env.MILLISECONDS || 900000 // 15 minutes
  }
  
  module.exports = config;
  