'use strict';
module.exports = (sequelize, DataTypes) => {
  const schema_seeds = sequelize.define('schema_seeds', {
    filename: DataTypes.STRING
  }, {
    timestamps: false
  });
  schema_seeds.associate = function(models) {
    // associations can be defined here
  };
  return schema_seeds;
};
