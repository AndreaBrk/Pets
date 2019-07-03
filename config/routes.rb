Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'static#index'

  match '*path', to: 'static#index', via: :all
end
