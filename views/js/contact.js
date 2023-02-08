$(() => {
    fetch("./js/contactinfo.txt")
    .then(data => data.text())
    .then(success)
    .catch(fail);

    function success(data) {
      $('#body').append(`<pre class="success">${data}</pre>`);
    }
    function fail(xhr, status, exception) {
      $('#body').append(`<pre class="fail">Failed to fetch data</pre>`);
    }
  });
  