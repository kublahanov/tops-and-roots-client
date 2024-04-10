function findAndGetLinkMatchingHref(links, href) {
  if (links.isArray) {
    return links.find((link) => href.startsWith(link.link));
  }
}

function checkLinkMatchCurrentUrl(currentUrl, link) {
  const currentUrlArray = currentUrl.replace(/^\/+|\/+$/g, "").split("/");
  const linkArray = link.replace(/^\/+|\/+$/g, "").split("/");
  return currentUrlArray[0] === linkArray[0];
}

export { findAndGetLinkMatchingHref, checkLinkMatchCurrentUrl };
