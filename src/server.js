
// Serve only the static files form the dist directory
app.use(express.static('./dist/<name-on-package.json>'));



app.get('/*', function(req, res) {
  res.sendFile('index.html', {root: 'dist/<name-on-package.json>/'}
);
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
