const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/music-streaming', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const songSchema = new mongoose.Schema({
  title: String,
  artist: String,
  url: String,
});

const Song = mongoose.model('Song', songSchema);

app.post('/songs', async (req, res) => {
  const song = new Song(req.body);
  await song.save();
  res.send(song);
});

app.get('/songs', async (req, res) => {
  const songs = await Song.find();
  res.send(songs);
});

app.delete('/songs/:id', async (req, res) => {
  await Song.findByIdAndDelete(req.params.id);
  res.send({ message: 'Song deleted' });
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});