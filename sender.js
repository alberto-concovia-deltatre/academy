
console.log('sender.js');

window['__onGCastApiAvailable'] = function (isAvailable) {
    console.log('onGCastApiAvailable');
    isAvailable = true;
    if (isAvailable) {
        initializeCastApi();
    }
};

initializeCastApi = function() {
    console.log('initialize success')
    console.log('cast : ',cast)
    cast.framework.CastContext.getInstance().
    setOptions({
      receiverApplicationId: chrome.cast.media.DEFAULT_MEDIA_RECEIVER_APP_ID
    });
  };

var castSession = cast.framework.CastContext.getInstance().getCurrentSession();
var mediaInfo = new chrome.cast.media.MediaInfo(currentMediaURL, contentType);
var request = new chrome.cast.media.LoadRequest(mediaInfo);
castSession.loadMedia(request).then(
  function() { console.log('Load succeed'); },
  function(errorCode) { console.log('Error code: ' + errorCode); });

var player = new cast.framework.RemotePlayer();
var playerController = new cast.framework.RemotePlayerController(player);


