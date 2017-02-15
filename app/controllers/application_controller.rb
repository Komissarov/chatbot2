class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  

  def index
    render :file => 'layouts/index.html.haml'
  end

  def hello
    render html: "¡Hola, mundo!"
  end

  # def goodbye
  #   # render html: "goodbye, world!"
  #   render :file => 'layouts/application.html.erb'
  # end

end
