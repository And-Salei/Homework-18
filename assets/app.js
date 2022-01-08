let A = +prompt ('Enter a (cm)');
let Perimetr_kvadrata = 4 * A;
alert(`Perimetr_kvadrata ${Perimetr_kvadrata}`);


let B = +prompt ('Enter b (cm)');
let Ploshad_Pov_Kuba = (B ** 2) *4;
alert(`Ploshad_Pov_Kuba ${Ploshad_Pov_Kuba}`);
let Objem_Kuba = (B ** 3);
alert(`Objem_Kuba ${Objem_Kuba}`);


let Pi = 3.14
let R = +prompt ('Enter R (cm)');
let Dlina_okrushnosti = 2 * R * Pi;
alert(`Dlina_okrushnosti ${Dlina_okrushnosti}`);
let Ploshad_kruga = Pi * R ** 2;
alert(`Ploshad_kruga ${Ploshad_kruga}`);


let m = +prompt ('Enter m (g)');
let V = +prompt ('Enter V (cm3)');
let Plotnost = m / V;
alert(`Plotnost ${Plotnost}`);


let Kol_zhiteley = +prompt ('Enter Kol_zhiteley (kol)');
let Ploshad_gosudarstva = +prompt ('Enter Ploshad_gosudarstva (km2)');
let Plotnost_naselenija = Kol_zhiteley / Ploshad_gosudarstva;
alert(`Plotnost_naselenija ${Plotnost_naselenija}`);


let Katet1 = +prompt ('Enter Katet1 (cm)');
let Katet2 = +prompt ('Enter katet2 (cm)');
let Gipotenuza = ((Katet1 ** 2) + (Katet2 ** 2)) ** 0.5;
alert(`Gipotenuza ${Gipotenuza}`);


let C = +prompt ('Enter C');
let Y = ((C ** 2) + 10) / ((C ** 2) + 1) ** 0.5;
alert(`Y ${Y}`);
