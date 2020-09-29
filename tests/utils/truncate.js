const { sequelize } = require("../../src/app/models");

module.exports = () => {
  Promise.all(
    Object.keys(sequelize.models).map((key) => {
      return sequelize.models[key].destroy({ truncate: { cascade: true }, force: true });
    })
  );
};
