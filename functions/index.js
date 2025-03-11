export async function onRequest({ request, env, cf }) {
  const ipVersion = cf.ipVersion;
  const ipv6Url = 'https://v6git.jintongshu.com:8000';
  const ipv4Url = 'https://v4git.jintongshu.com:8443';
  const redirectUrl = ipVersion === 6 ? ipv6Url : ipv4Url;
  return Response.redirect(redirectUrl, 302);
}
