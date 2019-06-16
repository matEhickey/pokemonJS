json.extract! pokemon, :id, :numero, :name, :description, :evolution_level, :created_at, :updated_at
json.url pokemon_url(pokemon, format: :json)
