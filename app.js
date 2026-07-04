const brands = {
  "Alfa Romeo":["Giulia","4C","8C Competizione","33 Stradale"], "Aston Martin":["DB5","DB11","DB12","Vantage","Valkyrie"], Audi:["R8","RS3","RS6 Avant","Quattro"], BMW:["M2","M3","M4","M5","i8","Z4"], Bugatti:["Veyron","Chiron","Divo","Tourbillon"], Chevrolet:["Corvette","Camaro","Impala"], Dodge:["Challenger","Charger","Viper"], Ferrari:["250 GTO","F40","F50","Enzo","LaFerrari","Roma","SF90 Stradale","296 GTB"], Ford:["Mustang","GT","Escort RS Cosworth","F-150 Raptor"], Honda:["NSX","S2000","Civic Type R","Integra Type R"], Jaguar:["E-Type","F-Type","XJ220"], Lamborghini:["Miura","Miura P400 SV","Countach","Diablo","Diablo VT","Murciélago","Murciélago LP 670-4 SuperVeloce","Aventador","Aventador LP 700-4","Aventador SVJ","Huracán","Huracán LP 610-4","Huracán EVO","Huracán STO","Sián FKP 37","Gallardo Superleggera","Revuelto","Temerario"], Lexus:["LFA","LC 500","IS 500"], Lotus:["Elise","Exige","Emira","Evija"], Maserati:["MC12","MC20","GranTurismo"], Mazda:["MX-5","RX-7","RX-8","787B"], McLaren:["F1","P1","Senna","720S","750S","750S Spider","765LT","Speedtail","W1"], Mercedes:["300 SL","AMG GT","SLS AMG","G-Class","CLK GTR"], "Mercedes-AMG":["Project One"], Mitsubishi:["Lancer Evolution","3000GT","Eclipse"], Nissan:["GT-R","Skyline GT-R","350Z","370Z","Z","Silvia"], Pagani:["Zonda","Zonda F","Zonda R","Zonda Cinque","Zonda Tricolore","Huayra","Huayra BC","Huayra BC Roadster","Utopia"], Porsche:["911","911 GT3 RS","918 Spyder","Carrera GT","Cayman GT4","Taycan"], Renault:["Clio V6","5 Turbo","Alpine A110"], Rimac:["Nevera","Concept One"], Subaru:["Impreza WRX STI","BRZ","Legacy"], Toyota:["Supra","GR86","GR Yaris","2000GT","AE86"], Volkswagen:["Golf GTI","Golf R","Beetle","Scirocco"], Volvo:["P1800","850 R","V60 Polestar"]
};
brands.F1=["Cadillac F1","VCARB 03","Audi R26","Haas VF-26","Williams FW48","Aston Martin AMR26","Red Bull RB22","Alpine A526","Ferrari SF-26","McLaren MCL40","Mercedes-AMG W16"];
brands.Racetracks=["Austria â€” Red Bull Ring","Spain â€” Circuit de Barcelona-Catalunya","Canada â€” Circuit Gilles Villeneuve","Miami International Autodrome","Japan â€” Suzuka Circuit","Monaco â€” Circuit de Monaco","China â€” Shanghai International Circuit","Zandvoort Circuit","Hungary â€” Hungaroring","Belgium â€” Circuit de Spa-Francorchamps","Silverstone Circuit"];
brands.Racetracks.push("Madrid Street Circuit","Baku City Circuit","Singapore â€” Marina Bay Street Circuit","Austin â€” Circuit of the Americas","Mexico City â€” AutÃ³dromo Hermanos RodrÃ­guez","Interlagos â€” AutÃ³dromo JosÃ© Carlos Pace","Las Vegas Strip Circuit","Qatar â€” Lusail International Circuit","Abu Dhabi â€” Yas Marina Circuit","Australia â€” Albert Park Circuit","Monza â€” Autodromo Nazionale Monza");
brands.Suzuki=["Hayabusa"];
brands.Kawasaki=["Ninja H2R","Ninja ZX-10R"];
brands.Triumph=["Speed Triple 1200 RS"];
brands.Ducati=["Panigale V4 R","Streetfighter V4 SP2"];
brands.Honda.push("CBR1000RR-R Fireblade SP");
brands.Yamaha=["YZF-R1M","YZF-R1"];
brands["BMW Motorrad"]=["M 1000 RR","R 1300 GS Adventure"];
const $=s=>document.querySelector(s);
const els={dialog:$("#uploadDialog"),form:$("#posterForm"),grid:$("#posterGrid"),empty:$("#emptyState"),noResults:$("#noResults"),brand:$("#brandInput"),model:$("#modelInput"),image:$("#imageInput"),preview:$("#imagePreview"),drop:$("#imageDrop"),extras:$("#extrasInput"),tags:$("#extraTags"),desc:$("#descriptionInput"),search:$("#searchInput"),filter:$("#brandFilter"),detail:$("#detailDialog")};
const starterPosters=[{
  id:"ferrari-f8-tributo-2019",
  brand:"Ferrari",
  model:"F8 Tributo",
  description:"A minimalist technical tribute to Ferrariâ€™s 2019 mid-engined supercar. Finished in dramatic gloss black, the F8 Tributo pairs sculpted aerodynamics with a 3.9-litre twin-turbo V8 producing 720 PS. The poster balances a clean side profile with blueprint views and key performance figures, celebrating a machine built for both everyday usability and extraordinary speed.",
  extras:["2019","3.9L Twin-Turbo V8","720 PS","770 Nm","0â€“100 km/h: 2.9 s","340 km/h","7-Speed Dual-Clutch","Rear-Wheel Drive"],
  image:"assets/ferrari-f8-tributo-2019.png",
  created:Date.now()
},{
  id:"porsche-918-spyder-2013",
  brand:"Porsche",
  model:"918 Spyder",
  description:"A technical portrait of Porsche's landmark 2013 hybrid hypercar in deep black with acid-green brake calipers. The 918 Spyder combines a naturally aspirated 4.6-litre V8 with two electric motors, bringing race-bred engineering and electrified performance together in one of only 918 examples.",
  extras:["2013","4.6L V8 + 2 Electric Motors","887 PS","1,280 Nm","0-100 km/h: 2.6 s","345 km/h","7-Speed PDK","All-Wheel Drive","918 Units"],
  image:"assets/porsche-918-spyder-2013.png",
  created:Date.now()-1
},{
  id:"ferrari-daytona-sp3-2022",
  brand:"Ferrari",
  model:"Daytona SP3",
  description:"A dramatic celebration of the 2022 Ferrari Daytona SP3, presented in a sculptural open-top profile. Inspired by Ferrari's legendary 1960s sports prototypes, this limited Icona model pairs a naturally aspirated 6.5-litre V12 with sweeping aerodynamic forms and extreme exclusivity.",
  extras:["2022","6.5L Naturally Aspirated V12","840 PS","697 Nm","0-100 km/h: 2.85 s","340 km/h","7-Speed Dual-Clutch","Rear-Wheel Drive","599 Units"],
  image:"assets/ferrari-daytona-sp3-2022.png",
  created:Date.now()-2
},{
  id:"ferrari-laferrari-2013",
  brand:"Ferrari",
  model:"LaFerrari",
  description:"A minimalist technical study of Ferrari's 2013 halo car. LaFerrari combines a naturally aspirated 6.3-litre V12 with HY-KERS hybrid assistance for a total of 963 PS, wrapping Formula 1-derived technology in one of Maranello's most distinctive shapes.",
  extras:["2013","6.3L V12 + HY-KERS","963 PS","900 Nm","0-100 km/h: 2.6 s","350 km/h","7-Speed Dual-Clutch","Rear-Wheel Drive","499 Units"],
  image:"assets/ferrari-laferrari-2013.png",
  created:Date.now()-3
},{
  id:"ferrari-sf90-stradale-2019",
  brand:"Ferrari",
  model:"SF90 Stradale",
  description:"A clean technical tribute to Ferrari's first series-production plug-in hybrid. The 2019 SF90 Stradale combines a twin-turbocharged V8 with three electric motors, producing 1,000 PS and all-wheel-drive traction while marking a new chapter in Ferrari performance.",
  extras:["2019","4.0L Twin-Turbo V8 + 3 Electric Motors","1,000 PS","800 Nm","0-100 km/h: 2.5 s","340 km/h","8-Speed Dual-Clutch","All-Wheel Drive","Plug-In Hybrid"],
  image:"assets/ferrari-sf90-stradale-2019.png",
  created:Date.now()-4
},{
  id:"bugatti-chiron-super-sport-300-plus-2019",
  brand:"Bugatti",
  model:"Chiron Super Sport 300+",
  description:"A bold tribute to the first production car to break the 300 mph barrier. The long-tail Bugatti Chiron Super Sport 300+ channels 1,600 PS from its quad-turbocharged W16, commemorating the record-setting 490.484 km/h run and an exceptionally rare production series of just 30 cars.",
  extras:["2019","8.0L Quad-Turbo W16","1,600 PS","1,600 Nm","0-100 km/h: 2.3 s","490.484 km/h","7-Speed Dual-Clutch","All-Wheel Drive","30 Units"],
  image:"assets/bugatti-chiron-super-sport-300-plus-2019.png",
  created:Date.now()-5
},{
  id:"mclaren-p1-2013",
  brand:"McLaren",
  model:"P1",
  description:"A dark technical study of McLaren's 2013 hybrid hypercar. The P1 combines a twin-turbocharged 3.8-litre V8 with electric assistance, active aerodynamics and a carbon-fibre structure to create one of the defining members of the hybrid hypercar trinity.",
  extras:["2013","3.8L Twin-Turbo Hybrid V8","916 PS","900 Nm","0-100 km/h: 2.8 s","350 km/h","7-Speed DCT","Rear-Wheel Drive","375 Units"],
  image:"assets/mclaren-p1-2013.png",created:Date.now()-6
},{
  id:"mclaren-f1-1992",
  brand:"McLaren",
  model:"F1",
  description:"A poster celebrating Gordon Murray's uncompromising McLaren F1, launched in 1992 with a central driving position, lightweight carbon-fibre construction and a naturally aspirated BMW-sourced V12. It remains one of the most influential supercars ever created.",
  extras:["1992","6.1L Naturally Aspirated V12","627 PS","651 Nm","0-100 km/h: 3.2 s","386 km/h","6-Speed Manual","Rear-Wheel Drive","106 Units"],
  image:"assets/mclaren-f1-1992.png",created:Date.now()-7
},{
  id:"bugatti-eb110-1991",
  brand:"Bugatti",
  model:"EB110",
  description:"A clean technical portrait of the 1991 Bugatti EB110, named for Ettore Bugatti's 110th birthday. Its quad-turbo V12, six-speed manual gearbox and all-wheel drive made it one of the most advanced supercars of its era.",
  extras:["1991","3.5L Quad-Turbo V12","560 PS","650 Nm","0-100 km/h: 3.4 s","340 km/h","6-Speed Manual","All-Wheel Drive","139 Units"],
  image:"assets/bugatti-eb110-1991.png",created:Date.now()-8
},{
  id:"bugatti-veyron-2005",
  brand:"Bugatti",
  model:"Veyron 16.4",
  description:"A technical tribute to the car that reset the performance benchmark in 2005. The Bugatti Veyron 16.4 paired a quad-turbocharged W16 with all-wheel drive and 1,001 PS, becoming the first production car to exceed 400 km/h.",
  extras:["2005","8.0L Quad-Turbo W16","1,001 PS","1,250 Nm","0-100 km/h: 2.5 s","407 km/h","7-Speed Dual-Clutch","All-Wheel Drive","300 Units"],
  image:"assets/bugatti-veyron-2005.png",created:Date.now()-9
},{
  id:"bugatti-w16-mistral-2022",
  brand:"Bugatti",
  model:"W16 Mistral",
  description:"An open-top farewell to Bugatti's legendary W16 era. Revealed in 2022, the W16 Mistral combines 1,600 PS with dramatic roadster proportions, blending extreme performance with the craftsmanship of a highly limited collector car.",
  extras:["2022","8.0L Quad-Turbo W16","1,600 PS","1,600 Nm","0-100 km/h: 2.5 s","420 km/h","7-Speed Dual-Clutch","All-Wheel Drive","99 Units"],
  image:"assets/bugatti-w16-mistral-2022.png",created:Date.now()-10
},{
  id:"bugatti-divo-2018",
  brand:"Bugatti",
  model:"Divo",
  description:"A track-focused interpretation of the Chiron platform, named after French racing driver Albert Divo. Redesigned aerodynamics, reduced weight and increased downforce give this 40-car series a sharper, corner-focused character.",
  extras:["2018","8.0L Quad-Turbo W16","1,500 PS","1,600 Nm","0-100 km/h: 2.4 s","380 km/h","7-Speed Dual-Clutch","All-Wheel Drive","40 Units"],
  image:"assets/bugatti-divo-2018.png",created:Date.now()-11
},{
  id:"bugatti-centodieci-2019",
  brand:"Bugatti",
  model:"Centodieci",
  description:"A highly exclusive homage to the EB110, reinterpreted through modern Bugatti engineering. The Centodieci's distinctive air intakes, fixed rear wing and 1,600 PS W16 mark it out as a ten-car celebration of the marque's history.",
  extras:["2019","8.0L Quad-Turbo W16","1,600 PS","1,600 Nm","0-100 km/h: 2.4 s","380 km/h","7-Speed Dual-Clutch","All-Wheel Drive","10 Units"],
  image:"assets/bugatti-centodieci-2019.png",created:Date.now()-12
},{
  id:"bugatti-chiron-2016",
  brand:"Bugatti",
  model:"Chiron",
  description:"A technical portrait of the 2016 Bugatti Chiron, where 1,500 PS, all-wheel drive and the signature C-line meet extraordinary craftsmanship. Built as the Veyron's successor, it pushed hypercar performance and luxury into a new era.",
  extras:["2016","8.0L Quad-Turbo W16","1,500 PS","1,600 Nm","0-100 km/h: 2.4 s","420 km/h","7-Speed Dual-Clutch","All-Wheel Drive","500 Units"],
  image:"assets/bugatti-chiron-2016.png",created:Date.now()-13
},{
  id:"bugatti-chiron-pur-sport-2020",
  brand:"Bugatti",
  model:"Chiron Pur Sport",
  description:"A handling-focused evolution of the Chiron engineered for agility, precision and driver connection. Introduced in 2020, the Pur Sport combines shorter gearing, increased downforce, reduced weight and a fixed rear wing with Bugatti's formidable quad-turbo W16.",
  extras:["2020","8.0L Quad-Turbo W16","1,500 PS","1,600 Nm","0-100 km/h: 2.3 s","350 km/h","7-Speed Dual-Clutch","All-Wheel Drive","60 Units"],
  image:"assets/bugatti-chiron-pur-sport-2020.png",created:Date.now()-18
},{
  id:"bugatti-la-voiture-noire-2019",
  brand:"Bugatti",
  model:"La Voiture Noire",
  description:"A one-of-one Bugatti inspired by Jean Bugatti's lost Type 57 SC Atlantic. La Voiture Noire wraps Chiron-based W16 performance in flowing bespoke bodywork, creating a singular expression of heritage, craftsmanship and exclusivity.",
  extras:["2019","8.0L Quad-Turbo W16","1,500 PS","1,600 Nm","0-100 km/h: 2.4 s","420 km/h","7-Speed Dual-Clutch","All-Wheel Drive","One of One"],
  image:"assets/bugatti-la-voiture-noire-2019.png",created:Date.now()-14
},{
  id:"mclaren-f1-lm-1995",
  brand:"McLaren",
  model:"F1 LM",
  description:"A celebration of the rarest road-going evolution of the McLaren F1. Created in honour of the F1 GTR's 1995 Le Mans victory, the LM strips away comfort, adds power and uses a race-derived aerodynamic package for an uncompromising driving experience.",
  extras:["1995","6.1L Naturally Aspirated V12","680 PS","705 Nm","0-100 km/h: 3.0 s","386 km/h","6-Speed Manual","Rear-Wheel Drive","5 Units"],
  image:"assets/mclaren-f1-lm-1995.png",created:Date.now()-15
},{
  id:"bmw-m4-competition-2021",
  brand:"BMW",
  model:"M4 Competition",
  description:"A monochrome technical study of the G82-generation BMW M4 Competition. Its twin-turbocharged inline-six, eight-speed transmission and competition-tuned chassis combine everyday usability with serious M-car performance.",
  extras:["2021","3.0L Twin-Turbo Inline-Six","503 PS","650 Nm","0-100 km/h: 3.8 s","290 km/h","8-Speed M Steptronic","Rear-Wheel Drive"],
  image:"assets/bmw-m4-competition-2021.png",created:Date.now()-16
},{
  id:"bugatti-bolide-2024",
  brand:"Bugatti",
  model:"Bolide",
  description:"A track-only expression of Bugatti engineering with uncompromising aerodynamics, an ultra-low body and a relentless focus on lap performance. The limited-production Bolide turns the quad-turbo W16 platform into a purpose-built circuit machine.",
  extras:["2024","8.0L Quad-Turbo W16","1,825 PS","1,850 Nm","0-100 km/h: 2.17 s","500+ km/h","7-Speed Sequential","Rear-Wheel Drive","40 Units"],
  image:"assets/bugatti-bolide-2024.png",created:Date.now()-17
},{
  id:"koenigsegg-jesko-poster-1",
  brand:"Koenigsegg",
  model:"Jesko",
  description:"A technical portrait of the Koenigsegg Jesko, named after company founder Christian von Koenigsegg's father. Its lightweight carbon structure, active aerodynamics, twin-turbo V8 and nine-speed Light Speed Transmission embody Sweden's uncompromising pursuit of extreme performance.",
  extras:["2020","5.0L Twin-Turbo V8","1,280 PS","1,000 Nm","0-100 km/h: 2.5 s","531 km/h","9-Speed LST","Rear-Wheel Drive","1,320 kg"],
  image:"assets/koenigsegg-jesko.png",created:Date.now()-19
},{
  id:"ferrari-sf90-stradale-poster-2",
  brand:"Ferrari",
  model:"SF90 Stradale",
  description:"An alternate technical interpretation of Ferrari's first series-production plug-in hybrid. This graphite-toned edition highlights the SF90's compact mid-engine profile and the combined force of a twin-turbo V8 with three electric motors.",
  extras:["Alternate Poster","4.0L Twin-Turbo V8 + 3 Electric Motors","1,000 PS","800 Nm","0-100 km/h: 2.5 s","340 km/h","8-Speed DCT","All-Wheel Drive","Plug-In Hybrid"],
  image:"assets/ferrari-sf90-stradale-alternate.png",created:Date.now()-20
},{
  id:"lamborghini-aventador-svj-poster-1",
  brand:"Lamborghini",
  model:"Aventador SVJ",
  description:"A dramatic side-profile study of the most extreme Aventador. The SVJ combines Lamborghini's naturally aspirated V12 with active aerodynamics, all-wheel drive and track-focused engineering developed to deliver exceptional precision and downforce.",
  extras:["2018","6.5L Naturally Aspirated V12","770 PS","720 Nm","0-100 km/h: 2.8 s","350 km/h","7-Speed ISR","All-Wheel Drive","1,525 kg"],
  image:"assets/lamborghini-aventador-svj.png",created:Date.now()-21
},{
  id:"lamborghini-huracan-sto-poster-1",
  brand:"Lamborghini",
  model:"Huracan STO",
  description:"A technical celebration of Lamborghini's road-legal track specialist. Inspired by motorsport, the Huracan STO pairs a naturally aspirated V10 with lightweight construction, race-derived aerodynamics and rear-wheel drive for a direct, focused driving experience.",
  extras:["2021","5.2L Naturally Aspirated V10","640 PS","565 Nm","0-100 km/h: 3.0 s","310 km/h","7-Speed LDF Dual-Clutch","Rear-Wheel Drive","1,339 kg"],
  image:"assets/lamborghini-huracan-sto.png",created:Date.now()-22
},{
  id:"mclaren-765lt-poster-1",
  brand:"McLaren",
  model:"765LT",
  description:"A monochrome study of McLaren's ferocious Longtail evolution of the 720S. More power, less weight and increased downforce give the 765LT its focused character, blending extraordinary pace with sharp driver engagement.",
  extras:["2020","4.0L Twin-Turbo V8","765 PS","800 Nm","0-100 km/h: 2.8 s","330 km/h","7-Speed SSG","Rear-Wheel Drive","1,229 kg"],
  image:"assets/mclaren-765lt.png",created:Date.now()-23
},{
  id:"mclaren-720s-poster-1",
  brand:"McLaren",
  model:"720S",
  description:"A clean technical portrait of the McLaren 720S. Its carbon-fibre Monocage II, proactive chassis technology and twin-turbo V8 deliver an exceptional blend of performance, precise handling and everyday usability.",
  extras:["2017","4.0L Twin-Turbo V8","720 PS","770 Nm","0-100 km/h: 2.9 s","341 km/h","7-Speed SSG Dual-Clutch","Rear-Wheel Drive","1,419 kg"],
  image:"assets/mclaren-720s.png",created:Date.now()-24
},{
  id:"mclaren-720s-poster-2",
  brand:"McLaren",
  model:"720S",
  description:"An alternate portrait-format technical poster of the McLaren 720S. Built around its carbon-fibre Monocage II chassis, the 720S combines a 4.0-litre twin-turbocharged V8 with proactive chassis control, precise aerodynamics and everyday usability.",
  extras:["Alternate Poster","2017","4.0L Twin-Turbo V8","720 PS (710 hp) @ 7,500 rpm","770 Nm @ 5,500-6,500 rpm","0-100 km/h: 2.9 s","341 km/h (212 mph)","7-Speed SSG Dual-Clutch","Rear-Wheel Drive","1,419 kg","4,544 mm long","1,930 mm wide","1,196 mm high"],
  image:"assets/mclaren-720s-portrait.png",created:Date.now()-24.5
},{
  id:"mercedes-amg-project-one-poster-1",
  brand:"Mercedes-AMG",
  model:"Project One",
  description:"A technical portrait of the Mercedes-AMG Project One, created to bring Formula 1 hybrid technology to the road. Its 1.6-litre turbocharged V6 works with four electric motors, active aerodynamics and all-wheel drive to deliver extraordinary performance in a lightweight carbon-fibre package.",
  extras:["2017","Plug-in Hybrid (F1 Technology)","1.6L Turbo V6 + 4 Electric Motors","1,049 hp","1,200 Nm","0-100 km/h: 2.5 s","352 km/h (219 mph)","Mid-Engine","All-Wheel Drive","4,667 mm long","1,995 mm wide","1,146 mm high"],
  image:"assets/mercedes-amg-project-one.png",created:Date.now()-24.75
},{
  id:"porsche-911-gt3-rs-poster-1",
  brand:"Porsche",
  model:"911 GT3 RS",
  description:"A technical study of the 992-generation Porsche 911 GT3 RS. Active aerodynamics, lightweight construction and a naturally aspirated flat-six combine to create one of the most track-focused road-going 911 models ever built.",
  extras:["2022","4.0L Naturally Aspirated Flat-Six","525 PS","465 Nm","0-100 km/h: 3.2 s","296 km/h","7-Speed PDK","Rear-Wheel Drive","1,450 kg"],
  image:"assets/porsche-911-gt3-rs.png",created:Date.now()-25
},{
  id:"mclaren-senna-poster-1",
  brand:"McLaren",
  model:"Senna",
  description:"Named in honour of Ayrton Senna, McLaren's limited-production track specialist is engineered around a single purpose: lap performance. Extreme downforce, lightweight carbon construction and a twin-turbo V8 create an uncompromising connection between driver and machine.",
  extras:["2018","4.0L Twin-Turbo V8","800 PS","800 Nm","0-100 km/h: 2.8 s","335 km/h","7-Speed SSG","Rear-Wheel Drive","1,198 kg"],
  image:"assets/mclaren-senna.png",created:Date.now()-26
},{
  id:"bugatti-divo-poster-2",
  brand:"Bugatti",
  model:"Divo",
  description:"A second poster interpretation of the corner-focused Bugatti Divo. This warm-toned edition highlights its fixed rear wing, sculpted aerodynamics and purposeful stance while celebrating a W16 hypercar designed for agility rather than outright maximum speed.",
  extras:["Alternate Poster","2018","8.0L Quad-Turbo W16","1,500 PS","1,600 Nm","0-100 km/h: 2.4 s","380 km/h","7-Speed Dual-Clutch","All-Wheel Drive","40 Units"],
  image:"assets/bugatti-divo-alternate.png",created:Date.now()-27
},{
  id:"bugatti-centodieci-poster-2",
  brand:"Bugatti",
  model:"Centodieci",
  description:"An alternate technical portrait of Bugatti's exceptionally rare tribute to the EB110. The design foregrounds the Centodieci's distinctive five-hole side intake, fixed rear wing and modern coachbuilt character in a limited series of only ten cars.",
  extras:["Alternate Poster","2019","8.0L Quad-Turbo W16","1,600 PS","1,600 Nm","0-100 km/h: 2.4 s","380 km/h","7-Speed Dual-Clutch","All-Wheel Drive","10 Units"],
  image:"assets/bugatti-centodieci-alternate.png",created:Date.now()-28
},{
  id:"bugatti-tourbillon-poster-1",
  brand:"Bugatti",
  model:"Tourbillon",
  description:"A technical portrait of the Bugatti Tourbillon, marking a new era beyond the W16. Its naturally aspirated V16 and three electric motors combine electrified performance with intricate engineering, timeless proportions and inspiration drawn from fine watchmaking.",
  extras:["2024","8.3L Naturally Aspirated V16 + 3 Electric Motors","1,800 PS","2,000 Nm","0-100 km/h: 2.0 s","445 km/h","8-Speed Dual-Clutch","All-Wheel Drive","250 Units"],
  image:"assets/bugatti-tourbillon-poster-1.png",created:Date.now()-29
},{
  id:"bugatti-mistral-poster-2",
  brand:"Bugatti",
  model:"W16 Mistral",
  description:"A second poster interpretation of Bugatti's open-top farewell to the W16. This warm technical edition celebrates the Mistral's elegant roadster profile, 1,600 PS quad-turbo engine and status as one of only 99 examples.",
  extras:["Alternate Poster","2022","8.0L Quad-Turbo W16","1,600 PS","1,600 Nm","0-100 km/h: 2.4 s","420 km/h","7-Speed Dual-Clutch","All-Wheel Drive","99 Units"],
  image:"assets/bugatti-mistral-alternate.png",created:Date.now()-30
},{
  id:"bugatti-bolide-poster-2",
  brand:"Bugatti",
  model:"Bolide",
  description:"An alternate poster for Bugatti's uncompromising track-only W16 machine. This 2020 concept-era treatment emphasises the Bolide's impossibly low profile, vast rear wing and singular focus on circuit performance.",
  extras:["Alternate Poster","2020","8.0L Quad-Turbo W16","1,850 PS","1,850 Nm","0-100 km/h: 2.17 s","500+ km/h","7-Speed Sequential","Rear-Wheel Drive","40 Units"],
  image:"assets/bugatti-bolide-alternate.png",created:Date.now()-31
},{
  id:"bugatti-la-voiture-noire-poster-2",
  brand:"Bugatti",
  model:"La Voiture Noire",
  description:"A second technical interpretation of Bugatti's one-off La Voiture Noire. Its flowing black coachwork pays tribute to the Type 57 SC Atlantic while wrapping modern W16 performance in a singular expression of luxury and design.",
  extras:["Alternate Poster","2019","8.0L Quad-Turbo W16","1,500 PS","1,600 Nm","0-100 km/h: 2.4 s","420 km/h","7-Speed Dual-Clutch","All-Wheel Drive","One of One"],
  image:"assets/bugatti-la-voiture-noire-alternate.png",created:Date.now()-32
}];
starterPosters.push(...(window.koenigseggCatalog||[]),...(window.porscheCatalog||[]),...(window.f1Catalog||[]),...(window.racetrackCatalog||[]),...(window.bikeCatalog||[]),...(window.paganiCatalog||[]),...(window.mclarenCatalog||[]),...(window.lamborghiniCatalog||[]));
const savedPosters=localStorage.getItem("apex-posters");
const savedList=savedPosters===null?null:JSON.parse(savedPosters), seedVersion="18";
let posters=savedList===null?starterPosters:localStorage.getItem("apex-seed-version")!==seedVersion?[...starterPosters,...savedList.filter(item=>!starterPosters.some(seed=>seed.id===item.id))]:savedList, extraList=[], activeCombo=null;
localStorage.setItem("apex-seed-version",seedVersion);
const comboSets={
  bugatti:{name:"Bugatti Legacy Â· 5-poster set",ids:["bugatti-eb110-1991","bugatti-veyron-2005","bugatti-chiron-2016","bugatti-mistral-poster-2","bugatti-tourbillon-poster-1"]},
  koenigsegg:{name:"Koenigsegg Evolution Â· 6-poster set",ids:["koenigsegg-cc-prototype-1996","koenigsegg-cc8s-2002","koenigsegg-ccr-2004","koenigsegg-ccx-2006","koenigsegg-agera-rs-2015","koenigsegg-jesko-absolut-2021"]},
  porsche:{name:"Porsche Rennsport Â· 6-poster set",ids:["porsche-carrera-gt-2004","porsche-911-gt2-rs-997-2010","porsche-911-gt3-rs-9912-2018","porsche-919-hybrid-evo-2018","porsche-718-cayman-gt4-rs-2021","porsche-911-gt3-rs-2024-poster"]},
  f1:{name:"Formula 1 2026 Grid Â· 11-poster bundle",ids:["f1-cadillac-2026","f1-vcarb-03-2026","f1-audi-r26-2026","f1-haas-vf-26-2026","f1-williams-fw48-2026","f1-aston-martin-amr26-2026","f1-red-bull-rb22-2026","f1-alpine-a526-2026","f1-ferrari-sf-26-2026","f1-mclaren-mcl40-2026","f1-mercedes-w16-2026"]},
  racetracks:{name:"Formula 1 Circuit Collection Â· 22-poster bundle",ids:["racetrack-austria-red-bull-ring-2026","racetrack-spain-barcelona-2026","racetrack-canada-gilles-villeneuve-2026","racetrack-miami-2026","racetrack-japan-suzuka-2026","racetrack-monaco-2026","racetrack-china-shanghai-2026","racetrack-zandvoort-2026","racetrack-hungary-hungaroring-2026","racetrack-belgium-spa-2026","racetrack-silverstone-2026","racetrack-madrid-2026","racetrack-baku-2026","racetrack-singapore-2026","racetrack-austin-cota-2026","racetrack-mexico-city-2026","racetrack-interlagos-2026","racetrack-las-vegas-2026","racetrack-qatar-lusail-2026","racetrack-abu-dhabi-yas-marina-2026","racetrack-australia-albert-park-2026","racetrack-monza-2026"]},
  motorcycles:{name:"Motorcycle Icons Â· 12-poster collection",ids:["bike-suzuki-hayabusa-2024","bike-kawasaki-ninja-h2r-2024","bike-triumph-speed-triple-1200-rs-2024","bike-ducati-panigale-v4-r-black-2024","bike-honda-fireblade-sp-2024","bike-yamaha-yzf-r1m-2024","bike-bmw-m-1000-rr-2024","bike-bmw-r-1300-gs-adventure-2024","bike-yamaha-yzf-r1-2024","bike-kawasaki-ninja-zx-10r-2024","bike-ducati-streetfighter-v4-sp2-2024","bike-ducati-panigale-v4-r-red-2024"]},
  pagani:{name:"Pagani Hypercar Collection · 12-poster collection",ids:["pagani-zonda-f-2005-blue","pagani-zonda-r-2010-blue","pagani-zonda-cinque-2009-white-blue","pagani-zonda-r-2010-black-gold","pagani-huayra-bc-roadster-2017-black-gold","pagani-zonda-tricolore-2011-black-gold","pagani-huayra-2012-black-gold","pagani-zonda-cinque-2013-black-red","pagani-huayra-bc-2016-black-red","pagani-huayra-bc-2012-white-blue","pagani-utopia-2022-black-gold","pagani-huayra-2011-blue-gold"]},
  mclaren:{name:"McLaren Supercar Collection · 9-poster collection",ids:["mclaren-750s-spider-2023-orange-a","mclaren-speedtail-2019-silver","mclaren-750s-spider-2023-orange-b","mclaren-w1-2024-silver-black","mclaren-senna-2018-blue","mclaren-p1-2013-yellow","mclaren-w1-2024-blue","mclaren-765lt-2015-orange","mclaren-f1-1992-silver"]},
  lamborghini:{name:"Lamborghini Icons Collection · 13-poster collection",ids:["lamborghini-temerario-2024-blue","lamborghini-huracan-lp-610-4-2014-orange","lamborghini-gallardo-superleggera-2010-blue","lamborghini-sian-fkp-37-2019-blue","lamborghini-huracan-evo-2019-green","lamborghini-aventador-lp-700-4-2011-orange","lamborghini-huracan-lp-610-4-2014-green","lamborghini-miura-p400-sv-1967-green","lamborghini-diablo-vt-1993-yellow","lamborghini-murcielago-lp-670-4-sv-2010-black","lamborghini-aventador-svj-2018-black","lamborghini-huracan-sto-2021-yellow","lamborghini-revuelto-lp-980-4-2024-orange"]}
};

function fillLists(){
  $("#brandList").innerHTML=Object.keys(brands).sort().map(x=>`<option value="${x}">`).join("");
  updateModels();
}
function updateModels(){const list=brands[els.brand.value]||Object.values(brands).flat();$("#modelList").innerHTML=list.map(x=>`<option value="${x}">`).join("")}
function updateFilters(){const current=els.filter.value;const names=[...new Set(posters.map(p=>p.brand))].sort();els.filter.innerHTML='<option value="">All brands</option>'+names.map(x=>`<option>${escapeHtml(x)}</option>`).join("");els.filter.value=current}
function escapeHtml(s=""){return s.replace(/[&<>'"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"}[c]))}
function posterYear(poster){const year=poster.extras.find(value=>/^(19|20)\d{2}$/.test(value));return year?Number(year):0}
function render(){
  updateFilters();
  const q=els.search.value.toLowerCase().trim(), brand=els.filter.value;
  const shown=posters.filter(p=>(!activeCombo||comboSets[activeCombo].ids.includes(p.id))&&(!brand||p.brand===brand)&&(!q||[p.brand,p.model,p.description,...p.extras].join(" ").toLowerCase().includes(q))).sort((a,b)=>posterYear(b)-posterYear(a));
  els.grid.innerHTML=shown.map(p=>`<article class="poster-card" data-id="${p.id}"><div class="poster-image"><img src="${p.image}" alt="${escapeHtml(p.brand+' '+p.model)} poster"></div><div class="poster-info"><span class="poster-brand">${escapeHtml(p.brand)}</span><h3>${escapeHtml(p.model)}</h3><p>${escapeHtml(p.description)}</p>${p.extras.length?`<div class="tags">${p.extras.slice(0,3).map(x=>`<span class="tag">${escapeHtml(x)}</span>`).join("")}</div>`:""}</div></article>`).join("");
  els.empty.hidden=posters.length>0;els.grid.hidden=posters.length===0;els.noResults.hidden=posters.length===0||shown.length>0;$("#posterCount").textContent=`${posters.length} POSTER${posters.length===1?"":"S"} ARCHIVED`;$("#comboStatus").hidden=!activeCombo;if(activeCombo)$("#comboStatusText").textContent=comboSets[activeCombo].name;
}
function openForm(){els.dialog.showModal()}
function closeForm(){els.dialog.close();els.form.reset();extraList=[];renderTags();els.preview.removeAttribute("src");els.drop.classList.remove("has-image");$("#charCount").textContent="0"}
function addExtra(){const value=els.extras.value.trim();if(value&&!extraList.some(x=>x.toLowerCase()===value.toLowerCase())){extraList.push(value);els.extras.value="";renderTags()}}
function renderTags(){els.tags.innerHTML=extraList.map((x,i)=>`<span class="extra-chip">${escapeHtml(x)}<button type="button" data-remove="${i}">Ã—</button></span>`).join("")}
function fileToData(file){return new Promise((resolve,reject)=>{const r=new FileReader();r.onload=()=>resolve(r.result);r.onerror=reject;r.readAsDataURL(file)})}
function save(){localStorage.setItem("apex-posters",JSON.stringify(posters))}
const printSizes={
  "10 Ã— 15 cm":[1181,1772],
  "A6 (10.5 Ã— 14.8 cm)":[1240,1748],
  "13 Ã— 18 cm":[1535,2126],
  "A5 (14.8 Ã— 21 cm)":[1748,2480],
  "20 Ã— 30 cm":[2362,3543],
  "A4 (21 Ã— 29.7 cm)":[2480,3508],
  "30 Ã— 40 cm":[3543,4724],
  "A3 (29.7 Ã— 42 cm)":[3508,4961],
  "30 Ã— 45 cm":[3543,5315],
  "40 Ã— 50 cm":[4724,5906],
  "50 Ã— 70 cm":[5906,8268],
  "A2 (42 Ã— 59.4 cm)":[4961,7016],
  "A1 (59.4 Ã— 84.1 cm)":[7016,9933]
};
function slugify(value){return value.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")}
function loadImage(src){return new Promise((resolve,reject)=>{const image=new Image();image.onload=()=>resolve(image);image.onerror=reject;image.src=src})}
async function downloadPoster(id,button){
  const poster=posters.find(item=>item.id===id), label=$("#downloadSize").value, [width,height]=printSizes[label];
  if(!poster)return;
  if(location.protocol==="file:"){
    const link=document.createElement("a");
    link.href=poster.image;
    link.download=`${slugify(poster.brand+"-"+poster.model)}-original.png`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    return;
  }
  const oldText=button.textContent;button.disabled=true;button.textContent="Preparing printâ€¦";
  try{
    const image=await loadImage(poster.image),canvas=document.createElement("canvas"),context=canvas.getContext("2d");
    canvas.width=width;canvas.height=height;context.fillStyle="#f3f0e9";context.fillRect(0,0,width,height);
    const scale=Math.min(width/image.naturalWidth,height/image.naturalHeight),drawWidth=image.naturalWidth*scale,drawHeight=image.naturalHeight*scale;
    context.imageSmoothingEnabled=true;context.imageSmoothingQuality="high";context.drawImage(image,(width-drawWidth)/2,(height-drawHeight)/2,drawWidth,drawHeight);
    const blob=await new Promise(resolve=>canvas.toBlob(resolve,"image/jpeg",.96));
    if(!blob)throw new Error("Export failed");
    const link=document.createElement("a"),sizeName=label.replace(/[^a-zA-Z0-9]+/g,"-").replace(/-$/g,"");
    link.href=URL.createObjectURL(blob);link.download=`${slugify(poster.brand+"-"+poster.model)}-${sizeName}-300dpi.jpg`;link.click();setTimeout(()=>URL.revokeObjectURL(link.href),1000);
  }catch(error){alert("That print file could not be prepared. Please try again.")}
  finally{button.disabled=false;button.textContent=oldText}
}
function openDetail(id){const p=posters.find(x=>x.id===id);if(!p)return;$("#detailContent").innerHTML=`<div class="detail-layout"><div class="detail-image"><img src="${p.image}" alt="${escapeHtml(p.brand+' '+p.model)}"></div><div class="detail-copy"><button class="icon-button detail-close" aria-label="Close">Ã—</button><p class="eyebrow">${escapeHtml(p.brand)}</p><h2>${escapeHtml(p.model)}</h2><p>${escapeHtml(p.description)}</p>${p.extras.length?`<div class="tags">${p.extras.map(x=>`<span class="tag">${escapeHtml(x)}</span>`).join("")}</div>`:""}<div class="download-panel"><span class="download-label">PRINT-READY DOWNLOAD</span><div class="download-row"><select id="downloadSize" aria-label="Print size">${Object.keys(printSizes).map(size=>`<option>${size}</option>`).join("")}</select><button class="download-button" data-download="${p.id}">Download</button></div><small>Full artwork Â· 300 DPI-ready JPG Â· quality depends on the original image</small></div></div></div>`;els.detail.showModal()}

$("#openUpload")?.addEventListener("click",openForm);$("#emptyUpload")?.addEventListener("click",openForm);$("#closeUpload").onclick=closeForm;$("#cancelUpload").onclick=closeForm;els.brand.oninput=updateModels;$("#addExtra").onclick=addExtra;
els.extras.addEventListener("keydown",e=>{if(e.key==="Enter"){e.preventDefault();addExtra()}});
els.tags.onclick=e=>{if(e.target.dataset.remove!==undefined){extraList.splice(+e.target.dataset.remove,1);renderTags()}};
els.desc.oninput=()=>$("#charCount").textContent=els.desc.value.length;
els.image.onchange=async()=>{if(els.image.files[0]){els.preview.src=await fileToData(els.image.files[0]);els.drop.classList.add("has-image")}};
els.form.onsubmit=async e=>{e.preventDefault();if(!els.image.files[0])return;posters.unshift({id:crypto.randomUUID(),brand:els.brand.value.trim(),model:els.model.value.trim(),description:els.desc.value.trim(),extras:[...extraList],image:await fileToData(els.image.files[0]),created:Date.now()});try{save()}catch(err){alert("This image is too large for browser storage. Try a smaller image.");posters.shift();return}closeForm();render()};
els.search.oninput=render;els.filter.onchange=render;els.grid.onclick=e=>{const card=e.target.closest(".poster-card");if(card)openDetail(card.dataset.id)};
els.detail.onclick=e=>{if(e.target.classList.contains("detail-close"))els.detail.close();if(e.target.dataset.download)downloadPoster(e.target.dataset.download,e.target)};
document.querySelector(".combo-grid").onclick=e=>{const button=e.target.closest("[data-combo]");if(!button)return;activeCombo=button.dataset.combo;els.search.value="";els.filter.value="";render();$("#collection").scrollIntoView({behavior:"smooth"})};
$("#clearCombo").onclick=()=>{activeCombo=null;render()};
els.dialog.addEventListener("click",e=>{if(e.target===els.dialog)closeForm()});els.detail.addEventListener("click",e=>{if(e.target===els.detail)els.detail.close()});
fillLists();render();
if(location.protocol==="file:")$("#localNotice").hidden=false;
