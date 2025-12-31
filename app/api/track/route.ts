function getClientIp(requestHeaders: Headers) {
  const forwardedFor = requestHeaders.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim();
  }

  return (
    requestHeaders.get("x-real-ip") ||
    requestHeaders.get("cf-connecting-ip") ||
    requestHeaders.get("x-vercel-forwarded-for") ||
    null
  );
}

function isLikelyBot(userAgent: string) {
  if (!userAgent) return true;

  return /bot|crawler|spider|crawling|headless|uptime|pingdom|curl|wget|python-requests/i.test(
    userAgent,
  );
}

export async function POST(request: Request) {
  const requestHeaders = request.headers;
  const ip = getClientIp(requestHeaders);
  const userAgent = requestHeaders.get("user-agent") ?? "";

  if (isLikelyBot(userAgent)) {
    return Response.json({ ok: false }, { status: 403 });
  }

  let payload: unknown = null;
  try {
    payload = await request.json();
  } catch {
    payload = null;
  }

  console.info("click-track", {
    ip,
    payload,
    userAgent,
    referer: requestHeaders.get("referer"),
  });

  return Response.json({ ok: true });
}
