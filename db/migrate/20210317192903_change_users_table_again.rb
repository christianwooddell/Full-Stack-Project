class ChangeUsersTableAgain < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :dob_day, :integer, null: false
    add_column :users, :dob_month, :integer, null: false
    add_column :users, :dob_year, :integer, null: false

  end
end
