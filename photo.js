FB.api(
  '/17841434273658865/media',
  'GET',
  {"fields":"id,media_url,thumbnail_url,permalink"},
  function(response) {
      // Insert your code here
      $.ajax({
        type: 'GET',
        url: 'https://graph.facebook.com/v8.0/17841434273658865?fields=name%2Cmedia.limit(5)%7Bcaption%2Clike_count%2Cmedia_url%2Cpermalink%2Cthumbnail_url%7D&access_token=EAAVeXxsR9D8BAOj6c1ZCTv5pD9XQXUvhGALrM8RRcQh892fEk54PougvZBtQk1ad2qnbrdnO67CTkxFSd6BZAign0m2jgprvGwmZCIGhpQv0YZCyw9QNVaHuUhVEFvphwTfZC8rK6QihbHTqi1RFSfWOYZBnsW8s5bfTEWjtZCazY5w66ri2jq79',
        dataType: 'json',
         success: function(json) {
        var ig = json.media.data;
        var html = "";
        for (var i = 0; i < ig.length; i++) {
        var link = ig[i].permalink;
        var image
        if(!ig[i].thumbnail_url) {
        // 動画の場合はこちら
        image = ig[i].media_url;}
        else {
        // 写真の場合はこちら
        image = ig[i].thumbnail_url;
        }
        html += '<div><a href="' + link + '" target="_blank"><img src="' + image + '"></a></div>'
        }
        $(".instagram").append(html);
        }
        });
  }
);

 
https://graph.facebook.com/v10.0/17841434273658865?fields=name%2Cmedia.limit(18)%7Bcaption%2Cmedia_url%2Cthumbnail_url%2Cpermalink%7D&access_token=EAAVeXxsR9D8BANL1ZA1asjZAs5Cqq6Ds0BxtjWuhyRDazZC8cFoChTwSZBdzVZCJHuPnGGBJ9NGXylEJcXwVO1AsFv4bNIBZAy3H9ZAxt1b6hPzX6ZCgvVM1xhY30ZCIDzxClEkkc4ItwqD8XxgWk7GzVXnwA2zqZA0vjFvDznZAfmI4pL1XCKhoil1YRunyYZCX8F1tZCk0ZAJrxUxgZDZD_