


$(document).ready(function () {
  let xhr = new XMLHttpRequest();
  let repxhr = new XMLHttpRequest();
  // method = "GET",
  // url = "https://api.github.com/users/EricStCe";
  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let gitHubObj = JSON.parse(this.responseText);

      $("#name").text(gitHubObj.name);
      $(".mainImg img").attr("src", gitHubObj.avatar_url);
      $("#bio").text(gitHubObj.bio);






      $(".gitHublink").click(function () {
        window.open(gitHubObj.html_url, '_blank');
      });
      $(".gitHublink").hover(function () {
        $(this).width("75");
      }, function () {
        $(this).width("45");
      });
      $(".faceLink").click(function () {
        window.open("https://www.facebook.com/eric.cesena", '_blank');
      });
      $(".faceLink").hover(function () {
        $(this).width("85");
      }, function () {
        $(this).width("65");
      });
      $(".twitLink").click(function () {
        window.open("https://twitter.com/EPSC30", '_blank');
      });
      $(".twitLink").hover(function () {
        $(this).width("75");
      }, function () {
        $(this).width("45");
      });
      $(".linkEd").click(function () {
        window.open("https://www.linkedin.com/in/ericcesena/", '_blank');
      });
      $(".linkEd").hover(function () {
        $(this).width("60");
      }, function () {
        $(this).width("30");
      });


    }
  }
  repxhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let gitRepo = JSON.parse(this.responseText);
      $.each(gitRepo, function (key, value) {
        $("#listing").append("<li>" + value.name + "</li>");
        $("#listing li").click(function () {
          window.open(value.html_url, '_blank');
        })
      });
      console.log(gitRepo[ 0 ]);
    }
  }

  xhr.open("GET", "https://api.github.com/users/EricStCe", true);
  xhr.send();
  repxhr.open("GET", "https://api.github.com/users/EricStCe/repos", true);
  repxhr.send();
});

