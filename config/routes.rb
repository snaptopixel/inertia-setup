Rails.application.routes.draw do
  root 'application#home'
  get '/studies/:id', to: 'application#show', as: 'study_detail'
  post '/studies/:id', to: 'application#edit_study', as: 'edit_study'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
