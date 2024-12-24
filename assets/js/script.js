function showWhiteRose() {
  let rose = document.getElementById('whiterosevideo');
  if (rose.clientHeight == 480) {
    rose.style.width = '0';
    rose.style.height = '0';
  } else {
    rose.style.width = '640px';
    rose.style.height = '480px';
    rose.innerHTML = '<source src="./public/videos/dynamo.mp4" type="video/mp4"></source>'
  }
}

function blobString(htmlText) {
  var blob = new XMLHttpRequest();
  var url = "./assets/php/blob_string.php";
  blob.open("POST", url, true);
  blob.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  blob.onreadystatechange = function () {
    if (blob.readyState == 4 && blob.status == 200) {
      var response = blob.responseText;
      // Do stuff, likely report on success
    }
  }
  var text = htmlEntities(htmlText);
  blob.send("request=grab_blob&blob_text=" + htmlText);
}
function htmlEntities(text) {
  return String(text).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}


