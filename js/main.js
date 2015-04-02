var ajankohtaista = {};
var palvelukuvaus = {};
var referenssit   = {};

m.route.mode = "hash";

var routes = [
  { url: "/", title: "Ajankohtaista", module: ajankohtaista },
  { url: "/palvelukuvaus", title: "Palvelukuvaus", module: palvelukuvaus },
  { url: "/referenssit", title: "Referenssit", module: referenssit }
]

m.route(document.getElementById("navigation"), "/", {
	"/": ajankohtaista,
	"/palvelukuvaus": palvelukuvaus,
	"/referenssit": referenssit
});

m.render(document.getElementById("navigation"), routes.map(function (route) {
	return m("li", [
		m("a", { href: route.url, config: m.route }, route.title)
	])
}));

