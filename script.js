function onClientLoad() {
    gapi.client.load('youtube', 'v3', onYouTubeApiLoad);
}

function onYouTubeApiLoad() {
    gapi.client.setApiKey('YOUR_API_KEY_HERE');
}
 
function search() {
    var request = gapi.client.youtube.search.list({
        part: 'snippet',
        q: 'ADD_QUERY_TERM_HERE'
    });
    request.execute(onSearchResponse);
}

function onSearchResponse(response) {
    console.log(response)
}