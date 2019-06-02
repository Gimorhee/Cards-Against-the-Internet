Rails.application.routes.draw do
  get 'games/new'
  get 'games/create'
  get 'games/show'
  get 'games/edit'
  get 'games/update'
  get 'games/destroy'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # Testing Sockets
  
  namespace :api do
    resources :conversations, only: [:index, :create]
    resources :messages, only: [:create]
    resources :cards, only: [:index, :show]
    resources :games
    resources :users
    resources :decks
    resources :rounds
    resources :lobbies
    post '/games/:id/addUser', to: 'games#addUser'
    
    # for testing only, not used right now
    get "cards/show_hand", to: 'cards#show_hand'
  end
  
  mount ActionCable.server => '/cable'
end
