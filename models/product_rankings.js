'use strict';
module.exports = (sequelize, DataTypes) => {
  const product_rankings = sequelize.define('product_rankings', {
    product_id: DataTypes.INTEGER,
    sku: DataTypes.STRING,
    category: DataTypes.STRING,
    ranking: DataTypes.INTEGER,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  }, {
    timestamps: false
  });
  product_rankings.associate = function(models) {
    // associations can be defined here
  };
  return product_rankings;
};
