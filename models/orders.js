'use strict';
module.exports = (sequelize, DataTypes) => {
  const orders = sequelize.define('orders', {
    user_id: DataTypes.INTEGER,
    items: DataTypes.JSONB,
    shipping: DataTypes.JSONB,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
    status: DataTypes.STRING,
    shipped_at: DataTypes.DATE,
    comments: DataTypes.STRING,
    comments_staff: DataTypes.STRING,
    ref: DataTypes.STRING,
    card: DataTypes.STRING,
    poid: DataTypes.STRING,
    old: DataTypes.INTEGER,
    bo: DataTypes.INTEGER,
    invoice_no: DataTypes.STRING,
    tracking_no: DataTypes.STRING,
    shipping_method: DataTypes.STRING,
    total: DataTypes.DECIMAL,
    subtotal: DataTypes.DECIMAL,
    shipping_amount: DataTypes.DECIMAL,
    discount_amount: DataTypes.DECIMAL
  }, {
    timestamps: false
  });
  orders.associate = function(models) {
    // associations can be defined here
  };
  return orders;
};
