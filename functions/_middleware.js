addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const ipVersion = request.cf.ipVersion
  const redirectURL = ipVersion === 6
    ? 'https://v6git.jintongshu.com'
    : 'https://v4git.jintongshu.com'

  return Response.redirect(redirectURL, 302)
}
