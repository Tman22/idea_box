Rails.application.routes.draw do
  root "home#index"

  namespace :api, :defaults => { :format => 'json' } do
    namespace :v1 do
      namespace :ideas do
        get '/', to: 'ideas#index'
        post '/', to: 'ideas#create'
        delete '/', to: 'ideas#destroy'
      end
    end
  end
end
