module.exports = (sequelize, Sequelize) => {
    const Taluka = sequelize.define("talukas", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING,
        },
        code: {
            type: Sequelize.STRING,
        },
        state_code: {
            type: Sequelize.STRING,
        },
        deletedAt: {
            type: Sequelize.DATE,
            allowNull: true,
        },
    },
        { timestamps: true },
        { paranoid: true }
    );

    return Taluka;
};