require 'faker'
require_relative '../app/models/task'

6.times do
  task = Task.create(name: Faker::Lorem.sentence(1))
end
