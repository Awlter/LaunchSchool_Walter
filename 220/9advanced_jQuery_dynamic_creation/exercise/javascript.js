var post = {
  title: 'Lorem ipsum dolor sit amet',
  published: 'April 1, 2015',
  body: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
};

post.body = "<em>" + post.body + "</em>";
post.tags = ['Food', 'Style', 'Magzine'];

var posts = [];

posts.push(post);

posts.push({
  title: 'Wo shi yi ge da daozei',
  published: "March 3, 2000",
  body: 'Woshen meye bupa, shenghuo duozizai chengtian lehaha Woshen meye bupa, shenghuo duozizai chengtian lehaha Woshen meye bupa, shenghuo duozizai chengtian lehaha Woshen meye bupa, shenghuo duozizai chengtian lehaha'
})

$(function() {
  var template = Handlebars.compile($('#post').html());
  var tag = Handlebars.compile($('#tag').html());

  Handlebars.registerPartial('tag', $('#tag').html());
  $('body').append(template({posts: posts}));

})