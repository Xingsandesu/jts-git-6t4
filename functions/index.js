export async function onRequest({ request, env, cf }) {
  // 直接从 cf 对象获取 IP 版本
  const ipVersion = cf.ipVersion;
  
  // 设置重定向目标
  const ipv6Url = 'https://v6git.jintongshu.com:8000'; // 替换为您的 IPv6 目标网址
  const ipv4Url = 'https://v4git.jintongshu.com:8443'; // 替换为您的 IPv4 目标网址
  
  // 根据 IP 版本决定重定向地址
  const redirectUrl = ipVersion === 6 ? ipv6Url : ipv4Url;
  
  // 创建重定向响应
  return Response.redirect(redirectUrl, 302);
}
