 var playlist= {
   'Chicago': "Saturday", 'DaveMatthewsBand': "Too Much"}

function removeFromPlaylist(playlist, artist) {
  delete playlist.artist
  return playlist
}