// This file created by fravia+ in February 2008 
// for http://www.searchlores.org. Please don't steal

today = new Date()
month = today.getMonth() + 1
year = today.getFullYear()

selectedDate = new Date("01/01/1900")
selectedContent = ""

varLength = 365  //because of 29/Feb

var entryDate = new Array(varLength)
var entryContent = new Array(varLength)

entryDate[0] = "01/01/" + year
entryContent[0] = "Jour de l'an : &quot; <font color=blue>Au bonjour d'an bonne étrenne - Qui n'a pas compris comprenne"
entryDate[1] = "   01/02/" + year
entryContent[1] = "Saint Basile : &quot; <font color=blue>Qui en janvier garde un écu entier - Ne fera pas pitié"

entryDate[2] = "  01/03/" + year
entryContent[2] = "Sainte Geneviève : &quot; <font color=blue>De bonne vie bonne fin - De bonne terre bons pépins"

entryDate[3] = " 01/04/" + year
entryContent[3] = "Saint Odilon : &quot; <font color=blue>Gelées de Saint-Odilon - Prèsagent un hiver encore long"

entryDate[4] = " 01/05/" + year
entryContent[4] = "Saint Édouard : &quot; <font color=blue>Bois vin rouges aux Rois - Bon sang tout l'an tu auras"

entryDate[5] = " 01/06/" + year
entryContent[5] = "Saint Mélaine : &quot; <font color=blue>Pluie de Saint-Mélaine - Au paysan ne fait aucune peine"

entryDate[6] = " 01/07/" + year
entryContent[6] = "Saint Raymond : &quot; <font color=blue>Gelée de Saint-Raymond - Fait l'an encore plus long"

entryDate[7] = " 01/08/" + year
entryContent[7] = "Saint Lucien : &quot; <font color=blue>Les savants font les almanachs - Le Bon dieu fait le temps"

entryDate[8] = " 01/09/" + year
entryContent[8] = "Sainte Alix : &quot; <font color=blue>Ail qui a mince peau - Annonce hiver court et beau"

entryDate[9] = " 01/10/" + year
entryContent[9] = "Saint Guillaume : &quot; <font color=blue>Beau temps de Saint-Guillaume - Annonce plus de blé que de chaume"

entryDate[10] = " 01/11/" + year
entryContent[10] = "Saint Paulin : &quot; <font color=blue>A la terre trop de chaux apporteras - Seuls les vieillards enrichiras"

entryDate[11] = " 01/12/" + year
entryContent[11] = "Sainte Tatiana : &quot; <font color=blue>Noir terrain porte gain et bien - Blanches terres ne portent rien"

entryDate[12] = " 01/13/" + year
entryContent[12] = "Sainte Yvette : &quot; <font color=blue>Autant de bonnes journées en janvier - Autant de mauvaises en mai"

entryDate[13] = " 01/14/" + year
entryContent[13] = "Sainte Nina : &quot; <font color=blue>Janvier frileux - Rend février grésilleux"

entryDate[14] = " 01/15/" + year
entryContent[14] = "Saint Rémi : &quot; <font color=blue>Janvier pleurant - Rend tout l'an goutteux"

entryDate[15] = " 01/16/" + year
entryContent[15] = "Saint Marcel : &quot; <font color=blue>Pluie qui dure en janvier - Suffit pour toute l'année"

entryDate[16] = " 01/17/" + year
entryContent[16] = "Sainte Roseline : &quot; <font color=blue>Vigne close de murs - Donne deux fois plus de raisins mûrs"

entryDate[17] = " 01/18/" + year
entryContent[17] = "Sainte Prisca : &quot; <font color=blue>Les ans ont beaucoup plus vu - Que les livres en ont connu"

entryDate[18] = " 01/19/" + year
entryContent[18] = "Saint Marius : &quot; <font color=blue>Quand le froid à la Saint-Marius frappe - Sur les chemins la charrette dérape"

entryDate[19] = " 01/20/" + year
entryContent[19] = "Saint Sébastien : &quot; <font color=blue>Pluie de Saint-Sébastien - Apporte grain au moulin"

entryDate[20] = " 01/21/" + year
entryContent[20] = "Sainte Agnès : &quot; <font color=blue>Sainte-Agnès de froid chiche - Ne fait pas le paysan riche"

entryDate[21] = " 01/22/" + year
entryContent[21] = "Saint Vincent : &quot; <font color=blue>A la Saint-Vincent soleil grand comme un chapeau - De vin remplit le tonneau"

entryDate[22] = " 01/23/" + year
entryContent[22] = "Saint Barnard  : &quot; <font color=blue>Lendemain de Saint-Vincent ensoleillé - Rend le vigneron joyeux dans son cellier"

entryDate[23] = " 01/24/" + year
entryContent[23] = "Saint François : &quot; <font color=blue> Feu, fleurs, argent et bois - Sont bons en tous mois"

entryDate[24] = " 01/25/" + year
entryContent[24] = "Conversion de Saint Paul : &quot; <font color=blue>Si tout ce jour il pleut - Au vin vigneron dis adieu"

entryDate[25] = " 01/26/" + year
entryContent[25] = "Sainte Paule : &quot; <font color=blue>Le jour de la conversion passé - Les nez ne seront plus gelés"

entryDate[26] = " 01/27/" + year
entryContent[26] = "Sainte Angèle : &quot; <font color=blue>Bonne ou mauvaise herbe - Nous dit ce que la terre réserve"

entryDate[27] = " 01/28/" + year
entryContent[27] = "Saint Thomas d'Aquin : &quot; <font color=blue>Abbondance de poires - Hiver rigoreux à prevoir"

entryDate[28] = " 01/29/" + year
entryContent[28] = "Saint Gildas : &quot; <font color=blue>Saint Gildas annonce souvent - Ce que sera le printemps"

entryDate[29] = " 01/30/" + year
entryContent[29] = "Sainte Martine : &quot; <font color=blue>Prends garde à Sainte-Martine - Car ce jour souvent l'hiver se mutine"

entryDate[30] = " 01/31/" + year
entryContent[30] = "Sainte Marcelle : &quot; <font color=blue>Janvier trop laboureur - Est toujours un grand malheur"

entryDate[31] = " 02/01/" + year
entryContent[31] = "Sainte Ella : &quot; <font color=blue>Point de vin au cellier - Et fûts sur le fumier" 

entryDate[32] = " 02/02/" + year
entryContent[32] = "Chandeleur : &quot; <font color=blue>Chandeleur borgnette - Vendange est faite"

entryDate[33] = " 02/03/" + year
entryContent[33] = "Saint-Blaise : &quot; <font color=blue>S'il ne pleut ni ne neige à Saint-Blaise - En mars le froid en prendra à son aise"

entryDate[34] = " 02/04/" + year
entryContent[34] = "Sainte Véronique : &quot; <font color=blue>Temps du lendemain de Saint-Blaise serein - D'une année fertile c'est le présage certain"

entryDate[35] = " 02/05/" + year
entryContent[35] = "Sainte Agathe : &quot; <font color=blue>Qui à la Sainte-Agathe monte à la vigne pour travailler - Si la terre est gelée il pourra y déjeuner"

entryDate[36] = " 02/06/" + year
entryContent[36] = "Saint Gaston : &quot; <font color=blue>Neige au blé est bénéfice - Comme au vieillard sa pelisse"

entryDate[37] = " 02/07/" + year
entryContent[37] = "Sainte Eugénie : &quot; <font color=blue>La bourrache peut dire - je soigne le coeur, j'enfante la gaieté"

entryDate[38] = " 02/08/" + year
entryContent[38] = "Sainte Jacqueline : &quot; <font color=blue>Si toute l'année il y avait des cerises - Messieurs les médecins iraient en chemise"

entryDate[39] = " 02/09/" + year
entryContent[39] = "Sainte Apolline : &quot; <font color=blue>Sainte Apolline qui grogne et se renfrogne - Un mois ensoleillé l'après nous donne"

entryDate[40] = " 02/10/" + year
entryContent[40] = "Saint Arnaud : &quot; <font color=blue>A midi étoile ne luit - Ni chat-huant sort de son nid"

entryDate[41] = " 02/11/" + year
entryContent[41] = "Notre-Dame de Lourdes : &quot; <font color=blue>Au feu chat qui montre son cul - C'est mauvais temps revenu"

entryDate[42] = " 02/12/" + year
entryContent[42] = "Saint Félix : &quot; <font color=blue> Vigne taillée en février - De raisins remplira le panier"

entryDate[43] = " 02/13/" + year
entryContent[43] = "Sainte Béatrice : &quot; <font color=blue>A mi-février sors à moitié de ton bûcher - Mais garde encore ton lard tout entier"

entryDate[44] = " 02/14/" + year
entryContent[44] = "Saint Valentin : &quot; <font color=blue>Vigneron à la Saint-Valentin - Doit avoir serpette à la main"

entryDate[45] = " 02/15/" + year
entryContent[45] = "Saint Claude : &quot; <font color=blue>Bruine sur gelée - N'est pas de longue durée"

entryDate[46] = " 02/16/" + year
entryContent[46] = "Sainte Julienne : &quot; <font color=blue>Quand le vent du nord passe à la pluie - Le ciel pisse encore plus qu'une truie"

entryDate[47] = " 02/17/" + year
entryContent[47] = "Saint Alexis : &quot; <font color=blue>Février est un mois - Pour semer carottes et petit pois"

entryDate[48] = " 02/18/" + year
entryContent[48] = "Sainte Bernardette : &quot; <font color=blue>De Sainte-Bernartdette - La chandelle fait pousser la javelle"

entryDate[49] = " 02/19/" + year
entryContent[49] = "Saint Gabin : &quot; <font color=blue>Quand carnaval est sans lune - De cent brebis n'en reste qu'une"

entryDate[50] = " 02/20/" + year
entryContent[50] = "Sainte Aimée : &quot; <font color=blue>Abeilles qui bourdonnent en février - Tu peux encore compter sur bien des gelées"

entryDate[51] = " 02/21/" + year
entryContent[51] = "Saint Damien : &quot; <font color=blue>Si le mistral souffle en hiver - Sois au feu et bien couvert"

entryDate[52] = " 02/22/" + year
entryContent[52] = "Sainte Isabelle : &quot; <font color=blue>Neige de Sainte-Isabelle - Fait la fleur plus belle"

entryDate[53] = " 02/23/" + year
entryContent[53] = "Saint Lazare : &quot; <font color=blue>Souvent en février - Neige ne passe pas la nuit sur le fumier"

entryDate[54] = " 02/24/" + year
entryContent[54] = "Saint Mathias : &quot; <font color=blue>A la Saint-Mathias - La pie pour son nid cherche la place"

entryDate[55] = " 02/25/" + year
entryContent[55] = "Saint Roméo : &quot; <font color=blue>Aux mois qui sont ecrit en R - Eau faut metter dedans son verre"

entryDate[56] = " 02/26/" + year
entryContent[56] = "Saint Nestor : &quot; <font color=blue>Nouvelle lune au Mardi gras - Peu après le tonnerre tu entendras"

entryDate[57] = " 02/27/" + year
entryContent[57] = "Sainte Honorine : &quot; <font color=blue>Tonnerre en hiver - Marin ne suis pas fier"

entryDate[58] = " 02/28/" + year
entryContent[58] = "Saint Romain : &quot; <font color=blue>Ciel clair à la Saint-Romain - C'est beaicoup de biens et bon vin"

entryDate[59] = " 02/29/" + year
entryContent[59] = "Sainte Auguste : &quot; <font color=blue>L'eau gâte moult le vin - La charrette le chemin Et carême les humains"

entryDate[60] = " 03/01/" + year
entryContent[60] = "Saint Aubin : &quot; <font color=blue>A la Saint-Aubin c'est du vin - Quand le buisson goutte au matin"

entryDate[61] = " 03/02/" + year
entryContent[61] = "Saint Charles le bon : &quot; <font color=blue>En mars ta vign eliée et taillée - Et le sol travaillé"

entryDate[62] = " 03/03/" + year
entryContent[62] = "Saint Guénolé : &quot; <font color=blue>Pain et vin viennent de toutes parts - Quand en mars le tonnerre part"

entryDate[63] = " 03/04/" + year
entryContent[63] = "Saint Casimir : &quot; <font color=blue>Gelée hors saison - Gêne vignes et moissons"

entryDate[64] = " 03/05/" + year
entryContent[64] = "Saint Olive : &quot; <font color=blue>Pluie qui dure trop est engrais ... pour les balais"

entryDate[65] = " 03/06/" + year
entryContent[65] = "Sainte Colette : &quot; <font color=blue>Souvent, au hour de Sainte Colette - Commence à chanter l'alouetter"

entryDate[66] = " 03/07/" + year
entryContent[66] = "Sainte Félicité : &quot; <font color=blue>Lune barbouillée - Appelle vents et giboulées"

entryDate[67] = " 03/08/" + year
entryContent[67] = "Saint Jean de Dieu : &quot; <font color=blue>De la Saint-Jean à Saint Grégoire - Vent et giboulées font notre désespoir"

entryDate[68] = " 03/09/" + year
entryContent[68] = "Sainte Françoise : &quot; <font color=blue>Hôte, femme et pluie - Après trois jours ennuient"

entryDate[69] = " 03/10/" + year
entryContent[69] = "Saint Vivien : &quot; <font color=blue>Des fleurs qui s'ouvrent en mars - On n'a souvent que le regard"

entryDate[70] = " 03/11/" + year
entryContent[70] = "Sainte Rosine : &quot; <font color=blue>Mars dans l'eau - Moissoneur prépare ton fléau"

entryDate[71] = " 03/12/" + year
entryContent[71] = "Sainte Justine : &quot; <font color=blue>Si on savait ce que l'ail vaut - On en planterait des journaux"

entryDate[72] = " 03/13/" + year
entryContent[72] = "Saint Rodrigue : &quot; <font color=blue>Quand le soleil est embrumé le jeudi - La semaine ne passe pas sans pluie"

entryDate[73] = " 03/14/" + year
entryContent[73] = "Sainte Mathilde : &quot; <font color=blue>Qui le Vendredi saint sème la giroflée - Est sûr dans l'année de la voir doubler"

entryDate[74] = " 03/15/" + year
entryContent[74] = "Sainte Louise : &quot; <font color=blue>Arc-en-ciel du soir - Sois sûr de voir plevoir"

entryDate[75] = " 03/16/" + year
entryContent[75] = "Sainte Bénédicte : &quot; <font color=blue>Lune d'argent - Fait temps clément"

entryDate[76] = " 03/17/" + year
entryContent[76] = "Saint Patrice : &quot; <font color=blue>Qui sème quand la lune croît - Coupe et cueille quand elle décroît"

entryDate[77] = " 03/18/" + year
entryContent[77] = "Saint Cyrille : &quot; <font color=blue>Neige de mars - Au matin s'efface"

entryDate[78] = " 03/19/" + year
entryContent[78] = "Saint Joseph : &quot; <font color=blue>Quand l'arc-en-ciel paraît - C'est trois jours beaux et trois jours laids"

entryDate[79] = " 03/20/" + year
entryContent[79] = "Printemps : &quot; <font color=blue>Quand au printemps la lune est claire - Peu de noix espère"

entryDate[80] = " 03/21/" + year
entryContent[80] = "Sainte Clémence : &quot; <font color=blue>Pluie de mars, n'engraisse ni oie ni jars"

entryDate[81] = " 03/22/" + year
entryContent[81] = "Sainte Léa : &quot; <font color=blue>Quand au printemps il pleut de la merde - Bouvier met le trupeau à l'herbe"

entryDate[82] = " 03/23/" + year
entryContent[82] = "Saint Victorien : &quot; <font color=blue>Qui laboure en lune novelle - Aura récolte belle"

entryDate[83] = " 03/24/" + year
entryContent[83] = "Sainte Catherine de Suède : &quot; <font color=blue>Si les femmes savaient ce que le céleri fait aux hommes - Elles en sèmeraient de Paris jusqu'a Rome"

entryDate[84] = " 03/25/" + year
entryContent[84] = "Annonciation : &quot; <font color=blue>Avant fin mars pré et treille tu nettoieras - Ou la peau du dos tu laisseras"

entryDate[85] = " 03/26/" + year
entryContent[85] = "Sainte Larissa : &quot; <font color=blue>Mistral dure trois jours - Le jeudi et neuf jours il court"

entryDate[86] = " 03/27/" + year
entryContent[86] = "Prophet Ananias : &quot; <font color=blue>Hâle de mars, rosée de mai - Remplissent le grenier"

entryDate[87] = " 03/28/" + year
entryContent[87] = "Saint Gontran : &quot; <font color=blue>A la Saint-Gontran espoir - S'il fait beau, pain et vin se font voir"

entryDate[88] = " 03/29/" + year
entryContent[88] = "Abbé Eustace of Luxeuil : &quot; <font color=blue>Tôt ou tard à Pâques il faut - Que le merle montr ses merlots"

entryDate[89] = " 03/30/" + year
entryContent[89] = "Saint Amédée : &quot; <font color=blue>An qui produit trop de glands - Pour la sanré n'est pas bon an"

entryDate[90] = " 03/31/" + year
entryContent[90] = "Saint Benjamin : &quot; <font color=blue>Mars sec, avril mouillé, mai frisquet - Font que juin tienne ce qu'il promet"

entryDate[91] = " 04/01/" + year
entryContent[91] = "Saint Hugues : &quot; <font color=blue>Avril frais et rosineux - Fait toujours ans plantureaux"

entryDate[92] = " 04/02/" + year
entryContent[92] = "Sainte Sandrine : &quot; <font color=blue>Bourgeon d'avril: Remplit le baril - Bourgeon de mai: Remplit le cellier"

entryDate[93] = " 04/03/" + year
entryContent[93] = "Saint Richard : &quot; <font color=blue>Vent des rameaux et de carême prenant - De l'an reviendront le plus souvent"

entryDate[94] = " 04/04/" + year
entryContent[94] = "Saint Isidore : &quot; <font color=blue>Corneille qui vole haut - Apporte le chaud"

entryDate[95] = " 04/05/" + year
entryContent[95] = "Sainte Irène : &quot; <font color=blue>Au dimanche des Rameaux - Les grenouilles sont crapauds"

entryDate[96] = " 04/06/" + year
entryContent[96] = "Saint Marcellin : &quot; <font color=blue>Avril et mai de l'année - Font seuls la destinée"

entryDate[97] = " 04/07/" + year
entryContent[97] = "Saint Jean-Baptiste de la Salle : &quot; <font color=blue>Les astres peuvent l'homme incliner - Le sage les peut dominer "

entryDate[98] = " 04/08/" + year
entryContent[98] = "Sainte Julie : &quot; <font color=blue>Vent du nord aux rameaux - Tu peux rincer tes tonneaux"

entryDate[99] = " 04/09/" + year
entryContent[99] = "Saint Gautier : &quot; <font color=blue>Souvent en avril on voit courir - Les ânes gris jusqu'à Paris"

entryDate[100] = " 04/10/" + year
entryContent[100] = "Saint Fulbert : &quot; <font color=blue>Pour voir monter l'artichaut - Il faut pluie et temps chaud"

entryDate[101] = " 04/11/" + year
entryContent[101] = "Saint Stanislas : &quot; <font color=blue>Du dimanche matin la pluie - Toute la semaine nous ennuie"

entryDate[102] = " 04/12/" + year
entryContent[102] = "Saint Jules : &quot; <font color=blue>Fille, marée, lune ou bon vent - Font parfois prendre le devant"

entryDate[103] = " 04/13/" + year
entryContent[103] = "Sainte Ida : &quot; <font color=blue>En avril les nuées - En mai rosée"

entryDate[104] = " 04/14/" + year
entryContent[104] = "Saint Maxime : &quot; <font color=blue>Avoine pointant -  Lièvre gîtant"

entryDate[105] = " 04/15/" + year
entryContent[105] = "Saint Paterne : &quot; <font color=blue>Au cinq de la lune on verra - Quel temps tout le mois donnera"

entryDate[106] = " 04/16/" + year
entryContent[106] = "Saint Benoît-Joseph : &quot;<font color=blue>Tonnerre d'avril - Réjouit le laboreur, le vigneron et son baril"

entryDate[107] = " 04/17/" + year
entryContent[107] = "Saint Anicet : &quot;<font color=blue>Passereau qui pipe au matin - Met la pluie sur le chemin"

entryDate[108] = " 04/18/" + year
entryContent[108] = "Saint Parfait : &quot;<font color=blue>S'il y avait deux Pâques et deux vendanges - il n'y aurait plus ni famine ni pauvreté"

entryDate[109] = " 04/19/" + year
entryContent[109] = "Sainte Emma : &quot;<font color=blue>Lune qui se fait dans l'eau - Trois jours après apport le beau"

entryDate[110] = " 04/20/" + year
entryContent[110] = "Sainte Odette : &quot;<font color=blue>Avril vin de Dieu promet - Raisin de mai, vin de laquais"

entryDate[111] = " 04/21/" + year
entryContent[111] = "Saint Anselme : &quot;<font color=blue>Si avril voit feuilles au châtaigner - Tu peux préparer moukt paniers"

entryDate[112] = " 04/22/" + year
entryContent[112] = "Saint Alexandre : &quot;<font color=blue>S'il pleuvait en avril jusqu'au trente et un - Cela ne fera pas de mal au jardins"

entryDate[113] = " 04/23/" + year
entryContent[113] = "Saint Georges : &quot;<font color=blue>A la Saint-Georges autant de pluies tombant - Autant de foin dans le champ"

entryDate[114] = " 04/24/" + year
entryContent[114] = "Sainte Fidèle : &quot;<font color=blue>Entre Georges et Marquet - Souvent un jour d'hiver se met"

entryDate[115] = " 04/25/" + year
entryContent[115] = "Saint Marc : &quot;<font color=blue>A SAint-MArc trop d'eau - De pommes vides le tombereau"

entryDate[116] = " 04/26/" + year
entryContent[116] = "Bénite Aldobrandesca Maxime : &quot;<font color=blue>Feuilles qui de la pluie gardent les gouttes - Présagent nouvelle averse en route"

entryDate[117] = " 04/27/" + year
entryContent[117] = "Sainte Zina : &quot;<font color=blue>Quand les fèves sont fleuries - Les sots commencent leurs follies"

entryDate[118] = " 04/28/" + year
entryContent[118] = "Sainte Valérie : &quot;<font color=blue>Ne crois pas d'hiver la fin - TAnt que la lune d'avril soit à son plain"

entryDate[119] = " 04/29/" + year
entryContent[119] = "Sainte Catherine de Sienne : &quot;<font color=blue>Lorsqu'en avril le coucou n'est pas venu - C'est qu'il est mort ou perdu"

entryDate[120] = " 04/30/" + year
entryContent[120] = "Saint Robert : &quot;<font color=blue>Pluie de Saint-Robert - De bon vin remplit ton verre"

entryDate[121] = " 05/01/" + year
entryContent[121] = "Saint Joseph : &quot;<font color=blue>Avril fait la fleur - Mai en a l'honneur"

entryDate[122] = " 05/02/" + year
entryContent[122] = "Saint Boris : &quot;<font color=blue>Neige qui tombe en mai - Neige de coucou est appellée"

entryDate[123] = " 05/03/" + year
entryContent[123] = "Saint Paul et Saint Jacques : &quot;<font color=blue>Si tu veux vendre ton vin - De mai n'attends pas la fin"

entryDate[124] = " 05/04/" + year
entryContent[124] = "Saint Sylvain : &quot;<font color=blue>Par temps de pluie chasse l'agasse - Et par beau temps se cure les dents"

entryDate[125] = " 05/05/" + year
entryContent[125] = "Bénite Judith : &quot;<font color=blue>Le vin de mai - Piquette de chat"

entryDate[126] = " 05/06/" + year
entryContent[126] = "Sainte Prudence : &quot;<font color=blue>S'il vente à la Sainte-Prudence - Les moutons dansent"

entryDate[127] = " 05/07/" + year
entryContent[127] = "Sainte Denise : &quot;<font color=blue>A la Sainte-Denise - Finie la bise"

entryDate[128] = " 05/08/" + year
entryContent[128] = "Saint Désiré : &quot;<font color=blue>Lune du dimanche - A tout ruisseau il faut une planche"

entryDate[129] = " 05/09/" + year
entryContent[129] = "Saint Pâcome : &quot;<font color=blue>Paons qui vont criant - Sur l'aile apportent maivais temps"

entryDate[130] = " 05/10/" + year
entryContent[130] = "Sainte Solange : &quot;<font color=blue>En mai, crois-moi - Le vent ne court guère sur les toits"

entryDate[131] = " 05/11/" + year
entryContent[131] = "Bénite Francesca : &quot;<font color=blue>Temps du lendemain de Bénite-Francesca serein - D'une vie fertile c'est le présage certain"

entryDate[132] = " 05/12/" + year
entryContent[132] = "Saint Pancrace : &quot;<font color=blue>Les saints de glace, Servais, Pancrace et Mamert, - A eux trois apportent un petit hiver"

entryDate[133] = " 05/13/" + year
entryContent[133] = "Saint Servais : &quot;<font color=blue>Du mois de mai la chaleur - De tout l'an fait la chaleur"

entryDate[134] = " 05/14/" + year
entryContent[134] = "Saint Matthias : &quot;<font color=blue>Belles rogations - Font belle fauchaisons"

entryDate[135] = " 05/15/" + year
entryContent[135] = "Sainte Denise : &quot;<font color=blue>Rogations pluvieuses - Ne font pas l'année vineuse"

entryDate[136] = " 05/16/" + year
entryContent[136] = "Saint Honoré : &quot;<font color=blue>A la Saint-Honorée gelée - Coupe le vin de moitié"

entryDate[137] = " 05/17/" + year
entryContent[137] = "Saint Pascal : &quot;<font color=blue>Mai trop jardinier - Ne remplit pas le panier"

entryDate[138] = " 05/18/" + year
entryContent[138] = "Saint Eric : &quot;<font color=blue>Pour laPentecôte - On doit treiller la vigne côte à côte"

entryDate[139] = " 05/19/" + year
entryContent[139] = "Saint Yves : &quot;<font color=blue>Si commun peuple dit vrai - Les mauvais s'épousent en mai"

entryDate[140] = " 05/20/" + year
entryContent[140] = "Saint Bernardin : &quot;<font color=blue>Pluie à la Saint-Bernardin - Vigneron pleure ton vin"

entryDate[141] = " 05/21/" + year
entryContent[141] = "Saint Constantin : &quot;<font color=blue>Brouillards en mars, bientôt il pleut - Ou gêle en mai plus qu'on ne veut"

entryDate[142] = " 05/22/" + year
entryContent[142] = "Saint Emile : &quot;<font color=blue>Jamais Dieu ne fit si beau mariage - Que celui de la poire et du fromage"

entryDate[143] = " 05/23/" + year
entryContent[143] = "Saint Didier : &quot;<font color=blue>Qui sème ses haricots à la Saint-Didier - pour un en récoltera à poignées"

entryDate[144] = " 05/24/" + year
entryContent[144] = "Saint Donatien : &quot;<font color=blue>Quand le soleil se joint au vent - on voit en l'air pleuvoir souvent"

entryDate[145] = " 05/25/" + year
entryContent[145] = "Sainte Sophie : &quot;<font color=blue>Pluie et soleil réunis - Le berger de son chien s'enquérit"

entryDate[146] = " 05/26/" + year
entryContent[146] = "Saint Bérenger : &quot;<font color=blue>Taupes laboureuses - C'est journée pluvieuse"

entryDate[147] = " 05/27/" + year
entryContent[147] = "Saint Augustin : &quot;<font color=blue>Arbre trop souvent transplanté - Rarement met beaucoup de fruits dans le panier"

entryDate[148] = " 05/28/" + year
entryContent[148] = "Saint Germain : &quot;<font color=blue>Geai plume à plume s'épluchant - Présage de mauvais temps"

entryDate[149] = " 05/29/" + year
entryContent[149] = "Saint Aymar : &quot;<font color=blue>A la trinité pluie - Treize dimanche nous ennuie"

entryDate[150] = " 05/30/" + year
entryContent[150] = "Saint Ferdinand : &quot;<font color=blue>Mieux vaut beau temps - Que bon champ"

entryDate[151] = " 05/31/" + year
entryContent[151] = "Visitation : &quot;<font color=blue>Bien souvent la Bonne Dame de la Visitation - Jusqu'à la Saint Mésard garde son capuchon"

entryDate[152] = " 06/01/" + year
entryContent[152] = "Saint Justin : &quot;<font color=blue>Prepare autant de tonneaux - Qu'en juin tu auras de jours beaux"

entryDate[153] = " 06/02/" + year
entryContent[153] = "Sainte Blandine : &quot;<font color=blue>J'amais mois de juin ne va sans son grain"

entryDate[154] = " 06/03/" + year
entryContent[154] = "Saint Kevin : &quot;<font color=blue>Qui en juin se porte bien - Au temps chaud ne craindra rien"

entryDate[155] = " 06/04/" + year
entryContent[155] = "Sainte Clotilde : &quot;<font color=blue>Soleil de Sainte-Clotilde - Tout le mois fait le ciel limpide"

entryDate[156] = " 06/05/" + year
entryContent[156] = "Saint Igor : &quot;<font color=blue>Quand dans l'argile sable met - C'est comme s'il semait du fumier"

entryDate[157] = " 06/06/" + year
entryContent[157] = "Saint Norbert : &quot;<font color=blue>Les bains que prend Saint-Norbert  - Inondent toute la terre"

entryDate[158] = " 06/07/" + year
entryContent[158] = "Saint Gilbert : &quot;<font color=blue>Quand le chou passe la Saint-Gilbert - Du vigneron, vide sera le verre"

entryDate[159] = " 06/08/" + year
entryContent[159] = "Saint Médard : &quot;<font color=blue>Pluie de Saint-Médard - Tarit le vin et coupe le lard"

entryDate[160] = " 06/09/" + year
entryContent[160] = "Sainte Diane : &quot;<font color=blue>Ni grain au grenier - Ni vin au cellier"

entryDate[161] = " 06/10/" + year
entryContent[161] = "Saint Landry : &quot;<font color=blue>En juin beau soleil qui donne - N'a jamais ruiné personne"

entryDate[162] = " 06/11/" + year
entryContent[162] = "Saint Barnabé : &quot;<font color=blue>Qui veut bon navet - Le seème à la Saint-Barnabé"

entryDate[163] = " 06/12/" + year
entryContent[163] = "Saint Justin : &quot;<font color=blue>Pluie de Saint-Guy - Laisse le vigneron marri"

entryDate[164] = " 06/13/" + year
entryContent[164] = "Saint Antoine de Padoue : &quot;<font color=blue>Mai pluvieux, juin poussiéreux - Font d'août un laboureur orgueilleux"

entryDate[165] = " 06/14/" + year
entryContent[165] = "Saint Elisée : &quot;<font color=blue>En trop beau juin - Mauvaises herbes dans le foin"

entryDate[166] = " 06/15/" + year
entryContent[166] = "Bénite Germaine : &quot;<font color=blue>A mauvais laboureur - Les rats mangeront le meilleur"

entryDate[167] = " 06/16/" + year
entryContent[167] = "Saint Jean-François Régis : &quot;<font color=blue>Pommes, poires et noix - Toujours gastent la voix"

entryDate[168] = " 06/17/" + year
entryContent[168] = "Saint Hervé : &quot;<font color=blue>Abeille quittant la ruche tôt le matin - Annonce beau temps certain"

entryDate[169] = " 06/18/" + year
entryContent[169] = "Saint Léonce : &quot;<font color=blue>Qui sort du désert le premier arbre embrasse - Et ignore tous les autres"

entryDate[170] = " 06/19/" + year
entryContent[170] = "Saint Romuald : &quot;<font color=blue>Araignée tissant - Mauvais temps"

entryDate[171] = " 06/20/" + year
entryContent[171] = "Saint Sylvère : &quot;<font color=blue>Année de groseilles - Année de bouteilles"

entryDate[172] = " 06/21/" + year
entryContent[172] = "Eté : &quot;<font color=blue>Printemps sec, été pluvieux - Font automne gracieux"

entryDate[173] = " 06/22/" + year
entryContent[173] = "Saint Allan : &quot;<font color=blue>Qui maudit l'été - Renie Dieu et son père"

entryDate[174] = " 06/23/" + year
entryContent[174] = "Sainte Audrey : &quot;<font color=blue>Pluie avant Saint-Jean: fumure - Pluie passé Saint-Jean:pourriture"

entryDate[175] = " 06/24/" + year
entryContent[175] = "Saint Jean-Baptiste : &quot;<font color=blue>Quand le lis fleurit à la Saint-Jean - Trois mois après cueille le raisin pendant"

entryDate[176] = " 06/25/" + year
entryContent[176] = "Saint Prosper : &quot;<font color=blue>Pluie de Saint-Jean - Tue les taons"

entryDate[177] = " 06/26/" + year
entryContent[177] = "Saint Anthelme: &quot;<font color=blue>Ver de terre qui perce le chemin - Annonce pluie pour demain"

entryDate[178] = " 06/27/" + year
entryContent[178] = "Saint Ferdinand : &quot;<font color=blue>Couleuvre sur le chemin<br>Annonce orage au matin"

entryDate[179] = " 06/28/" + year
entryContent[179] = "Saint Irénée : &quot;<font color=blue>Quand en juin chante la faux<br>Pour le foin c'est temps beau"

entryDate[180] = " 06/29/" + year
entryContent[180] = "Saint Pierre et Saint Paul : &quot;<font color=blue>Quand Saint-Pierre ne lave pas le chemin<br>Saint-Martial le fera le lendemain"

entryDate[181] = " 06/30/" + year
entryContent[181] = "Saint Martial : &quot;<font color=blue>Entre juin et juillet<br>Le coucou devient émouchet"

entryDate[182] = " 07/01/" + year
entryContent[182] = "Saint Thierry : &quot;<font color=blue>On ne sait si julliet est bon - Qu'après avoir rentré la moisson"

entryDate[183] = " 07/02/" + year
entryContent[183] = "Saint Martinien : &quot;<font color=blue>Limaçons aventureaux - Annoncent temps pluvieux"

entryDate[184] = " 07/03/" + year
entryContent[184] = "Saint Thomas : &quot;<font color=blue>Qui veut bon navet - Le sème en juillet"

entryDate[185] = " 07/04/" + year
entryContent[185] = "Saint Florent : &quot;<font color=blue>Belles figues - Rendent le chátaignier prodigue"

entryDate[186] = " 07/05/" + year
entryContent[186] = "Saint Antoine : &quot;<font color=blue>Pluie de juillet - Eau en panier"

entryDate[187] = " 07/06/" + year
entryContent[187] = "Sainte Mariette : &quot;<font color=blue>En frais juillet mange tourte - Et mets peu de vin dans ta coupe"

entryDate[188] = " 07/07/" + year
entryContent[188] = "Saint Raoul : &quot;<font color=blue>Quand il pleut sur la moisson - Babil de moissonneur devient juron"

entryDate[189] = " 07/08/" + year
entryContent[189] = "Saint Thibaut : &quot;<font color=blue>A la Saint-Thibaut - Arrache les aulx"

entryDate[190] = " 07/09/" + year
entryContent[190] = "Sainte Armandine : &quot;<font color=blue>C'est en juillet qu'on entend - Du coucou le dernier chant"

entryDate[191] = " 07/10/" + year
entryContent[191] = "Saint Ulrich : &quot;<font color=blue>Pluie au 10 juillet au matin - Est bonne pour le vin"

entryDate[192] = " 07/11/" + year
entryContent[192] = "Saint Alvise et Saint Stefano : &quot;<font color=blue>Rosée du jour de Saints Alvise et Stefano - Est rosée de vin si tu m'en crois"

entryDate[193] = " 07/12/" + year
entryContent[193] = "Saint Olivier : &quot;<font color=blue>L'olivier dit: fume-moi en mars - A Noël d'huile tu auras plus que ta part"

entryDate[194] = " 07/13/" + year
entryContent[194] = "Saint Henri - Saint Joël : &quot;<font color=blue>Si le soleil de Saint-Henri pompe l'eau - C'est promesse de huit jours beaux"

entryDate[195] = " 07/14/" + year
entryContent[195] = "Saint Vincent de Soignies : &quot;<font color=blue>Si au sillon revient l'alouette - C'est que moisson est faite"

entryDate[196] = " 07/15/" + year
entryContent[196] = "Saint Donald : &quot;<font color=blue>En mi-juillet pluie et vent - Gastent le froment"

entryDate[197] = " 07/16/" + year
entryContent[197] = "Notre-Dame du mont Carmel : &quot;<font color=blue>En juillet et en août - Ni femmes ni choux"

entryDate[198] = " 07/17/" + year
entryContent[198] = "Sainte Charlotte : &quot;<font color=blue>Orages et soleil en juillet - Emplissent caves et greniers"

entryDate[199] = " 07/18/" + year
entryContent[199] = "Saint Frédéric : &quot;<font color=blue>Ciel de juillet rouge au matin - Est un pluvieux voisin"

entryDate[200] = " 07/19/" + year
entryContent[200] = "Saint Arsène : &quot;<font color=blue>Canard qui bat des ailes et plonge dans l'onde - Est signe de pluie à la ronde"

entryDate[201] = " 07/20/" + year
entryContent[201] = "Sainte Marina - Sainte Marguerite : &quot;<font color=blue>Du tonnerre de Sainte-Marguerite - Le fermier se console vite"

entryDate[202] = " 07/21/" + year
entryContent[202] = "Saint Victor : &quot;<font color=blue>A la pleine lune de juillet - En tous pays il faut moissonner"

entryDate[203] = " 07/22/" + year
entryContent[203] = "Sainte Marie-Madeleine : &quot;<font color=blue>Madeleine comme Sainte-Barbe - Du mauvais tonnerre nous garde"

entryDate[204] = " 07/23/" + year
entryContent[204] = "Sainte Brigitte : &quot;<font color=blue>De la madeleine à la mi-août - L'épi mûrit la nuit somme le jour"

entryDate[205] = " 07/24/" + year
entryContent[205] = "Sainte Christine : &quot;<font color=blue>Veille de Saint-Jacques soleil sur le mont - Annonce une bonne moisson"

entryDate[206] = " 07/25/" + year
entryContent[206] = "Saint Jacques : &quot;<font color=blue>Jour de Saint-Jacques serein - Présage hiver dur et chagrin"

entryDate[207] = " 07/26/" + year
entryContent[207] = "Sainte Anne et Sainte Joa : &quot;<font color=blue>Pluie de Sainte-Anne - Pour le paysan est manne"

entryDate[208] = " 07/27/" + year
entryContent[208] = "Sainte Nathalie : &quot;<font color=blue>Sainte-Nathalie en sa bonté souvent - De juillet redresse le temps"

entryDate[209] = " 07/28/" + year
entryContent[209] = "Saint Samson : &quot;<font color=blue>Si au jour de Saint-Samson - Le pinson boit au buisson - Pour le vigneron c'est vin bon"

entryDate[210] = " 07/29/" + year
entryContent[210] = "Sainte Marthe : &quot;<font color=blue>Mauvais temps de Sainte-Marthe - A peine arrivé il faut qu'il parte"

entryDate[211] = " 07/30/" + year
entryContent[211] = "Sainte Juliette : &quot;<font color=blue>Vent marin et pauvres gueux - Ont toujours leur pluie avec eux"

entryDate[212] = " 07/31/" + year
entryContent[212] = "Saint Ignace de Loyola : &quot;<font color=blue>Au jour de Saint-Ignace - Moissonez quelque temps qu'il fasse"

entryDate[213] = " 08/01/" + year
entryContent[213] = "Saint Alphonse : &quot;<font color=blue>En août quand le coucou perd son chant - C'est la caille qui le reprend"

entryDate[214] = " 08/02/" + year
entryContent[214] = "Saint Julien : &quot;<font color=blue>A la Saint-Julien pas de vent - C'est pour le vent excellent"

entryDate[215] = " 08/03/" + year
entryContent[215] = "Sainte Lydie : &quot;<font color=blue>J'ai vu une rose de Belgravia - Quand j'ai su son nom, je me retrouvais @ fravia"

entryDate[216] = " 08/04/" + year
entryContent[216] = "Saint Jean-Marie Vianney : &quot;<font color=blue>Au 4 août chaleur qui dure - Pressent un hiver bien dur"

entryDate[217] = " 08/05/" + year
entryContent[217] = "Saint Abel : &quot;<font color=blue>Abel qui boit sec - Annonce hiver froid et sec"

entryDate[218] = " 08/06/" + year
entryContent[218] = "Transfiguration : &quot;<font color=blue>Soit dans un prè soit au soleil - En août est nuisible le sommeil"

entryDate[219] = " 08/07/" + year
entryContent[219] = "Saint Gaétan : &quot;<font color=blue>Août n'est jamais passé - Sans que raisin noir soit mangé"

entryDate[220] = " 08/08/" + year
entryContent[220] = "Saint Dominique : &quot;<font color=blue>Par temps caniculaire - Laissez vos femmes, prenez vos verres"

entryDate[221] = " 08/09/" + year
entryContent[221] = "Saint Amour : &quot;<font color=blue>Pluie et tonnerre en août - C'est huile et vin partout"

entryDate[222] = " 08/10/" + year
entryContent[222] = "Saint Laurent : &quot;<font color=blue>Qui sème pour la Saint-Laurent - Y perd sa graine et son temps"

entryDate[223] = " 08/11/" + year
entryContent[223] = "Sainte Claire : &quot;<font color=blue>Belle Sainte-Claire, fruits à couteaux - A coup sûr seront beaux"

entryDate[224] = " 08/12/" + year
entryContent[224] = "Sainte Cyd Clarisse : &quot;<font color=blue>A Sainte-Clarisse porte tes oeufs - Si tu veux temps radieux"

entryDate[225] = " 08/13/" + year
entryContent[225] = "Saint Hippolyte : &quot;<font color=blue>Temps du 13 août souvent - Tout le mois conduit le temps"

entryDate[226] = " 08/14/" + year
entryContent[226] = "Saint Evrard - Saint Eusèbe : &quot;<font color=blue>Chaleurs en août - Donnent au vin son goût"

entryDate[227] = " 08/15/" + year
entryContent[227] = "Assomption : &quot;<font color=blue>DE l'Assomption la clarté - Fait du vin la qualité"

entryDate[228] = " 08/16/" + year
entryContent[228] = "Saint Armel : &quot;<font color=blue>Crains la pluie de la mi-août - Car tu perdras noisttes moult"

entryDate[229] = " 08/17/" + year
entryContent[229] = "Saint Hyacinthe : &quot;<font color=blue>Tonnerre en août - Grasses grappes et bon moût"

entryDate[230] = " 08/18/" + year
entryContent[230] = "Sainte Hélène : &quot;<font color=blue>Vigneron qui prie Sainte-Hélène - De bon vin ne sera pas en peine"

entryDate[231] = " 08/19/" + year
entryContent[231] = "Saint Jean Eudes : &quot;<font color=blue>A la mi-août, eau sous la pierre - Est déjà fraîcheur d'hiver"

entryDate[232] = " 08/20/" + year
entryContent[232] = "Saint Bernard : &quot;<font color=blue>Pluie de Saint-Bernard - Mûrit le raisin en retard"

entryDate[233] = " 08/21/" + year
entryContent[233] = "Saint Christophe : &quot;<font color=blue>Laitue ouverte - Est vite arrosée par l'averse"

entryDate[234] = " 08/22/" + year
entryContent[234] = "Saint Fabrice : &quot;<font color=blue>Valériane et pimprenelle - Sont bonnes pour les malades rebelles"

entryDate[235] = " 08/23/" + year
entryContent[235] = "Sainte Rose : &quot;<font color=blue>En août l'epine cache la rose - Mais en septembre elle est close "

entryDate[236] = " 08/24/" + year
entryContent[236] = "Saint Barthélemy : &quot;<font color=blue>A la Saint-Barthélemy pluie au matin - Tu peux compter sur du regain"

entryDate[237] = " 08/25/" + year
entryContent[237] = "Saint Louis : &quot;<font color=blue>Lune de Saint-Louis binetôt cornue - Laboreur tu prends ta charrue"

entryDate[238] = " 08/26/" + year
entryContent[238] = "Sainte Natacha : &quot;<font color=blue>Fin d'aoust - Noisettes rousses"

entryDate[239] = " 08/27/" + year
entryContent[239] = "Sainte Monique : &quot;<font color=blue>Qui fait trop bonne chère - Testament ne laisse guère"

entryDate[240] = " 08/28/" + year
entryContent[240] = "Saint Augustin : &quot;<font color=blue>Le laboreur ne se porte pas mal - Quand en août il conduit son cheval"

entryDate[241] = " 08/29/" + year
entryContent[241] = "Sainte Sabine : &quot;<font color=blue>Août mûrit, septembre vendange - En ces deux mois tout bien s'arrange"

entryDate[242] = " 08/30/" + year
entryContent[242] = "Saint Fravia : &quot;<font color=blue>Qui fait confiance à Microsoft - ne fait pas confiance à sa raison"

entryDate[243] = " 08/31/" + year
entryContent[243] = "Saint Aristide : &quot;<font color=blue>Le poing tue le hérisson - Mais la main n'ose pas"

entryDate[244] = " 09/01/" + year
entryContent[244] = "Saint Gilles : &quot;<font color=blue>En septembre si trois jours il tonne - C'est un noveau bail pour l'automne"

entryDate[245] = " 09/02/" + year
entryContent[245] = "Sainte Ingrid : &quot;<font color=blue>Pêcheurs à la ligne - Et chasseurs de chardonnerets - N'ont jamais achète - Ni champs ni vigne"

entryDate[246] = " 09/03/" + year
entryContent[246] = "Saint Grégorie : &quot;<font color=blue>En septembre du 1er au 8 - l'hirondelle fuit"

entryDate[247] = " 09/04/" + year
entryContent[247] = "Sainte Rosalie : &quot;<font color=blue>Au matin forte rosée - Tonnerre en fin de journée"

entryDate[248] = " 09/05/" + year
entryContent[248] = "Sainte Raïssa : &quot;<font color=blue>Bonne chátaigne qui en août a cuit - En septembre est dans le puits"

entryDate[249] = " 09/06/" + year
entryContent[249] = "Saint Bertrand : &quot;<font color=blue>Lune de septembre claire - En annonce sept autre prospères"

entryDate[250] = " 09/07/" + year
entryContent[250] = "Sainte Reine : &quot;<font color=blue>Qui entend les cigales en septembre - N'achète pas de blé pour le revendre"

entryDate[251] = " 09/08/" + year
entryContent[251] = "Nativité de Notre Dame : &quot;<font color=blue>A la Bonne Dame de septembre - Bonde ton vin et prends la lampe"

entryDate[252] = " 09/09/" + year
entryContent[252] = "Saint Alain : &quot;<font color=blue>Qui jardine à la saison - Cultive sa raison"

entryDate[253] = " 09/10/" + year
entryContent[253] = "Sainte Inès : &quot;<font color=blue>Le berger est bien plus souvent - Plus près des étoiles que le savant"

entryDate[254] = " 09/11/" + year
entryContent[254] = "Saint Adelphe : &quot;<font color=blue>Dans un sac ne range pas tes sous - Sans regarder s'il n'a pas un trou"

entryDate[255] = " 09/12/" + year
entryContent[255] = "Saint Apollinaire : &quot;<font color=blue>Pour la Saint-Apollinaire - Fils de la Vierge sont en l'air"

entryDate[256] = " 09/13/" + year
entryContent[256] = "Saint Aimé : &quot;<font color=blue>Le mûrier va au grand-père - Le châtainier au fils - Et la vigne pour toi"

entryDate[257] = " 09/14/" + year
entryContent[257] = "Sainte Croix : &quot;<font color=blue>C'est à la Sainte-Croix qu'on cueille les poires - Et qu'on gaule les noix"

entryDate[258] = " 09/15/" + year
entryContent[258] = "Saint Roland : &quot;<font color=blue>A la saint-Roland c'est du vin - A cueillir les fruits n'est pas loin"

entryDate[259] = " 09/16/" + year
entryContent[259] = "Sainte Édith : &quot;<font color=blue>Quand Sainte-Édith revient - A cueillir le sfruits n'est pas loin"

entryDate[260] = " 09/17/" + year
entryContent[260] = "Saint Renaud : &quot;<font color=blue>Au jour de Saint-Renaud - Pour que l'an soit beau - Du soleil il en faut"

entryDate[261] = " 09/18/" + year
entryContent[261] = "Sainte Nadège : &quot;<font color=blue>Pluie de ce jour - Ne rend pas meilleure la châtaigne"

entryDate[262] = " 09/19/" + year
entryContent[262] = "Saint Janvier : &quot;<font color=blue>Qui sème à la Saint-Janvier - De tout l'an récolte le premier"

entryDate[263] = " 09/20/" + year
entryContent[263] = "Saint Davy : &quot;<font color=blue>Première rosée d'automne - Fait sortir la châtaigne de sa bogue"

entryDate[264] = " 09/21/" + year
entryContent[264] = "Saint Matthieu : &quot;<font color=blue>Olivier qui a cent ans - Est encore un enfant"

entryDate[265] = " 09/22/" + year
entryContent[265] = "Saint Maurice : &quot;<font color=blue>De Saint-Maurice regarde le temps - il te dira celui de l'hiver venant"

entryDate[266] = " 09/23/" + year
entryContent[266] = "Automne : &quot;<font color=blue>Automne en fleurs - C'est hiver plein de riguers"

entryDate[267] = " 09/24/" + year
entryContent[267] = "Sainte Thècle : &quot;<font color=blue>Autant de printemps dérange le temps - Autant d'automne beau temps nous donne"

entryDate[268] = " 09/25/" + year
entryContent[268] = "Saint Hermann : &quot;<font color=blue>En automne sec est le grain - Feuilles rousses et étangs pleins"

entryDate[269] = " 09/26/" + year
entryContent[269] = "Saint Damien : &quot;<font color=blue>En automne pluies abondantes - Font les printemps sec"

entryDate[270] = " 09/27/" + year
entryContent[270] = "Saint Vincent (de Paul) : &quot;<font color=blue>Pluies à la Saint Vincent - S'arrêtent contre le vent"

entryDate[271] = " 09/28/" + year
entryContent[271] = "Saint Venceslas : &quot;<font color=blue>Il y a plus d'étoiles au ciel - Que sur la terre d'ânes cornus"

entryDate[272] = " 09/29/" + year
entryContent[272] = "Saint Michel : &quot;<font color=blue>Quand l'aronde voit Saint-Michel - L'hiver ne viendra qu'à Noël"

entryDate[273] = " 09/30/" + year
entryContent[273] = "Saint Jèrôme : &quot;<font color=blue>De la Saint-Michel à la Toussaint - Le laboureur va grand chemin"

entryDate[274] = " 10/01/" + year
entryContent[274] = "Sainte Thérèse de l'Enfant Jésus : &quot;<font color=blue>Octobre à moitié pluvieux - Rend le laboureur joyeux - Et le vendangeur soucieux - Met de côté son vin vieux"

entryDate[275] = " 10/02/" + year
entryContent[275] = "Saint Léger : &quot;<font color=blue>Grain semé ce jour - Trop léger est toujours"

entryDate[276] = " 10/03/" + year
entryContent[276] = "Saint Gérard : &quot;<font color=blue>Entre Saint-Michel et Saint-François - Prends la vendange telle qu'elle est- A la Saint-Denis prends-la si elle y est ancore"

entryDate[277] = " 10/04/" + year
entryContent[277] = "Saint François d'Assise : &quot;<font color=blue>Qui sème à la Saint-François - Aura récolte de bon poids"

entryDate[278] = " 10/05/" + year
entryContent[278] = "Sainte Fleur : &quot;<font color=blue>De Sainte-Fleur souvent la gelée - Est la première de l'année"

entryDate[279] = " 10/06/" + year
entryContent[279] = "Saint Bruno : &quot;<font color=blue>Même par temps de bise - Sème car bonne récolte nous est promise"

entryDate[280] = " 10/07/" + year
entryContent[280] = "Saint Serge : &quot;<font color=blue>Octobre glacé - Fait vermines trépasser"

entryDate[281] = " 10/08/" + year
entryContent[281] = "Sainte Pélagie : &quot;<font color=blue>Qui d'un an ne touche son jardin - Durant sept ans s'en plaint"

entryDate[282] = " 10/09/" + year
entryContent[282] = "Saint Denis : &quot;<font color=blue>A la Saint-Denis - Mauvais vent fait son nid"

entryDate[283] = " 10/10/" + year
entryContent[283] = "Saint Ghislain : &quot;<font color=blue>Trop de beu en septembre - En octobre amène la pluie"

entryDate[284] = " 10/11/" + year
entryContent[284] = "Saint Firmin : &quot;<font color=blue>A la Saint-Firmin - On attrape les mouches à la main"

entryDate[285] = " 10/12/" + year
entryContent[285] = "Saint Wilfried : &quot;<font color=blue>Octobre n'est bon - Que lorsqu'il est de saison"

entryDate[286] = " 10/13/" + year
entryContent[286] = "Saint Géraud : &quot;<font color=blue>Souvent à Saint-Géraud - Sont trois jours beaux"

entryDate[287] = " 10/14/" + year
entryContent[287] = "Saint Juste : &quot;<font color=blue>Temps qui se remet la nuit - Ne vaut pas trois poires cuites"

entryDate[288] = " 10/15/" + year
entryContent[288] = "Sainte Thérèse d'Avila : &quot;<font color=blue>Mets-toi à l'aise - Car c'est l'été de Sainte-Thérèse"

entryDate[289] = " 10/16/" + year
entryContent[289] = "Sainte Edwige & Saint Gall : &quot;<font color=blue>Jamais chou n'est meilleur - Que coupé à son heure"

entryDate[290] = " 10/17/" + year
entryContent[290] = "Saint Baudouin : &quot;<font color=blue>En octobre tonnerre - Fait la vendange prospère"

entryDate[291] = " 10/18/" + year
entryContent[291] = "Saint Luc : &quot;<font color=blue>Cueille le raisin à la Saint-Luc - et ton server suisse ne sera jamais caduc"

entryDate[292] = " 10/19/" + year
entryContent[292] = "Saint René : &quot;<font color=blue>Passé Saint-Luc - Marrons à la braise - Raves à la marmite seront cuits"

entryDate[293] = " 10/20/" + year
entryContent[293] = "Sainte Adeline : &quot;<font color=blue>En octobre qui fume bien - Sa terre donnera bien"

entryDate[294] = " 10/21/" + year
entryContent[294] = "Sainte Céline : &quot;<font color=blue>Oignons deviennent gros - S'il neige sur leur dos"

entryDate[295] = " 10/22/" + year
entryContent[295] = "Sainte Élodie : &quot;<font color=blue>Brouillards dans le vallon - Va-t-en à l'ombre - Sur le mont - Reste à la maison"

entryDate[296] = " 10/23/" + year
entryContent[296] = "Saint Jean de Capistran : &quot;<font color=blue>A la Saint-Jean - Verjus pendant, argent comptant"
entryDate[297] = " 10/24/" + year
entryContent[297] = "Saint Florentin : &quot;<font color=blue>S'il fait beau à la Saint-Florentin - D'une belle récolte sois certain"
entryDate[298] = " 10/25/" + year
entryContent[298] = "Saint Crépin : &quot;<font color=blue>Bien malin - Qui rentre son bois à la Saint-Crépin"
entryDate[299] = " 10/26/" + year
entryContent[299] = "Saint Dimitri : &quot;<font color=blue>Oies batailleuses - Présagent année venteuse"
entryDate[300] = " 10/27/" + year
entryContent[300] = "Sainte Émeline : &quot;<font color=blue>Gelées d'octobre - Rendent le vigneron sobre"
entryDate[301] = " 10/28/" + year
entryContent[301] = "Saint Simon & Sainte Jude : &quot;<font color=blue>Simon et Jude à eux deux - Font arriver hiver rigorureux"
entryDate[302] = " 10/29/" + year
entryContent[302] = "Saint Narcisse : &quot;<font color=blue>Quand octobre est à sa fin - Dans la cave est renré le raisin"
entryDate[303] = " 10/30/" + year
entryContent[303] = "Sainte Bienvenue : &quot;<font color=blue>Pigeons qui s'ébrouent - Annoncent pluie et temps doux"
entryDate[304] = " 10/31/" + year
entryContent[304] = "Saint Quentin : &quot;<font color=blue>A la Saint-Quentin - Ce qui est à la vigne est au vilain"

entryDate[305] = " 11/01/" + year
entryContent[305] = "Toussaint : &quot;<font color=blue>Grive qui chante et parait - Vendangeur tiens-toi prêt"
entryDate[306] = " 11/02/" + year
entryContent[306] = "Jours des morts : &quot;<font color=blue>Première neige aux défunts - Prédit doux printemps certain"
entryDate[307] = " 11/03/" + year
entryContent[307] = "Saint Hubert : &quot;<font color=blue>A la Saint-Hubert frais - Fait fuir les oies"
entryDate[308] = " 11/04/" + year
entryContent[308] = "Saint Charles : &quot;<font color=blue>Vign trop près dun grand chemin - A près d'elle mauvais voisin"
entryDate[309] = " 11/05/" + year
entryContent[309] = "Sainte Sylvie : &quot;<font color=blue>Vent et pluie à la Sainte-Sylvie - tout va de mal en pis - ... A moins que Saint-Martin ne sèche le chemin"
entryDate[310] = " 11/06/" + year
entryContent[310] = "Sainte Bertille : &quot;<font color=blue>A la Sainte-Bertille - Par grand froid la grive grappille"
entryDate[311] = " 11/07/" + year
entryContent[311] = "Sainte Carine : &quot;<font color=blue>VFigne gelée - Vigne vendangée"
entryDate[312] = " 11/08/" + year
entryContent[312] = "Saint Geoffroy : &quot;<font color=blue>A la Saint-Geoffroy - Tout oison est oie"
entryDate[313] = " 11/09/" + year
entryContent[313] = "Saint Théodore : &quot;<font color=blue>Dieu ne défend pont le vin - Sinon il aurait fait la vendange amère"
entryDate[314] = " 11/10/" + year
entryContent[314] = "Saint Léon : &quot;<font color=blue>A la Saint-Léon - Premère gelée de la saison"
entryDate[315] = " 11/11/" + year
entryContent[315] = "Saint Martin : &quot;<font color=blue>A la Saint-MArtin - Goûte le nouveau vin - Et laisse l'eau au moulin"
entryDate[316] = " 11/12/" + year
entryContent[316] = "Saint Christian : &quot;<font color=blue>Durant l'été de la Saint-Martin - Est sot qui ne boit du vin - Est âne deux fois - Qui trop en boit"
entryDate[317] = " 11/13/" + year
entryContent[317] = "Saint Brice : &quot;<font color=blue>De Saint-Brice le temps - Comande Noël et le jour de l'an"
entryDate[318] = " 11/14/" + year
entryContent[318] = "Saint Sidoine : &quot;<font color=blue>Qui vin ne boit après salade - Est en risque d'être malade"
entryDate[319] = " 11/15/" + year
entryContent[319] = "Saint Albert : &quot;<font color=blue>Quand en novembre il a tonné - Sois certain que l'hiver a avorté"
entryDate[320] = " 11/16/" + year
entryContent[320] = "Sainte Marguerite : &quot;<font color=blue>Brouillard de novembre - Fait l'hiver tendre"
entryDate[321] = " 11/17/" + year
entryContent[321] = "Sainte Èlisabeth : &quot;<font color=blue>Sainte-Èlisabeth  nous fait voir - Quel hiver on doit prévoir"
entryDate[322] = " 11/18/" + year
entryContent[322] = "Sainte Aude : &quot;<font color=blue>Novembre qui chante par-devant - Gèle par-derrière bien souvent"
entryDate[323] = " 11/19/" + year
entryContent[323] = "Saint Tanguy : &quot;<font color=blue>Qui ne nourrit pas le chat - Nourrit le rat"
entryDate[324] = " 11/20/" + year
entryContent[324] = "Béate Anne : &quot;<font color=blue>Les perles ne se dissolvent pas dans la boue"
entryDate[325] = " 11/21/" + year
entryContent[325] = "Présentation de Marie: &quot;<font color=blue>En novembre au 21 - D'un rude hiver sois certain"
entryDate[326] = " 11/22/" + year
entryContent[326] = "Sainte Cécile : &quot;<font color=blue>Semée pour Sainte Cécile - Chaque fève en fera mille"
entryDate[327] = " 11/23/" + year
entryContent[327] ="Saint Clément: &quot;<font color=blue>Hiver qui vient doucement - Est là pour Saint-Clément"
entryDate[328] = " 11/24/" + year
entryContent[328] = "Sainte Flora : &quot;<font color=blue>A la Sainte-Flora - Dernières fleurs tu verras"
entryDate[329] = " 11/25/" + year
entryContent[329] = "Sainte Catherine : &quot;<font color=blue>Bois planté à la Sainte-Catherine - N'est jamais sans racines"
entryDate[330] = " 11/26/" + year
entryContent[330] = "Sainte Delphine : &quot;<font color=blue>Entre Sainte-Catherine et la Nau - Jamais trop de vent et d'eau"
entryDate[331] = " 11/27/" + year
entryContent[331] = "Saint Séverin : &quot;<font color=blue>Olive de novembre - Tu peux la prendre"
entryDate[332] = " 11/28/" + year
entryContent[332] = "Saint Jacques de la Marche : &quot;<font color=blue>De bois remplis le bûcher - Si Saint-Jacques est ensoleillé"

entryDate[333] = " 11/29/" + year
entryContent[333] = "Saint Saturnin : &quot;<font color=blue>L'hiver au plus tard - Avant fin novembre se fera voir"

entryDate[334] = " 11/30/" + year
entryContent[334] = "Saint André : &quot;<font color=blue>Saint-André arrivé - Berger rentre ton troupelet"

entryDate[335] = " 12/01/" + year
entryContent[335] = "Saint Éloi : &quot;<font color=blue>Si Saint-Éloi a bien froid - Quatre mois tu brûleras ton bois"

entryDate[336] = " 12/02/" + year
entryContent[336] = "Sainte Viviane : &quot;<font color=bluePluie d'orages dans les avents - Empêche l'hiver de venir en son temps"

entryDate[337] = " 12/03/" + year
entryContent[337] = "Saint François-Xavier : &quot;<font color=blue>Qui plante sa vigne pendant l'avent - De vin en aura deux fois autant"

entryDate[338] = " 12/04/" + year
entryContent[338] = "Sainte Barbara : &quot;<font color=blue>Du tonnerre qui tombera - Sainte-Barbara te gardera"

entryDate[339] = " 12/05/" + year
entryContent[339] = "Saint Gérald : &quot;<font color=blue>Préservez-nous des avents doux - Pour tout l'an c'est malheur"

entryDate[340] = " 12/06/" + year
entryContent[340] = "Saint Nicolas : &quot;<font color=blue>S'il neige ce jour-la - C'est Nicolas qui plume ses oies"

entryDate[341] = " 12/07/" + year
entryContent[341] = "Saint Ambroise : &quot;<font color=blue>Neige de Saint-Ambroise - De trois jours ne décroit"

entryDate[342] = " 12/08/" + year
entryContent[342] = "Immaculée Conception: &quot;<font color=blue>A Notre-Dame de l'Avent - Tire ton bonnet jusqu'aux dents"

entryDate[343] = " 12/09/" + year
entryContent[343] = "Saint Pierre : &quot;<font color=blue>Décembre trop beau - Met l'été dans l'eau"

entryDate[344] = " 12/10/" + year
entryContent[344] = "Saint Romaric : &quot;<font color=blue>En décembnre verdure - A pâques froidure"

entryDate[345] = " 12/11/" + year
entryContent[345] = "Saint Daniel : &quot;<font color=blue>En décembre Saint-Daniel - Aux abeilles laisse le miel"

entryDate[346] = " 12/12/" + year
entryContent[346] = "Sainte Jeanne-Françoise : &quot;<font color=blue>Décembre neigeux - Ni violon ni laboureux"

entryDate[347] = " 12/13/" + year
entryContent[347] = "Sainte Lucie : &quot;<font color=blue>Pour Sainte-Lucie la bienheureuse - Les jours s'accroissent des pas d'une poule couveuse"

entryDate[348] = " 12/14/" + year
entryContent[348] = "Sainte Odile : &quot;<font color=blue>Sainte-Odile sous la neige - A le gel pour cortège"

entryDate[349] = " 12/15/" + year
entryContent[349] = "Sainte Ninon : &quot;<font color=blue>Pour tailler le maître tu appelleras - Pour labourer qui tu voudras"

entryDate[350] = " 12/16/" + year
entryContent[350] = "Sainte Alice : &quot;<font color=blue>Le svieux plantent les souches - Et le jeunes ont vin à la bouche"

entryDate[351] = " 12/17/" + year
entryContent[351] = "Saint Gaël : &quot;<font color=blue>Qui pioche avant le bourgeon - Et bine avant la fleur - Connaît bien son bonheur"

entryDate[352] = " 12/18/" + year
entryContent[352] = "Saint Gatien : &quot;<font color=blue>Qui taille long - Un an boira - Qui taille court - Boira toujours"

entryDate[353] = " 12/19/" + year
entryContent[353] = "Saint Urbain : &quot;<font color=blue>Qui laboure mal - Moissonnera mal"

entryDate[354] = " 12/20/" + year
entryContent[354] = "Saint Théophile : &quot;<font color=blue>A vouloir être trop lunier - On ne remplit pas le panier"

entryDate[355] = " 12/21/" + year
entryContent[355] = "Hiver! : &quot;<font color=blue>Autant de jours d'hiver passés - Autant d'ennemis renversés"

entryDate[356] = " 12/22/" + year
entryContent[356] = "Sainte Françoise-Xavière : &quot;<font color=blue>Claire nuit en hiver - Annonce jour couvert"

entryDate[357] = " 12/23/" + year
entryContent[357] = "Saint Armand : &quot;<font color=blue>Ail mince de peau - C'est hiver court et beau"

entryDate[358] = " 12/24/" + year
entryContent[358] = "Sainte Adèle : &quot;<font color=blue>Nuit de Noël sans lune - Présage panier plein de prunes"

entryDate[359] = " 12/25/" + year
entryContent[359] = "Noël! : &quot;<font color=blue>A Noël grand vent - Aux arbres fruits abondants"

entryDate[360] = " 12/26/" + year
entryContent[360] = "Saint Ètienne : &quot;<font color=blue>Larmes de Saint-Ètienne - Ne font pas cerises pleines"

entryDate[361] = " 12/27/" + year
entryContent[361] = "Saint Jean : &quot;<font color=blue>Le rossignol prend son chant - Quand arrive la Saint-Jean "

entryDate[362] = " 12/28/" + year
entryContent[362] = "Saints Innocents : &quot;<font color=blue>Coupe le bois d'épines - En lune jeune - Le bois de feuilles - En lune vieille "

entryDate[363] = " 12/29/" + year
entryContent[363] = "Saint David : &quot;<font color=blueQui plante et ne fume - N'aura que l'écume"

entryDate[364] = " 12/30/" + year
entryContent[364] = "Saint Roger : &quot;<font color=blue>Qui plante un figuier - De sa vie ne mangera toutes les figues"

entryDate[365] = " 12/31/" + year
entryContent[365] = "Saint Sylvestre : &quot;<font color=blue>Parle bien qui peut - Fait le bien qui veut"

if (typeof display == "undefined") { var display = "date" }

if (display == "random")
{
  var randomNumber = Math.random()
  randomNumber *= varLength
  randomNumber = parseInt(randomNumber)
  if(isNaN(randomNumber)) randomNumber = 0
  else randomNumber %= varLength
  selectedContent = entryContent[randomNumber]
}
else
{
  for (x=0; x<(entryContent.length); x++)
  {
    tempDate = new Date(entryDate[x])
    tempContent = entryContent[x]
    if ((tempDate <= today) && (tempDate > selectedDate))
    {
      selectedContent = tempContent
      selectDate = tempDate
    }
  }
}

document.write (selectedContent)