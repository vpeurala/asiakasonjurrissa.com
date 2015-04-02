var ajankohtaista = {};

ajankohtaista.view = function () {
	return [m(".container[id='page']", [
		m("h1", "Asiakas on jurrissa"),
		m("p", "Web-sovelluksesi tulisi olla niin helppokäyttöinen, että\n      sitä pystyy käyttämään kännissäkin. Et pysty itse testaamaan,\n      onko se. Minä teen sen sinun puolestasi."),
		m("h3", "Palvelu"),
		m("p", "Vedän hirveät pleksit ja sen jälkeen yritän käyttää\n      web-sovellustasi. Kerron myöhemmin, onnistuiko vai ei, ja\n      missä olisi parantamisen varaa."),
		m("h3", "Mitä se maksaa?"),
		m("p", "50 euroa plus juomat per sovellus. Tämä erikoishinta on\n      voimassa vain rajoitetun ajan. Mikäli palvelulle tulee paljon\n      kysyntää, kuten otaksun, joudun pian korottamaan hintoja."),
		m("h3", "Mistä keksin tämän palvelun?"),
		m("p", ["Sain idean täältä: ",m("a[href='http://theuserisdrunk.com/']", "http://theuserisdrunk.com/"),".\n      Koska idean alkuperäinen keksijä Richard ei pysty testaamaan\n      suomenkielisiä web-sovelluksia, haistoin tässä\n      markkinaraon."]),
		m("p", [m("a.btn.btn-primary.btn-lg[href='mailto:asiakasonjurrissa@wunderdog.fi'][role='button']", "Tilaa\n      jo tänään »")]),
		m("a.wd-logo[href='http://wunderdog.fi']", [m("img[alt='Wunderdog'][src='img/wunderdog.png']")]),
		m("h3", "Työnäyte"),
		m("iframe[allowfullscreen=''][frameborder='0'][height='315'][src='https://www.youtube.com/embed/r9iJBH_V0cM'][width='560']"),
		m("p", "PS: Jag talar också svenska och engelska."),
		m("p", "PPS: Pienestä lisähinnasta voin testata sovellustasi myös\n      erilaisten huumausaineiden, liuottimien yms. vaikutuksen\n      alaisena. Ota rohkeasti yhteyttä niin sovitaan tarkemmin!"),
		m("p", "Disclaimer: Käytän alkoholia vastuullisesti ja ainoastaan\n      sen verran kuin työtehtäväni vaativat. En kannusta ketään\n      tolkuttomaan ryyppäämiseen tai muuhun asiattomaan toimintaan.\n      Liiketoimintani on eettisesti kestävää ja sisäministeriön\n      hyväksymää."),
		m("p", [m("small", [m("em", "Kuvan henkilö ei tiettävästi sylje kuppiin,\n      mutta ei missään tapauksessa tieten tahtoen haistele\n      liuottimia.")])])
	])]
}

var palvelukuvaus = {};

palvelukuvaus.view = function () {
	return m("h1", "Paskansyönti parantaa kaikki vaivat")
};

var referenssit = {};

referenssit.view = function () {
	return m("h2", "Kuse Jukka housuun")
}

m.route.mode = "hash";

var routes = [
  { url: "/", title: "Ajankohtaista", module: ajankohtaista },
  { url: "/palvelukuvaus", title: "Palvelukuvaus", module: palvelukuvaus },
  { url: "/referenssit", title: "Referenssit", module: referenssit }
]

m.route(document.getElementById("page"), "/", {
	"/": ajankohtaista,
	"/palvelukuvaus": palvelukuvaus,
	"/referenssit": referenssit
});

var navigation = {};

navigation.vm = {
	init: function() {}
};

navigation.controller = function () {
	navigation.vm.init();
};

navigation.view = function () {
	return routes.map(function (route) {
		return m("li", [
			m("a", { href: route.url, config: m.route }, route.title)
		])	
	})
};

m.module(document.getElementById("navigation"), { 
	controller: navigation.controller,
	view: navigation.view
});
