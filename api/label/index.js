const db = require("../../db");

module.exports = async (req, res) => {
	if (req.body.labels == null || !Array.isArray(req.body.labels))
		return res.status(400).json({ err: "badRequest" });

	const labels = [];
	for (var i = 0; i < req.body.labels.length; i++) {
		const newLabel = await db.Label.findOne({
			where: {
				allesapiName: req.body.labels[i],
			},
		});
		if (newLabel) labels.push(newLabel);
	}

	res.status(200).json({
		success: labels,
	});
};
