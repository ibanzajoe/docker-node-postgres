'use strict';
module.exports = (sequelize, DataTypes) => {
  const settings = sequelize.define('settings', {
    name: DataTypes.STRING,
    value: DataTypes.STRING,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  }, {
    timestamps: false
  });
  settings.associate = function(models) {
    // associations can be defined here
  };
  return settings;
};
