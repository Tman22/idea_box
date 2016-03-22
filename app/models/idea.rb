class Idea < ActiveRecord::Base
  enum quality: [ "swill", "genius", "plausible"]
end
