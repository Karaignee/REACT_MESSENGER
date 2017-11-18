class MessagesController < ApplicationController
	def index
      @messages = current_user.messages
  
      respond_to do |f|
        f.html
        f.json { render json: @messages }
      end
    end
  
    def create
      @message = current_user.messages.create(message_params)
  
      respond_to do |f|
        f.html
        f.json {
          render json: @message, status: :created, location: message_path(@message)
        }
      end
    end
  
    private
  
    def message_params
      params.require(:message).permit(:body)
    end
  end
end
