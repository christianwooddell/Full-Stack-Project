class RemoveBirthdayFromUsers < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :birthday, :string
    add_column :users, :dob_month, :string
    add_column :users, :dob_day, :integer
    add_column :users, :dob_year, :integer
  end
end
