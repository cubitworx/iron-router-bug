if (Meteor.isClient) {

	Router.onBeforeAction(function(pause) {
		console.log('onBeforeAction');
		this.next();
	}, {only: ['/','other','other/2']});

	Router.route("/", {
//		name: "/",									// Uncomment this & it works
		action: function() {
			this.layout("page");
			this.render("index");
		}
	});

	Router.route("other", {
		action: function() {
			this.layout("page");
			this.render("other");
		}
	});

}
