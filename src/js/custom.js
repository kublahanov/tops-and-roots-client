/**
 * Сопоставление двух ссылок по их первым элементам
 * (от начала строки, до первого слэша).
 * @param firstLink {string}
 * @param secondLink {string}
 * @returns {boolean}
 */
function isLinksMatching(firstLink, secondLink) {
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
        if (menuElement.link !== undefined) {
          if (isLinksMatching(menuElement.link, targetLink)) {
            matchingMenuElement = menuElement;
          }
        }
      }
    }
  }

  return matchingMenuElement;
}

export { isLinksMatching, getMatchingMenuElement };
