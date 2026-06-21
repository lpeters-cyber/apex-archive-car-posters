const makeRacetrackPoster=(id,model,round,location,length,distance,laps,lastWinner,mostWins,image,index,alternate=false)=>({
  id,
  brand:"Racetracks",
  model,
  description:`A technical circuit-map poster of ${model.replace(" (Alternate)","")}, featuring the track layout, numbered corners and key Formula 1 race statistics for the 2026 season.${alternate?" This is an alternate poster edition of the circuit.":""}`,
  extras:[alternate?"Alternate Poster":"2026",`Round ${round}`,`Location: ${location}`,`Circuit Length: ${length}`,`Race Distance: ${distance}`,`Laps: ${laps}`,`2025 Winner: ${lastWinner}`,`Most Wins: ${mostWins}`,"Formula 1 Circuit Map"],
  image:`assets/${image}`,
  created:Date.now()-60-index
});

window.racetrackCatalog=[
  makeRacetrackPoster("racetrack-austria-red-bull-ring-2026","Austria — Red Bull Ring",8,"Spielberg, Austria","4.326 km","306.452 km",71,"Lando Norris — McLaren","Max Verstappen — 4 wins","racetrack-austria-red-bull-ring-2026.png",0),
  makeRacetrackPoster("racetrack-spain-barcelona-2026","Spain — Circuit de Barcelona-Catalunya",7,"Barcelona, Spain","4.657 km","307.104 km",66,"Oscar Piastri — McLaren","Lewis Hamilton — 6 wins","racetrack-spain-barcelona-2026.png",1),
  makeRacetrackPoster("racetrack-canada-gilles-villeneuve-2026","Canada — Circuit Gilles Villeneuve",6,"Montreal, Canada","4.361 km","305.270 km",70,"George Russell — Mercedes","Michael Schumacher — 7 wins","racetrack-canada-gilles-villeneuve-2026.png",3),
  makeRacetrackPoster("racetrack-miami-2026","Miami International Autodrome",4,"Miami, Florida, USA","5.412 km","308.326 km",57,"Lando Norris — McLaren","Max Verstappen — 2 wins","racetrack-miami-2026.png",4),
  makeRacetrackPoster("racetrack-japan-suzuka-2026","Japan — Suzuka Circuit",3,"Suzuka, Japan","5.807 km","307.471 km",53,"Max Verstappen — Red Bull Racing","Michael Schumacher — 6 wins","racetrack-japan-suzuka-2026.png",5),
  makeRacetrackPoster("racetrack-monaco-2026","Monaco — Circuit de Monaco",1,"Monaco","3.337 km","260.286 km",78,"Charles Leclerc — Ferrari","Ayrton Senna — 6 wins","racetrack-monaco-2026.png",6),
  makeRacetrackPoster("racetrack-china-shanghai-2026","China — Shanghai International Circuit",2,"Shanghai, China","5.451 km","305.066 km",56,"Oscar Piastri — McLaren","Lewis Hamilton — 6 wins","racetrack-china-shanghai-2026.png",7),
  makeRacetrackPoster("racetrack-zandvoort-2026","Zandvoort Circuit",12,"Zandvoort, Netherlands","4.259 km","306.587 km",72,"Lando Norris — McLaren","Max Verstappen — 3 wins","racetrack-zandvoort-2026.png",8),
  makeRacetrackPoster("racetrack-hungary-hungaroring-2026","Hungary — Hungaroring",11,"Mogyoród, Hungary","4.381 km","306.630 km",70,"Lando Norris — McLaren","Lewis Hamilton — 8 wins","racetrack-hungary-hungaroring-2026.png",9),
  makeRacetrackPoster("racetrack-belgium-spa-2026","Belgium — Circuit de Spa-Francorchamps",10,"Stavelot, Belgium","7.004 km","308.052 km",44,"Oscar Piastri — McLaren","Michael Schumacher — 6 wins","racetrack-belgium-spa-2026.png",10),
  makeRacetrackPoster("racetrack-silverstone-2026","Silverstone Circuit",9,"Silverstone, United Kingdom","5.891 km","306.198 km",52,"Lando Norris — McLaren","Lewis Hamilton — 9 wins","racetrack-silverstone-2026.png",11),
  makeRacetrackPoster("racetrack-madrid-2026","Madrid Street Circuit",14,"Madrid, Spain","5.474 km","308.236 km",56,"Lando Norris — McLaren","Lewis Hamilton — 4 wins","racetrack-madrid-2026.png",12),
  makeRacetrackPoster("racetrack-baku-2026","Baku City Circuit",15,"Baku, Azerbaijan","6.003 km","306.049 km",51,"Oscar Piastri — McLaren","Lewis Hamilton — 4 wins","racetrack-baku-2026.png",13),
  makeRacetrackPoster("racetrack-singapore-2026","Singapore — Marina Bay Street Circuit",15,"Singapore, Singapore","5.063 km","308.706 km",61,"Lando Norris — McLaren","Sebastian Vettel — 5 wins","racetrack-singapore-2026.png",14),
  makeRacetrackPoster("racetrack-austin-cota-2026","Austin — Circuit of the Americas",16,"Austin, USA","5.513 km","308.405 km",56,"Lando Norris — McLaren","Lewis Hamilton — 6 wins","racetrack-austin-cota-2026.png",15),
  makeRacetrackPoster("racetrack-mexico-city-2026","Mexico City — Autódromo Hermanos Rodríguez",17,"Mexico City, Mexico","4.304 km","305.354 km",71,"Lando Norris — McLaren","Lewis Hamilton — 5 wins","racetrack-mexico-city-2026.png",16),
  makeRacetrackPoster("racetrack-interlagos-2026","Interlagos — Autódromo José Carlos Pace",18,"São Paulo, Brazil","4.309 km","305.909 km",71,"Lando Norris — McLaren","Alain Prost — 6 wins","racetrack-interlagos-2026.png",17),
  makeRacetrackPoster("racetrack-las-vegas-2026","Las Vegas Strip Circuit",19,"Las Vegas, USA","6.201 km","309.958 km",50,"George Russell — Mercedes","Max Verstappen — 3 wins","racetrack-las-vegas-2026.png",18),
  makeRacetrackPoster("racetrack-qatar-lusail-2026","Qatar — Lusail International Circuit",20,"Lusail, Qatar","5.419 km","308.611 km",57,"Oscar Piastri — McLaren","Max Verstappen — 3 wins","racetrack-qatar-lusail-2026.png",19),
  makeRacetrackPoster("racetrack-abu-dhabi-yas-marina-2026","Abu Dhabi — Yas Marina Circuit",21,"Yas Island, Abu Dhabi, UAE","5.281 km","306.183 km",58,"Lando Norris — McLaren","Lewis Hamilton — 5 wins","racetrack-abu-dhabi-yas-marina-2026.png",20),
  makeRacetrackPoster("racetrack-australia-albert-park-2026","Australia — Albert Park Circuit",22,"Melbourne, Australia","5.278 km","306.124 km",58,"Lando Norris — McLaren","Lewis Hamilton — 8 wins","racetrack-australia-albert-park-2026.png",21),
  makeRacetrackPoster("racetrack-monza-2026","Monza — Autodromo Nazionale Monza",13,"Monza, Italy","5.793 km","306.720 km",53,"Lando Norris — McLaren","Michael Schumacher — 5 wins","racetrack-monza-2026.png",22)
];
