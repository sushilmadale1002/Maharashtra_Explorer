const places = [
    {
      name: "Sinhagad Fort",
      image: "img/Sinhagad Fort.jpg",
      description: "Sinhagad Fort is one of Pune’s most famous historical sites and a popular picnic destination. Located about 35 km from Pune, this fort has played a significant role in Maratha history. It offers breathtaking panoramic views of the surrounding Sahyadri mountains, making it an ideal spot for trekking and nature lovers. The trek to the top is moderate and takes around an hour, with lush greenery and cool breezes adding to the experience. Visitors can explore ancient fortifications, gates, and historical structures like Tanaji Malusare’s memorial. The fort is also known for its local food stalls selling delicious Kanda Bhaji (onion fritters) and Pithla Bhakri (traditional Maharashtrian dish).During monsoons, the mist-covered fort looks even more magical. The best time to visit is from June to February, when the weather is pleasant. Whether for history, adventure, or photography, Sinhagad Fort is a must-visit.",
      latitude:18.3663 ,
      longitude: 73.7559
  },
  {
      name: "Khadakwasla Dam",
      image: "img/Khadakwasla Dam.jpg",
      description:"Khadakwasla Dam, located just 20 km from Pune, is a beautiful spot for picnics and weekend getaways. Built on the Mutha River, the dam provides drinking water to Pune city. The surrounding area is lush and serene, making it perfect for nature lovers and photographers. The scenic lake offers stunning reflections of the sky, especially during sunrise and sunset. Families and friends visit this place to relax by the water, enjoy local street food, and take leisurely strolls. The famous Chowpatty area near the dam is lined with food stalls serving delicious bhutta (corn), vada pav, and bhel puri. During monsoons, the dam overflows, creating a mesmerizing view. Nearby attractions include Sinhagad Fort, Panshet Dam, and the National Defence Academy (NDA). The best time to visit is from June to February. Whether for relaxation, photography, or light adventure, Khadakwasla Dam is a perfect spot.",
      latitude: 18.4055,
      longitude: 73.7751
  },
  {
      name: " Mulshi Lake",
      image: " img/Mulshi Lake.jpg",
      description:"Mulshi Lake is a stunning natural retreat located around 50 km from Pune. Formed by the Mulshi Dam on the Mula River, this place is a favorite among nature lovers and photographers. The picturesque lake is surrounded by the Sahyadri hills, offering breathtaking views. It is an ideal spot for picnics, birdwatching, and relaxation. Visitors can enjoy boating, camping, and light trekking in the nearby hills. The area is rich in biodiversity, with many species of birds and plants adding to its beauty. The best time to visit is from June to January, when the surroundings are lush green, and the water level is high. Many resorts and homestays around Mulshi offer a peaceful retreat from city life. While swimming is not recommended due to strong currents, the place is perfect for a peaceful day amidst nature. It’s a must-visit for those seeking tranquility.  ",
      latitude: 18.4744,
      longitude: 73.4962
  },
  {
      name: "Panshet Dam",
      image: "img/Panshet Dam.jpg",
      description:"Panshet Dam, located about 40 km from Pune, is a famous picnic and weekend getaway spot. Built on the Ambi River, the dam provides a refreshing break from the city with its serene water body and lush greenery. The main attraction here is water sports, including kayaking, boating, and speedboat rides. Families, couples, and adventure seekers often visit to enjoy the peaceful surroundings and the scenic landscapes. The monsoon season transforms this place into a paradise with overflowing water and misty hills. Nearby attractions include Khadakwasla Dam and Sinhagad Fort. There are also small eateries around serving local snacks like bhaji (fritters) and misal pav. The best time to visit is July to February, as summers can be quite warm. Whether for a peaceful retreat or thrilling water activities, Panshet Dam is an ideal picnic spot near Pune.",
      latitude:18.3655 ,
      longitude: 73.6725
  },
  {
      name: "Rajmachi Fort",
      image: "img/Rajmachi Fort.jpg",
      description:"Rajmachi Fort, located near Lonavala and about 80 km from Pune, is a popular trekking and picnic destination. This 17th-century fort, built by the Marathas, consists of two main forts – Shrivardhan nd Manaranjan. The trek to the fort is a breathtaking experience, surrounded by lush forests, waterfalls, and ancient caves. The fort provides panoramic views of the Sahyadri hills, making it a paradise for photographers and nature lovers. Visitors can explore ancient structures, hidden passages, and temples within the fort. The best time to visit is during the monsoon (June to September) when the surroundings are covered in mist and greenery. There is also a motorable road for those who prefer not to trek. Camping near the fort is another exciting option, allowing visitors to enjoy a starry night in nature. Rajmachi is a perfect blend of history, adventure, and scenic beauty. ",
      latitude:18.8472 ,
      longitude: 73.3762
  },
  {
      name: "Lavasa",
      image: "img/Lavasa.jpg",
      description:"Lavasa, India’s first planned hill city, is located about 60 km from Pune. Inspired by the Italian town of Portofino, Lavasa offers a European-style retreat with lakeside promenades, colorful buildings, and scenic landscapes. The city is built around Dasve Lake, where visitors can enjoy activities like boating, jet skiing, and kayaking. Lavasa is also famous for adventure sports such as trekking, cycling, and zip-lining. There are several cafes and restaurants offering delicious food with a view of the lake. The climate remains pleasant throughout the year, making it an ideal weekend getaway. The best time to visit is June to February, when the weather is cool and the surroundings are lush. Lavasa is a perfect blend of modern infrastructure and natural beauty, making it one of the most beautiful picnic spots near Pune.  ",
      latitude: 18.4088,
      longitude: 73.5064
  },
  {
      name: " Lohagad Fort",
      image: " img/Lohagad Fort.jpg",
      description:"Lohagad Fort, a UNESCO World Heritage Site, is a historic fortress located near Lonavala, around 65 km from Pune. Built during the Maratha rule, this fort is known for its massive gates, long walls, and scenic beauty. It is an excellent trekking destination, especially during the monsoon when the fort is covered in mist and greenery. The trek to the top is easy, making it suitable for beginners and families. From the fort, visitors can enjoy a mesmerizing view of Pawna Lake and surrounding valleys. The best time to visit is June to February. Lohagad is also close to Bhaja and Karla Caves, which are famous for their ancient Buddhist architecture. The fort's historical significance, combined with its breathtaking landscape, makes it a great place for a one-day picnic near Pune. ",
      latitude: 18.7100 ,
      longitude: 73.4846
  },
  {
      name: "Pawna Lake",
      image: "img/Pawna Lake.jpg",
      description:"Pawna Lake, located about 55 km from Pune, is one of the most famous camping and picnic destinations. The lake is surrounded by lush green hills and historical forts like Lohagad, Tung, and Tikona. The calm waters and stunning sunset views make it an ideal place for relaxation and photography. Camping near Pawna Lake is a popular activity, with many campsites offering tents, bonfires, and barbecue nights. The best time to visit is October to March, when the weather is cool and pleasant. Visitors can also indulge in activities like boating, fishing, and stargazing. Monsoon season (June to September) adds to the beauty with overflowing water and misty weather. The combination of adventure, peace, and natural beauty makes Pawna Lake a perfect picnic spot for families, couples, and adventure seekers. ",
      latitude:  18.6500,
      longitude: 73.4600
  },
  {
      name: "Okayama Friendship Garden",
      image: "img/Okayama Friendship Garden.jpg",
      description:"Okayama Friendship Garden, also known as Pu La Deshpande Garden, is a beautiful Japanese-style garden located in Pune city. Built as a symbol of Indo-Japanese friendship, it is inspired by the famous Korakuen Garden in Okayama, Japan. The garden features manicured lawns, wooden bridges, waterfalls, and koi fish ponds, making it a peaceful retreat within the city. Visitors can take a leisurely walk on the stone-paved pathways, admire the traditional Japanese landscaping, and relax in the gazebos. The garden is well-maintained and offers a serene atmosphere for those looking to escape the city’s hustle. It is best visited in the morning or evening when the weather is pleasant. With its lush greenery and artistic design, Okayama Friendship Garden is an ideal picnic spot for families, couples, and nature lovers.",
      latitude: 18.5097,
      longitude: 73.8385
  },
  {
      name: "Bhaja Caves",
      image: "img/Bhaja Caves.jpg",
      description:"Bhaja Caves, located near Lonavala and around 60 km from Pune, are ancient Buddhist rock-cut caves dating back to the 2nd century BCE. These caves feature beautiful sculptures, intricate carvings, and a series of 22 rock-cut chambers, making them a must-visit for history lovers. The trek to the caves is short and easy, passing through scenic landscapes with waterfalls in the monsoon. The stupa structures and carved prayer halls reflect the ancient Buddhist way of life. The caves offer a great spot for photography and exploration. Nearby attractions include Lohagad Fort and Karla Caves, making it a perfect day-trip destination. The best time to visit is June to February, when the surroundings are green and pleasant. With a mix of history, nature, and adventure, Bhaja Caves is a unique picnic spot near Pune.",
      latitude:18.7359 ,
      longitude: 73.4771
  },
  {
      name: "Kaas Plateau (Valley of Flowers)",
      image: "img/Kaas Plateau.jpg",
      description: "Kaas Plateau, also known as the Valley of Flowers of Maharashtra, is a UNESCO World Heritage Site and one of the most beautiful picnic spots in Satara. Located about 25 km from Satara city, this plateau comes alive with over 850 species of wildflowers during the monsoon season. The vibrant blooms, spread across rolling meadows, make it a paradise for nature lovers and photographers. The best time to visit is August to October, when the flowers are in full bloom. Kaas Lake, located nearby, offers a peaceful spot for relaxation. Since it is an ecologically sensitive zone, visitor entry is restricted to control crowds. Trekking in the area provides breathtaking views of the Sahyadri hills. With its unique biodiversity, colorful landscapes, and cool climate, Kaas Plateau is an ideal one-day picnic spot for families, photographers, and nature enthusiasts.",
      latitude: 17.7041,
      longitude: 73.8070
  },
  {
      name: "Thoseghar Waterfalls",
      image: "img/Thoseghar Waterfalls.jpg",
      description: "Thoseghar Waterfalls is one of the most famous waterfalls in Maharashtra, located about 20 km from Satara. It is a series of cascading waterfalls, with some plunging from a height of 200 meters into deep valleys, creating a mesmerizing view. The monsoon season (June to September) is the best time to visit, as the waterfalls are in full force, surrounded by lush greenery. A well-maintained viewpoint allows visitors to enjoy the breathtaking scenery safely. Thoseghar is a peaceful destination, perfect for nature lovers, photographers, and families looking to escape the city’s hustle. The nearby Chalkewadi Windmill Farm, one of India's largest wind farms, adds to the beauty of this area. The cool, misty weather and the sound of gushing waterfalls make it a great place for relaxation and rejuvenation. This spot is perfect for a refreshing picnic amidst nature.",
      latitude: 17.6033,
      longitude: 73.7854
  },
  {
      name: "Sajjangad Fort",
      image: "img/Sajjangad Fort.jpg",
      description: "Sajjangad Fort, meaning 'Fort of Good People,' is a historical and spiritual site located about 18 km from Satara. It is famous as the final resting place of Sant Ramdas, the spiritual guru of Chhatrapati Shivaji Maharaj. The fort offers stunning views of the Urmodi Dam and Sahyadri mountains, making it a great spot for a peaceful picnic. Visitors need to climb around 200 steps to reach the fort, but the breathtaking view and serene environment make it worth the effort. The fort also has a temple, meditation halls, and a community kitchen that provides free meals (prasad) to devotees. The best time to visit is June to February, when the weather is pleasant. History buffs, nature lovers, and spiritual seekers will enjoy this place. Sajjangad is not just a picnic spot but also a place to experience peace and historical significance.",
      latitude: 17.6806,
      longitude: 73.8561
  },
  {
      name: "Ajinkyatara Fort",
      image: "img/Ajinkyatara Fort.jpg",
      description: "Ajinkyatara Fort, standing over 3,300 feet above sea level, is one of the most famous historical forts in Maharashtra. Located in Satara city, it offers breathtaking panoramic views of the entire region, including the stunning Sahyadri mountains. The fort was an important military base during the Maratha Empire, and visitors can explore its ancient bastions, gateways, and temples. Trekking to the top is a thrilling experience, especially during monsoons, when the fort is covered in mist and lush greenery. The night view from the fort is spectacular, with city lights twinkling below. The best time to visit is July to February when the weather is cool. The fort is perfect for history lovers, trekkers, and photographers. With a combination of adventure, history, and scenic beauty, Ajinkyatara Fort is an excellent picnic destination in Satara.",
      latitude: 17.6787,
      longitude: 73.9933
  },
  {
      name: "Chalkewadi Windmill Farm",
      image: "img/Chalkewadi Windmill Farm.jpg",
      description: "Chalkewadi Windmill Farm, located about 30 km from Satara, is one of the largest windmill farms in India. The vast landscape is covered with hundreds of giant windmills, making it a fascinating and unique picnic spot. The best time to visit is during the monsoon and post-monsoon season (June to October), when the surrounding hills are covered in lush greenery, and the cool breeze adds to the charm. The windmill farm is an excellent location for photography, long walks, and relaxing amidst nature. The road to Chalkewadi passes through Thoseghar Waterfalls, so visitors can explore both places on the same trip. The scenic beauty, peaceful environment, and cool climate make it a perfect spot for families, couples, and nature lovers. If you are looking for an offbeat picnic destination near Satara, Chalkewadi Windmill Farm is an excellent choice.",
      latitude: 17.5292,
      longitude: 73.7905
  },
  {
      name: "Vasota Fort & Koyna Wildlife Sanctuary",
      image: "img/Vasota Fort & Koyna Wildlife Sanctuary.jpg",
      description: "Vasota Fort, located within the Koyna Wildlife Sanctuary, is a dream destination for trekkers, wildlife lovers, and adventure seekers. The fort, surrounded by dense forests and overlooking Shiv Sagar Lake, is accessible only via a thrilling boat ride followed by a trek. The trek takes around 3-4 hours, passing through thick forests, making it a perfect jungle adventure. Along the way, visitors might spot wild animals, birds, and rare flora. The fort offers spectacular views of the Sahyadri mountains and Koyna Dam. The best time to visit is November to March, as monsoons make the trek difficult. Koyna Wildlife Sanctuary, a UNESCO-listed reserve, is home to tigers, leopards, and deer. It is a paradise for nature lovers and photographers. This place is ideal for those looking for an adventurous picnic amidst nature and history.",
      latitude: 17.5654,
      longitude: 73.7449
  },
  {
      name: "Tapola (Mini Kashmir)",
      image: "img/Tapola.jpg",
      description: "Tapola, popularly known as 'Mini Kashmir of Maharashtra,' is a hidden gem located 50 km from Satara. This beautiful lakeside destination is surrounded by lush green hills, dense forests, and the serene Shivsagar Lake. It is famous for boating, kayaking, swimming, and camping. Visitors can also enjoy strawberry farms, jungle treks, and scenic bike rides. The tranquil atmosphere makes it an excellent escape from city life. The best time to visit is October to March, when the weather is cool and pleasant. Monsoons (June to September) make the place even more breathtaking, with misty hills and overflowing water bodies. Trekking to Vasota Fort from Tapola is another thrilling activity for adventure enthusiasts.",
      latitude: 17.4076,
      longitude: 73.7286
  },
  {
  name: "Gokak Waterfall", 
  image: "img/Gokak Waterfall.jpg", 
  description: "Gokak Waterfall, located about 65 km from Sangli, is one of the most breathtaking waterfalls in Maharashtra. It is often compared to Niagara Falls due to its horseshoe-shaped drop from a height of 52 meters. Surrounded by rocky cliffs and lush greenery, the waterfall is a perfect destination for nature lovers, photographers, and adventure seekers. The best time to visit is July to October, when the waterfall is at its full glory. A suspension bridge built across the river adds to the thrill, offering stunning views of the waterfall. Nearby, the ancient Gokak Mills and temples provide additional attractions. The area is also a great spot for picnicking, enjoying the cool mist, and capturing scenic landscapes. If you're looking for a refreshing break away from city life, Gokak Waterfall is an ideal one-day picnic spot near Sangli.", 
  latitude: 16.1676, 
  longitude: 74.8152 
},
{
  name: "Dandoba Hills & Lake", 
  image: "img/Dandoba Hills & Lake.jpg", 
  description: "Dandoba Hills, located 25 km from Sangli, is a beautiful and peaceful spot for trekking, nature walks, and picnics. It is home to the Dandoba Hill Forest Reserve, offering a great mix of wildlife, adventure, and scenic beauty. The trek to the top is easy and takes about an hour, offering panoramic views of the Krishna River and surrounding landscapes. The hills are covered with lush greenery during monsoons, making it a perfect escape for nature lovers. Nearby, Dandoba Lake is an excellent spot for boating, birdwatching, and relaxing with family. The best time to visit is June to February, when the weather is pleasant and ideal for outdoor activities. If you love exploring nature, enjoying peaceful surroundings, or simply want a fun picnic with friends and family, Dandoba Hills & Lake is a great choice.", 
  latitude: 16.8828, 
  longitude: 74.6421 
},
{
  name: "Krishna River Ghat & Sangameshwar Temple", 
  image: "img/Krishna River Ghat & Sangameshwar Temple.jpg", 
  description: "The Krishna River Ghat in Sangli is one of the most beautiful and peaceful picnic spots in the city. Located near the famous Sangameshwar Temple, this riverside spot is perfect for family outings, evening walks, and spiritual relaxation. The ghat offers scenic views of the Krishna River, making it an excellent place to sit, unwind, and enjoy the cool breeze. Boating is available, allowing visitors to explore the river and enjoy the sunset. The Sangameshwar Temple, dedicated to Lord Shiva, is a major attraction, especially during Mahashivratri and other Hindu festivals. The best time to visit is early mornings or evenings, when the weather is cool and the view is breathtaking. If you’re looking for a calm and scenic picnic spot within the city, the Krishna River Ghat is a perfect place for relaxation, photography, and family time.", 
  latitude: 16.8524, 
  longitude: 74.5725 
},
{
  name: "Audumber (Dattadeva Temple)", 
  image: "img/Audumber.jpg", 
  description: "Audumber, located 25 km from Sangli, is a spiritual and serene picnic spot on the banks of the Krishna River. It is famous for the Sri Dattadeva Temple, dedicated to Lord Dattatreya, attracting thousands of devotees and nature lovers. The temple is surrounded by dense trees, a peaceful riverfront, and a scenic atmosphere, making it a great place for relaxation and meditation. The Krishna River here is calm, allowing visitors to enjoy boating, fishing, or just sitting by the riverbank. The area is also home to various migratory birds, making it a good spot for birdwatching and photography. The best time to visit is October to March, when the weather is pleasant. Whether you're looking for spiritual peace, a riverside picnic, or a relaxing day in nature, Audumber is a great destination near Sangli.", 
  latitude: 16.8763, 
  longitude: 74.5315 
},
{
  name: "Sagareshwar Wildlife Sanctuary", 
  image: "img/Sagareshwar Wildlife Sanctuary.jpg", 
  description: "Sagareshwar Wildlife Sanctuary, located 30 km from Sangli, is a man-made wildlife reserve spread across 11 square kilometers. It is home to deer, peacocks, wild boars, jackals, and various bird species. The sanctuary is perfect for nature lovers, trekking enthusiasts, and photographers. There are multiple trekking trails, with scenic viewpoints offering stunning views of the surrounding hills and forests. The sanctuary also has an ancient Shiva temple, attracting devotees and history lovers. The best time to visit is July to February, as the greenery and wildlife are at their best. Visitors can enjoy walking safaris, photography, and peaceful nature retreats here. With its mix of adventure, wildlife, and spiritual significance, Sagareshwar Wildlife Sanctuary is one of the best picnic spots near Sangli, ideal for families, school trips, and adventure seekers.", 
  latitude: 16.9932, 
  longitude: 74.5967 
},
{
  name: "Mahalaxmi Temple, Kolhapur",
  image: "img/Mahalaxmi Temple.jpg",
  description: "Mahalaxmi Temple, also known as Ambabai Temple, is one of the most revered pilgrimage sites in Maharashtra. Built in the 7th century by the Chalukya dynasty, the temple is dedicated to Goddess Mahalaxmi, the presiding deity of Kolhapur. The temple features intricate carvings, sculptures, and a grand black stone idol of the goddess, believed to be self-manifested (Swayambhu). Devotees visit the temple throughout the year, especially during Navratri and Kirnotsav, when the sun’s rays directly fall on the deity’s idol. The temple complex includes a large courtyard, Deepmala, and several smaller shrines. The serene Rankala Lake, located nearby, adds to the temple’s spiritual aura.",
  latitude: 16.7033,
  longitude: 74.2433
},
{
  name: "Khidrapur Kopeshwar Temple",
  image: "img/Khidrapur Kopeshwar Temple.jpg",
  description: "Located on the banks of the Krishna River, Kopeshwar Temple in Khidrapur is a masterpiece of ancient Indian architecture. Built in the 12th century by the Shilahara dynasty, this temple is dedicated to Lord Shiva and features intricate stone carvings that depict scenes from Hindu mythology. The temple’s unique feature is its Swarg Mandap, an open circular hall with a beautifully carved ceiling, which allows natural light to illuminate the inner sanctum. Unlike most Shiva temples, this temple has no Nandi idol, making it architecturally distinct. The temple’s peaceful surroundings, coupled with its historical and religious significance, make it an ideal picnic spot.",
  latitude: 16.5919,
  longitude: 74.6067
},
{
  name: "Rankala Lake",
  image: "img/Rankala Lake.jpg",
  description: "Rankala Lake is one of the most popular picnic spots in Kolhapur, offering a calm and refreshing environment. This artificial lake, built by Chhatrapati Shivaji Maharaj, is surrounded by lush gardens, walking tracks, and food stalls. Visitors can enjoy boating, horse riding, and street food along the promenade. The lake is famous for Padpath Udyan, Shalini Palace, and the Rankala Tower, which add historical charm. The cool breeze, especially in the evenings, makes it a perfect place to relax. Sunset views at Rankala Lake are breathtaking, making it a great spot for photography and peaceful outings.",
  latitude: 16.6905,
  longitude: 74.2106
},
{
  name: "Panhala Fort",
  image: "img/Panhala Fort.jpg",
  description: "Panhala Fort is the largest fort in the Deccan region, located about 20 km from Kolhapur. It was a strategic military stronghold for Chhatrapati Shivaji Maharaj and offers stunning views of the Sahyadri hills. The fort houses historical sites like Andhar Bavadi (Hidden Well), Sajja Kothi (Observation Point), and the Ambarkhana granaries. Surrounded by dense forests and cool breezes, Panhala Fort is a favorite trekking and picnic destination. Monsoon is the best time to visit, as the fort gets covered in lush greenery and mist.",
  latitude: 16.8123,
  longitude: 74.1056
},
{
  name: "Vishalgad Fort",
  image: "img/Vishalgad Fort.jpg",
  description: "Vishalgad Fort, located 76 km from Kolhapur, is known for its majestic structure, panoramic views, and historical importance. The fort played a vital role in Shivaji Maharaj’s military campaigns and is a great spot for trekking and nature walks. The climb to the fort is rewarding, with views of deep valleys, forests, and waterfalls. The fort is partially in ruins, but remains like the Amriteshwar Temple, Sati’s Vrindavan, and the Mahadarwaja still attract visitors. The sunset view from the fort is mesmerizing.",
  latitude: 16.9119,
  longitude: 73.7417
},
{
  name: "Gaganbawda Hill Station",
  image: "img/Gaganbawda Hill Station.jpg",
  description: "Gaganbawda, located 55 km from Kolhapur, is a picturesque hill station known for its misty hills, lush greenery, and breathtaking valleys. Surrounded by forests and waterfalls, it is a perfect destination for trekking, birdwatching, and photography. The Gagangad Fort and the Nisarga Kendra Viewpoint offer spectacular views. The best time to visit is during monsoon and winter, when the entire region turns into a green paradise.",
  latitude: 16.6096,
  longitude: 73.9269
},
{
  name: "Radhanagari Wildlife Sanctuary",
  image: "img/Radhanagari Wildlife Sanctuary.jpg",
  description: "Radhanagari Wildlife Sanctuary, also known as Dajipur Sanctuary, is home to the Indian bison (Gaur) and other wildlife like deer, leopards, and numerous bird species. Spread across 351 sq km, the sanctuary offers jeep safaris, nature trails, and trekking routes. Located near the Radhanagari Dam, the place is surrounded by lush forests and waterfalls, making it a perfect picnic spot.",
  latitude: 16.3962,
  longitude: 73.9442
},
{
  name: "Jyotiba Temple",
  image: "img/Jyotiba Temple.jpg",
  description: "Jyotiba Temple, situated at an altitude of 3124 feet, is dedicated to Lord Jyotiba, an incarnation of Lord Shiva. It is one of the most visited religious sites near Kolhapur, known for its grand architecture and spiritual significance. Devotees flock to this temple, especially during the full moon and Chaitra Yatra festival when the entire premises is covered in pink gulal powder. The temple offers panoramic views of the surrounding Sahyadri hills.",
  latitude: 16.7585,
  longitude: 74.1628
},
{
  name: "Shalini Palace",
  image: "img/Shalini Palace.jpg",
  description: "Shalini Palace, located on the banks of Rankala Lake, is a historical palace built in the 19th century. It showcases Indo-Saracenic architecture with intricate wooden carvings and stained-glass windows. The palace, once a royal residence, is now a heritage site where visitors can admire its grandeur. The surrounding gardens and lake make it an excellent picnic and photography spot.",
  latitude: 16.6939,
  longitude: 74.2211
},
{
  name: "Kaneri Math Siddhagiri Museum",
  image: "img/Kaneri Math.jpg",
  description: "Kaneri Math, also known as Siddhagiri Gramjivan Museum, is an open-air museum that depicts rural life in Maharashtra. The museum features life-sized sculptures showing traditional village activities like farming, pottery, and blacksmithing. It is an educational and cultural experience showcasing self-sufficient village life in India’s past.",
  latitude: 16.7745,
  longitude: 74.2301
},
{
  name: "Kumbhi Dam",
  image: "img/Kumbhi Dam.jpg",
  description: "Kumbhi Dam is a serene water reservoir located 50 km from Kolhapur. Surrounded by forests, hills, and farmlands, it is an ideal place for boating, fishing, and nature walks. The dam offers beautiful sunrise and sunset views, making it a great location for photography and peaceful picnics. The best time to visit is monsoon and winter, when the dam is full, and the landscape is at its best.",
  latitude: 16.4941,
  longitude: 74.1717
},
{
  name: "Bhivpur Waterfall",
  image: "img/Bhivpur Waterfall.jpg",
  description: "Bhivpur Waterfall, located about 60 km from Kolhapur, is a hidden gem known for its tranquility and scenic beauty. The waterfall is set amidst lush green forests, making it an ideal spot for nature lovers and adventure enthusiasts. The cascading water flows through rocky terrain, creating a picturesque scene, especially during the monsoon season when the flow is abundant. Visitors can enjoy a peaceful picnic by the waterfall, trekking through the forest, or simply relax in the natural surroundings. The serene environment, away from the crowds, offers a perfect escape for those seeking a calming nature experience. The best time to visit is from June to February, when the weather is pleasant, and the landscape is green and fresh.",
  latitude: 16.4560,
  longitude: 74.0331
},
{
  name: "Narsobawadi",
  image: "img/Narsobawadi.jpg",
  description: "Narsobawadi is a small town located about 50 km from Kolhapur, famous for its Narsoba Temple, dedicated to Lord Dattatreya. The temple is situated on the banks of the Krishna River and is a popular pilgrimage site. Visitors can enjoy a boat ride on the river, explore the beautiful temples, and relax by the riverbanks. The temple complex also features a sacred well and a bathing ghat. The surrounding greenery and peaceful atmosphere make it a great place for a spiritual and nature-filled picnic. Narsobawadi is especially busy during the annual fair in January, but the rest of the year remains calm and ideal for family outings. It’s a perfect destination for those seeking a blend of spirituality, nature, and serenity.",
  latitude: 16.5854,
  longitude: 74.1535
},
{
  name: "Siddheshwar Temple & Lake",
  image: "img/Siddheshwar Temple & Lake.jpg",
  description: "Siddheshwar Temple is Solapur’s most famous pilgrimage and picnic spot, located in the heart of the city. Dedicated to Lord Siddheshwar, an incarnation of Lord Shiva, the temple is surrounded by a serene lake with small islands. The temple was built in the 12th century by the devotee Mallikarjuna Swami and showcases intricate Hemadpanti-style architecture. Visitors can enjoy boating in the lake, feeding the fish, or simply relaxing in the peaceful surroundings. The temple complex is beautifully lit at night, adding to its charm. The Siddheshwar Fair, held in January, attracts thousands of devotees. The best time to visit is October to March, when the weather is pleasant. With its blend of spirituality and natural beauty, Siddheshwar Temple is an excellent spot for a peaceful family picnic.",
  latitude: 17.6640,
  longitude: 75.9064
},
{
  name: "Hipparga Lake",
  image: "img/Hipparga Lake.jpg",
  description: "Hipparga Lake, located 12 km from Solapur, is a hidden gem and a perfect picnic spot for nature lovers. It serves as a primary water reservoir for Solapur city and is surrounded by lush greenery, hills, and peaceful landscapes. The lake is a great place for birdwatching, photography, and relaxation. During winter, it attracts migratory birds like flamingos and painted storks, making it a paradise for bird lovers. Visitors can enjoy boating, fishing, and nature walks along the lake’s shore. It’s an ideal getaway for families looking for a quiet and scenic environment away from city noise. The best time to visit is October to February, when the weather is cool and the lake is full. Hipparga Lake is a must-visit spot for a peaceful picnic surrounded by nature.",
  latitude: 17.7841,
  longitude: 75.8142
},
{
  name: "Nannaj Great Indian Bustard Sanctuary",
  image: "img/Nannaj Great Indian Bustard Sanctuary.jpg",
  description: "Nannaj Sanctuary, located 22 km from Solapur, is a wildlife reserve dedicated to the critically endangered Great Indian Bustard. Spread over 8,500 hectares, the sanctuary is home to bustards, blackbucks, foxes, and various bird species. The dry grassland landscape makes it unique and an excellent spot for birdwatching and nature photography. Visitors can explore nature trails, open jeep safaris, and birdwatching towers to spot these rare birds. The sanctuary is best visited during winter (November to February) when migratory birds arrive. It’s a great picnic destination for wildlife enthusiasts, photographers, and nature lovers. The peaceful environment and the chance to see rare species make Nannaj a must-visit place near Solapur.",
  latitude: 17.9833,
  longitude: 75.7667
},
{
  name: "Kambar Talav",
  image: "img/Kambar Talav.jpg",
  description: "Kambar Talav, located 15 km from Solapur, is a scenic man-made lake known for its tranquility and natural beauty. The lake serves as a water reservoir and is surrounded by dense greenery, farmlands, and small hills. It is a popular spot for fishing, boating, and watching migratory birds. The peaceful environment makes it an ideal picnic location for families and nature lovers. Visitors can enjoy a relaxing walk around the lake, photography, or a quiet meal in the open air. The best time to visit is October to February, when the weather is cool, and the lake is full. If you’re looking for a less crowded, peaceful spot near Solapur, Kambar Talav is an excellent choice for a one-day outing.",
  latitude: 17.7889,
  longitude: 75.8521
},
{
  name: "Barshi Hills",
  image: "img/Barshi Hills.jpg",
  description: "Barshi Hills, located 75 km from Solapur, is a beautiful hill range perfect for trekking, picnicking, and photography. The hills are covered with grasslands, small forests, and rocky formations, making them an ideal monsoon getaway. During the rainy season, the entire region turns lush green, with waterfalls and streams appearing. It is a great place for adventure seekers who enjoy trekking, exploring caves, and birdwatching. The sunrise and sunset views from the top of Barshi Hills are breathtaking. The best time to visit is June to February, when the weather is cool and the landscapes are most beautiful. Barshi Hills is an ideal spot for a peaceful and scenic picnic with friends and family.",
  latitude: 18.2333,
  longitude: 75.7000
},
{
  name: "Gateway of India",
  image: "img/gateway of india.jpg",
  description: "The Gateway of India, an iconic arch-monument, was built in 1924 to commemorate the visit of King George V and Queen Mary. Located on the waterfront in Colaba, this grand structure overlooks the Arabian Sea and is a major historical and tourist attraction. It served as a ceremonial entrance during the British Raj and later became a symbolic departure point when British troops left India in 1948. The Indo-Saracenic architecture, with influences from Muslim and Hindu designs, adds to its charm. The site is always bustling with tourists, photographers, and vendors. From here, visitors can take ferries to Elephanta Caves or enjoy a sunset by the sea. The monument is beautifully lit in the evenings, creating a mesmerizing view.",
  latitude: 18.921984,
  longitude: 72.834654
},
{
  name: "Marine Drive",
  image: "img/Marine Drive.jpg",
  description: "Marine Drive, often called the 'Queen’s Necklace' due to its curved coastline and glowing streetlights at night, is a 3.6 km-long boulevard along the Arabian Sea. It stretches from Nariman Point to Girgaon Chowpatty, offering stunning views of the Mumbai skyline and the sea. This promenade is a favorite spot for locals and tourists alike to take leisurely walks, jog, or relax while enjoying the cool sea breeze. It is particularly lively in the evenings when the sun sets over the horizon, painting the sky in shades of orange and pink. The area is surrounded by luxury hotels, restaurants, and Art Deco buildings that add to its charm. Marine Drive is also a key location during Mumbai’s Ganesh Chaturthi festival, where devotees gather to immerse idols in the sea.",
  latitude: 18.943189,
  longitude: 72.823967
},
{
  name: "Elephanta Caves",
  image: "img/Elephanta Caves.jpg",
  description: "The Elephanta Caves, a UNESCO World Heritage Site, are located on Elephanta Island, about 11 km from Mumbai. These rock-cut caves date back to the 5th–7th century and showcase stunning sculptures dedicated to Lord Shiva. The most famous carving is the Trimurti, a colossal three-faced representation of Shiva. The caves exhibit a blend of Hindu and Buddhist influences, reflecting India’s rich cultural heritage. Visitors can take a ferry from the Gateway of India to explore this historical marvel. The island is serene, with monkeys roaming around and lush greenery enhancing its beauty. The caves also offer panoramic views of the Mumbai skyline from the island. A visit here is perfect for history enthusiasts and nature lovers alike.",
  latitude: 18.9633,
  longitude: 72.9318
},
{
  name: "Chhatrapati Shivaji Maharaj Terminus",
  image: "img/Chhatrapati Shivaji Maharaj Terminus.jpg",
  description: "Chhatrapati Shivaji Maharaj Terminus (CSMT), formerly known as Victoria Terminus, is a UNESCO-listed railway station and an architectural masterpiece in Mumbai. Built in 1887, it is a fine example of Victorian Gothic Revival architecture combined with Indian elements. The station features intricate carvings, domes, stained glass windows, and a grand central dome with a statue of a lion and a tiger, symbolizing Britain and India. CSMT serves as Mumbai’s busiest railway station, connecting the city with various parts of India. At night, the station is illuminated, making it a sight to behold. Visitors admire its artistic façade and bustling atmosphere. It is a must-visit for history buffs and architecture lovers.",
  latitude: 18.9402,
  longitude: 72.8356
},
{
  name: "Siddhivinayak Temple",
  image: "img/Siddhivinayak Temple.jpg",
  description: "Shree Siddhivinayak Temple is one of Mumbai’s most revered Hindu temples, dedicated to Lord Ganesha. Located in Prabhadevi, this temple attracts millions of devotees every year, including celebrities and politicians. The temple was built in 1801 and features a gold-plated sanctum housing a beautiful black stone idol of Ganesha. The structure is a blend of traditional and modern architecture, with intricate carvings and a grand entrance. Tuesdays witness massive crowds, as it is considered auspicious to seek Lord Ganesha’s blessings on this day. The temple also engages in social initiatives, including health and education programs. A visit here is a spiritually enriching experience.",
  latitude: 19.0167,
  longitude: 72.8302
},
{
  name: "Juhu Beach",
  image: "img/Juhu Beach.jpg",
  description: "Juhu Beach, one of Mumbai’s most famous beaches, is known for its long stretch of golden sand and lively atmosphere. Located near the affluent Juhu locality, it is a popular spot for evening walks, street food, and relaxation. The beach offers breathtaking sunset views, making it a favorite among tourists and locals. It is lined with food stalls selling Mumbai’s iconic street foods like pav bhaji, bhel puri, and vada pav. Many Bollywood celebrities reside near Juhu Beach, adding to its glamour. The beach is also a venue for various cultural events and yoga sessions.",
  latitude: 19.1004,
  longitude: 72.8262
},
{
  name: "Haji Ali Dargah",
  image: "img/Haji Ali Dargah.jpg",
  description: "Haji Ali Dargah, a famous Islamic pilgrimage site, is situated on a small islet in the Arabian Sea, connected to the mainland by a narrow causeway. Built in 1431, this mosque and tomb honor the Sufi saint Pir Haji Ali Shah Bukhari. The Indo-Islamic architecture, white marble structure, and peaceful ambiance attract devotees from all religions. During high tide, the pathway submerges, making the shrine appear as if floating on water. The qawwalis (Sufi devotional songs) performed here add to its spiritual charm.",
  latitude: 18.9821,
  longitude: 72.8105
},
{
  name: "Chowpatty Beach",
  image: "img/Chowpatty Beach.jpg",
  description: "Girgaon Chowpatty Beach is a well-known destination for Mumbai’s street food and leisure activities. It is famous for hosting the grand Ganesh Visarjan celebrations, where thousands gather to immerse Lord Ganesha idols in the sea. The beach offers a lively atmosphere, with vendors selling bhel puri, pav bhaji, and kulfi. Evenings are the best time to visit, as the cool breeze and city lights create a relaxing ambiance.",
  latitude: 18.9543,
  longitude: 72.8142
},
{
  name: "Kanheri Caves",
  image: "img/Kanheri Caves.jpg",
  description: "Located within Sanjay Gandhi National Park, the Kanheri Caves are ancient Buddhist rock-cut caves dating back to the 1st century BCE. These caves served as monasteries and meditation centers for monks. The carvings, stupas, and water cisterns showcase the advanced craftsmanship of that era. The site is peaceful and offers hiking trails through lush greenery.",
  latitude: 19.2087,
  longitude: 72.9013
},
{
  name: "Sanjay Gandhi National Park",
  image: "img/Sanjay Gandhi National Park.jpg",
  description: "Sanjay Gandhi National Park is a green oasis in Mumbai, covering 104 sq. km. It is home to diverse flora and fauna, including leopards, deer, and numerous bird species. The park features the Kanheri Caves, boating, trekking trails, and the popular toy train. It is a perfect escape for nature lovers and adventure seekers.",
  latitude: 19.2288,
  longitude: 72.9106
},
{
  name: "Film City",
  image: "img/Film City.jpg",
  description: "Mumbai’s Film City, located in Goregaon, is a sprawling film studio complex spread over 520 acres. Established in 1977 by the Maharashtra government, it serves as the backbone of Bollywood, providing state-of-the-art facilities for film and television production. The complex houses multiple sets, including replicas of temples, streets, villages, and palaces, making it a preferred location for shooting diverse scenes. Over the years, thousands of Bollywood movies, TV serials, and commercials have been filmed here. Film City also offers guided tours that allow visitors to explore iconic sets, witness live shooting, and get an exclusive behind-the-scenes look at Indian cinema. The tours provide insights into filmmaking, from script to screen, showcasing the magic of movie-making. Due to its restricted access, visiting Film City through an official tour is the best way to experience the grandeur of Bollywood’s dream factory.",
  latitude: 19.1873,
  longitude: 72.8645
},
{
  name: "Bandra-Worli Sea Link",
  image: "img/Bandra-Worli Sea Link.jpg",
  description: "The Bandra-Worli Sea Link, officially known as the Rajiv Gandhi Sea Link, is a modern engineering marvel connecting Mumbai’s western suburbs to South Mumbai. This 5.6 km long cable-stayed bridge, completed in 2010, significantly reduces travel time between Bandra and Worli, easing traffic congestion on the city’s roads. The structure features eight lanes and is supported by massive steel cables, giving it a striking architectural appeal. Driving on the sea link offers breathtaking views of the Arabian Sea, especially during sunrise and sunset when the skyline is bathed in golden hues. The bridge is illuminated at night, creating a stunning visual spectacle. It is a symbol of Mumbai’s rapid development and stands as a testament to India’s engineering prowess. While stopping on the bridge is not allowed, many travelers take in its beauty from nearby viewpoints such as Bandra Fort and Worli Seaface.",
  latitude: 19.0176,
  longitude: 72.8173
},
{
  name: "Taraporewala Aquarium",
  image: "img/Taraporewala Aquarium.jpg",
  description: "Taraporewala Aquarium, India’s oldest public aquarium, is a fascinating attraction located on Marine Drive. Established in 1951 and renovated in 2015, the aquarium houses a vast collection of marine and freshwater species, including vibrant tropical fish, sharks, stingrays, eels, and turtles. A major highlight is the 12-foot-long glass tunnel, providing visitors with a unique underwater experience as fish swim overhead. The interactive exhibits and touch pools allow visitors, especially children, to learn about marine biodiversity and conservation. The aquarium also features coral displays, shipwreck tanks, and special exhibits showcasing aquatic ecosystems. Located near Girgaon Chowpatty, it is a perfect spot for marine enthusiasts and families looking to explore Mumbai’s underwater world. With its informative exhibits and stunning marine life, Taraporewala Aquarium remains a must-visit destination for those fascinated by ocean life.",
  latitude: 18.9491,
  longitude: 72.8196
},
{
  name: "Upvan Lake",
  image: "img/Upvan Lake.jpg",
  description: "Upvan Lake, one of the most picturesque spots in Thane, is a perfect blend of nature and urban life. Nestled at the foothills of the Yeoor Hills, it serves as a popular recreational hub for locals and tourists. Originally built as a water reservoir, it is now known for its serene environment, making it ideal for morning walks, jogging, and picnics. The lake offers boating facilities, and its scenic surroundings make it a hotspot for photographers. Every year, it hosts the Sanskruti Arts Festival, showcasing cultural performances, music, and art exhibitions. The tranquil waters reflect the lush greenery around, creating a perfect escape from the city's hustle. With seating areas and food stalls around, it’s an excellent place for families to relax and unwind. Upvan Lake is especially mesmerizing during the evening when the lights from nearby buildings shimmer on the water.",
  latitude: 19.2196,
  longitude: 72.9613
},
{
  name: "Yeoor Hills",
  image: "img/Yeoor Hills.jpg",
  description: "Yeoor Hills, often referred to as the 'lungs of Thane,' is a scenic hill range located within Sanjay Gandhi National Park. This lush green paradise is a popular destination for trekkers, nature lovers, and adventure seekers. The hills offer a variety of trails, from easy hikes to challenging treks, making them ideal for both beginners and experienced hikers. The region is home to diverse flora and fauna, including rare birds, butterflies, and small wildlife species. The cool and fresh air makes it a perfect retreat for morning joggers and yoga enthusiasts. Several viewpoints along the trails provide breathtaking views of Thane city and the surrounding forests. There are also small waterfalls during the monsoon, adding to its charm. With limited commercial activities, Yeoor Hills is one of the few places where visitors can enjoy nature in its purest form, away from city pollution.",
  latitude: 19.2440,
  longitude: 72.9726
},
{
  name: "Tansa Lake",
  image: "img/Tansa Lake.jpg",
  description: "Tansa Lake, a pristine freshwater lake in Thane district, is one of Mumbai’s major water sources and a paradise for nature lovers. Spread across 320 square kilometers, this scenic reservoir is surrounded by dense forests, making it an ideal spot for birdwatching, photography, and picnics. The Tansa Wildlife Sanctuary, which surrounds the lake, is home to various species of deer, leopards, and birds, making it a hidden gem for wildlife enthusiasts. The peaceful environment and breathtaking views of the lake during sunrise and sunset attract visitors looking for a break from the city’s chaos. Although swimming and boating are restricted due to its role as a drinking water source, visitors can enjoy long walks along the shore and admire the beauty of nature. Tansa Lake is a perfect weekend getaway for those seeking tranquility and adventure amidst lush greenery.",
  latitude: 19.6510,
  longitude: 73.3134
},
{
  name: "Kelva Beach",
  image: "img/Kelva Beach.jpg",
  description: "Kelva Beach, located along the Arabian Sea, is one of the most beautiful and unspoiled beaches in Thane district. Stretching over 7 km, it is known for its golden sands, swaying palm trees, and serene ambiance. Unlike the crowded beaches of Mumbai, Kelva Beach offers a peaceful retreat for visitors looking to relax and enjoy nature. The beach is ideal for long walks, horse riding, and ATV bike rides. Visitors can also explore the Kelva Fort, an ancient structure located near the shoreline, offering historical insights and scenic views. The nearby Shitladevi Temple is another attraction, drawing devotees throughout the year. Kelva Beach is perfect for weekend getaways, especially for families and couples looking for a quiet escape from city life. The sunset views from the beach are spectacular, making it a photographer’s paradise.",
  latitude: 19.5669,
  longitude: 72.7433
},
{
  name: "Vasai Fort",
  image: "img/Vasai Fort.jpg",
  description: "Vasai Fort, also known as Fort Bassein, is a historic Portuguese-era fort located near Vasai in Thane district. Built in the 16th century, it was once a thriving military base of the Portuguese, controlling the western coastal trade. Today, the fort stands as a majestic ruin, surrounded by thick walls, old churches, and watchtowers that offer stunning views of the Arabian Sea. The fort’s architecture, with its Portuguese-style carvings and large arched doorways, attracts history buffs and photographers alike. Bollywood movies like Josh and Khamoshi have been shot here, adding to its popularity. Visitors can explore the remnants of churches, courtyards, and secret tunnels while enjoying the peaceful ambiance of the fort. Vasai Fort is not only a historical site but also a fantastic location for a weekend picnic, offering a mix of history, nature, and breathtaking landscapes.",
  latitude: 19.3851,
  longitude: 72.8033
},
{
  name: "Gorakhgad Fort",
  image: "img/Gorakhgad Fort.jpg",
  description: "Gorakhgad Fort, a lesser-known but fascinating trekking destination, is located near Murbad in Thane district. This ancient fort, standing at 2,135 feet, was historically used as a lookout point during the reign of the Marathas. The trek to the top is moderately challenging, making it ideal for adventure lovers and trekking enthusiasts. The trail passes through dense forests, rocky patches, and steep climbs, offering breathtaking views of the Sahyadri mountain range. At the summit, visitors can explore caves, water cisterns, and a small temple dedicated to Saint Gorakhnath, after whom the fort is named. The sunrise and sunset views from the top are mesmerizing, making it a perfect spot for night treks and camping. Unlike commercialized tourist places, Gorakhgad Fort offers raw, untouched natural beauty and a thrilling trekking experience for those seeking an offbeat adventure.",
  latitude: 19.1716,
  longitude: 73.5011
},
{
  name: "Kachrali Lake",
  image: "img/Kachrali Lake.jpg",
  description: "Kachrali Lake, situated in the heart of Thane city, is a peaceful spot known for its clean waters, walking tracks, and scenic beauty. It serves as a major relaxation and fitness hub for locals, with well-maintained jogging paths and seating areas around the lake. The centerpiece of the lake is a small island with a temple, which enhances the spiritual and aesthetic charm of the location. The lake is home to various species of ducks, fish, and migratory birds, making it an excellent spot for birdwatchers and photographers. In the evening, the lake’s surroundings light up, creating a pleasant ambiance for visitors. Located close to Thane Municipal Corporation (TMC) building, it is easily accessible and a great place to unwind. Whether you’re looking for a morning walk, a peaceful escape, or a scenic sunset view, Kachrali Lake is a must-visit spot in Thane.",
  latitude: 19.1954,
  longitude: 72.9702
},
{
  name: "Kelwa Beach",
  image: "img/Kelva Beach.jpg",
  description: "Kelwa Beach, also known as Kelva Beach, is one of the most scenic and peaceful beaches in Palghar district. Stretching over 7 km, this pristine beach is known for its golden sands, swaying palm trees, and serene atmosphere. Unlike Mumbai’s crowded beaches, Kelwa Beach offers a quiet retreat, perfect for nature lovers and photographers. Adventure enthusiasts can enjoy horse riding, ATV bike rides, and camel rides along the shore. The nearby Shitladevi Temple is a major attraction, drawing devotees throughout the year. Another historic spot near the beach is the Kelwa Fort, an ancient structure that offers insights into the region’s history. Sunsets at Kelwa Beach are breathtaking, painting the sky with hues of orange and pink. It is a perfect weekend getaway for families, couples, and solo travelers looking to relax by the Arabian Sea.",
  latitude: 19.6333,
  longitude: 72.7500
},
{
  name: "Shirgaon Fort",
  image: "img/Shirgaon Fort.jpg",
  description: "Shirgaon Fort, located near Palghar town, is a historical site dating back to the Shivaji Maharaj era. The fort was strategically built to keep an eye on the Arabian Sea and was used by the Marathas as a military base. Standing 200 feet high, the fort offers panoramic views of the coastline and surrounding villages. Though partially in ruins, the fort’s massive stone walls, bastions, and underground tunnels still narrate stories of its glorious past. The intricate carvings on the walls and old water tanks inside the fort add to its historical charm. Visitors can trek to the top and enjoy the mesmerizing view of the Arabian Sea. Shirgaon Fort is a hidden gem for history lovers, adventure seekers, and photographers. It is especially beautiful during the monsoon, when the fort is covered in lush greenery, making it a picturesque destination.",
  latitude: 19.6556,
  longitude: 72.7158
},
{
  name: "Mahim Beach",
  image: "img/Mahim Beach.jpg",
  description: "Mahim Beach in Palghar is an untouched and lesser-known coastal gem, offering a peaceful and scenic getaway from the hustle of city life. Located near Mahim village, the beach is famous for its clean shores, coconut groves, and soothing waves. Unlike commercialized beaches, Mahim Beach remains relatively uncrowded, making it an ideal destination for relaxation, meditation, and sunset walks. The beach is also a great spot for fishing, birdwatching, and photography, especially during sunrise and sunset. The nearby Mahim Fort, an old Portuguese structure, adds a historical element to the visit. Mahim Beach is best visited during the winter and monsoon seasons when the weather is pleasant. With its natural beauty, calm waters, and serene environment, Mahim Beach is a perfect escape for those seeking solitude and scenic landscapes.",
  latitude: 19.6782,
  longitude: 72.7311
},
{
  name: "Tungareshwar Wildlife Sanctuary",
  image: "img/Tungareshwar Wildlife Sanctuary.jpg",
  description: "Tungareshwar Wildlife Sanctuary, located near Vasai, is a paradise for nature lovers, trekkers, and wildlife enthusiasts. Spanning over 85 square kilometers, this dense forest is home to a variety of flora and fauna, including leopards, deer, langurs, and over 200 bird species. The sanctuary is popular for its trekking trails, leading through dense forests, waterfalls, and rocky terrains, making it an exciting adventure for thrill-seekers. One of the key attractions inside the sanctuary is the Tungareshwar Temple, dedicated to Lord Shiva, which attracts devotees, especially during Mahashivratri. The sanctuary is best visited during the monsoon, when the waterfalls are in full flow, and the lush greenery adds to its beauty. Tungareshwar is a perfect destination for a day trek, nature walk, or spiritual retreat, offering a refreshing break from urban life.",
  latitude: 19.3957,
  longitude: 72.9081
},
{
  name: "Vajreshwari Hot Springs",
  image: "img/Vajreshwari Hot Springs.jpg",
  description: "Vajreshwari Hot Springs, located near the Vajreshwari Temple, are famous for their medicinal and therapeutic properties. These natural hot springs contain sulfur-rich water, which is believed to have healing effects for skin diseases, joint pains, and stress relief. The site is a popular pilgrimage destination, as it is situated near the Vajreshwari Temple, dedicated to Goddess Vajreshwari. The temple itself is an ancient structure, showcasing beautiful stone carvings and a peaceful ambiance. Many visitors take a dip in the hot springs before heading to the temple. The surrounding area is picturesque, with lush green hills and scenic landscapes. The best time to visit is during winter when the warm water provides a soothing experience. Vajreshwari Hot Springs is a must-visit for spiritual seekers, wellness enthusiasts, and nature lovers, offering a unique blend of relaxation and devotion.",
  latitude: 19.4812,
  longitude: 72.8467
},
{
  name: "Raigad Fort",
  image: "img/Raigad Fort.jpg",
  description: "Raigad Fort, the capital of Chhatrapati Shivaji Maharaj’s empire, is one of Maharashtra’s most historic and majestic forts. Perched at 2,700 feet above sea level, the fort offers breathtaking panoramic views of the Sahyadri mountain range. It was from here that Shivaji Maharaj was crowned as the first Chhatrapati of the Maratha Empire in 1674. The fort has numerous gates, bastions, and hidden pathways, along with significant structures like the Holi Cha Mal (royal court), Queen’s Palace, and the Jagdishwar Temple. Visitors can either trek up 1,737 steps or take the ropeway for a faster ascent. The Maha Darwaja (main entrance) still stands as a symbol of the fort’s grandeur. Monsoon and winter seasons enhance the beauty of the surroundings, making it a paradise for history lovers, trekkers, and photographers. A visit to Shivaji Maharaj’s Samadhi (memorial) here is a deeply emotional and patriotic experience.",
  latitude: 18.2341,
  longitude: 73.4400
},
{
  name: "Harihareshwar Beach & Temple",
  image: "img/Harihareshwar Beach & Temple.jpg",
  description: "Harihareshwar is a serene beach town known for its pristine coastline and the famous Harihareshwar Temple, dedicated to Lord Shiva. Often called the 'Dakshin Kashi', this temple holds great religious significance and is visited by thousands of devotees. The temple is surrounded by lush green hills and the Arabian Sea, creating a peaceful and scenic atmosphere. Apart from the temple, the beach is an ideal spot for relaxation, sunset views, and water activities. The unique rock formations along the shore add to the beauty of the place. Adventure enthusiasts can explore the coastal trek from Harihareshwar to Shrivardhan, which offers stunning sea views. The best time to visit is during winter and monsoon, when the weather is pleasant. Whether you are a spiritual traveler, nature lover, or beach enthusiast, Harihareshwar is a perfect getaway for tranquility and divine blessings.",
  latitude: 17.9939,
  longitude: 73.0183
},
{
  name: "Diveagar Beach",
  image: "img/Diveagar Beach.jpg",
  description: "Diveagar Beach is a hidden gem in the Raigad district, offering a clean, peaceful, and picturesque shoreline. With its golden sands, coconut palms, and crystal-clear waters, this beach is perfect for relaxation, photography, and water sports. Unlike crowded beaches, Diveagar provides a more secluded and tranquil experience. The beach is also famous for the Suvarna Ganesh Temple, which once housed an idol made of pure gold. The temple is a major pilgrimage site and attracts devotees from across Maharashtra. Adventure seekers can enjoy parasailing, jet skiing, and banana boat rides here. The beach is also home to migratory birds and small turtles, making it a great spot for wildlife enthusiasts. The best time to visit is between October and March, when the weather is cool. Diveagar is a perfect weekend getaway for those looking to escape the city and embrace nature’s beauty.",
  latitude: 18.1726,
  longitude: 73.0268
},
{
  name: "Murud-Janjira Fort",
  image: "img/Murud-Janjira Fort.jpg",
  description: "Murud-Janjira Fort is one of India’s most impressive sea forts, known for its invincible structure and fascinating history. Located on an island off the coast of Murud, this 17th-century fort remained unconquered despite repeated attacks by the Marathas, British, and Portuguese. The only way to reach the fort is by boat from Rajapuri village. The fort’s 19 massive bastions, secret escape routes, and gigantic cannons showcase its strategic military importance. Inside, you can explore ruins of palaces, water tanks, mosques, and watchtowers, reflecting its glorious past. The fort offers breathtaking sea views, making it a favorite destination for history lovers and photographers. Nearby, Murud Beach and Nawab’s Palace add to the experience. The best time to visit is from November to February, when the sea remains calm. A visit to Murud-Janjira is like stepping back into the era of naval warfare and legendary rulers.",
  latitude: 18.3039,
  longitude: 72.9633
},
{
  name: "Korlai Fort & Lighthouse",
  image: "img/Korlai Fort & Lighthouse.jpg",
  description: "Korlai Fort, located on a hill overlooking the Arabian Sea, is a scenic and lesser-known Portuguese fort near Alibaug. Built in 1521, this fort offers stunning sea views and historical ruins, making it a paradise for trekkers, history buffs, and photographers. The fort still has Portuguese inscriptions, hidden tunnels, and strong stone walls, reflecting its strategic importance. Adjacent to the fort is the Korlai Lighthouse, which provides a breathtaking 360-degree view of the coastline. Visitors can climb to the top of the lighthouse and enjoy an unforgettable view of the sunset over the Arabian Sea. The fort’s serene and uncrowded atmosphere makes it perfect for those looking to explore offbeat destinations. The best time to visit is during the monsoon and winter months, when the surroundings are lush green. Korlai Fort is an ideal mix of adventure, history, and scenic beauty, making it a must-visit spot in Raigad.",
  latitude: 18.5150,
  longitude: 72.9075
},
{
  name: "Ratnadurga Fort",
  image: "img/Ratnadurga Fort.jpg",
  description: "Ratnadurga Fort, a historic sea fort spread over 120 acres, is one of the most famous forts in Maharashtra. Originally built during the Bahmani Sultanate era, it was later captured by Chhatrapati Shivaji Maharaj, who strengthened its defenses. The fort’s horseshoe-shaped structure gives a commanding view of the Arabian Sea, making it a perfect spot for history lovers and photographers. Inside the fort, the Bhagwati Temple attracts many devotees, and the massive bastions, underground tunnels, and ancient watchtowers offer a glimpse into its glorious past. The fort played a crucial role in protecting trade routes along the Konkan coast. Visitors can enjoy trekking through its scenic surroundings, especially during monsoon when the greenery adds to its charm. Whether you are a history buff, nature lover, or photography enthusiast, Ratnadurga Fort is a must-visit when exploring Ratnagiri.",
  latitude: 16.9881,
  longitude: 73.3012
},
{
  name: "Ganpatipule Beach & Temple",
  image: "img/Ganpatipule Beach & Temple.jpg",
  description: "Ganpatipule is a picturesque coastal town famous for its Ganpatipule Temple and pristine beach. The temple is dedicated to Lord Ganesha and is believed to have a self-manifested (Swayambhu) idol, making it a revered pilgrimage site. Nestled amidst lush green hills and the Arabian Sea, the temple is unique as the idol faces the west instead of the traditional east. The adjacent Ganpatipule Beach is known for its clean white sands, turquoise waters, and peaceful environment, ideal for relaxation and water activities like jet skiing and parasailing. Tourists can also visit the Prachin Konkan Museum, which offers insights into the region’s history, culture, and traditional lifestyle. The best time to visit is from October to March, when the weather is pleasant. Ganpatipule is a perfect blend of spirituality, adventure, and natural beauty, making it a must-visit in Ratnagiri.",
  latitude: 17.1456,
  longitude: 73.2638
},
{
  name: "Jaigad Fort & Lighthouse",
  image: "img/Jaigad Fort & Lighthouse.jpg",
  description: "Jaigad Fort, a 17th-century coastal fort, is a historical and architectural marvel in Ratnagiri. Built on a cliff at the meeting point of Jaigad Creek and the Arabian Sea, this fort was a crucial part of the Maratha naval defense, protecting trade routes. The massive stone walls, bastions, and underground storage rooms showcase its strategic significance. It was under the command of Kanhoji Angre, the legendary admiral of the Maratha navy. Just a short walk from the fort is the Jaigad Lighthouse, which provides panoramic views of the coastline. Visitors can climb to the top and witness breathtaking sunsets over the Arabian Sea. The fort, surrounded by lush greenery and deep blue waters, is an excellent destination for trekkers, history enthusiasts, and photographers. Visiting Jaigad Fort is like stepping back in time to the era of Maratha maritime power.",
  latitude: 17.2947,
  longitude: 73.2306
},
{
  name: "Thibaw Palace",
  image: "img/Thibaw Palace.jpg",
  description: "Thibaw Palace, built in 1910, is a grand historical structure that served as the exile residence of King Thibaw Min, the last monarch of Burma (now Myanmar). After being defeated by the British, Thibaw and his family were forcibly relocated to Ratnagiri, where they lived in this magnificent three-story palace. The building features Burmese and Indian architectural styles, with intricate wooden carvings, spacious halls, and a scenic hilltop location offering panoramic views of Ratnagiri town and the Arabian Sea. Today, it houses a museum showcasing rare artifacts, photographs, and historical documents related to Thibaw’s life. The palace is an important cultural landmark that gives visitors insight into colonial history and the royal lifestyle. Surrounded by lush greenery and overlooking the coastline, Thibaw Palace is a hidden gem for history lovers and heritage enthusiasts.",
  latitude: 16.9924,
  longitude: 73.2877
},
{
  name: "Velas Beach & Turtle Festival",
  image: "img/Velas Beach & Turtle Festival.jpg",
  description: "Velas Beach is a serene and eco-friendly coastal destination famous for its annual Olive Ridley Turtle Festival. Every year, between February and April, thousands of baby turtles hatch on the sandy shores and make their way to the sea, creating a mesmerizing sight for visitors. The festival, organized by local conservationists, aims to protect endangered turtles and promote eco-tourism. Visitors can witness early morning hatchling releases, explore the quaint Velas village, and enjoy its peaceful beach with golden sands. The region follows strict conservation guidelines, ensuring a pollution-free and wildlife-friendly environment. Apart from the turtles, Velas is a paradise for bird watchers, nature lovers, and adventure seekers, offering opportunities for hiking, village tourism, and local cuisine experiences. A visit to Velas Beach is not just a getaway but also an opportunity to support marine conservation efforts.",
  latitude: 17.9561,
  longitude: 73.0355
},
{
  name: "Purnagad Fort",
  image: "img/Purnagad Fort.jpg",
  description: "Purnagad Fort, built by Chhatrapati Shivaji Maharaj, is a secluded yet historically significant fort on the Konkan coastline. Located near the Muchkundi River’s estuary, this fort played an essential role in coastal defense during the Maratha Empire. Unlike other forts, Purnagad is relatively well-preserved, with strong stone walls, sturdy bastions, and ancient water reservoirs. The fort offers spectacular views of the Arabian Sea, making it an excellent location for trekking and photography. The journey to the fort involves a short hike through green fields and rocky terrain, making it a great destination for adventure seekers and history enthusiasts. The nearby Purnagad Beach is a quiet and scenic spot where visitors can relax after exploring the fort. If you love offbeat historical sites with natural beauty, Purnagad Fort is a must-visit in Ratnagiri.",
  latitude: 16.6713,
  longitude: 73.3542
},
{
  name: "Aare-Ware Beach",
  image: "img/Aare-Ware Beach.jpg",
  description: "Aare-Ware Beach is a picturesque and unspoiled twin beach known for its crystal-clear waters, golden sand, and peaceful ambiance. Located along the coastal highway between Ratnagiri and Ganpatipule, it offers one of the most scenic road trips in Maharashtra, with stunning sea views along the winding roads. Unlike commercial beaches, Aare-Ware remains less crowded, making it ideal for long walks, sunset views, and peaceful relaxation. The beach is divided into two sections: Aare Beach and Ware Beach, both offering a pristine coastal experience. During monsoon, the area transforms into a green paradise, with misty hills adding to its charm. The location is perfect for nature lovers, photographers, and those seeking solitude away from city life. Whether you want to enjoy a leisurely drive, a romantic evening, or a day of peace, Aare-Ware Beach is an excellent choice.",
  latitude: 17.1158,
  longitude: 73.2495
},
{
  name: "Devgad Beach & Fort",
  image: "img/Devgad Beach & Fort.jpg",
  description: "Devgad is a coastal town famous for its pristine beach, historic fort, and world-famous Alphonso mangoes. Devgad Beach, with its clean waters and golden sands, is a perfect getaway for those seeking peace and serenity. Nearby, the Devgad Fort, built in the 17th century by the Marathas, offers breathtaking panoramic views of the Arabian Sea. The fort played a crucial role in coastal defense, protecting trade routes from pirates and foreign invasions. Visitors can explore its ancient bastions, hidden underground tunnels, and stone walls, which still stand strong against time. Apart from history, Devgad is also famous for its lush mango orchards, where visitors can enjoy fresh Alphonso mangoes during the summer season. The combination of beach, history, and mango tourism makes Devgad a must-visit destination in Ratnagiri.",
  latitude: 16.3844,
  longitude: 73.3674
},
{
  name: "Guhagar Beach",
  image: "img/Guhagar Beach.jpg",
  description: "Guhagar Beach is a pristine and less-explored coastal paradise known for its white sandy shores, clear blue waters, and coconut tree-lined coastline. Located in the Guhagar town of Ratnagiri, this beach is an ideal destination for relaxation, sunbathing, and leisurely strolls. Unlike commercialized beaches, Guhagar remains pollution-free and peaceful, making it a favorite for solitude seekers and nature lovers. The nearby Guhagar Temple, dedicated to Lord Shiva, attracts devotees, while local markets offer a variety of Konkani food, cashews, and mangoes. Water sports like jet skiing and banana boat rides are available for adventure enthusiasts. The beach is best visited during winter and early summer (November to May) when the weather is pleasant. If you seek a quiet coastal retreat away from the crowds, Guhagar Beach is a must-visit in Ratnagiri.",
  latitude: 17.4744,
  longitude: 73.1931
},
{
  name: "Hedvi Beach & Dashbhuja Ganpati Temple",
  image: "img/Hedvi Beach & Dashbhuja Ganpati Temple.jpg",
  description: "Hedvi Beach is a serene and rocky coastline known for its natural beauty, powerful waves, and spiritual significance. Located near Guhagar, this beach is famous for the Dashbhuja Ganpati Temple, which houses a rare 3-feet tall idol of Lord Ganesha with ten arms, believed to be over 300 years old. Devotees and tourists visit this site for spiritual blessings and peaceful surroundings. A unique feature of Hedvi Beach is the Bahman Ghal, a naturally carved gorge in the rocks where seawater rushes through with immense force, creating a mesmerizing view. The area is less crowded, making it ideal for meditation, relaxation, and photography. Visitors can also explore nearby temples and local villages for an authentic Konkan experience. Hedvi is a perfect combination of spirituality, nature, and adventure, making it a hidden gem in Ratnagiri.",
  latitude: 17.3913,
  longitude: 73.1986
},
{
  name: "Kunkeshwar Temple & Beach",
  image: "img/Kunkeshwar Temple & Beach.jpg",
  description: "Kunkeshwar Temple, often called the 'Kashi of the Konkan,' is a historic Shiva temple built in the 12th century by the Yadava dynasty. This temple, situated along the Arabian Sea, features intricate stone carvings, a grand entrance, and a peaceful spiritual ambiance. Legend says that a Shiva Lingam was discovered by a local shepherd, leading to the temple’s construction. Devotees believe that worshiping here fulfills wishes and brings spiritual blessings. Adjacent to the temple is the beautiful Kunkeshwar Beach, known for its clean white sand, blue waters, and coconut plantations. The beach is perfect for evening walks, sunset views, and peaceful meditation. Pilgrims and tourists alike visit Kunkeshwar for spiritual rejuvenation and coastal beauty. The temple’s annual Mahashivaratri festival attracts thousands of devotees. Whether you seek divine blessings or scenic relaxation, Kunkeshwar is a must-visit.",
  latitude: 16.3254,
  longitude: 73.3427
},
{
  name: "Marleshwar Waterfall & Temple",
  image: "img/Marleshwar Waterfall & Temple.jpg",
  description: "Marleshwar is a scenic waterfall and cave temple dedicated to Lord Shiva, located in the Sahyadri mountain range. The Marleshwar Temple, built inside a natural cave, is believed to be over 1,000 years old and is surrounded by lush green forests. To reach the temple, visitors must climb around 500 steps, enjoying breathtaking valley views along the way. During monsoon, the Marleshwar Waterfall cascades down the cliffs, creating a mesmerizing sight. The area is home to various wildlife species, and many believe that snakes reside near the temple but never harm devotees. Every year, the Mahashivaratri festival attracts thousands of visitors. The peaceful environment, combined with natural beauty and spiritual significance, makes Marleshwar an ideal destination for pilgrims, trekkers, and nature lovers. A visit here offers both adventure and divine blessings.",
  latitude: 17.0181,
  longitude: 73.6891
},
{
  name: "Pawas (Swami Swaroopanand Ashram)",
  image: "img/Pawas (Swami Swaroopanand Ashram).jpg",
  description: "Pawas is a spiritually significant village in Ratnagiri, famous for the Samadhi of Swami Swaroopanand, a revered saint and philosopher who spread Vedanta and self-realization teachings. His ashram, built in a peaceful location surrounded by nature, attracts spiritual seekers and devotees. The site is known for its meditation halls, simple yet powerful teachings, and serene environment, providing visitors with inner peace and relaxation. The ashram holds daily prayers and bhajans, offering a glimpse into spiritual life and philosophy. Nearby, visitors can explore local temples and enjoy fresh Konkan cuisine. Pawas is an ideal place for meditation, self-reflection, and learning about Indian spirituality. Whether you're seeking solitude, spiritual wisdom, or a break from city life, a visit to Pawas will be a calming and enlightening experience.",
  latitude: 16.9451,
  longitude: 73.2854
},
{
  name: "Unhavare Hot Water Springs",
  image: "img/Unhavare Hot Water Springs.jpg",
  description: "Unhavare Hot Springs, located in the forests of Ratnagiri, is a natural hot water source rich in medicinal minerals. The water here is believed to have healing properties for skin diseases, joint pain, and stress relief. The hot springs emerge from the earth's depths, maintaining a soothing warm temperature throughout the year. Surrounded by lush green forests and serene landscapes, this location is perfect for a therapeutic bath and relaxation. Local villagers often visit these springs for traditional healing practices. The area is clean and well-maintained, offering a unique experience in nature. Visitors can combine this trip with nearby trekking routes and scenic waterfalls. If you are looking for a natural spa-like experience in the lap of nature, Unhavare Hot Springs is a hidden gem worth visiting.",
  latitude: 17.2493,
  longitude: 73.5407
},
{
  name: "Jaigad Ganpati Temple",
  image: "img/Jaigad Ganpati Temple.jpg",
  description: "Jaigad Ganpati Temple is a spiritually significant temple dedicated to Lord Ganesha, located near the historic Jaigad Fort. The temple houses a unique self-manifested (Swayambhu) idol of Ganesha, attracting devotees seeking peace, blessings, and prosperity. Set against the backdrop of greenery and the Arabian Sea, the temple offers a calm and divine atmosphere. Many visitors also explore the nearby Jaigad Fort and Lighthouse, which offer panoramic sea views. The temple’s Ganesh Chaturthi celebrations are grand, with locals and tourists participating in traditional rituals. The coastal route leading to the temple is scenic, making the journey just as enjoyable as the destination. Whether you're on a spiritual journey or a coastal exploration, Jaigad Ganpati Temple provides a blend of divinity and natural beauty, making it a must-visit in Ratnagiri.",
  latitude: 17.2986,
  longitude: 73.2318
},
{
  name: "Sindhudurg Fort",
  image: "img/Sindhudurg Fort.jpg",
  description: "Sindhudurg Fort is a magnificent sea fort built by Chhatrapati Shivaji Maharaj in 1664 to protect the Konkan coastline from enemy invasions. Spread over 48 acres on a small island off the coast of Malvan, the fort is a symbol of Maratha naval power. The structure is strategically designed with massive walls, hidden escape routes, and freshwater wells, ensuring self-sufficiency. The fort’s entrance is cleverly camouflaged, making it nearly invisible to outsiders. Inside, there is a rare temple dedicated to Shivaji Maharaj, where his footprints and handprints are preserved. Visitors can reach Sindhudurg Fort via boats from Malvan jetty and explore the scenic views, historic architecture, and surrounding marine life. The fort is an architectural marvel and a must-visit for history enthusiasts, photographers, and adventure seekers.",
  latitude: 16.0432,
  longitude: 73.4613
},
{
  name: "Tarkarli Beach",
  image: "img/Tarkarli Beach.jpg",
  description: "Tarkarli Beach is a breathtaking coastal paradise known for its white sandy shores, crystal-clear waters, and vibrant marine life. Located near Malvan, it is famous for snorkeling, scuba diving, and water sports, attracting adventure lovers. The Sindhudurg Fort, visible from the beach, adds a historic charm to the location. Tarkarli is one of the few beaches in India where you can experience dolphin spotting, parasailing, and jet skiing. The nearby Karli River meets the Arabian Sea, creating a beautiful estuary where tourists can enjoy boating in houseboats. Tarkarli is also renowned for its authentic Malvani cuisine, offering delicious seafood like Bombil fry, Solkadhi, and fresh prawns. Whether you seek adventure, relaxation, or scenic beauty, Tarkarli Beach provides a perfect coastal retreat with mesmerizing sunsets and a peaceful ambiance.",
  latitude: 16.0394,
  longitude: 73.4890
},
{
  name: "Devbagh Beach",
  image: "img/Devbagh Beach.jpg",
  description: "Devbagh Beach is a hidden gem in Sindhudurg, located at the confluence of the Karli River and the Arabian Sea. Known for its golden sands, clear waters, and tranquil surroundings, it is an ideal place for nature lovers and peace seekers. The beach is less crowded, offering a serene escape from commercialized tourist spots. Devbagh is also famous for water sports like scuba diving, banana boat rides, and parasailing. One of the highlights is the Devbagh Sangam, where the river meets the sea, creating a stunning natural spectacle. Visitors can take a boat ride to Tsunami Island, a small sandbar island that appears during low tide, offering a unique experience. Local fishermen offer fresh seafood, and tourists can enjoy Malvani cuisine in nearby homestays. Devbagh Beach is perfect for those seeking relaxation and adventure in one place.",
  latitude: 16.0066,
  longitude: 73.4775
},
{
  name: "Vijaydurg Fort",
  image: "img/Vijaydurg Fort.jpg",
  description: "Vijaydurg Fort, also called the 'Gibraltar of the East,' is one of the oldest and strongest sea forts in Maharashtra. Built by the Shilahar dynasty and later fortified by Shivaji Maharaj, the fort played a crucial role in Maratha naval dominance. Located on the coast of the Arabian Sea, the fort features triple-layered walls, hidden tunnels, and a naval dock that once housed Maratha warships. One of its most fascinating features is the underwater wall built to prevent enemy ships from entering the fort’s waters. The fort offers stunning views of the ocean, making it a great place for history enthusiasts, photographers, and adventure seekers. Visitors can explore the massive bastions, watchtowers, and secret passages. The fort’s strategic location, historical significance, and breathtaking coastal views make it a must-visit destination in Sindhudurg.",
  latitude: 16.5661,
  longitude: 73.3226
},
{
  name: "Amboli Hill Station",
  image: "img/Amboli Hill Station.jpg",
  description: "Amboli is a picturesque hill station nestled in the Western Ghats, known for its lush greenery, misty hills, and cascading waterfalls. Located at an altitude of 690 meters, it is one of the wettest places in Maharashtra, receiving heavy monsoon rainfall. The Amboli Waterfall, a major attraction, is a spectacular sight during the monsoon season. The region is home to rare flora and fauna, making it a paradise for nature lovers and wildlife photographers. The Madhavgad Fort, offering panoramic valley views, and the Hiranyakeshi Temple, dedicated to Goddess Parvati, add to Amboli’s charm. The hill station is also famous for its sunset point, providing breathtaking views of the Konkan coast. Whether you're a trekker, nature enthusiast, or someone seeking tranquility, Amboli is a perfect monsoon getaway in Sindhudurg district.",
  latitude: 15.9631,
  longitude: 74.0091
}
    ];

    const searchInput = document.getElementById("search-input");
    const searchBtn = document.querySelector(".search-btn");
    const placesSection = document.querySelector(".places-container");
    const modal = document.getElementById("direction-modal");
    const modalContent = modal.querySelector(".modal-content");
    const closeButton = modal.querySelector(".close-btn");
    const placeNameSpan = document.getElementById("place-name");
    const mapContainer = document.getElementById("map-container");

    // Bharati Vidyapeeth College of Engineering, Kolhapur
    const fixedOriginLatitude = 16.6516;
    const fixedOriginLongitude = 74.2491;

    // Generate Place Cards
    function generatePlaceCards(placesToShow) {
        placesSection.innerHTML = "";

        if (placesToShow.length === 0) {
            placesSection.innerHTML = `
                <div class="no-results">
                    <i class="fas fa-map-marked-alt"></i>
                    <h3>No Places Found</h3>
                    <p>We couldn't find any places matching your search. Try a different keyword.</p>
                </div>
            `;
            return;
        }

        for (let i = 0; i < placesToShow.length; i++) {
            const place = placesToShow[i];
            const placeCard = document.createElement("div");
            placeCard.className = "place-card";
            placeCard.innerHTML = `
                <img src="${place.image}" alt="${place.name}">
                <div class="place-content">
                    <h2 class="place-name"><i class="fas fa-map-pin"></i> ${place.name}</h2>
                    <p class="place-info">${place.description}</p>
                    <button class="get-direction-btn" data-lat="${place.latitude}" data-lng="${place.longitude}" data-name="${place.name}">
                        <i class="fas fa-directions"></i> Get Directions
                    </button>
                </div>
            `;
            placesSection.appendChild(placeCard);

            // Insert Google AdSense after every 9 places
            if ((i + 1) % 9 === 0 && i !== placesToShow.length - 1) {
                const adContainer = document.createElement("div");
                adContainer.className = "ad-container";
                adContainer.innerHTML = `
                    <ins class="adsbygoogle"
                        style="display:block"
                        data-ad-client="ca-pub-9437795823332700"
                        data-ad-slot="3844219112"
                        data-ad-format="auto"
                        data-full-width-responsive="true"></ins>
                `;
                const adScript = document.createElement("script");
                adScript.textContent = "(adsbygoogle = window.adsbygoogle || []).push({});";
                
                adContainer.appendChild(adScript);
                placesSection.appendChild(adContainer);
            }
        }
    }

    // Show Google Maps Directions Modal
    function showDirectionsModal(latitude, longitude, name) {
        placeNameSpan.textContent = name;
        mapContainer.innerHTML = `
            <iframe src="https://www.google.com/maps/embed/v1/directions?key=AIzaSyBNXE-A-aitIR-3n3LrPNZxXfzLCE1gDGs&origin=${fixedOriginLatitude},${fixedOriginLongitude}&destination=${latitude},${longitude}" 
            width="100%" height="400" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
        `;
        modal.style.display = "block";
        document.body.style.overflow = "hidden";
    }

    // Search Input Event
    searchInput.addEventListener("input", (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredPlaces = places.filter((place) =>
            place.name.toLowerCase().includes(searchTerm) ||
            place.description.toLowerCase().includes(searchTerm)
        );
        generatePlaceCards(filteredPlaces);
    });

    // Search Button Event
    searchBtn.addEventListener("click", () => {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredPlaces = places.filter((place) =>
            place.name.toLowerCase().includes(searchTerm) ||
            place.description.toLowerCase().includes(searchTerm)
        );
        generatePlaceCards(filteredPlaces);
    });

    // Get Direction Button Event
    placesSection.addEventListener("click", (e) => {
        // Check if clicked element or its parent is the direction button
        let directionBtn;
        if (e.target.classList.contains("get-direction-btn")) {
            directionBtn = e.target;
        } else if (e.target.parentElement.classList.contains("get-direction-btn")) {
            directionBtn = e.target.parentElement;
        }

        if (directionBtn) {
            const latitude = directionBtn.getAttribute("data-lat");
            const longitude = directionBtn.getAttribute("data-lng");
            const name = directionBtn.getAttribute("data-name");
            showDirectionsModal(latitude, longitude, name);
        }
    });

    // Close Modal
    closeButton.addEventListener("click", () => {
        modal.style.display = "none";
        mapContainer.innerHTML = "";
        document.body.style.overflow = "auto";
    });

    // Click Outside Modal
    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
            mapContainer.innerHTML = "";
            document.body.style.overflow = "auto";
        }
    });

    // Load Places on Page Load
    generatePlaceCards(places);