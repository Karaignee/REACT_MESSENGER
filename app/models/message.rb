class Message < ActiveRecord::Base
  belongs_to :user

  default_scope { order(created_at: :desc) }

    def as_json(options={})
     super(methods: [:name, :gravatar])
   end
 
   def name
     user.name
   end

     def gravatar
     hash = Digest::MD5.hexdigest(user.email)
     "http://www.gravatar.com/avatar/#{hash}"
   end
end
