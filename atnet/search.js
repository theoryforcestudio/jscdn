---
---

$(document).ready(function() {

var idx = lunr(function() {
  this.ref('id');
  this.field('title', { boost: 6 });
  this.field('content', { boost: 8 });
  this.field('author');
  this.field('category');
  this.field('tags', { boost: 5 });

  {% assign count = 0 %}
  {% for post in site.posts %}
    this.add({
      title: {{post.title | jsonify}},
      content: {{post.content | strip_html | jsonify}},
      category: {{post.categories | jsonify}},
      tags: {{post.tags | jsonify}},
      author: {{post.author_name | jsonify}},
      id: {{count}}
    });
    {% assign count = count | plus: 1 %}
  {% endfor %}
  {% for post in site.strategy %}
    this.add({
      title: {{post.title | jsonify}},
      content: {{post.content | strip_html | jsonify}},
      category: {{post.categories | jsonify}},
      tags: {{post.tags | jsonify}},
      author: {{post.author_name | jsonify}},
      id: {{count}}
    });
    {% assign count = count | plus: 1 %}
  {% endfor %}
  {% for post in site.reviews %}
    this.add({
      title: {{post.title | jsonify}},
      content: {{post.content | strip_html | jsonify}},
      category: {{post.categories | jsonify}},
      tags: {{post.tags | jsonify}},
      author: {{post.author_name | jsonify}},
      id: {{count}}
    });
    {% assign count = count | plus: 1 %}
  {% endfor %}
  {% for post in site.glossary %}
    this.add({
      title: {{post.title | jsonify}},
      content: {{post.content | strip_html | jsonify}},
      category: {{post.categories | jsonify}},
      tags: {{post.tags | jsonify}},
      author: {{post.author_name | jsonify}},
      id: {{count}}
    });
    {% assign count = count | plus: 1 %}
  {% endfor %}
  {% for post in site.interviews %}
    this.add({
      title: {{post.title | jsonify}},
      content: {{post.content | strip_html | jsonify}},
      category: {{post.categories | jsonify}},
      tags: {{post.tags | jsonify}},
      author: {{post.author_name | jsonify}},
      id: {{count}}
    });
    {% assign count = count | plus: 1 %}
  {% endfor %}
  {% for post in site.pages %}
    this.add({
      title: {{post.title | jsonify}},
      content: {{post.content | strip_html | jsonify}},
      category: {{post.categories | jsonify}},
      tags: {{post.tags | jsonify}},
      author: {{post.author_name | jsonify}},
      id: {{count}}
    });
    {% assign count = count | plus: 1 %}
  {% endfor %}
  {% for post in site.howto %}
    this.add({
      title: {{post.title | jsonify}},
      content: {{post.content | strip_html | jsonify}},
      category: {{post.categories | jsonify}},
      tags: {{post.tags | jsonify}},
      author: {{post.author_name | jsonify}},
      id: {{count}}
    });
    {% assign count = count | plus: 1 %}
  {% endfor %}

});

var store = [{% for post in site.posts %}{
  'title': {{post.title | capitalize_all | jsonify}},
  'url': {{ post.url | jsonify }},
  'author': {{ post.author_name | jsonify }},
  'image': {{ post.image[0] | jsonify }},
  'date': {{ post.last_modified_at | date: '%B %-d, %Y' | jsonify }},
  'category': {{ post.categories[0] | prepend:'#'| jsonify }},
  'excerpt': {{ post.content | strip_html | truncatewords: 20 | jsonify }}
},{% endfor %}{% for post in site.strategy %}{
  'title': {{post.title | capitalize_all | jsonify}},
  'url': {{ post.url | jsonify }},
  'author': {{ post.author_name | jsonify }},
  'image': {{ post.image[0] | jsonify }},
  'date': {{ post.last_modified_at | date: '%B %-d, %Y' | jsonify }},
  'category': {{ post.layout | replace:'at-','' | replace:'col-','' | capitalize | jsonify }},
  'excerpt': {{ post.content | strip_html | truncatewords: 20 | jsonify }}
},{% endfor %}{% for post in site.reviews %}{
  'title': {{post.title | capitalize_all | jsonify}},
  'url': {{ post.url | jsonify }},
  'author': {{ post.author_name | jsonify }},
  'image': {{ post.image[0] | jsonify }},
  'date': {{ post.last_modified_at | date: '%B %-d, %Y' | jsonify }},
  'category': {{ post.layout | replace:'at-','' | replace:'col-','' | capitalize | jsonify }},
  'excerpt': {{ post.content | strip_html | truncatewords: 20 | jsonify }}
},{% endfor %}{% for post in site.glossary %}{
  'title': {{post.title | capitalize_all | jsonify}},
  'url': {{ post.url | jsonify }},
  'author': {{ post.author_name | jsonify }},
  'image': {{ post.image[0] | jsonify }},
  'date': {{ post.last_modified_at | date: '%B %-d, %Y' | jsonify }},
  'category': {{ post.layout | replace:'at-','' | replace:'col-','' | capitalize | jsonify }},
  'excerpt': {{ post.content | strip_html | truncatewords: 20 | jsonify }}
},{% endfor %}{% for post in site.interviews %}{
  'title': {{post.title | capitalize_all | jsonify}},
  'url': {{ post.url | jsonify }},
  'author': {{ post.author_name | jsonify }},
  'image': {{ post.image[0] | jsonify }},
  'date': {{ post.last_modified_at | date: '%B %-d, %Y' | jsonify }},
  'category': {{ post.layout | replace:'com-','' | replace:'col-','' | capitalize | jsonify }},
  'excerpt': {{ post.content | strip_html | truncatewords: 20 | jsonify }}
},{% endfor %}{% for post in site.pages %}{
  'title': {{post.title | capitalize_all | jsonify}},
  'url': {{ post.url | jsonify }},
  'author': {{ post.author_name | jsonify }},
  'image': {{ post.image[0] | jsonify }},
  'date': {{ post.last_modified_at | date: '%B %-d, %Y' | jsonify }},
  'category': {{ site.title | jsonify }},
  'excerpt': {{ post.content | strip_html | truncatewords: 20 | jsonify }}
},{% endfor %}{% for post in site.howto %}{
    'title': {{post.title | capitalize_all | jsonify}},
    'url': {{ post.url | jsonify }},
    'author': {{ post.author_name | jsonify }},
    'image': {{ post.image[0] | jsonify }},
    'date': {{ post.last_modified_at | date: '%B %-d, %Y' | jsonify }},
    'category': {{ post.layout | replace:'at-','' | replace:'col-','' | capitalize | jsonify }},
    'excerpt': {{ post.content | strip_html | truncatewords: 20 | jsonify }}
    }{% unless forloop.last %},{% endunless %}{% endfor %}
];

// define render results
function rendersearch( store, result, resultdiv ) {
  resultdiv.empty();
  if (!result) { resultdiv.append('<div class="row single-result center">No results.</div>'); }
  for (var item in result) {
    var ref = result[item]['ref'];
    var score = result[item]['score'];
    if (  !store[ref].title ) { continue; }
    if ( store[ref].author == null ) { store[ref].author = "AltcoinTrading"; }
    if ( store[ref].date == null ) { store[ref].date = "recently"; }

    if ( score > 23 ) {
      var searchitem =
        '<div class="row single-result">' +
        '<div class="columns four"><a href="' +
        store[ref].url +
        '"><div class="image-bg" style="background:url(' + store[ref].image + ');background-size:cover"></div></a></div>' +
        '<div class="columns eight"><b><a href="' +
        store[ref].url +
        '" class="post-title">' +
        store[ref].title +
        "</a></b><br>" + store[ref].excerpt + "<br><span class='soften'>In " +
        store[ref].category + " &middot; by " + store[ref].author + " &middot; Last updated " +
        store[ref].date + "</span></div></div>";
    } else {
      var searchitem =
        '<div class="row single-result"><b><a href="' +
        store[ref].url +
        '" class="post-title">' +
        store[ref].title +
        "</a></b><br>" + store[ref].excerpt + "<br><span class='soften'>In "+
        store[ref].category + " &middot; by " + store[ref].author + " &middot; Last updated " +
        store[ref].date + "</span></div>";
    }

    resultdiv.append(searchitem);
  }
}

// read url query
  let urlsearch = new URLSearchParams(window.location.search);
  urlsearch.has('query');
  let urlquery = urlsearch.get('query');

  if (urlquery) {
    var query = urlquery;
      if (!query) { resultdiv.empty(); }
    var resultdiv = $("#search-results");
    var result = idx.search(query);
    console.log(result);

    rendersearch( store, result, resultdiv );
  }

// read keyup
  $("input#site-search").on("keyup", function () {
    var query = $(this).val();
    if (!query) { resultdiv.empty(); }
    var resultdiv = $("#search-results");
    var result = idx.search(query);
    rendersearch( store, result, resultdiv );
  });

});
