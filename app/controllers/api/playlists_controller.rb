# class Api::PlaylistsController < ApplicationController

#     def create 
#         @playlist = current_user.playlists.new(playlist_params)
#         if @playlist.save! 
#             render :show 
#         else
#             render json: @playlist.errors.full_messages
#         end 
#     end 

#     def show 
#         @playlist = current_user.playlists.includes(:songs).find(params[:id])
#         if @playlist 
#             @songs = @playlist.songs.with_attached_audio_file
#     end 

#     def update 
#         @playlist = current_user.playlists.find(params[:id])
#         if @playlist && @playlist.update(playlist_params)
#             render :edit 
#         else
#             render json: @playlist.errors.full_messages
#         end 
#     end 

#     def destroy 
#         @playlist = current_user.playlists.find(params[:id])
#         if @playlist && @playlist.delete 
#             render "api/users/show"
#         end 
#     end 

#     private 
#     def playlist_params
#         params.require(:playlist).permit(:name, :user_id)
#     end 

# end
