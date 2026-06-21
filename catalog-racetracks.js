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
  makeRacetrackPoster("racetrack-austria-red-bull-ring-alternate-2026","Austria — Red Bull Ring (Alternate)",8,"Spielberg, Austria","4.326 km","306.452 km",71,"Lando Norris — McLaren","Max Verstappen — 4 wins","racetrack-austria-red-bull-ring-alternate-2026.png",2,true),
  makeRacetrackPoster("racetrack-canada-gilles-villeneuve-2026","Canada — Circuit Gilles Villeneuve",6,"Montreal, Canada","4.361 km","305.270 km",70,"George Russell — Mercedes","Michael Schumacher — 7 wins","racetrack-canada-gilles-villeneuve-2026.png",3),
  makeRacetrackPoster("racetrack-miami-2026","Miami International Autodrome",4,"Miami, Florida, USA","5.412 km","308.326 km",57,"Lando Norris — McLaren","Max Verstappen — 2 wins","racetrack-miami-2026.png",4),
  makeRacetrackPoster("racetrack-japan-suzuka-2026","Japan — Suzuka Circuit",3,"Suzuka, Japan","5.807 km","307.471 km",53,"Max Verstappen — Red Bull Racing","Michael Schumacher — 6 wins","racetrack-japan-suzuka-2026.png",5),
  makeRacetrackPoster("racetrack-monaco-2026","Monaco — Circuit de Monaco",1,"Monaco","3.337 km","260.286 km",78,"Charles Leclerc — Ferrari","Ayrton Senna — 6 wins","racetrack-monaco-2026.png",6),
  makeRacetrackPoster("racetrack-china-shanghai-2026","China — Shanghai International Circuit",2,"Shanghai, China","5.451 km","305.066 km",56,"Oscar Piastri — McLaren","Lewis Hamilton — 6 wins","racetrack-china-shanghai-2026.png",7),
  makeRacetrackPoster("racetrack-zandvoort-2026","Zandvoort Circuit",12,"Zandvoort, Netherlands","4.259 km","306.587 km",72,"Lando Norris — McLaren","Max Verstappen — 3 wins","racetrack-zandvoort-2026.png",8),
  makeRacetrackPoster("racetrack-hungary-hungaroring-2026","Hungary — Hungaroring",11,"Mogyoród, Hungary","4.381 km","306.630 km",70,"Lando Norris — McLaren","Lewis Hamilton — 8 wins","racetrack-hungary-hungaroring-2026.png",9),
  makeRacetrackPoster("racetrack-belgium-spa-2026","Belgium — Circuit de Spa-Francorchamps",10,"Stavelot, Belgium","7.004 km","308.052 km",44,"Oscar Piastri — McLaren","Michael Schumacher — 6 wins","racetrack-belgium-spa-2026.png",10),
  makeRacetrackPoster("racetrack-silverstone-2026","Silverstone Circuit",9,"Silverstone, United Kingdom","5.891 km","306.198 km",52,"Lando Norris — McLaren","Lewis Hamilton — 9 wins","racetrack-silverstone-2026.png",11)
];
