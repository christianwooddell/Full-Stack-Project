class Artist < ApplicationRecord
    validates :name, :bio, presence: true 

    has_many :albums 
    has_many :songs 

    has_one_attached :artist_image
end
