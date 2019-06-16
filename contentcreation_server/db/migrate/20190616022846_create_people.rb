class CreatePeople < ActiveRecord::Migration[5.2]
  def change
    create_table :people do |t|
      t.string :name
      t.string :image
      t.string :image_fight

      t.timestamps
    end
  end
end
