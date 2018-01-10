function onClientLoad() {
    gapi.client.load('youtube', 'v3', onYouTubeApiLoad);
}

function onYouTubeApiLoad() {
    gapi.client.setApiKey('AIzaSyA0SK9csf6PTpkOYvxipgbK6EgMHxuIPIM');
}
 
function search() {
    var quesry = document.getElementById('query').value
    var request = gapi.client.youtube.search.list({
        part: 'snippet',
        q: query
    });
    request.execute(onSearchResponse);
}

function onSearchResponse(response) {
    console.log(response)
}