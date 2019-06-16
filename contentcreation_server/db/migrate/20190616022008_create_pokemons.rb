class CreatePokemons < ActiveRecord::Migration[5.2]
  def change
    create_table :pokemons do |t|
      t.integer :numero
      t.string :name
      t.string :description
      t.integer :evolution_level

      t.timestamps
    end
  end
end
