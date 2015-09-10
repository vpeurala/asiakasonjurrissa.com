var ajankohtaista = {};

ajankohtaista.view = function () {
	return [m(".container[id='page']", [
		m("h3", "Ajankohtaista"),
		m("h4", "10.9.2015: Kesälomat ohi ja valmiina hommiin!"),
		m("p", "Kesälomat meni mukavasti ja nyt taas duuni maistuisi! Tässä kuussa testaus 20,1 prosentin alennuksella normaalista 50 eurosta, eli vain naurettavan halvat 39,99 euroa (+ juomat). Tartu nyt tilaisuuteen!"),
		m("h4", "2.4.2015: Uusi referenssi, Jaakko Kerosuo!"),
		m("p", "Palveluni sai uuden asiakkaan! Maineikas folk-laulaja Jaakko Kerosuo pyysi asiakasonjurrissa.comia testaamaan videoportaalinsa. Tässä tulokset:"),
		m("iframe[allowfullscreen=''][frameborder='0'][height='315'][src='https://www.youtube.com/embed/PvugzaHNa3Q'][width='420']")
	])]
}

var palvelukuvaus = {};

palvelukuvaus.view = function () {
	return [m(".container[id='page']", [
		m("h3", "Mistä on kysymys?"),
		m("p", "Web-sovelluksesi tulisi olla niin helppokäyttöinen, että sitä pystyy käyttämään kännissäkin. Et pysty itse testaamaan, onko se. Minä teen sen sinun puolestasi."),
		m("h3", "Palvelu"),
		m("p", "Juon itseni humalaan ja sen jälkeen yritän käyttää web-sovellustasi. Kerron myöhemmin, onnistuiko vai ei, ja missä olisi parantamisen varaa."),
		m("h3", "Mitä se maksaa?"),
		m("p", "50 euroa plus juomat per sovellus. Tämä erikoishinta on voimassa vain rajoitetun ajan. Mikäli palvelulle tulee paljon kysyntää, kuten otaksun, joudun pian korottamaan hintoja."),
		m("h3", "Mistä keksin tämän palvelun?"),
		m("p", ["Sain idean täältä: ",m("a[href='http://theuserisdrunk.com/']", "http://theuserisdrunk.com/"),". Koska idean alkuperäinen keksijä Richard Littauer ei tietääkseni osaa suomea eikä siten pysty testaamaan suomenkielisiä web-sovelluksia, haistoin tässä markkinaraon."]),
		m("p", [m("a.btn.btn-primary.btn-lg[href='mailto:asiakasonjurrissa@wunderdog.fi'][role='button']", "Tilaa jo tänään »")]),
		m("a.wd-logo[href='http://wunderdog.fi']", [m("img[alt='Wunderdog'][src='img/wunderdog.png']")]),
		m("h3", "Työnäyte"),
		m("iframe[allowfullscreen=''][frameborder='0'][height='315'][src='https://www.youtube.com/embed/r9iJBH_V0cM'][width='560']"),
		m("p", "PS: Jag talar också svenska och engelska."),
		m("p", "PPS: Pienestä lisähinnasta voin testata sovellustasi myös erilaisten huumausaineiden, liuottimien yms. vaikutuksen alaisena. Ota rohkeasti yhteyttä niin sovitaan tarkemmin!"),
		m("p", "Disclaimer: Käytän alkoholia vastuullisesti ja ainoastaan sen verran kuin työtehtäväni vaativat. En kannusta ketään tolkuttomaan ryyppäämiseen tai muuhun asiattomaan toimintaan. Liiketoimintani on eettisesti kestävää ja sisäministeriön hyväksymää.")
	])]
};

var referenssit = {};

referenssit.view = function () {
	return [m(".container[id='page']", [
		m("h3", "Työnäyte 2: Jaakko Kerosuo / Dumarit"),
		m("iframe[allowfullscreen=''][frameborder='0'][height='315'][src='https://www.youtube.com/embed/PvugzaHNa3Q'][width='420']"),
		m("h3", "Työnäyte 1: posti.fi"),
		m("iframe[allowfullscreen=''][frameborder='0'][height='315'][src='https://www.youtube.com/embed/r9iJBH_V0cM'][width='560']")
	])]
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
		return m("li", {
			class: route.url === m.route() ? "active" : "inactive"
		}, [
			m("a", { 
				href: route.url, 
				config: m.route, 
				role: "presentation"
			}, route.title)
		])	
	})
};

m.module(document.getElementById("navigation"), { 
	controller: navigation.controller,
	view: navigation.view
});
