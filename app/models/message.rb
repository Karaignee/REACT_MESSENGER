class Message < ActiveRecord::Base
  belongs_to :user

    def as_json(options={})
     super(methods: [:name])
   end
 
   def name
     user.name
   end
end
