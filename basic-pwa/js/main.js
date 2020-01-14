(function(){
  if ("serviceWorker" in navigator){
    window.addEventListener("load", function(){
      navigator.serviceWorker.register("./js/serviceWorker.js")
        .then(function(){
          console.log("registered...");
        }, function(fail){
          console.log("failed...");
        })
        .catch(function(err){
          console.log(err)
        });
    });
  }
})()
