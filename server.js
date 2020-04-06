// Require Node's http module and assign it to a variable
var http = require('http')

// Create a new server that just says "Hi!!" at every route
var server = http.createServer(function (request, response) {
  if (request.url === '/') {
    response.end(
      '<h1>Hello!</h1>' +
      '<img src="https://emojis.wiki/thmbs/hugging-face.png" alt="waving emoji">' +
      '<h2>Welcome to the homepage :-)</h2>' +
      '<p>Have some fun and browse around this server!<br>' +
      '<em>Hint: try /random-joke and /cuteness</em></p>'
    )
  } else if (request.url === '/random-joke') {
    var randomNumber = Math.random()
    if (randomNumber > 0.7) {
      response.end(
        '<h1>Want to hear a joke?</h1>' +
        '<p>Doctor: &ldquo; I&rsquo;m sorry but you suffer from a terminal illness and have only 10 to live.&rdquo;<br>' +
        'Patient: &ldquo;What do you mean, 10? 10 what? Months? Weeks?!&rdquo;<br>' +
        'Doctor: &ldquo;Nine.&rdquo;</p>' +
        '<a href="/">Go back to homepage</a>'
      )
    } else if (randomNumber > 0.5) {
      response.end(
        '<h1>Want to hear a joke?</h1>' +
        '<p>I got another letter from this lawyer today. It said &ldquo;Final Notice&rdquo;. Good that he will not bother me anymore.</p>' +
        '<a href="/">Go back to homepage</a>'
      )
    } else {
      response.end(
        '<h1>Want to hear a joke?</h1>' +
        '<p>Guest to the waiter: &ldquo;Can you bring me what the lady at the next table is having?&rdquo;<br>' +
        'Waiter: &ldquo;Sorry, ma&rsquo;am, but I&rsquo;m pretty sure she wants to eat it herself.&rdquo;</p>' +
        '<a href="/">Go back to homepage</a>'
      )
    }
  } else if (request.url === '/cuteness') {
    response.end(
      '<h1>Cute Cats</h1>' +
      '<img src="https://www.sciencenews.org/wp-content/uploads/2019/07/072319_ee_cat-allergy_feat.jpg" alt="two kittens grooming each other">' +
      '<p>Aww, aren&rsquo;t cats so cute?</p>' +
      '<a href="/">Go back to homepage</a>'
    )
  } else {
    response.end(
      '<h1>Page Not Found</h1>' +
      '<p>Oh no, the requested URL ' + request.url + ' was not found on this server!</p>' +
      '<img src="https://cdn131.picsart.com/318181993390211.png?type=webp&to=min&r=640" alt="crying peace sign emoji"><br>' +
      '<p><em>Hint: try /random-joke and /cuteness</em></p>' +
      '<a href="/">Go back to homepage</a>'
    )
  }
})

// Listen on port 8080, so that we can reach the app at
// localhost:8080
var port = process.env.PORT || 8080
server.listen(port)

// Output a friendly message to the terminal
console.log('Server running at http://localhost:' + port + '/')
