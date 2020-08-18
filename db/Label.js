const { DataTypes } = require("sequelize");

module.exports = (db) => {
	db.Label = db.define(
		"label",
		{
			id: {
				primaryKey: true,
				type: DataTypes.STRING,
				allowNull: false,
			},
			allesapiName: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			name: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			color: {
				type: DataTypes.STRING,
				allowNull: false,
			},
		},
		{
			updatedAt: false,
			paranoid: false,
		}
	);
};

//Kf27WvF
