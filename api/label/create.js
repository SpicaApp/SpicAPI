const db = require("../../db");
const uuid = require("uuid").v4;

module.exports = async (req, res) => {
	if (req.headers.authorization !== process.env.SECRET)
		return res.status(401).json({error: "badAuthorization"});
	if (
		typeof req.body.allesapiName !== "string" ||
		req.body.allesapiName.trim().length === 0 ||
		typeof req.body.name !== "string" ||
		req.body.name.trim().length === 0 ||
		typeof req.body.color !== "string" ||
		req.body.color.trim().length === 0
	)
		return res.status(400).json({ err: "badRequest" });

	const createdLabel = await db.Label.create({
		id: uuid(),
		allesapiName: req.body.allesapiName,
		name: req.body.name,
		color: req.body.color,
	});

	if (!createdLabel) return res.status(500).json({ err: "internalError" });

	res.status(200).json({
		success: createdLabel,
	});
};
