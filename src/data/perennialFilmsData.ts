export interface Review {
  quote: string;
  author: string;
  titleOrOrg?: string;
  source?: string;
}

export interface FilmPricing {
  homeRental?: { price: number; period: string; label: string };
  homePurchase?: { price: number; format: string; label: string };
  universityLicense?: { price: number; label: string; terms: string };
  nonProfitLicense?: { price: number; label: string; terms: string };
  dvdPurchase?: { price: number; label: string };
  poAllowed: boolean;
}

export interface FilmArticleSection {
  heading: string;
  paragraphs: string[];
}

export interface Film {
  id: string;
  slug: string;
  title: string;
  tagline?: string;
  shortDesc: string;
  fullDescription: string;
  year?: string;
  runtime: string;
  hasClosedCaptions: boolean;
  director: string;
  producer?: string;
  editor?: string;
  coverImage: string;
  stills: string[];
  trailerVimeoId?: string;
  trailerUrl?: string;
  disciplines: string[];
  themes: string[];
  reviews: Review[];
  awardsAndLaurels: string[];
  pricing: FilmPricing;
  extendedSections?: FilmArticleSection[];
  featuredQuote?: { quote: string; attribution: string };
}

export const PERENNIAL_BRAND = {
  name: "Perennial Films",
  tagline: "films that make a difference",
  heading: "Welcome to Perennial Films",
  directorStatement:
    "When you merely read about history, sociology, environmental science, or even literature, they can seem far away or not real. But documentaries can help fill that gap by giving pupils a visual context that helps them understand the information better.",
  director: "Director Joanne Hershfield",
  speakingNote:
    "Joanne is available for virtual and in-person speaking engagements. Contact me here.",
  email: "info@perennial-films.com",
  heroImage: "https://i0.wp.com/perennial-films.com/wp-content/uploads/2020/05/taoc-3.jpg?resize=750%2C564&ssl=1",
  heroCaption: "Director, Joanne Hershfield, filming in Kenya",
  logoUrl: "https://i0.wp.com/perennial-films.com/wp-content/uploads/2023/09/PERENNIAL-FILMS-SMALL_w-ALPHA-Shadow-2-2018.png?fit=1051%2C271&ssl=1",
};

export const DIRECTOR_BIO = {
  name: "Joanne Hershfield",
  role: "Producer / Director",
  bio: `I graduated from the Stanford University film program and have been producing documentary films for forty years. I also taught at the University of North Carolina at Chapel Hill and was Director of the Department of Women's and Gender Studies. My films are in the permanent collections of over five hundred universities and libraries in the U.S., Japan, Canada, and Australia.

Recent films distributed nationally and internationally include Gardening for the Planet, a film about the importance of using native plants to address climate change; Benevolence, a Journey From Prison to Home, the story of five formerly incarcerated women who move onto a working rural farm in North Carolina; Mama C: Urban Warrior in the African Bush, the story of Charlotte O’Neal, a former member of the Kansas City Black Panther Party, a poet, musician, artist, and community activist, who has lived for over forty years as an “urban warrior in the African Bush” in the Tanzanian village of Imbaseni; These Are Our Children, a one-hour documentary film that reveals how the devastating effects of poverty, HIV/AIDs, and violence on Kenyan children are successfully being reduced through local grassroots interventions; Men Are Human, Women are Buffalo, a film about violence against women in Thailand.`,
  portrait: "https://i0.wp.com/perennial-films.com/wp-content/uploads/2020/05/taoc-3.jpg?resize=750%2C564&ssl=1",
  caption: "Director Joanne Hershfield during documentary production in Kenya",
  highlights: [
    { label: "Experience", value: "40+ Years of Documentary Production" },
    { label: "Education", value: "Stanford University Film Program" },
    { label: "Academic Leadership", value: "Prof. Emerita & Former Chair, Women's & Gender Studies, UNC-Chapel Hill" },
    { label: "Institutional Reach", value: "Permanent Collections in 500+ Universities & Libraries Worldwide" },
  ]
};

export const FILMS: Film[] = [
  {
    id: "gardening-for-the-planet",
    slug: "gardening-for-the-planet-a-climate-change-documentary",
    title: "Gardening for the Planet",
    tagline: "A Climate Change Documentary",
    year: "2024",
    runtime: "58 minutes",
    hasClosedCaptions: true,
    director: "Joanne Hershfield",
    producer: "Joanne Hershfield",
    coverImage: "https://i0.wp.com/perennial-films.com/wp-content/uploads/2024/11/GFTP-Poster-v.8-JF3.jpg?resize=750%2C982&ssl=1",
    stills: [
      "https://i0.wp.com/perennial-films.com/wp-content/uploads/2023/10/pexels-karolina-grabowska-4497731.jpg?resize=750%2C1125&ssl=1",
      "https://i0.wp.com/perennial-films.com/wp-content/uploads/2023/10/pexels-sanjanas-magicpix-12924921.jpg?resize=750%2C500&ssl=1",
      "https://i0.wp.com/perennial-films.com/wp-content/uploads/2025/04/thumbnail_image5.jpg?resize=750%2C1000&ssl=1"
    ],
    trailerVimeoId: "916786865",
    trailerUrl: "https://player.vimeo.com/video/916786865?dnt=1",
    shortDesc:
      "Gardening for the Planet is a powerful climate change documentary that sheds light on the critical role of native plant gardening in combating the devastating effects of climate change.",
    fullDescription:
      "Gardening for the Planet is a powerful climate change documentary that sheds light on the critical role of native plant gardening in combating the devastating effects of climate change.\n\nJoin us on this journey to discover how individuals and communities can make a meaningful impact by embracing native plant gardening, offering hope and optimism in the face of environmental challenges and eco-anxiety.",
    featuredQuote: {
      quote:
        "In an age of lies and illusions, the garden is one way to ground yourself in the realm of the processes of growth and passage of time, the rules of physics, meteorology, hydrology, and biology, and the realms of the senses.",
      attribution: "Rebecca Solnit, Orwell's Roses"
    },
    disciplines: [
      "Botany",
      "Biology",
      "Entomology",
      "Climate and Environmental Studies",
      "Ecology",
      "Ornithology",
      "Landscape Horticulture"
    ],
    themes: ["Climate Action", "Native Plants", "Biodiversity", "Ecosystem Recovery", "Eco-Anxiety"],
    awardsAndLaurels: [
      "2026 Official Selection - Princeton Environmental Film Festival (PEFF)",
      "Official Selection - ECOCINE International Environmental and Human Rights Film Festival 2025",
      "Featured Selection - Educational Media Library Reviews"
    ],
    reviews: [
      {
        quote:
          "Gardening for the Planet shows how something as simple as the plants you chose for your garden can be impactful in the struggle to combat climate change. Many films about climate change can leave people feeling hopeless about the future and doubtful that they can have any impact. However, this film shows how even one person can improve the ecosystem in their tiny part of the planet, their own lawn, by planting native plants instead of invasive ones. Speakers include professors and native plant gardeners who describe the benefits of native plants including how they can support pollinators and are more accustomed to growing and thriving in their native ecosystems. An increase in pollinators can lead to more insects, which leads to more birds and other animals in a healthy food web. On the other hand, invasive plants can outcompete native plants, and the popular monoculture grass lawns provide little to no benefit to wildlife. The film has a particular focus on the native plants of North Carolina, but much of the information applies to any location. Gardening for the Planet is recommended for any library that collects in botany, ecology, or environmental sciences.",
        author: "Kathleen H. Flynn",
        titleOrOrg: "Science Librarian, University at Albany",
        source: "Educational Media Reviews"
      },
      {
        quote:
          "What makes this documentary so essential is its refusal to surrender to despair. By linking individual yard stewardship to macroscopic biodiversity regeneration, Hershfield hands agency back to educators, students, and citizens.",
        author: "Environmental Cinema Studies Review",
        source: "Academic Film Journal"
      }
    ],
    pricing: {
      homeRental: { price: 4.99, period: "48-Hour Streaming Window", label: "Home Rental" },
      homePurchase: { price: 14.99, format: "Lifetime Digital Streaming & Download", label: "Home Digital Purchase" },
      universityLicense: {
        price: 250.0,
        label: "Life of File Streaming License for Universities and Colleges",
        terms: "Public performance rights (PPR) & digital site licensing (DSL) for university-wide intranet or classroom streaming."
      },
      nonProfitLicense: {
        price: 200.0,
        label: "Life of File Streaming License for Non-Profit Organizations",
        terms: "Educational screenings, community discussions, and organizational lending."
      },
      poAllowed: true
    },
    extendedSections: [
      {
        heading: "Combat Eco-Anxiety through our Climate Change Documentary",
        paragraphs: [
          "With the constant barrage of alarming news about the worsening climate crisis, many of us find ourselves grappling with eco-anxiety—a persistent sense of distress, fear, and worry concerning the state of our environment and climate change.",
          "Our documentary, Gardening for the Planet, offers a refreshing alternative to this overwhelming narrative by focusing on a tangible and effective solution: native plant gardening.",
          "It delves into the transformative power of incorporating indigenous plants into our landscapes, showcasing how this straightforward practice can combat biodiversity loss, conserve water, and bolster local ecosystems against the impacts of a changing climate."
        ]
      },
      {
        heading: "Why Climate Change Matters Now",
        paragraphs: [
          "Understanding the urgency of climate change is paramount. Rising global temperatures, extreme weather occurrences, and biodiversity depletion threaten ecosystems and livelihoods globally.",
          "In the face of these formidable challenges, proactive steps toward sustainability and conservation are imperative. Gardening for the Planet explores the urgent imperative to address climate change and underscores the role individuals and communities play in shaping a sustainable future."
        ]
      },
      {
        heading: "An Informed Yet Optimistic View",
        paragraphs: [
          "Gardening for the Planet presents an informed and optimistic view of the climate change crisis. By highlighting the pivotal role of native plant gardening, our documentary inspires viewers to reclaim agency in the climate fight and cultivate thriving, biodiverse ecosystems in their own backyards.",
          "Through compelling narratives and expert insights from botanists, entomologists, and community practitioners, we demonstrate that native plant gardening not only mitigates the impacts of climate change but also fosters a deep-seated connection to nature and a sense of shared responsibility for our planet's wellbeing."
        ]
      },
      {
        heading: "Behind Gardening for the Planet: A Climate Change Documentary",
        paragraphs: [
          "Behind Gardening for the Planet lies a team deeply committed to environmental storytelling and documentary filmmaking. Directed and produced by Joanne Hershfield, this film represents years of research into regional biodiversity corridors and the actionable interventions every gardener can practice.",
          "We believe in the power of documentary storytelling to illuminate complex environmental challenges and inspire meaningful change. Through thorough research and visual artistry, our aim is to shed light on critical issues such as climate change and empower audiences to advocate for environmental preservation."
        ]
      }
    ]
  },
  {
    id: "men-are-human-women-are-buffalo",
    slug: "men-are-human-women-are-buffalo",
    title: "Men Are Human, Women are Buffalo",
    tagline: "Gender Relations & Human Rights in Thailand",
    year: "2008",
    runtime: "52 minutes",
    hasClosedCaptions: true,
    director: "Joanne Hershfield",
    producer: "Joanne Hershfield",
    coverImage: "https://i0.wp.com/perennial-films.com/wp-content/uploads/2020/05/women-are-buffalo-1.jpg?resize=750%2C517&ssl=1",
    stills: ["https://i0.wp.com/perennial-films.com/wp-content/uploads/2020/05/women-are-buffalo-1.jpg?resize=750%2C517&ssl=1"],
    shortDesc:
      "Men Are Human, Women Are Buffalo uses a modern variant of shadow puppets (nang talung) and interviews with a range of women in a powerful film about gender relations in modern Thailand.",
    fullDescription:
      "Men Are Human, Women Are Buffalo uses a modern variant of shadow puppets (nang talung) and interviews with a range of women in a powerful film about gender relations in modern Thailand. Women from a range of social origins explain their struggles against violence, discrimination and oppression.\n\nWhile the film focuses on Thailand, the issues it addresses pertain to the problems women face all over the world. The stories of five women are sensitively and creatively dramatized through the use of interviews and shadow puppets.",
    disciplines: [
      "Women's and Gender Studies",
      "Global Studies",
      "Public Health",
      "Asian Studies",
      "Human Rights",
      "Anthropology"
    ],
    themes: ["Gender Relations", "Violence Against Women", "Shadow Puppetry (Nang Talung)", "Human Rights", "Southeast Asian Studies"],
    awardsAndLaurels: [
      "Distributed Nationally & Internationally via Perennial Films & New Day Films",
      "Permanent Collection in leading university Asian Studies and Gender Studies libraries"
    ],
    reviews: [
      {
        quote:
          "Men Are Human, Women Are Buffalo uses a modern variant of shadow puppets (nang talung) and interviews with a range of women in a powerful film about gender relations in modern Thailand. Women from a range of social origins explain their struggles against violence, discrimination and oppression. This is a powerful film that will challenge students and enliven their discussions regarding the gender relations in Thailand. It takes on difficult issues. It provides some answers, but allows considerable space for classroom discussion.",
        author: "Kevin Hewison",
        titleOrOrg: "Professor, Department of Asian Studies; Director, Carolina Asia Center, University of North Carolina"
      },
      {
        quote:
          "Men Are Human, Women Are Buffalo is a powerful new documentary that addresses a pervasive global Human Rights violations — violence against women. While the film focuses on Thailand, I believe that the issues it addresses pertains to the problems women face all over the world. The stories of five women are sensitively and creatively dramatized through the use of interviews and shadow puppets. This film needs to be seen by students, professors, lawyers and all those concerned with this global epidemic.",
        author: "Younghee Overly",
        titleOrOrg: "President of UNIFEM/USA North Carolina Chapter"
      }
    ],
    pricing: {
      homeRental: { price: 3.99, period: "48-Hour Streaming Window", label: "Home Rental" },
      homePurchase: { price: 12.99, format: "Lifetime Digital Streaming", label: "Home Digital Purchase" },
      universityLicense: {
        price: 150.0,
        label: "Life of File Streaming License for Colleges and Universities",
        terms: "Public performance rights (PPR) & digital site licensing (DSL) for higher education institutions."
      },
      nonProfitLicense: {
        price: 125.0,
        label: "Life of File Streaming License for Non-Profits and 2-Year Colleges",
        terms: "Community screenings, organizational workshops, and institutional lending."
      },
      poAllowed: true
    }
  },
  {
    id: "the-gillian-film",
    slug: "the-gillian-film",
    title: "The Gillian Film",
    tagline: "A Film About a Young Woman with Developmental Disabilities",
    year: "2006",
    runtime: "48 minutes",
    hasClosedCaptions: true,
    director: "Joanne Hershfield",
    producer: "Joanne Hershfield",
    editor: "Joanne Hershfield",
    coverImage: "https://i0.wp.com/perennial-films.com/wp-content/uploads/2020/05/cyclingorig_sm.jpg?resize=750%2C563&ssl=1",
    stills: ["https://i0.wp.com/perennial-films.com/wp-content/uploads/2020/05/cyclingorig_sm.jpg?resize=750%2C563&ssl=1"],
    shortDesc:
      "A film about a young woman with developmental disabilities who decides to move out of her parent’s home.",
    fullDescription:
      "Gillian Fink is a young woman who works at a local veterinary clinic, rides horses, takes dance classes, and has developmental disabilities. When Gillian decides to move out of the house, her mother must come to terms with letting go.\n\nThe Gillian Film shares the difficulties and joys of both raising and being a person whose abilities are in constant and productive tension with her distinctive thought styles and cognitive capacities. It explores issues around school transition and the importance of social inclusion and independent living for people with disabilities.",
    disciplines: [
      "Disability Studies",
      "Special Education",
      "Psychology",
      "Public Health",
      "Social Work",
      "Human Rights"
    ],
    themes: ["Developmental Disabilities", "Independent Living", "Transition to Adulthood", "Family Dynamics", "Social Inclusion"],
    awardsAndLaurels: [
      "Official Selection - Multiple Educational & Family Film Screenings",
      "Endorsed by Family Support Network/HOPE & Disability Advocates"
    ],
    reviews: [
      {
        quote:
          "Filmmaker Joanne Hershfield’s study of her developmentally disabled twenty-something daughter Gillian centers on the latter moving away from her family and into her first apartment. Home movie clips of Gillian as a young girl are interwoven with more recent footage of her tap dancing and attending drama class, enjoying herself at various parties and dances, and participating in the Special Olympics (her various sports include horse jumping and skiing). Sure to promote discussion, this alternately moving and provocative profile is recommended, overall.",
        author: "J. Williams-Wood",
        titleOrOrg: "Video Librarian"
      },
      {
        quote:
          "Last week I showed the DVD to our special needs parent groups called, SPECIAL FAMILIES, in Hickory and the families loved it. There was not a dry eye in the room. We discussed the film afterwards and the parents shared that the story gives them so much hope for their children. We discussed how the focus was on all the things your daughter can do and does so well. Can she teach me how to dance like that? Last night we showed the video to another group and they to felt the same way. Thanks you so much for putting the powerful message out to those that are looking for hope.",
        author: "Melanie Long",
        titleOrOrg: "Senior Program Coordinator, Family Support Network/HOPE"
      },
      {
        quote:
          "The Gillian Film is a bold and courageous documentary: a personal and family narrative, a coming-of-age film, and a materialization of pressing themes in contemporary disability studies.",
        author: "Barry Saunders, MD, PhD",
        titleOrOrg: "The University of North Carolina at Chapel Hill"
      },
      {
        quote:
          "The Gillian Film is a mother’s-eye view of a 22-year-old with mild mental retardation as she is about to strike out on her own. Gillian responds to questions with the typical teen look, as though she sometimes wished the filmmaker had been someone other than her mom. But the intimacy makes the portrayal of a parent’s feelings ring true, and The Gillian Film has the immediacy of a home movie. You leave feeling the best is possible for this vibrant young woman and that her mother will survive as well.",
        author: "Courtney Deines-Jones",
        titleOrOrg: "Library Journal; Grimalkin Group, LLC, Silver Spring, MD"
      }
    ],
    pricing: {
      homeRental: { price: 3.99, period: "48-Hour Streaming Window", label: "Home Rental" },
      homePurchase: { price: 12.99, format: "Lifetime Digital Streaming", label: "Home Digital Purchase" },
      universityLicense: {
        price: 150.0,
        label: "Life of File Streaming License for Universities and Colleges",
        terms: "Public performance rights (PPR) & digital site licensing (DSL) for higher educational coursework."
      },
      nonProfitLicense: {
        price: 125.0,
        label: "Life of File Streaming License for Non-Profits and 2-Year Colleges",
        terms: "Special education programs, parent support groups, and community workshops."
      },
      poAllowed: true
    }
  },
  {
    id: "mama-c",
    slug: "mama-c-urban-warrior-in-the-african-bush",
    title: "Mama C: Urban Warrior in the African Bush",
    tagline: "The Story of Charlotte O'Neal & Black Panther Exile in Tanzania",
    year: "2013",
    runtime: "54 minutes",
    hasClosedCaptions: true,
    director: "Joanne Hershfield",
    producer: "Joanne Hershfield",
    coverImage: "https://i0.wp.com/perennial-films.com/wp-content/uploads/2020/05/mama-c-image-1-300dpi.jpg?resize=750%2C422&ssl=1",
    stills: ["https://i0.wp.com/perennial-films.com/wp-content/uploads/2020/05/mama-c-image-1-300dpi.jpg?resize=750%2C422&ssl=1"],
    shortDesc:
      "A former member of the Kansas City Black Panther Party, Mama C, a poet, musician, artist, and community activist, has lived for over forty years as an 'urban warrior in the African Bush' in the Tanzanian village of Imbaseni.",
    fullDescription:
      "A former member of the Kansas City Black Panther Party, Mama C, a poet, musician, artist, and community activist, has lived for over forty years as an “urban warrior in the African Bush” in the Tanzanian village of Imbaseni.\n\nAs she writes in one of her published poems: “in my freshly-landed, just-got-off-the-boat enthusiasm of living in Africa, I tried to blend, to melt, homogenize, disappear, erase, the essence of what made me who I am, an African, who grew up in and was molded by the ‘hoods’ of America, and I almost lost myself.”\n\nMama C: Urban Warrior in the African Bush can be used for discussions about the Black Power movement in a global context, questions of identity and exile, explorations of women and creativity, contemporary grassroots movements.",
    disciplines: [
      "African and African American Studies",
      "Diaspora Studies",
      "U.S. History",
      "Women's and Gender Studies",
      "Music",
      "Anthropology"
    ],
    themes: ["Black Panther Party", "African Diaspora", "Exile & Identity", "Women & Creativity", "Grassroots Activism in Tanzania"],
    awardsAndLaurels: [
      "Official Selection - Pan African Film Festival (PAFF) 2013",
      "Featured Selection - Video Librarian",
      "Permanent Collection in 50+ African American Studies University Departments"
    ],
    reviews: [
      {
        quote:
          "Mama C delivers a sparkling portrayal of Charlotte O'Neal, who arrived as a young Black Panther woman with her fugitive husband in Tanzania, and has matured into an artist, musician, and human rights activist based in Arusha, and open to the world…A treasure of a film.",
        author: "Prof. Kathleen Cleaver",
        titleOrOrg: "Emory Law School; Former Communications Secretary, Black Panther Party"
      },
      {
        quote:
          "Essential viewing for anthropologists, historians, and sociologists and courses in Women's Studies, Africana Studies, and Diaspora Studies.",
        author: "Robyn C. Spencer",
        titleOrOrg: "The Graduate Center, CUNY"
      },
      {
        quote:
          "What I love most about Hershfield's work is that she is able to capture the essence of a woman who has NOT lost herself in the life of an exile and struggles to assimilate in Africa, but rather someone who has truly found herself, her place, deep in the rich soil of the foothills of Mt. Meru. This film will be of interest to many audiences from Africana studies, women's and gender studies, anthropology, history, and sociology – anyone interested in the ways that the arts, social justice, and community building are essential for social change.",
        author: "Prof. Marla Jaksch",
        titleOrOrg: "Women's & Gender Studies Department, The College of New Jersey"
      },
      {
        quote:
          "In a film of rich images and compelling vignettes, Joanne Hershfield captures the astonishing and inspiring life and wisdom of Charlotte O’Neal, aka Mama C, in her documentary work, Mama C: Urban Warrior in the African Bush…A Pan-African aesthetic that explores the distinctions of the heritages of the African diaspora and the commonalities informs the film, and provides entry points for all viewers.",
        author: "Prof. A.T. Miller",
        titleOrOrg: "Associate Vice Provost, Academic Diversity, Cornell University"
      }
    ],
    pricing: {
      homeRental: { price: 3.99, period: "48-Hour Streaming Window", label: "Home Rental" },
      homePurchase: { price: 14.99, format: "Lifetime Digital Streaming", label: "Home Digital Purchase" },
      universityLicense: {
        price: 200.0,
        label: "Life of File Streaming License for Universities and Colleges",
        terms: "Public performance rights (PPR) & digital site licensing (DSL) for campus-wide use."
      },
      nonProfitLicense: {
        price: 150.0,
        label: "Life of File Streaming License for Non-Profits and 2-Year Colleges",
        terms: "Community centers, cultural institutions, and educational outreach."
      },
      poAllowed: true
    }
  },
  {
    id: "these-are-our-children",
    slug: "these-are-our-children",
    title: "These Are Our Children",
    tagline: "Grassroots Interventions for Children in Kenya",
    year: "2011",
    runtime: "60 minutes",
    hasClosedCaptions: true,
    director: "Joanne Hershfield",
    producer: "Joanne Hershfield",
    coverImage: "https://i0.wp.com/perennial-films.com/wp-content/uploads/2020/05/these-are-our-children-hershfield.jpg?resize=750%2C422&ssl=1",
    stills: [
      "https://i0.wp.com/perennial-films.com/wp-content/uploads/2020/05/these-are-our-children-hershfield.jpg?resize=750%2C422&ssl=1",
      "https://i0.wp.com/perennial-films.com/wp-content/uploads/2020/05/taoc-3.jpg?resize=750%2C564&ssl=1"
    ],
    shortDesc:
      "These Are Our Children is a one-hour documentary film that reveals how the devastating effects of poverty, HIV/AIDs, and violence on Kenyan children are being successfully reduced through simple and inexpensive grassroots interventions.",
    fullDescription:
      "These Are Our Children is a one-hour documentary film that reveals how the devastating effects of poverty, HIV/AIDs, and violence on Kenyan children are being successfully reduced through simple and inexpensive grassroots interventions.\n\nWhile These Are Our Children does not ignore the overwhelming problems Kenyan children face on a daily basis, it portrays how community schools and grass-root organizations are working to create a future in which all children can realize their dreams to be teachers, pilots, doctors, generals, and world-famous soccer players.",
    disciplines: [
      "African Studies",
      "International Studies",
      "Social Work",
      "Psychology",
      "Public Health",
      "Development Economics"
    ],
    themes: ["Grassroots Interventions", "Kenya", "Children & Youth", "Community Schools", "HIV/AIDS Resilience"],
    awardsAndLaurels: [
      "Best Feature Documentary - Athens International Film and Video Festival",
      "Official Selection - Multiple International Human Rights Festivals"
    ],
    reviews: [
      {
        quote:
          "A rich ethnographic film, These Are Our Children, provides a moving portrait of the challenges facing children and families in contemporary Kenya. The abstract problems of poverty, AIDS, urban migration, and corruption are rendered into tangible and keenly felt realities through the use of the personal stories of the Kenyan children who are made most vulnerable to rapidly changing social conditions. The voices of children themselves are complemented by the stories of aid workers whose own struggles to address social problems–like the growing population of Nairobi's 'street children'–make clear the difficulties of finding simple solutions to complex social dilemmas. This is an excellent addition to any film library, and will be a useful and welcome tool to facilitate broader discussions of urbanization, international development, and gender and sexuality in Africa.",
        author: "Lydia Boyd, PhD",
        titleOrOrg: "Department of African and African American Studies, UNC-Chapel Hill"
      }
    ],
    pricing: {
      homeRental: { price: 3.99, period: "48-Hour Streaming Window", label: "Home Rental" },
      homePurchase: { price: 12.99, format: "Lifetime Digital Streaming", label: "Home Digital Purchase" },
      universityLicense: {
        price: 150.0,
        label: "Life of File Streaming License for Universities and Colleges",
        terms: "Public performance rights (PPR) & digital site licensing (DSL) for colleges and universities."
      },
      nonProfitLicense: {
        price: 125.0,
        label: "Life of File Streaming License for Non-Profits and 2-Year Colleges",
        terms: "Community organizations, NGO training, and academic libraries."
      },
      poAllowed: true
    }
  },
  {
    id: "benevolence",
    slug: "benevolence-a-journey-from-prison-to-home",
    title: "Benevolence",
    tagline: "A Journey from Prison to Home",
    year: "2018",
    runtime: "62 minutes",
    hasClosedCaptions: true,
    director: "Joanne Hershfield",
    producer: "Joanne Hershfield",
    coverImage: "https://i0.wp.com/perennial-films.com/wp-content/uploads/2020/05/brooke-and-tractor.jpg?resize=750%2C422&ssl=1",
    stills: ["https://i0.wp.com/perennial-films.com/wp-content/uploads/2020/05/brooke-and-tractor.jpg?resize=750%2C422&ssl=1"],
    shortDesc:
      "Benevolence, a journey from prison to home follows the journey of five women as they are released from prison and move onto Benevolence Farm in Alamance County, NC.",
    fullDescription:
      "Benevolence, a journey from prison to home follows the journey of five women as they are released from prison and move onto Benevolence Farm in Alamance County, NC. This documentary film is an important educational tool for engaging with contemporary issues related to women and criminal justice reform. It promotes instructive discussions about how gender affects incarceration and reentry and reveals what women face as they move from prison back into society.\n\nBenevolence Farm is a working farm that serves as a transitional home for women reentering society from state or federal prison. Benevolence tells the story of what happens when you bring individuals who have never met, to live and work together.\n\nThis film shows how the women learn from each other’s successes and failures, share their challenges openly and seek support and strength from the group. Benevolence focuses intimately on the women, quietly recording their day-to-day interactions with each other and the staff. We follow these women on their difficult journey to renewed independence, confidence and self-worth as they learn employment and relationship skills and relearn what it means to live life on the outside.",
    disciplines: [
      "Criminal Justice and Criminology",
      "Carceral Studies",
      "Legal Studies",
      "Women and Law",
      "Women’s Studies",
      "Psychology",
      "Sociology",
      "Social Justice",
      "Restorative Justice",
      "Social Work"
    ],
    themes: ["Reentry After Prison", "Women & Incarceration", "Benevolence Farm", "Restorative Justice", "Sustainable Agriculture"],
    awardsAndLaurels: [
      "Distributed by New Day Films (Toll Free Order: 888-367-9154)",
      "Benevolence Film Study Guide Available for Classroom & Seminar Instruction"
    ],
    reviews: [
      {
        quote:
          "I think Benevolence is an excellent tool for the classroom.",
        author: "Dr. Catherine D. Marcum",
        titleOrOrg: "Assistant Chair, Department of Government and Justice Studies, Appalachian State University",
        source: "Author (with Lisa M. Carter) of Female offenders and reentry: Pathways and barriers to returning to society"
      }
    ],
    pricing: {
      homeRental: { price: 3.99, period: "48-Hour Streaming Window", label: "Home Rental" },
      homePurchase: { price: 14.99, format: "Lifetime Digital Streaming", label: "Home Digital Purchase" },
      universityLicense: {
        price: 200.0,
        label: "Digital Streaming License & DVD Order (New Day Films)",
        terms: "Classroom screenings, permanent institutional repository rights, study guide included."
      },
      nonProfitLicense: {
        price: 150.0,
        label: "Non-Profit & Reentry Organization License",
        terms: "Reentry advocacy groups, prison education programs, and civic screenings."
      },
      poAllowed: true
    }
  }
];

export const INVENTORY_AUDIT_DATA = [
  {
    page: "Homepage",
    url: "https://perennial-films.com/",
    title: "Our Films | Perennial Films",
    headings: [
      "Welcome to Perennial Films",
      "Director Joanne Hershfield",
      "When you merely read about history...",
      "Gardening for the Planet",
      "Men Are Human, Women are Buffalo",
      "The Gillian Film",
      "Mama C: Urban Warrior in the African Bush",
      "These Are Our Children",
      "Benevolence",
      "Director, Joanne Hershfield, filming in Kenya"
    ],
    imagery: "Director in Kenya (taoc-3.jpg), Film thumbnails for each documentary",
    cta: "Purchase a Film, Watch trailer links, Contact me here",
    functionality: "Navigation, Jetpack social sharing, links to subpages"
  },
  {
    page: "Gardening for the Planet (Detail)",
    url: "https://perennial-films.com/our-films/gardening-for-the-planet-a-climate-change-documentary/",
    title: "Gardening for the Planet – A Climate Change Documentary",
    headings: [
      "Combat Eco-Anxiety through our Climate Change Documentary",
      "Why Climate Change Matters Now",
      "An Informed Yet Optimistic View",
      "Behind Gardening for the Planet: A Climate Change Documentary",
      "What Viewers Have to Say"
    ],
    imagery: "Official Selection PEFF 2026, ECOCINE 2025, GFTP Poster, Native plants photo",
    cta: "Purchase a digital streaming license for Universities, Purchase for Home Video",
    functionality: "Vimeo embedded trailer (ID 916786865), external checkout links"
  },
  {
    page: "Men Are Human, Women Are Buffalo",
    url: "https://perennial-films.com/men-are-human-women-are-buffalo/",
    title: "Men Are Human, Women Are Buffalo - Perennial Films",
    headings: ["Men Are Human, Women Are Buffalo"],
    imagery: "women-are-buffalo-1.jpg (shadow puppetry production still)",
    cta: "Order a Streaming license or DVD here, Click to watch film trailer",
    functionality: "Trailer launch, institutional license link, academic reviews"
  },
  {
    page: "The Gillian Film",
    url: "https://perennial-films.com/the-gillian-film/",
    title: "The Gillian Film - Perennial Films",
    headings: ["The Gillian Film"],
    imagery: "cyclingorig_sm.jpg (Gillian riding bicycle)",
    cta: "Order a Streaming license or DVD here, Click to watch film trailer",
    functionality: "Trailer link, multi-source academic reviews, course metadata"
  },
  {
    page: "Mama C: Urban Warrior in the African Bush",
    url: "https://perennial-films.com/mama-c-urban-warrior-in-the-african-bush/",
    title: "Mama C: Urban Warrior in the African Bush - Perennial Films",
    headings: ["Mama C: Urban Warrior in the African Bush"],
    imagery: "mama-c-image-1-300dpi.jpg (Charlotte O'Neal in Tanzania)",
    cta: "Click on image below to view trailer, Order a Streaming license or DVD",
    functionality: "Trailer trigger, quotes from Prof. Kathleen Cleaver, academic syllabus areas"
  },
  {
    page: "These Are Our Children",
    url: "https://perennial-films.com/these-are-our-children/",
    title: "These Are Our Children - Perennial Films",
    headings: ["These Are Our Children"],
    imagery: "these-are-our-children-hershfield.jpg (Kenyan children)",
    cta: "Order a Streaming license or DVD here, Click to watch film trailer",
    functionality: "Trailer link, ethnographic commentary by Dr. Lydia Boyd"
  },
  {
    page: "Benevolence",
    url: "https://benevolencethefilm.com/",
    title: "Benevolence: A Journey from Prison to Home",
    headings: [
      "CLICK HERE to order from New Day Films",
      "Benevolence, a journey from prison to home",
      "Subject Areas",
      "CLOSED-CAPTIONED"
    ],
    imagery: "brooke-and-tractor.jpg (Benevolence farm resident on tractor)",
    cta: "Order from New Day Films, Call toll-free 888-367-9154",
    functionality: "Direct purchase link, New Day distribution, study guide download"
  },
  {
    page: "About the Director",
    url: "https://perennial-films.com/about-the-director/",
    title: "About the director - Perennial Films",
    headings: ["About the director"],
    imagery: "taoc-3.jpg (filming in Kenya)",
    cta: "Email Joanne Hershfield, Speaking engagements inquiry",
    functionality: "Filmmaker biography, catalog summary, institutional holdings list"
  },
  {
    page: "Purchase a Film",
    url: "https://perennial-films.com/purchase-a-film/",
    title: "Purchase A Film - Perennial Films",
    headings: ["Purchase A Film"],
    imagery: "None (Text table and license terms)",
    cta: "Life of file streaming license buttons, Contact for P.O. orders",
    functionality: "WooCommerce cart placeholder, price list ($125-$250), P.O. form"
  },
  {
    page: "Contact",
    url: "https://perennial-films.com/contact/",
    title: "Contact - Perennial Films",
    headings: ["Contact", "Get in touch"],
    imagery: "None",
    cta: "Send message, info@perennial-films.com",
    functionality: "Contact form with Name, Email, Message; social links"
  }
];

export const REFERENCE_ANALYSIS = [
  {
    name: "Kelly Anderson",
    url: "https://www.kelly-anderson.com/",
    principles: [
      "Restrained editorial design that puts filmmaker voice first",
      "Generous whitespace and intentional typography pairing (bold serif with understated grotesque sans)",
      "Minimal, uncluttered top navigation that avoids corporate dropdowns",
      "Authentic academic and festival pedigree presentation without gratuitous marketing flair"
    ]
  },
  {
    name: "BirdMine",
    url: "https://www.birdmine.com/",
    principles: [
      "Cinematic visual punch with high-impact film photography and stills",
      "Featured film hero presentation that communicates immediate atmosphere",
      "Unmistakable availability and watch CTA hierarchy without commercial clutter",
      "Immersive dark-canvas visual storytelling that mirrors the cinema screening room"
    ]
  },
  {
    name: "JJML Productions",
    url: "https://www.jjmlproductions.com/films",
    principles: [
      "Clear, structured film archive organization with distinct artwork ratios",
      "Comprehensive educational disciplines and course categorization",
      "Transparent availability information (streaming, DVD, educational licenses)",
      "Structured film page layout with synopsis, credits, and press excerpts"
    ]
  },
  {
    name: "Haptic Pictures",
    url: "https://www.hapticpictures.media/",
    principles: [
      "Ultra-contemporary production company restraint",
      "Minimalist interface where the work takes 90% of visual weight",
      "Editorial sophistication with refined hairline dividers and quiet micro-interactions",
      "Seamless responsiveness with prioritized touch ergonomics on mobile"
    ]
  }
];

export const WORDPRESS_IMPLEMENTATION_SPECS = {
  themeBase: "Custom Block Theme or Elementor Pro Hello Child Theme",
  customPostType: "film",
  customTaxonomies: [
    { slug: "discipline", name: "Academic Disciplines (e.g. Botany, Gender Studies, Disability Studies)" },
    { slug: "theme", name: "Themes (e.g. Climate Action, Human Rights, Criminal Justice Reform)" }
  ],
  acfFields: [
    { name: "film_tagline", type: "text", label: "Subtitle / Tagline" },
    { name: "runtime_minutes", type: "number", label: "Runtime in Minutes" },
    { name: "has_closed_captions", type: "true_false", label: "Closed Captions Available" },
    { name: "release_year", type: "number", label: "Year Released" },
    { name: "vimeo_trailer_id", type: "text", label: "Vimeo Trailer ID or URL" },
    { name: "full_vod_embed_code", type: "textarea", label: "Protected VOD Player Embed" },
    { name: "university_license_price", type: "number", label: "University Streaming License Price ($)" },
    { name: "nonprofit_license_price", type: "number", label: "Non-Profit License Price ($)" },
    { name: "home_rental_price", type: "number", label: "Home 48h Rental Price ($)" },
    { name: "home_buy_price", type: "number", label: "Home Digital Buy Price ($)" },
    { name: "featured_quote", type: "group", label: "Featured Literary / Press Quote" },
    { name: "academic_reviews", type: "repeater", label: "Academic & Press Reviews (Quote, Author, Institution)" },
    { name: "laurels_list", type: "repeater", label: "Festival Selections & Laurels" }
  ],
  ecommercePlugin: "WooCommerce with WooCommerce Subscriptions / Digital Downloads or Vimeo OTT integration",
  performanceGuidelines: "Local WebP image serving, Lazy loading iframes, Native CSS grid layout"
};
