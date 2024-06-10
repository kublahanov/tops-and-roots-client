import { useRouter } from "vue-router";

/**
 * Сопоставление двух ссылок по их первым элементам
 * - секциям (от начала строки, до первого слэша).
 * @param firstLink {string}
 * @param secondLink {string}
 * @returns {boolean}
 */
function isLinksSectionsMatching(firstLink, secondLink) {
  const firstLinkArray = firstLink.replace(/^\/+|\/+$/g, "").split("/");
  const secondLinkArray = secondLink.replace(/^\/+|\/+$/g, "").split("/");
  return firstLinkArray[0] === secondLinkArray[0];
}

/**
 * Получение нужной секции из списка меню,
 * по результатам сравнения с текущим URL.
 * @param menuArray {array}
 * @param targetLink {string}
 * @returns {null|object}
 */
function getMatchingMenuElement(menuArray, targetLink) {
  let matchingMenuElement = null;

  if (menuArray instanceof Array) {
    for (const menuElement of menuArray) {
      if (menuElement instanceof Object) {
        if (menuElement.linkName !== undefined) {
          if (isLinksSectionsMatching(calculateHref(menuElement.linkName), targetLink)) {
            matchingMenuElement = menuElement;
          }
        }
      }
    }
  }

  return matchingMenuElement;
}

/**
 * Вычисляемый (исходя из именованного роута) путь.
 */
function calculateHref(linkName) {
  try {
    const router = useRouter();
    const resolvedRoute = router.resolve({ name: linkName });
    return resolvedRoute ? resolvedRoute.path : "#";
  } catch (error) {
    console.error("Failed to resolve route (" + linkName + "): ", error);
    return "#";
  }
}

export { isLinksSectionsMatching, getMatchingMenuElement, calculateHref };
