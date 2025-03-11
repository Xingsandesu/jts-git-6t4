export async function onRequest({ request, env }) {
  try {
    const clientIP = request.headers.get('cf-connecting-ip');
    const isIPv6 = /^[0-9a-f:]+$/i.test(clientIP);
    const ipv6Url = "https://v6git.jintongshu.com:8000";
    const ipv4Url = "https://v4git.jintongshu.com:8443";
    const url = new URL(request.url);
    const forceV4 = url.searchParams.has('v4');
    const forceV6 = url.searchParams.has('v6');
    let redirectUrl;
    if (forceV6) {
      redirectUrl = ipv6Url;
    } else if (forceV4) {
      redirectUrl = ipv4Url;
    } else if (isIPv6) {
      redirectUrl = ipv6Url;
    } else {
      redirectUrl = ipv4Url;
    }
    return Response.redirect(redirectUrl, 302);
  } catch (error) {
    console.error(`处理请求时出错: ${error.message}`);
    return new Response("发生错误，请刷新页面重试", {
      status: 500,
      headers: { "Content-Type": "text/plain;charset=UTF-8" }
    });
  }
}
