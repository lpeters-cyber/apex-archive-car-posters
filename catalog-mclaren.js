const makeMcLarenPoster=(id,model,year,engine,power,torque,accel,topSpeed,transmission,weight,image,index,edition="")=>({
  id,
  brand:"McLaren",
  model,
  description:`A premium technical McLaren poster celebrating the ${year} ${model}, combining a dramatic studio portrait with blueprint views, performance specifications and model history.${edition?` This ${edition.toLowerCase()} finish gives it a distinct collector look.`:""}`,
  extras:[String(year),edition,engine,`Max Power: ${power}`,`Max Torque: ${torque}`,`0-100 km/h: ${accel}`,`Top Speed: ${topSpeed}`,transmission,weight,"McLaren Collection"].filter(Boolean),
  image:`assets/${image}`,
  created:Date.now()-125-index
});

window.mclarenCatalog=[
  makeMcLarenPoster("mclaren-750s-spider-2023-orange-a","750S Spider",2023,"4.0L Twin-Turbo V8","750 PS @ 7,500 rpm","800 Nm @ 5,500 rpm","2.8 sec","> 330 km/h","7-Speed SSG Dual Clutch","Dry Weight: 1,326 kg","mclaren-750s-spider-2023-orange-a.png",0,"Orange Spider Edition"),
  makeMcLarenPoster("mclaren-speedtail-2019-silver","Speedtail",2019,"4.0L Twin-Turbo V8 + Electric Motor","1,055 hp","1,150 Nm","2.5 sec","> 403 km/h","7-Speed Dual-Clutch Seamless Shift","Dry Weight: 1,430 kg","mclaren-speedtail-2019-silver.png",1,"Silver Edition"),
  makeMcLarenPoster("mclaren-750s-spider-2023-orange-b","750S Spider",2023,"4.0L Twin-Turbo V8","740 hp @ 7,500 rpm","800 Nm @ 5,500 rpm","2.8 sec","> 330 km/h","7-Speed Dual-Clutch Seamless Shift","Dry Weight: 1,389 kg","mclaren-750s-spider-2023-orange-b.png",2,"Open-Air Orange Edition"),
  makeMcLarenPoster("mclaren-w1-2024-silver-black","W1",2024,"4.0L Twin-Turbo V8 + Electric Motor","1,275 hp","1,340 Nm","2.7 sec","> 350 km/h","8-Speed Dual-Clutch Seamless Shift","Dry Weight: 1,399 kg","mclaren-w1-2024-silver-black.png",3,"Silver / Black Edition"),
  makeMcLarenPoster("mclaren-senna-2018-blue","Senna",2018,"4.0L Twin-Turbo V8","800 hp @ 7,250 rpm","800 Nm @ 5,500 rpm","2.8 sec","> 340 km/h","7-Speed Dual-Clutch Seamless Shift","Dry Weight: 1,198 kg","mclaren-senna-2018-blue.png",4,"Blue Edition"),
  makeMcLarenPoster("mclaren-p1-2013-yellow","P1",2013,"3.8L Twin-Turbo V8 + Electric Motor","903 hp @ 7,500 rpm","900 Nm","2.8 sec","> 350 km/h","7-Speed Dual-Clutch Seamless Shift","Dry Weight: 1,395 kg","mclaren-p1-2013-yellow.png",5,"Yellow Edition"),
  makeMcLarenPoster("mclaren-w1-2024-blue","W1",2024,"4.0L Twin-Turbo V8 + E-Motor","1,275 PS @ 9,200 rpm","1,340 Nm @ 4,400 rpm","2.7 sec","> 350 km/h","8-Speed DCT","Dry Weight: 1,399 kg","mclaren-w1-2024-blue.png",6,"Blue Edition"),
  makeMcLarenPoster("mclaren-765lt-2015-orange","765LT",2015,"4.0L Twin-Turbo V8","755 hp @ 7,500 rpm","800 Nm @ 5,500 rpm","2.8 sec","> 330 km/h","7-Speed Dual-Clutch Seamless Shift","Dry Weight: 1,229 kg","mclaren-765lt-2015-orange.png",7,"Longtail Orange Edition"),
  makeMcLarenPoster("mclaren-f1-1992-silver","F1",1992,"6.1L Naturally Aspirated V12","627 hp @ 7,400 rpm","651 Nm @ 5,600 rpm","3.2 sec","> 386 km/h","6-Speed Manual","Dry Weight: 1,140 kg","mclaren-f1-1992-silver.png",8,"Silver Legend Edition")
];
