function loadHead(event) {
    /*var newPageId = event.currentTarget.dataset.id.toLowerCase();

    if (currentPageObject.id === newPageId) {
        return;
    }

    fetch(`src/${newPageId}/${newPageId}.html`, {
        headers: {
            'Content-type': 'text/html'
        }
    }).*/
    fetch(`../head/head.html`, {
        headers: {
            'Content-type': 'text/html'
        }
    }).
    then(function resolved(result) {
        return result.text();
    }). 
    then(function resolved(result) {
        var parser = new DOMParser();

        var documentToLoad = parser.parseFromString(result, "text/html")

        addHead(documentToLoad);
    }).
    catch(function rejected(error) {
        console.log(error);
    })
}

// add routes for css in js.
function addHead(documentToLoad) {
    var headToLoad = documentToLoad.getElementsByTagName("head")[0];

    var head = document.getElementsByTagName("head")[0];
    head.innerHTML = headToLoad.innerHTML;
}

loadHead();