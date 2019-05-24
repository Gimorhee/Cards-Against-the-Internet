class Api::TestsController < ApplicationController
  def index
    render :json => {
      message: "hello!",
      test: "Aloha"
    }
  end

  def test
    render :json => {
      message: "Hello world, I am Danny!",
      test: "What's up from Danny"
    }
  end

end