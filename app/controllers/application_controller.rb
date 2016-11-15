class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
end




def star()
	image_tag("https://upload.wikimedia.org/wikipedia/en/e/e5/Yellow_Star.png")
end 
def star0()
	image_tag("https://codecore.certified.in/assets/star-empty-97abfdf36fdd78aeffa24f0c76ffdf3e.png")
end 

