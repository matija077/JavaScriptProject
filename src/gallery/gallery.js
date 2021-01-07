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
        /*var reader = result.body.getReader();*/
        var parser = new DOMParser();
        console.log(result);

        var documentToLoad = parser.parseFromString(result, "text/html")
        console.dir(documentToLoad);

        addHead(documentToLoad);
    }).
    catch(function rejected(error) {
        console.log(error);
    })
}

// add routes for css in js.
// css doesnt load
function addHead(documentToLoad) {
    var headToLoad = documentToLoad.querySelector("head");
    console.log(headToLoad);

    var head = document.querySelector("head");
    head.innerHTML = headToLoad.innerHTML;
}

loadHead();