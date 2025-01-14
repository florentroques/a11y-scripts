(function () {
    function isElementHiddenToAT(element) {
        if (
            element.hasAttribute('aria-hidden') &&
            element.getAttribute('aria-hidden') === 'true'
        ) {
            return true;
        }

        if (element.hasAttribute('hidden')) {
            return true;
        }

        const computedStyle = getComputedStyle(element);

        if (
            computedStyle.display === "none" ||
            computedStyle.visibility === "hidden" ||
            computedStyle.fontSize === "0px"
        ) {
            return true;
        }

        return false;
    }

    function getHiddenElementsToAT(parentElement) {
        const elements = parentElement.querySelectorAll('*');
        const hiddenElementsToAT = [];

        elements.forEach(element => {
            if (isElementHiddenToAT(element)) {
                hiddenElementsToAT.push(element);
            }
        });

        return hiddenElementsToAT;
    }

    const hiddenElementsToAT = getHiddenElementsToAT(document.body);
    const numberOfHiddenElementsToAT = hiddenElementsToAT.length;

    if (numberOfHiddenElementsToAT === 0) {
        alert("Aucun élément caché aux TA.");
        return;
    }

    let message = numberOfHiddenElementsToAT + " éléments cachés aux TA";

    if (numberOfHiddenElementsToAT === 1) {
        message = message.replace("éléments", "élément");
    }

    alert(message + ".\nVoir la console pour plus de détails.");
    console.log(message + " :");

    hiddenElementsToAT.forEach(element => {
        console.log(element);
    });
})();