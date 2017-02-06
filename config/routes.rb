Rails.application.routes.draw do
  devise_for :users
  get 'home' => 'pages#home'
  root :to => redirect('/home')
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
