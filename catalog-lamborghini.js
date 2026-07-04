const makeLamborghiniPoster=(id,model,year,engine,power,torque,accel,topSpeed,transmission,weight,image,index,edition="")=>({
  id,
  brand:"Lamborghini",
  model,
  description:`A premium technical Lamborghini poster celebrating the ${year} ${model}, pairing a bold supercar portrait with blueprint views, performance specifications and model history.${edition?` This ${edition.toLowerCase()} version adds its own collector colorway.`:""}`,
  extras:[String(year),edition,engine,`Max Power: ${power}`,`Max Torque: ${torque}`,`0-100 km/h: ${accel}`,`Top Speed: ${topSpeed}`,transmission,weight,"Lamborghini Collection"].filter(Boolean),
  image:`assets/${image}`,
  created:Date.now()-140-index
});

window.lamborghiniCatalog=[
  makeLamborghiniPoster("lamborghini-temerario-2024-blue","Temerario",2024,"4.0L Twin-Turbo V8 + 3 Electric Motors","920 hp @ 9,000 rpm","730 Nm @ 4,000 rpm","2.7 sec","> 340 km/h","8-Speed Dual Clutch","Dry Weight: 1,690 kg","lamborghini-temerario-2024-blue.png",0,"Blue Edition"),
  makeLamborghiniPoster("lamborghini-huracan-lp-610-4-2014-orange","Huracán LP 610-4",2014,"5.2L Naturally Aspirated V10","610 hp @ 8,250 rpm","560 Nm @ 6,500 rpm","3.2 sec","> 325 km/h","7-Speed LDF Dual-Clutch","Dry Weight: 1,422 kg","lamborghini-huracan-lp-610-4-2014-orange.png",1,"Orange Edition"),
  makeLamborghiniPoster("lamborghini-gallardo-superleggera-2010-blue","Gallardo Superleggera",2010,"5.2L V10","562 hp @ 8,000 rpm","540 Nm @ 6,500 rpm","3.4 sec","> 315 km/h","6-Speed E-Gear","Dry Weight: 1,340 kg","lamborghini-gallardo-superleggera-2010-blue.png",2,"Blue Edition"),
  makeLamborghiniPoster("lamborghini-sian-fkp-37-2019-blue","Sián FKP 37",2019,"6.5L Naturally Aspirated V12 + 48V Mild Hybrid","819 hp @ 8,500 rpm","720 Nm @ 6,750 rpm","2.8 sec","> 350 km/h","7-Speed ISR Automated Manual","Dry Weight: 1,595 kg","lamborghini-sian-fkp-37-2019-blue.png",3,"Blue / Gold Edition"),
  makeLamborghiniPoster("lamborghini-huracan-evo-2019-green","Huracán EVO",2019,"5.2L Naturally Aspirated V10","640 hp @ 8,000 rpm","600 Nm @ 6,500 rpm","2.9 sec","> 325 km/h","7-Speed LDF Dual-Clutch","Dry Weight: 1,422 kg","lamborghini-huracan-evo-2019-green.png",4,"Green Edition"),
  makeLamborghiniPoster("lamborghini-aventador-lp-700-4-2011-orange","Aventador LP 700-4",2011,"6.5L Naturally Aspirated V12","700 hp @ 8,250 rpm","690 Nm @ 5,500 rpm","2.9 sec","> 350 km/h","7-Speed ISR Automated Manual","Dry Weight: 1,575 kg","lamborghini-aventador-lp-700-4-2011-orange.png",5,"Orange Edition"),
  makeLamborghiniPoster("lamborghini-huracan-lp-610-4-2014-green","Huracán LP 610-4",2014,"5.2L Naturally Aspirated V10","610 hp @ 8,250 rpm","560 Nm @ 6,500 rpm","3.2 sec","> 325 km/h","7-Speed LDF Dual-Clutch","Dry Weight: 1,422 kg","lamborghini-huracan-lp-610-4-2014-green.png",6,"Green Edition"),
  makeLamborghiniPoster("lamborghini-miura-p400-sv-1967-green","Miura P400 SV",1967,"3.9L Naturally Aspirated V12","385 hp @ 7,850 rpm","392 Nm @ 5,750 rpm","6.7 sec","> 290 km/h","5-Speed Manual","Dry Weight: 1,280 kg","lamborghini-miura-p400-sv-1967-green.png",7,"Green Classic Edition"),
  makeLamborghiniPoster("lamborghini-diablo-vt-1993-yellow","Diablo VT",1993,"5.7L Naturally Aspirated V12","492 hp @ 6,000 rpm","580 Nm @ 4,250 rpm","4.1 sec","> 325 km/h","5-Speed Manual","Dry Weight: 1,550 kg","lamborghini-diablo-vt-1993-yellow.png",8,"Yellow Edition"),
  makeLamborghiniPoster("lamborghini-murcielago-lp-670-4-sv-2010-black","Murciélago LP 670-4 SuperVeloce",2010,"6.5L Naturally Aspirated V12","661 hp @ 8,000 rpm","660 Nm @ 6,500 rpm","3.2 sec","> 342 km/h","6-Speed E-Gear","Dry Weight: 1,490 kg","lamborghini-murcielago-lp-670-4-sv-2010-black.png",9,"Black SuperVeloce Edition"),
  makeLamborghiniPoster("lamborghini-aventador-svj-2018-black","Aventador SVJ",2018,"6.5L Naturally Aspirated V12","770 hp @ 8,500 rpm","720 Nm @ 6,750 rpm","2.8 sec","> 350 km/h","7-Speed ISR","Dry Weight: 1,525 kg","lamborghini-aventador-svj-2018-black.png",10,"Black / Red Edition"),
  makeLamborghiniPoster("lamborghini-huracan-sto-2021-yellow","Huracán STO",2021,"5.2L Naturally Aspirated V10","640 hp @ 8,000 rpm","565 Nm @ 6,500 rpm","3.0 sec","> 310 km/h","7-Speed LDF","Dry Weight: 1,339 kg","lamborghini-huracan-sto-2021-yellow.png",11,"Yellow Track Edition"),
  makeLamborghiniPoster("lamborghini-revuelto-lp-980-4-2024-orange","Revuelto LP 980-4",2024,"6.5L Naturally Aspirated V12 + 3 Electric Motors","1,015 hp @ 9,250 rpm","725 Nm @ 6,750 rpm","2.5 sec","> 350 km/h","8-Speed DCT","Dry Weight: 1,772 kg","lamborghini-revuelto-lp-980-4-2024-orange.png",12,"Orange Hybrid Edition")
];
