// Express
const express = require("express");
const app = express();

app.use(require("body-parser").json());
app.use((err, req, res, next) =>
	res.status(500).json({ err: "internalError" })
);
app.listen(8080, () => console.log("SpicAPI started and active..."));

app.get("/", (req, res) => res.send("SpicAPI"));

app.get("/apps/ios/version", (req, res) => {
	res.status(200).json({
		required: {
			version: "0.9.0",
			build: 0,
		},
		newest: {
			version: "0.9.0",
			build: 0,
		},
	});
});

// 404
app.use((req, res) => res.status(404).json({ err: "notFound" }));
