'use strict';
module.exports = (sequelize, DataTypes) => {
  const schema_info = sequelize.define('schema_info', {
    version: DataTypes.INTEGER
  }, {
    timestamps: false
  });
  schema_info.associate = function(models) {
    // associations can be defined here
  };
  return schema_info;
};
