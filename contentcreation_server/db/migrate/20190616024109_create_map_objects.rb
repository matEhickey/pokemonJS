class CreateMapObjects < ActiveRecord::Migration[5.2]
  def change
    create_table :map_objects do |t|
      t.string :name
      t.string :image
      t.boolean :transparent

      t.timestamps
    end
  end
end
