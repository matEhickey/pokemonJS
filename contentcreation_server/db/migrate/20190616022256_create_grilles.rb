class CreateGrilles < ActiveRecord::Migration[5.2]
  def change
    create_table :grilles do |t|
      t.string :name
      t.string :image

      t.timestamps
    end
  end
end
