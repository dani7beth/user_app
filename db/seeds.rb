# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'

User.create(
        email: Faker::Internet.email, 
        firstName: Faker::Name.first_name,
        lastName: Faker::Name.last_name,
        number: Faker::PhoneNumber.cell_phone,
        avatar: Faker::Avatar.image,
)

