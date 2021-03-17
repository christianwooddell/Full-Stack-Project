class ChangeUsersTable < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :dob_day, :integer
    remove_column :users, :dob_month, :string
    remove_column :users, :dob_year, :integer
  
  end
end
