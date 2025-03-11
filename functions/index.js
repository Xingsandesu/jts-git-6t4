addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const ipVersion = request.cf.ipVersion
  const redirectURL = ipVersion === 6
    ? 'https://v6git.jintongshu.com:8443'
    : 'https://v4git.jintongshu.com:8000'

  return Response.redirect(redirectURL, 302)
}
