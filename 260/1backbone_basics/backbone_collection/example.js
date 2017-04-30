// var PostModel = Backbone.Model.extend({
//   collection: Posts,
//   initialize: function() {
//     // !this.get('id') && this.set('id', this.collection.nextID());
//   }
// });

// var Posts = Backbone.Collection.extend({
//   model: PostModel,
//   url: "http://jsonplaceholder.typicode.com/posts",
//   // last_id: 0,
//   // setLastID: function() {
//   //   if (this.isEmpty()) { return; }

//   //   this.last_id = this.last().get('id');
//   // },
//   // nextID: function() {
//   //   return ++last_id;
//   // },
//   // initialize: function() {
//   //   this.on('sync', this.setLastID);
//   // }
// })

// var blog_roll = new Posts();
// var new_post;

// blog_roll.fetch({
//   success: function(collection) {
//     new_post = blog_roll.create({
//       title: "My new blog post",
//       body: "This is my latest blog post. I hope you like it!",
//       userId: 1
//     });

//     // new_post.save();
//   }
// })

// // users.js
// var users_data = [{
//   id: 1,
//   name: "Leanne Graham"
// }, {
//   id: 2,
//   name: "Ervin Howell"
// }, {
//   id: 3,
//   name: "Clementine Bauch"
// }];

// var User = Backbone.Model.extend({});
// var Users = Backbone.Collection.extend({
//   model: User
// });
// var blog_authors;

// blog_authors = new Users();
// blog_authors.reset(users_data);

// // console.log(blog_authors.toJSON());

var PostModel = Backbone.Model.extend({
  urlRoot: "http://jsonplaceholder.typicode.com/posts",
})

var Posts = Backbone.Collection.extend({
  model: PostModel,
  url: "http://jsonplaceholder.typicode.com/posts"
})

var blog_roll = new Posts();

var new_post = blog_roll.add({
  title: "My New Blog Post",
  body: "This is my latest blog post. I hope you like it!",
  userID: 1
});

new_post.save();