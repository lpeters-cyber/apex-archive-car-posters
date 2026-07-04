const makePaganiPoster=(id,model,year,engine,power,torque,accel,topSpeed,transmission,weight,image,index,edition="")=>({
  id,
  brand:"Pagani",
  model,
  description:`A premium technical Pagani poster celebrating the ${year} ${model}, blending dramatic hypercar photography with blueprint views, performance specifications and model history.${edition?` This ${edition.toLowerCase()} version gives the artwork its own collector finish.`:""}`,
  extras:[String(year),edition,engine,`Max Power: ${power}`,`Max Torque: ${torque}`,`0-100 km/h: ${accel}`,`Top Speed: ${topSpeed}`,transmission,weight,"Pagani Collection"].filter(Boolean),
  image:`assets/${image}`,
  created:Date.now()-110-index
});

window.paganiCatalog=[
  makePaganiPoster("pagani-zonda-f-2005-blue","Zonda F",2005,"7.3L V12 AMG","602 hp @ 7,600 rpm","760 Nm @ 5,900 rpm","3.6 sec","> 345 km/h","6-Speed Manual","Dry Weight: 1,230 kg","pagani-zonda-f-2005-blue.png",0,"Blue Edition"),
  makePaganiPoster("pagani-zonda-r-2010-blue","Zonda R",2010,"6.0L V12","750 hp @ 8,200 rpm","710 Nm @ 6,000 rpm","2.7 sec","> 380 km/h","6-Speed Sequential","Dry Weight: 1,070 kg","pagani-zonda-r-2010-blue.png",1,"Blue Edition"),
  makePaganiPoster("pagani-zonda-cinque-2009-white-blue","Zonda Cinque",2009,"7.3L V12 AMG","678 hp @ 7,800 rpm","780 Nm @ 5,900 rpm","3.4 sec","> 350 km/h","6-Speed Manual","Dry Weight: 1,210 kg","pagani-zonda-cinque-2009-white-blue.png",2,"White / Blue Edition"),
  makePaganiPoster("pagani-zonda-r-2010-black-gold","Zonda R",2010,"6.0L V12","750 hp @ 8,200 rpm","710 Nm @ 6,000 rpm","2.7 sec","> 380 km/h","6-Speed Sequential","Dry Weight: 1,070 kg","pagani-zonda-r-2010-black-gold.png",3,"Black / Gold Edition"),
  makePaganiPoster("pagani-huayra-bc-roadster-2017-black-gold","Huayra BC Roadster",2017,"6.0L V12 Twin-Turbo AMG","791 hp @ 6,000 rpm","1,050 Nm @ 2,000 rpm","2.8 sec","> 370 km/h","7-Speed Xtrac AMT","Dry Weight: 1,250 kg","pagani-huayra-bc-roadster-2017-black-gold.png",4,"Black / Gold Edition"),
  makePaganiPoster("pagani-zonda-tricolore-2011-black-gold","Zonda Tricolore",2011,"7.3L V12 AMG","678 hp @ 7,800 rpm","780 Nm @ 5,900 rpm","3.4 sec","> 350 km/h","6-Speed Manual","Dry Weight: 1,210 kg","pagani-zonda-tricolore-2011-black-gold.png",5,"Tricolore Edition"),
  makePaganiPoster("pagani-huayra-2012-black-gold","Huayra",2012,"6.0L V12 Twin-Turbo AMG","720 hp @ 5,600 rpm","1,000 Nm @ 2,300 rpm","3.3 sec","> 370 km/h","7-Speed Xtrac AMT","Dry Weight: 1,350 kg","pagani-huayra-2012-black-gold.png",6,"Black / Gold Edition"),
  makePaganiPoster("pagani-zonda-cinque-2013-black-red","Zonda Cinque",2013,"7.3L V12 AMG","678 hp @ 7,800 rpm","780 Nm @ 5,900 rpm","3.4 sec","> 350 km/h","6-Speed Manual","Dry Weight: 1,210 kg","pagani-zonda-cinque-2013-black-red.png",7,"Black / Red Edition"),
  makePaganiPoster("pagani-huayra-bc-2016-black-red","Huayra BC",2016,"6.0L V12 Twin-Turbo AMG","789 hp @ 5,800 rpm","1,100 Nm @ 2,000 rpm","2.8 sec","> 370 km/h","7-Speed Xtrac","Dry Weight: 1,218 kg","pagani-huayra-bc-2016-black-red.png",8,"Black / Red Edition"),
  makePaganiPoster("pagani-huayra-bc-2012-white-blue","Huayra BC",2012,"6.0L V12 Twin-Turbo AMG","789 hp @ 6,000 rpm","1,100 Nm @ 2,000-5,600 rpm","2.8 sec","> 380 km/h","7-Speed Xtrac Sequential","Dry Weight: 1,218 kg","pagani-huayra-bc-2012-white-blue.png",9,"White / Blue Edition"),
  makePaganiPoster("pagani-utopia-2022-black-gold","Utopia",2022,"6.0L V12 Naturally Aspirated","864 hp @ 6,000 rpm","1,100 Nm @ 4,400 rpm","3.0 sec","> 350 km/h","7-Speed Manual","Dry Weight: 1,280 kg","pagani-utopia-2022-black-gold.png",10,"Black / Gold Edition"),
  makePaganiPoster("pagani-huayra-2011-blue-gold","Huayra",2011,"6.0L V12 Twin-Turbo AMG","720 hp @ 6,000 rpm","1,000 Nm @ 2,300-5,500 rpm","3.3 sec","> 370 km/h","7-Speed Xtrac Sequential","Dry Weight: 1,350 kg","pagani-huayra-2011-blue-gold.png",11,"Blue / Gold Edition")
];
