const { DataTypes } = require("sequelize");

module.exports = (db) => {
	db.Privacy = db.define(
		"privacy",
		{
			id: {
				primaryKey: true,
				type: DataTypes.STRING,
				allowNull: false,
			},
			updated: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			url: {
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
