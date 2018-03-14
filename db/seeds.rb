categories = ['Games', 'Health & Fitness', 'Business', 'Lifestyle', 'Entertainment', 'Sports']
featured = [true, false]

20.times do
  App.create(
    name: Faker::App.name,
    description: Faker::MostInterestingManInTheWorld.quote,
    logo: Faker::Company.logo,
  )
end
puts "Seeded"
