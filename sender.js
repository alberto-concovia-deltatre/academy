window['__onGCastApiAvailable'] = function(isAvailable) {
    if (isAvailable) {
      initializeCastApi();
    }
  };


initializeCastApi = function() {
    cast.framework.CastContext.getInstance().setOptions({
      receiverApplicationId: applicationId,
      autoJoinPolicy: chrome.cast.AutoJoinPolicy.ORIGIN_SCOPED
    });
  };