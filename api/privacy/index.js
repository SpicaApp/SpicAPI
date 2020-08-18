const db = require("../../db");
const sequelize = require("sequelize");

module.exports = async (req, res) => {
	var fetchedPrivacyPolicy;
	if (req.query.updated === "all") {
		fetchedPrivacyPolicy = await db.Privacy.findAll({});
		if (!fetchedPrivacyPolicy) return res.status(404).json({ err: "notFound" });
		res.status(200).json({
			success: fetchedPrivacyPolicy,
		});
	} else if (req.query.updated && !isNaN(req.query.updated)) {
		fetchedPrivacyPolicy = await db.Privacy.findOne({
			where: {
				updated: parseInt(req.query.updated),
			},
		});
		if (!fetchedPrivacyPolicy) return res.status(404).json({ err: "notFound" });
		res.status(200).json({
			success: fetchedPrivacyPolicy,
		});
	} else {
		console.log("hi");
		fetchedPrivacyPolicy = await db.Privacy.findAll({});
		if (!fetchedPrivacyPolicy) return res.status(404).json({ err: "notFound" });
		res.status(200).json({
			success: getMax(fetchedPrivacyPolicy, "updated"),
		});
	}
};

function getMax(arr, prop) {
	var max;
	for (var i = 0; i < arr.length; i++) {
		if (max == null || parseInt(arr[i][prop]) > parseInt(max[prop]))
			max = arr[i];
	}
	return max;
}
