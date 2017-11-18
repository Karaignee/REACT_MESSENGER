Rails.application.routes.draw do
  resources :messages
  get 'profile' => 'profile#index'
  patch 'profile' => 'profile#update'

  devise_for :users
  root 'home#index'


end
