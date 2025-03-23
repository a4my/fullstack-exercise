function getTestMessageHandler(req, res) {
  res.json({ message: 'Hello from the server!'});
}

module.exports = getTestMessageHandler;