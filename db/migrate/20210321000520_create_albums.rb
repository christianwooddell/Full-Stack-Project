class CreateAlbums < ActiveRecord::Migration[5.2]
  def change
    create_table :albums do |t|
      t.string :title, null: false 
      t.integer :artist_id, null: false 
      t.string :album_art_url, null: false

      t.timestamps
    end
    add_index :albums, :title
  end
end
