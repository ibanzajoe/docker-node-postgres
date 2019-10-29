'use strict';
module.exports = (sequelize, DataTypes) => {
  const carts = sequelize.define('carts', {
    user_id: DataTypes.INTEGER,
    order_id: DataTypes.INTEGER,
    session_id: DataTypes.STRING,
    cart: DataTypes.STRING,
    updated_at: DataTypes.DATE,
  }, {
    timestamps: false
  });
  carts.associate = function(models) {
    // associations can be defined here
  };
  return carts;
};
