class ApplicationController < ActionController::Base
  before_filter :redirect_www

  private
  def redirect_www
    unless /^www/.match(request.host)
      redirect_to("#{request.url}".gsub("#{request.protocol}", "#{request.protocol}www."), status: 301)
    end
  end

  protect_from_forgery with: :exception
end
