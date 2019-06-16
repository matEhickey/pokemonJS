Rails.application.routes.draw do
  resources :map_objects
  resources :people
  resources :grilles
  resources :pokemons
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
