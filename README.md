# a11y-scripts

English
### Get links without accessible name (bookmarklet)
```javascript
javascript:(function () { function getLinkAccessibleName(element) { if (element.hasAttribute('aria-labelledby')) { const labelledById = element.getAttribute('aria-labelledby'); const labelledByElement = document.getElementById(labelledById); if (labelledByElement) { return labelledByElement.textContent.trim(); } } if (element.hasAttribute('aria-label')) { return element.getAttribute('aria-label').trim(); } let accessibleName = ""; function getLinkAccessibleNameRecursive(node) { if (node.nodeType === Node.TEXT_NODE) { accessibleName += node.textContent.trim() + " "; } else if (node.nodeType === Node.ELEMENT_NODE && node.tagName === "IMG" && node.hasAttribute("alt")) { accessibleName += node.getAttribute("alt").trim() + " "; } else if (node.hasChildNodes()) { node.childNodes.forEach(childNode => getLinkAccessibleNameRecursive(childNode)); } } getLinkAccessibleNameRecursive(element); accessibleName = accessibleName.trim(); if (accessibleName !== "") { return accessibleName; } if (element.hasAttribute('title')) { return element.getAttribute('title').trim(); } return null; } function getLinksWithoutAccessibleName(parentElement) { const links = parentElement.querySelectorAll('a'); const linksWithoutAccessibleName = []; links.forEach(link => { const accessibleName = getLinkAccessibleName(link); if (accessibleName === null) { linksWithoutAccessibleName.push(link); } }); return linksWithoutAccessibleName; } const linksWithoutAccessibleName = getLinksWithoutAccessibleName(document); alert( linksWithoutAccessibleName.length + " links without accessible name.\nSee the console for more details." ); console.log(linksWithoutAccessibleName.length + " links without accessible name :"); linksWithoutAccessibleName.forEach(link => { console.log(link); }); })();
```
Français
### Identifier les liens sans nom accessible (marque-page scripté/bookmarklet)
```javascript
javascript:(function () { function getLinkAccessibleName(element) { if (element.hasAttribute('aria-labelledby')) { const labelledById = element.getAttribute('aria-labelledby'); const labelledByElement = document.getElementById(labelledById); if (labelledByElement) { return labelledByElement.textContent.trim(); } } if (element.hasAttribute('aria-label')) { return element.getAttribute('aria-label').trim(); } let accessibleName = ""; function getLinkAccessibleNameRecursive(node) { if (node.nodeType === Node.TEXT_NODE) { accessibleName += node.textContent.trim() + " "; } else if (node.nodeType === Node.ELEMENT_NODE && node.tagName === "IMG" && node.hasAttribute("alt")) { accessibleName += node.getAttribute("alt").trim() + " "; } else if (node.hasChildNodes()) { node.childNodes.forEach(childNode => getLinkAccessibleNameRecursive(childNode)); } } getLinkAccessibleNameRecursive(element); accessibleName = accessibleName.trim(); if (accessibleName !== "") { return accessibleName; } if (element.hasAttribute('title')) { return element.getAttribute('title').trim(); } return null; } function getLinksWithoutAccessibleName(parentElement) { const links = parentElement.querySelectorAll('a'); const linksWithoutAccessibleName = []; links.forEach(link => { const accessibleName = getLinkAccessibleName(link); if (accessibleName === null) { linksWithoutAccessibleName.push(link); } }); return linksWithoutAccessibleName; } const linksWithoutAccessibleName = getLinksWithoutAccessibleName(document); alert( linksWithoutAccessibleName.length + " liens n'ont pas de nom accessible.\nVoir la console pour plus de détails." ); console.log(linksWithoutAccessibleName.length + " liens sans nom accessible :"); linksWithoutAccessibleName.forEach(link => { console.log(link); }); })();
```
