const makeBikePoster=(id,brand,model,engine,power,torque,weight,topSpeed,transmission,fuel,image,index,edition="")=>({
  id,
  brand,
  model,
  description:`A premium technical motorcycle poster celebrating the 2024 ${brand} ${model}, combining a dramatic studio portrait with blueprint views, engineering specifications and model history.${edition?` This ${edition.toLowerCase()} gives the design its own distinctive finish.`:""}`,
  extras:["2024",edition,engine,`Max Power: ${power}`,`Max Torque: ${torque}`,weight,`Top Speed: ${topSpeed}`,transmission,`Fuel Capacity: ${fuel}`,"Motorcycle Technical Poster"].filter(Boolean),
  image:`assets/${image}`,
  created:Date.now()-90-index
});

window.bikeCatalog=[
  makeBikePoster("bike-suzuki-hayabusa-2024","Suzuki","Hayabusa","1340cc Inline 4-Cylinder DOHC","190 hp @ 9,700 rpm","150 Nm @ 7,000 rpm","Wet Weight: 264 kg","> 305 km/h","6-Speed Constant Mesh","20.0 L","bike-suzuki-hayabusa-2024.png",0),
  makeBikePoster("bike-kawasaki-ninja-h2r-2024","Kawasaki","Ninja H2R","998cc Supercharged Inline 4","321 hp @ 14,000 rpm","165 Nm @ 12,500 rpm","Dry Weight: 216 kg","> 400 km/h","6-Speed Dog-Ring","17.0 L","bike-kawasaki-ninja-h2r-2024.png",1),
  makeBikePoster("bike-triumph-speed-triple-1200-rs-2024","Triumph","Speed Triple 1200 RS","1160cc Inline 3-Cylinder DOHC","180 hp @ 10,750 rpm","125 Nm @ 9,000 rpm","Wet Weight: 198 kg","> 250 km/h","6-Speed Quickshifter","15.5 L","bike-triumph-speed-triple-1200-rs-2024.png",2),
  makeBikePoster("bike-ducati-panigale-v4-r-black-2024","Ducati","Panigale V4 R","998cc Desmosedici Stradale V4","221 hp @ 15,250 rpm","112 Nm @ 11,500 rpm","Dry Weight: 172 kg","> 310 km/h","6-Speed Racing Gearbox","16.0 L","bike-ducati-panigale-v4-r-black-2024.png",3,"Black Edition"),
  makeBikePoster("bike-honda-fireblade-sp-2024","Honda","CBR1000RR-R Fireblade SP","999cc Inline 4-Cylinder 16-Valve","217.5 hp @ 14,500 rpm","113 Nm @ 12,500 rpm","Dry Weight: 201 kg","> 300 km/h","6-Speed Quick Shifter","16.2 L","bike-honda-fireblade-sp-2024.png",4),
  makeBikePoster("bike-yamaha-yzf-r1m-2024","Yamaha","YZF-R1M","998cc Crossplane Inline 4","200 hp @ 13,500 rpm","113.3 Nm @ 11,500 rpm","Dry Weight: 202 kg","> 299 km/h","6-Speed Constant Mesh","17.0 L","bike-yamaha-yzf-r1m-2024.png",5),
  makeBikePoster("bike-bmw-m-1000-rr-2024","BMW Motorrad","M 1000 RR","999cc Inline 4-Cylinder","212 hp @ 14,500 rpm","113 Nm @ 11,000 rpm","Dry Weight: 192 kg","> 306 km/h","6-Speed M Quick Shift","16.5 L","bike-bmw-m-1000-rr-2024.png",6),
  makeBikePoster("bike-bmw-r-1300-gs-adventure-2024","BMW Motorrad","R 1300 GS Adventure","1300cc Air/Liquid-Cooled Boxer Twin","145 hp @ 7,750 rpm","149 Nm @ 6,500 rpm","Wet Weight: 269 kg","> 200 km/h","6-Speed","30.0 L","bike-bmw-r-1300-gs-adventure-2024.png",7),
  makeBikePoster("bike-yamaha-yzf-r1-2024","Yamaha","YZF-R1","998cc Inline 4-Cylinder DOHC","200 hp @ 13,500 rpm","113.3 Nm @ 11,500 rpm","Wet Weight: 201 kg","> 300 km/h","6-Speed Constant Mesh","17.0 L","bike-yamaha-yzf-r1-2024.png",8),
  makeBikePoster("bike-kawasaki-ninja-zx-10r-2024","Kawasaki","Ninja ZX-10R","998cc Inline 4-Cylinder 16-Valve","203 hp @ 13,200 rpm","114.9 Nm @ 11,400 rpm","Wet Weight: 206 kg","> 299 km/h","6-Speed Return Shift","17.0 L","bike-kawasaki-ninja-zx-10r-2024.png",9),
  makeBikePoster("bike-ducati-streetfighter-v4-sp2-2024","Ducati","Streetfighter V4 SP2","1103cc Desmosedici Stradale V4","208 hp @ 12,750 rpm","123 Nm @ 11,500 rpm","Dry Weight: 178 kg","> 310 km/h","6-Speed Quick Shift Up/Down","16.0 L","bike-ducati-streetfighter-v4-sp2-2024.png",10),
  makeBikePoster("bike-ducati-panigale-v4-r-red-2024","Ducati","Panigale V4 R","998cc Desmosedici Stradale V4","221 hp @ 15,250 rpm","112 Nm @ 11,500 rpm","Dry Weight: 172 kg","> 310 km/h","6-Speed Racing Gearbox","16.0 L","bike-ducati-panigale-v4-r-red-2024.png",11,"Red Edition")
];
