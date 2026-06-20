const makeF1Poster=(id,model,team,powerUnit,description,image,index)=>({
  id,
  brand:"F1",
  model,
  description,
  extras:["2026",team,powerUnit,"FIA Formula One World Championship 2026","1.6L V6 Turbo + Hybrid","100% Sustainable Fuel",">1,000 hp","MGU-K / MGU-H","8-Speed Semi-Automatic","Carbon Fibre Monocoque","Minimum 768 kg","Pre-Season Testing 2026"],
  image:`assets/${image}`,
  created:Date.now()-40-index
});

window.f1Catalog=[
  makeF1Poster("f1-cadillac-2026","Cadillac F1","Cadillac Formula 1 Team","Ferrari Power Unit","Cadillac's 2026 Formula 1 concept combines American ambition with a hybrid power unit, carbon-fibre construction and the next generation of Formula 1 engineering.","f1-cadillac-2026.png",0),
  makeF1Poster("f1-vcarb-03-2026","VCARB 03","Visa Cash App RB Formula One Team","Honda RBPT Power Unit","The VCARB 03 continues the Racing Bulls tradition of developing talent and pushing aerodynamic efficiency, agility and hybrid performance into Formula 1's 2026 era.","f1-vcarb-03-2026.png",1),
  makeF1Poster("f1-audi-r26-2026","Audi R26","Audi F1 Project","Audi F1 Power Unit","Audi's R26 concept brings German engineering, electrified performance and a works power unit to the Formula 1 grid for the 2026 regulations.","f1-audi-r26-2026.png",2),
  makeF1Poster("f1-haas-vf-26-2026","Haas VF-26","MoneyGram Haas F1 Team","Ferrari Power Unit","The Haas VF-26 concept focuses on efficiency, reliability and precision, pairing a Ferrari power unit with a lightweight carbon-fibre chassis for the 2026 season.","f1-haas-vf-26-2026.png",3),
  makeF1Poster("f1-williams-fw48-2026","Williams FW48","Williams Racing","Mercedes-AMG F1 M16 E PERFORMANCE","The Williams FW48 concept represents the next chapter of one of Formula 1's most celebrated teams, combining resilience, innovation and Mercedes-AMG hybrid power.","f1-williams-fw48-2026.png",4),
  makeF1Poster("f1-aston-martin-amr26-2026","Aston Martin AMR26","Aston Martin Aramco F1 Team","Mercedes-AMG F1 M16 E PERFORMANCE","The Aston Martin AMR26 concept is designed for Formula 1's new era with active aerodynamics, hybrid performance and the team's pursuit of front-running success.","f1-aston-martin-amr26-2026.png",5),
  makeF1Poster("f1-red-bull-rb22-2026","Red Bull RB22","Oracle Red Bull Racing","Red Bull Powertrains RBPT26","The Red Bull RB22 concept carries the team's championship ambition into 2026 with an in-house hybrid power unit, advanced aerodynamics and relentless performance.","f1-red-bull-rb22-2026.png",6),
  makeF1Poster("f1-alpine-a526-2026","Alpine A526","BWT Alpine F1 Team","Renault E-Tech 26","The Alpine A526 concept blends French motorsport identity with a hybrid power unit, efficient aerodynamics and a lightweight chassis engineered for the 2026 regulations.","f1-alpine-a526-2026.png",7),
  makeF1Poster("f1-ferrari-sf-26-2026","Ferrari SF-26","Scuderia Ferrari","Ferrari 066/12 Hybrid","The Ferrari SF-26 concept expresses Maranello's tradition, passion and technical ambition through a new-generation hybrid Formula 1 machine built for 2026.","f1-ferrari-sf-26-2026.png",8),
  makeF1Poster("f1-mclaren-mcl40-2026","McLaren MCL40","McLaren Formula 1 Team","Mercedes-AMG F1 M16 E PERFORMANCE","The McLaren MCL40 concept carries the team's papaya identity into the 2026 era with Mercedes-AMG hybrid power, active aerodynamics and championship intent.","f1-mclaren-mcl40-2026.png",9),
  makeF1Poster("f1-mercedes-w16-2026","Mercedes-AMG W16","Mercedes-AMG PETRONAS F1 Team","Mercedes-AMG F1 M16 E PERFORMANCE","The Mercedes-AMG W16 concept marks a new Formula 1 era, uniting sustainable hybrid power, advanced aerodynamics and the team's pursuit of engineering excellence.","f1-mercedes-w16-2026.png",10)
];
