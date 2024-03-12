function subscribe() {
  var btn = document.getElementById('subscribeBtn');
  var message = document.getElementById('subscriptionMessage');
  if (btn.innerHTML === 'Subscribe Website') {
    btn.innerHTML = 'Subscribed!';
    message.style.display = 'block';
  }
}
