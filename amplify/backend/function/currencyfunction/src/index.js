const axios = require('axios');

module.exports.handler = async (event, _context, callback) => {
  let apiUrl = `https://api.coinlore.com/api/tickers/?start=1&limit=10`;

  if (event.arguments) {
    const { start = 0, limit = 10 } = event.arguments;
    apiUrl = `https://api.coinlore.com/api/tickers/?start=${start}&limit=${limit}`;
  }

  try {
    const response = await axios.get(apiUrl);

    callback(null, response.data.data);

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: response.data.data,
        input: event,
      }),
    };
  } catch (error) {
    callback(error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'Could not fetch data',
        input: event,
      }),
    };
  }
};
