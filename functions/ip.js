/**
 * Returns the IP address for this request.
 */

exports.handler = async (event) => {
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers':
        'Origin, X-Requested-With, Content-Type, Accept',
    },
    body: JSON.stringify({
      ip:
        event.headers['client-ip'] !== '::1'
          ? event.headers['x-nf-client-connection-ip']
          : '127.0.0.1',
    }),
  }
}
