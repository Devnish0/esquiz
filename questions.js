// Environmental Science Question Bank
// Extracted from: Question Bank_Environmental Science PDF
// Total Questions: 148

const QUESTIONS = [
  {
    id: 1,
    question: "IMD is also known as……",
    options: ["International Meteorological Department", "Indian Mining Department", "Indian Maritime Department", "Indian Meteorological Department"],
    correct: 3
  },
  {
    id: 2,
    question: "How much India land areas are prone to flood and river erosion?",
    options: ["12%", "15%", "20%", "25%"],
    correct: 0
  },
  {
    id: 3,
    question: "The full name of AES is…………………….",
    options: ["Advanced Encephalitis Syndrome", "Acute Encephalitis Syndrome", "Abnormal Encephalitis Syndrome", "Additional Encephalitis Syndrome"],
    correct: 1
  },
  {
    id: 4,
    question: "El-nino is the result of………………",
    options: ["Drought", "Climate Change", "Earthquake", "Eclipse"],
    correct: 1
  },
  {
    id: 5,
    question: "Flood Forecasting and Warning system of India works under the guidance of………",
    options: ["Central Water Commission", "Ministry of Environment, Forest & Climate Change", "State Government", "Department of Science & Technology"],
    correct: 0
  },
  {
    id: 6,
    question: "………can be defined as the occurrence of an illness or other health-related event that is clearly in excess of unexpected occurrence.",
    options: ["AIDS", "Epidemic", "TB", "None of these"],
    correct: 1
  },
  {
    id: 7,
    question: "Full form of CPCB is………………………….",
    options: ["Central Population Control Board", "Common Population Control Board", "Central Public Control Board", "Central Pollution Control Board"],
    correct: 3
  },
  {
    id: 8,
    question: "What is UNEP?",
    options: ["United Nations Environment Policy", "United Nations Environment Programme", "United Nations Education Programme", "United Nations Environmental Protection"],
    correct: 1
  },
  {
    id: 9,
    question: "Who has given the concept of biodiversity hot spots?",
    options: ["Tansley", "Clement", "Myer", "Grinnell"],
    correct: 2
  },
  {
    id: 10,
    question: "Dr Salim Ali Centre for Ornithology is located at………………….",
    options: ["Hyderabad", "Bangalore", "Coimbatore", "Chennai"],
    correct: 2
  },
  {
    id: 11,
    question: "Minimata disease occurred due to……………….",
    options: ["Cadmium pollution", "Selenium pollution", "Arsenic pollution", "Mercury pollution"],
    correct: 3
  },
  {
    id: 12,
    question: "Clostridium botulinum is responsible for……….",
    options: ["Dengue", "Cholera", "Food poisoning", "Diarrhea"],
    correct: 2
  },
  {
    id: 13,
    question: "Which one is responsible for tooth disease in human beings?",
    options: ["Nitrate", "Fluoride", "Phosphate", "Sulphate"],
    correct: 1
  },
  {
    id: 14,
    question: "The rate of change in temperature observed while moving upward through the earth\'s atmosphere is called as………….",
    options: ["Lapse rate", "Isobaric rate", "Pulse rate", "Isochoric rate"],
    correct: 0
  },
  {
    id: 15,
    question: "Lakes that have high nutrient concentration are referred as……………………….",
    options: ["Thermotrophic", "Oligotrophic", "Eutrophic", "Dystrophic"],
    correct: 2
  },
  {
    id: 16,
    question: "PAN is a type of…………………………….",
    options: ["Fossil fuel", "Halones", "Photochemical smog", "Ozone depleting substance"],
    correct: 2
  },
  {
    id: 17,
    question: "The full name of HCFC is………………….",
    options: ["Hydrocarbon and chlorofluorocarbons", "Heavy chlorofluorocarbons", "High chlorofluorocarbons", "Hydro-chlorofluorocarbons"],
    correct: 3
  },
  {
    id: 18,
    question: "Which of the following plants is extremely sensitive towards sulphur dioxide?",
    options: ["Tomato", "Onion", "Potato", "Corn"],
    correct: 0
  },
  {
    id: 19,
    question: "Which of the following type of pollution is Cultural eutrophication?",
    options: ["Noise pollution", "Thermal pollution", "Soil pollution", "Water pollution"],
    correct: 3
  },
  {
    id: 20,
    question: "What is the significance of the ionosphere?",
    options: ["Aviation movements", "High frequency radio transmission", "Regulates weather", "All of these"],
    correct: 1
  },
  {
    id: 21,
    question: "The negative effects of climate change will include……………….",
    options: ["Flooding", "Water scarcity", "Less production", "All of these"],
    correct: 3
  },
  {
    id: 22,
    question: "Photochemical Smog is the resultant of………………….",
    options: ["Air pollution", "Landslide", "Soil pollution", "Earthquake"],
    correct: 0
  },
  {
    id: 23,
    question: "Which one is emitted by automobile exhaust?",
    options: ["Fluoride", "Arsenic", "Nitrate", "Chromium"],
    correct: 1
  },
  {
    id: 24,
    question: "Disaster management cycle can be divided into………………….",
    options: ["Pre and Post Disaster Management", "Response and Recovery", "Mitigation and Prevention", "Risk and Chance"],
    correct: 0
  },
  {
    id: 25,
    question: "Urban flooding is the resultant of……………………",
    options: ["Poor Sewerage Management", "Siltation of drains", "Climate change", "All of these"],
    correct: 3
  },
  {
    id: 26,
    question: "Which one is the most dangerous waste for living beings?",
    options: ["Oil spills", "Plastic wastes", "Radioactive waste", "Biomedical wastes"],
    correct: 2
  },
  {
    id: 27,
    question: "Which one is not a contagious disease?",
    options: ["Chicken pox", "AIDS", "Plague", "Corona"],
    correct: 1
  },
  {
    id: 28,
    question: "Which one is counted as a big risk factor for city areas?",
    options: ["Water scarcity", "Unplanned development pattern", "Waste management", "None of these"],
    correct: 2
  },
  {
    id: 29,
    question: "Which is the most contagious waste?",
    options: ["Solid waste", "Municipal Waste", "Bio-medical waste", "E-waste"],
    correct: 2
  },
  {
    id: 30,
    question: "Which river is known as \'sorrow of Bihar\'?",
    options: ["Brahmaputra", "Ganges", "Kosi", "Son"],
    correct: 2
  },
  {
    id: 31,
    question: "Which is/are the methods of waste management?",
    options: ["Landfill", "Incineration", "Composting", "All of these"],
    correct: 3
  },
  {
    id: 32,
    question: "Construction of Checkdams can prevent from the hazard of…………",
    options: ["Landslide", "Drought", "Flood", "Earthquake"],
    correct: 2
  },
  {
    id: 33,
    question: "Kyoto protocol was organized in……………………….",
    options: ["1985", "2000", "1997", "2005"],
    correct: 2
  },
  {
    id: 34,
    question: "Global warming is the resultant of…………………",
    options: ["Soil pollution", "Water pollution", "Green house gas emission", "Noise pollution"],
    correct: 2
  },
  {
    id: 35,
    question: "India receives an annual rainfall around………………",
    options: ["1100 mm", "1200 mm", "1300 mm", "1400 mm"],
    correct: 1
  },
  {
    id: 36,
    question: "In which year the devastating Tsunami came in Indian coastal areas?",
    options: ["2004", "2001", "1999", "1998"],
    correct: 0
  },
  {
    id: 37,
    question: "Which one is a contagious disease?",
    options: ["AIDS", "Nausea", "Chicken pox", "Dengue"],
    correct: 2
  },
  {
    id: 38,
    question: "Kyoto protocol was organized for the reduction of……………….",
    options: ["Water pollution", "Noise pollution", "Green house gases", "Soil pollution"],
    correct: 2
  },
  {
    id: 39,
    question: "Sendai framework was organized for the management of……………………",
    options: ["Global warming", "Green house gases", "Disasters", "Industrial pollution"],
    correct: 2
  },
  {
    id: 40,
    question: "In which year, a National Policy on Disaster Management was issued for India?",
    options: ["2005", "2006", "2007", "2009"],
    correct: 3
  },
  {
    id: 41,
    question: "HIV is also known as………….",
    options: ["High Immune Virus", "Human Interior Virus", "Human Immune Virus", "High-risk Immune Virus"],
    correct: 2
  },
  {
    id: 42,
    question: "Punjab and Haryana states have river water dispute on the rivers-",
    options: ["Ravi-Beas water", "Ganga water", "Satluj water", "Yamuna water"],
    correct: 0
  },
  {
    id: 43,
    question: "What is the branch of science which deals with the formation and distribution of soil?",
    options: ["Ecology", "Biology", "Pedology", "Seismology"],
    correct: 2
  },
  {
    id: 44,
    question: "Luminous pollution is also known as-",
    options: ["Photo pollution", "Air pollution", "Water pollution", "Soil pollution"],
    correct: 0
  },
  {
    id: 45,
    question: "Which is the best method for the management of biomedical wastes?",
    options: ["Composting", "Incineration", "Sanitary land filling", "Open dumping"],
    correct: 1
  },
  {
    id: 46,
    question: "In 1986, a very important Act was passed by Indian Parliament for the protection of Environment namely…….",
    options: ["The Wild Life (Protection) Act", "The Environment (Protection) Act", "The Air (Prevention and Control of Pollution) Act", "The Water (Prevention and Control of Pollution) Act"],
    correct: 1
  },
  {
    id: 47,
    question: "……………..is related with Chipko Movement.",
    options: ["Chandi Prasad Bhat", "G.D. Agrwal", "Arundhati Roy", "M.C. Mehta"],
    correct: 0
  },
  {
    id: 48,
    question: "Who has given the concept of biodiversity hotspot?",
    options: ["Tansley", "Clement", "Myer", "Grinnell"],
    correct: 2
  },
  {
    id: 49,
    question: "IUCN stands for……………………….",
    options: ["International Union for Conservation of Nature", "Indian Union for Conservation of Nature", "International Union for Conservation of Natural Resources", "None of the above"],
    correct: 0
  },
  {
    id: 50,
    question: "Noise pollution measurement can be done in……………………….",
    options: ["Watt", "Frequency", "Decibel", "All of these"],
    correct: 2
  },
  {
    id: 51,
    question: "World Ozone Day is celebrated on………………….",
    options: ["July 16", "August 16", "September 16", "October 16"],
    correct: 2
  },
  {
    id: 52,
    question: "Soil salinity is the resultant of………………………",
    options: ["Overgrazing", "Climate change", "Global warming", "Over irrigation"],
    correct: 3
  },
  {
    id: 53,
    question: "Depletion of Ozone hole layer is mainly due to release of………………….",
    options: ["CFC", "CO", "O₂", "CO₂"],
    correct: 0
  },
  {
    id: 54,
    question: "Oceanic acidification occurs due to the dissolution of………………….",
    options: ["Oxygen", "Carbon dioxide", "Methane", "Nitrogen"],
    correct: 1
  },
  {
    id: 55,
    question: "Sea level rise is the resultant of……………………………….",
    options: ["Global warming", "Oceanic acidification", "Ozone depletion", "All of these"],
    correct: 0
  },
  {
    id: 56,
    question: "Ozone is a ……………pollutant in troposphere.",
    options: ["Primary", "Secondary", "Tertiary", "None of these"],
    correct: 1
  },
  {
    id: 57,
    question: "Widely accepted concept of ecological succession is given by…………………………",
    options: ["Odum", "Darwin", "Lamarck", "Clement"],
    correct: 3
  },
  {
    id: 58,
    question: "Chipko movement was originated from………………………….",
    options: ["Uttarakhand", "Himachal Pradesh", "Bihar", "Delhi"],
    correct: 0
  },
  {
    id: 59,
    question: "Biome is an example of……………………",
    options: ["Tiny ecosystem", "Ecology", "Environment", "Vast ecosystem"],
    correct: 3
  },
  {
    id: 60,
    question: "Open dumping of solid wastes in environment may pose…………….",
    options: ["No health hazards", "Only animal health hazards", "Human health hazards", "Both human and animal health problems"],
    correct: 3
  },
  {
    id: 61,
    question: "Electrostatic precipitators are used to control……………………",
    options: ["Water pollution", "Soil pollution", "Air pollution", "Noise pollution"],
    correct: 2
  },
  {
    id: 62,
    question: "Which Indian Act was introduced in the year of 1981 to reduce the pollution?",
    options: ["Water Pollution Act", "Noise Pollution Act", "Air Pollution Act", "None of these"],
    correct: 2
  },
  {
    id: 63,
    question: "Montreal Protocol is an international treaty organised for what?",
    options: ["Protection of ozone layer", "Protection from global warming", "Reducing green house gases", "Reducing air pollution"],
    correct: 0
  },
  {
    id: 64,
    question: "Clean Development Mechanism (CDM) and Certified Emission Reductions (CERs) are related with…………….",
    options: ["Montreal Protocol", "Basel Convention", "Kyoto Protocol", "Ramsar Convention"],
    correct: 2
  },
  {
    id: 65,
    question: "Fukushima incident is related with……………………",
    options: ["Volcanic eruptions", "Nuclear accident", "Earthquake", "Atomic bomb testing"],
    correct: 1
  },
  {
    id: 66,
    question: "Which of the following is a renewable source of energy?",
    options: ["Ocean currents", "Solar energy", "Biomass", "All of these"],
    correct: 3
  },
  {
    id: 67,
    question: "Which of the following is biodegradable waste?",
    options: ["Paper", "Food waste", "Polythene bags", "Synthetic fiber"],
    correct: 1
  },
  {
    id: 68,
    question: "Which of the following air pollution control device has maximum efficiency?",
    options: ["Spray tower", "Wet cyclonic scrubber", "Electrostatic precipitator", "Dynamic precipitator"],
    correct: 2
  },
  {
    id: 69,
    question: "Which of the following is not a part of photochemical smog?",
    options: ["SPM", "PAN", "O₃", "NO₂"],
    correct: 0
  },
  {
    id: 70,
    question: "Which of the following greenhouse gas is contributed by cattle farming?",
    options: ["Carbon monoxide", "Nitrous oxide", "Methane", "All of these"],
    correct: 2
  },
  {
    id: 71,
    question: "Which place in India receives the highest annual rainfall?",
    options: ["Mawsynram", "Cherrapunji", "Siju", "Phyllut"],
    correct: 0
  },
  {
    id: 72,
    question: "Which of the following gases is responsible for the yellowing of the Taj Mahal?",
    options: ["Organic carbon", "Black carbon", "Brown carbon", "All of these"],
    correct: 3
  },
  {
    id: 73,
    question: "Which one is considered as the largest source of energy across the world?",
    options: ["Solar", "Oil", "Geothermal", "None of these"],
    correct: 1
  },
  {
    id: 74,
    question: "Biodiversity hotspot concept was given first time in year….",
    options: ["1978", "1988", "1998", "2008"],
    correct: 1
  },
  {
    id: 75,
    question: "Concept of sustainable development goals are developed by…….",
    options: ["UNO", "FAO", "ILO", "WHO"],
    correct: 0
  },
  {
    id: 76,
    question: "Deforestation causes………….",
    options: ["Drought", "Accidents", "Earthquake", "Eclipse"],
    correct: 0
  },
  {
    id: 77,
    question: "Which one is the main culprit of global warming?",
    options: ["CO", "O₂", "CO₂", "SO₂"],
    correct: 2
  },
  {
    id: 78,
    question: "How many sustainable development goals are set by United Nations?",
    options: ["17", "25", "21", "29"],
    correct: 0
  },
  {
    id: 79,
    question: "Green plants have………..pigment which helps in photosynthesis.",
    options: ["Licopene", "Chlorophyll", "Cytosine", "All of these"],
    correct: 1
  },
  {
    id: 80,
    question: "Decomposers are in……………….nature.",
    options: ["Saprophytic", "Eutrophic", "Oligotrophic", "None of these"],
    correct: 0
  },
  {
    id: 81,
    question: "Which of the following is not a biotic component?",
    options: ["Rhizobium", "Protozoa", "Fungi", "Salinity"],
    correct: 3
  },
  {
    id: 82,
    question: "The sequential food habit of the organisms is known as………….",
    options: ["Food web", "Food chain", "Ecological niche", "All of these"],
    correct: 1
  },
  {
    id: 83,
    question: "The full form of BOD is………………….",
    options: ["Biochemical Oxygen Demand", "Biochemical Orbit Diversion", "Biomedical Oxygen Demand", "All of these"],
    correct: 0
  },
  {
    id: 84,
    question: "Ecosystem word is given by which scientist?",
    options: ["Kofi Annan", "A.G. Tansley", "Al Gore", "Wangari Maathai"],
    correct: 1
  },
  {
    id: 85,
    question: "The scientist who is regarded as father of ecology.",
    options: ["Elton", "Clements", "Odum", "Tansley"],
    correct: 2
  },
  {
    id: 86,
    question: "Ozone layer is present in which part of the atmosphere?",
    options: ["Troposphere", "Ionosphere", "Stratosphere", "Mesosphere"],
    correct: 2
  },
  {
    id: 87,
    question: "The living organisms which can prepare their own food are known as………….",
    options: ["Heterotrophs", "Decomposers", "Producers", "Consumers"],
    correct: 2
  },
  {
    id: 88,
    question: "………..are the indicators of pollution free zone.",
    options: ["Fungus", "Bacteria", "Protozoa", "Lichens"],
    correct: 3
  },
  {
    id: 89,
    question: "The atmospheric layer which is present in the contact of earth…",
    options: ["Troposphere", "Stratosphere", "Mesosphere", "Ionosphere"],
    correct: 0
  },
  {
    id: 90,
    question: "Reciprocal interrelationship in between organisms and their environment is………….",
    options: ["Ethology", "Environment", "Ecosystem", "Ecology"],
    correct: 3
  },
  {
    id: 91,
    question: "Most of the environmental problems could be solved through………….",
    options: ["Establishing more industries", "Deforestation", "Afforestation", "None of these"],
    correct: 2
  },
  {
    id: 92,
    question: "The most dangerous pollution is………….",
    options: ["Air pollution", "Nuclear pollution", "Soil pollution", "Water pollution"],
    correct: 1
  },
  {
    id: 93,
    question: "The thickness of ozone layer is measured in……………",
    options: ["Hertz", "Dobson units", "Kilometers", "Nanometre"],
    correct: 1
  },
  {
    id: 94,
    question: "Ozone depletion is highest in the region of………….",
    options: ["South pole", "Equator", "Tropics", "North pole"],
    correct: 0
  },
  {
    id: 95,
    question: "Nudation is a part of which process?",
    options: ["Ecological niche", "Endemic", "Ecological succession", "Ecotype"],
    correct: 2
  },
  {
    id: 96,
    question: "The ecological succession that starts in an area of adequate moisture is called as………….",
    options: ["Psammosere", "Hydrarch", "Xerarch", "Mesarch"],
    correct: 1
  },
  {
    id: 97,
    question: "What does the phrase \'anthropogenic CO₂ emissions\' mean?",
    options: ["Natural CO₂ emissions", "Human made CO₂ emissions", "Industrial CO₂ emissions", "All of these"],
    correct: 1
  },
  {
    id: 98,
    question: "Which of the following is NOT a primary pollutant?",
    options: ["Oxygen", "Ground-level ozone", "Carbon monoxide", "Carbon dioxide"],
    correct: 0
  },
  {
    id: 99,
    question: "Which of the following gases are main contributors to acid rain?",
    options: ["Carbon dioxide and carbon monoxide", "Sulphur dioxide and carbon dioxide", "Sulphur dioxide and nitrogen dioxide", "Sulphur dioxide and nitrous oxide"],
    correct: 3
  },
  {
    id: 100,
    question: "Alive part of the environment is also called as…………….",
    options: ["Abiotic", "Biotic", "Non-biotic", "All of these"],
    correct: 1
  },
  {
    id: 101,
    question: "Ecology word has been coined by………….",
    options: ["Odum", "Darwin", "Hackel", "Clement"],
    correct: 2
  },
  {
    id: 102,
    question: "Ecology word has been derived from 2 greek words Oikos and Logos. What does mean by oikos?",
    options: ["Habitat", "Population", "Community", "None of these"],
    correct: 0
  },
  {
    id: 103,
    question: "What is the full form of DO?",
    options: ["Dissolved Ozone", "Dissolved Oxygen", "Dissolved Oil", "None of these"],
    correct: 1
  },
  {
    id: 104,
    question: "Which one is the example of photo-autotroph?",
    options: ["Plants", "Bacteria", "Green plants", "All of these"],
    correct: 2
  },
  {
    id: 105,
    question: "The direction of flow of energy in an ecosystem is……",
    options: ["Unidirectional", "Multidirectional", "Directionless", "All of these"],
    correct: 0
  },
  {
    id: 106,
    question: "Nepenthes is an example of………….",
    options: ["Bacteria", "Fungi", "Algae", "Insectivorous plant"],
    correct: 3
  },
  {
    id: 107,
    question: "Lotic water ecosystem is related to…….",
    options: ["Running water ecosystem", "Stagnant water ecosystem", "Lake", "Pond"],
    correct: 0
  },
  {
    id: 108,
    question: "Aquarium is an example of…………….",
    options: ["Terrestrial ecosystem", "Artificial ecosystem", "Natural ecosystem", "All of these"],
    correct: 1
  },
  {
    id: 109,
    question: "Father of Indian ecology is………….",
    options: ["R. Mishra", "K.R. Puri", "K.D. Sharma", "G.S. Verma"],
    correct: 0
  },
  {
    id: 110,
    question: "IPCC is related with the reporting of………….",
    options: ["Climate change", "Disasters", "Floods", "None of these"],
    correct: 0
  },
  {
    id: 111,
    question: "At which state region, India is mostly affected with arsenic contamination?",
    options: ["Bihar", "West Bengal", "Jharkhand", "Uttar Pradesh"],
    correct: 1
  },
  {
    id: 112,
    question: "Punjab and Haryana states have river water dispute on the water of rivers………….",
    options: ["Ravi-Beas water", "Ganga water", "Satluj water", "Yamuna water"],
    correct: 0
  },
  {
    id: 113,
    question: "……is an example of gaseous cycle.",
    options: ["Hydrological cycle", "Sulfur cycle", "Phosphorous cycle", "All of these"],
    correct: 0
  },
  {
    id: 114,
    question: "Biosphere is made up of………….",
    options: ["Atmosphere", "Hydrosphere", "Lithosphere", "All of these"],
    correct: 3
  },
  {
    id: 115,
    question: "Kaziranga national park is very famous for the species of………….",
    options: ["Rhinoceros", "Asiatic lion", "Tiger", "Elephant"],
    correct: 0
  },
  {
    id: 116,
    question: "DDT is a common……………",
    options: ["Pesticide", "Halon", "Coolant", "None of these"],
    correct: 0
  },
  {
    id: 117,
    question: "………is the cleanest fossil fuel.",
    options: ["Coal", "Petrol", "Natural gas", "Diesel"],
    correct: 2
  },
  {
    id: 118,
    question: "Who has given the concept of biodiversity hotspots?",
    options: ["Tansley", "Clement", "Myer", "Grinnell"],
    correct: 2
  },
  {
    id: 119,
    question: "Dudhwa National Park is located in which state?",
    options: ["Haryana", "Uttar Pradesh", "Himachal Pradesh", "Madhya Pradesh"],
    correct: 1
  },
  {
    id: 120,
    question: "IUCN compiles………………",
    options: ["Blue data book", "Red data book", "Green data book", "All of these"],
    correct: 1
  },
  {
    id: 121,
    question: "Solar energy is an example of………….",
    options: ["Conventional source of energy", "Non-conventional source of energy", "Traditional source of energy", "None of these"],
    correct: 1
  },
  {
    id: 122,
    question: "Which one does not cause any threat to the biodiversity?",
    options: ["Biological invasion", "Habitat destruction", "Declaring wild life sanctuaries", "Poaching"],
    correct: 2
  },
  {
    id: 123,
    question: "………species that have very restricted distribution and are found in some particular regions.",
    options: ["Endemic species", "Genetic species", "Plant species", "Animal Species"],
    correct: 0
  },
  {
    id: 124,
    question: "Jim Corbett National Park is located in………….",
    options: ["Uttar Pradesh", "Himachal Pradesh", "Uttarakhand", "Sikkim"],
    correct: 2
  },
  {
    id: 125,
    question: "What is JFM?",
    options: ["Joint Forest Management", "Joint Facility Management", "Joint Forecast Management", "Joint Fire Management"],
    correct: 0
  },
  {
    id: 126,
    question: "Sundarbans National Park is located in………….",
    options: ["West Bengal", "Meghalaya", "Sikkim", "Odisha"],
    correct: 0
  },
  {
    id: 127,
    question: "The total number of Biogeographic zones in India is………….",
    options: ["2", "6", "8", "10"],
    correct: 3
  },
  {
    id: 128,
    question: "In which year project Elephant was launched in India?",
    options: ["1973", "1986", "1992", "1998"],
    correct: 2
  },
  {
    id: 129,
    question: "Which type of coal is having the best quality?",
    options: ["Peat", "Lignite", "Bituminous", "Anthracite"],
    correct: 3
  },
  {
    id: 130,
    question: "Which type of coal is significantly found in India?",
    options: ["Peat", "Lignite", "Bituminous", "Anthracite"],
    correct: 2
  },
  {
    id: 131,
    question: "Which type of coal is having the highest calorific value?",
    options: ["Peat", "Lignite", "Bituminous", "Anthracite"],
    correct: 3
  },
  {
    id: 132,
    question: "Economic importance of water may include….",
    options: ["Industrial uses", "Ecosystem services", "Recreational uses", "All of these"],
    correct: 3
  },
  {
    id: 133,
    question: "Nile river water dispute is in between………….",
    options: ["Egypt, Ethiopia, and Sudan", "Syria and Russia", "Ethiopia and China", "None of these"],
    correct: 0
  },
  {
    id: 134,
    question: "Soil is a…………….",
    options: ["Renewable natural resource", "Non-renewable natural resource", "Anthropogenic resource", "None of these"],
    correct: 1
  },
  {
    id: 135,
    question: "Gully soil erosion is due to the formation of………….",
    options: ["Single rill", "Network of rills", "Sheet erosion", "Grazing"],
    correct: 1
  },
  {
    id: 136,
    question: "Humus is ……content present in fertile soil.",
    options: ["Inorganic", "Sand", "Organic", "Pebbles"],
    correct: 2
  },
  {
    id: 137,
    question: "Roots of leguminous plants contain……bacteria.",
    options: ["Bacillus", "Rhizobium", "Pseudomonas", "All of these"],
    correct: 1
  },
  {
    id: 138,
    question: "Permanent loss of biological productivity of soil is known as………….",
    options: ["Mulching", "Flood", "Soil erosion", "Desertification"],
    correct: 3
  },
  {
    id: 139,
    question: "Temporary loss of soil fertility is known as………….",
    options: ["Soil erosion", "Land use change", "Desertification", "Soil acidification"],
    correct: 0
  },
  {
    id: 140,
    question: "Differences between the genetic characteristics within the individuals of same species is known as………….",
    options: ["Species biodiversity", "Genetic biodiversity", "Ecosystem biodiversity", "All of these"],
    correct: 1
  },
  {
    id: 141,
    question: "How many biodiversity hotspots are present in India?",
    options: ["4", "3", "2", "1"],
    correct: 0
  },
  {
    id: 142,
    question: "Which one is not considered as Indian biodiversity hotspot?",
    options: ["Sundaland", "Aravalli hills", "Indo-burma", "Western Ghat"],
    correct: 1
  },
  {
    id: 143,
    question: "Biodiversity hotspot concept was given first time in year….",
    options: ["1978", "1988", "1998", "2008"],
    correct: 1
  },
  {
    id: 144,
    question: "Which factor is not responsible for biodiversity loss?",
    options: ["Habitat destruction", "Poaching", "Sacred grooves", "Climate change"],
    correct: 2
  },
  {
    id: 145,
    question: "Nanda Devi National Park is located at………….",
    options: ["Uttar Pradesh", "Himachal Pradesh", "Haryana", "Uttarakhand"],
    correct: 3
  },
  {
    id: 146,
    question: "How many biosphere reserves are present in India?",
    options: ["18", "28", "36", "46"],
    correct: 0
  },
  {
    id: 147,
    question: "Sundarban National Park is very famous for the presence of………….",
    options: ["Sacred groves", "Mangroves", "Coral reef", "All of these"],
    correct: 1
  },
  {
    id: 148,
    question: "Biodiversity is found at ……levels.",
    options: ["4", "3", "2", "1"],
    correct: 1
  },
];
