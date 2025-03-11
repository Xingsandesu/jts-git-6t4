export async function onRequest({ request, env }) {
  try {
    const clientIP = request.headers.get('cf-connecting-ip');
    const isIPv6 = clientIP && clientIP.includes(':');
    const ipv6Url = "https://v6git.jintongshu.com:8000"; // IPv6
    const ipv4Url = "https://v4git.jintongshu.com:8443"; // IPv4
    const redirectUrl = isIPv6 ? ipv6Url : ipv4Url;
    console.log(`客户端 IP: ${clientIP}, 是否 IPv6: ${isIPv6}, 重定向到: ${redirectUrl}`);
    return Response.redirect(redirectUrl, 302);
  } catch (error) {
    console.error(`处理请求时出错: ${error.message}`);
    return new Response("发生错误，请刷新页面重试", {
      status: 500,
      headers: { "Content-Type": "text/plain;charset=UTF-8" }
    });
  }
}
