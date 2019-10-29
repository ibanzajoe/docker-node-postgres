'use strict';
module.exports = (sequelize, DataTypes) => {
  const categories = sequelize.define('categories', {
    parent_id: DataTypes.INTEGER,
    rank: DataTypes.INTEGER,
    name: DataTypes.STRING,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  }, {
    timestamps: false
  });
  categories.associate = function(models) {
    // associations can be defined here
  };
  return categories;
};
