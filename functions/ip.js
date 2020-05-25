/**
 * Returns the IP address for this request.
 */
exports.handler = (event, context, callback) => {
  callback(null, {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers':
        'Origin, X-Requested-With, Content-Type, Accept'
    },
    body: JSON.stringify({
      ip:
        event.headers['client-ip'] !== '::1'
          ? event.headers['client-ip']
          : '127.0.0.1'
    })
  })
}