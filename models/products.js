'use strict';
module.exports = (sequelize, DataTypes) => {
  const products = sequelize.define('products', {
    sku: DataTypes.STRING,
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    category: DataTypes.STRING,
    fabric: DataTypes.STRING,
    made_in: DataTypes.STRING,
    label: DataTypes.STRING,
    stock_status: DataTypes.STRING,
    stock_qty: DataTypes.INTEGER,
    price: DataTypes.DECIMAL,
    old_price: DataTypes.DECIMAL,
    color_type: DataTypes.STRING,
    colors: DataTypes.JSONB,
    images: DataTypes.JSONB,
    categories: DataTypes.JSONB,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
    arrived_on: DataTypes.DATE,
    available_on: DataTypes.DATE,
    refid: DataTypes.STRING,
    pack: DataTypes.STRING,
    pack_qty: DataTypes.STRING,
    pack_size: DataTypes.STRING,
    ranking: DataTypes.INTEGER,
    main_image: DataTypes.STRING,
    activated_on: DataTypes.DATE,
    displayed_at: DataTypes.DATE
  }, {
    timestamps: false
  });
  products.associate = function(models) {
    // associations can be defined here
  };
  return products;
};
