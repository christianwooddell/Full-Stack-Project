json.set! song.id do 
    json.extract! song, :id, :title, :album_id, :artist_id, :genre_id, :duration  
    json.audio_url url_for(song.audio_file)
end