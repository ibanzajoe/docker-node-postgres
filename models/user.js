'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    address: DataTypes.STRING,
    address2: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zip: DataTypes.STRING,
    country: DataTypes.STRING,
    company: DataTypes.STRING,
    seller_permit: DataTypes.STRING,
    newsletter: DataTypes.BOOLEAN,
    status: DataTypes.STRING,
    username: DataTypes.STRING,
    password_digest: DataTypes.STRING,
    email: DataTypes.STRING,
    role: DataTypes.STRING,
    uid: DataTypes.STRING,
    provider: DataTypes.STRING,
    refid: DataTypes.STRING,
    avatar_url: DataTypes.STRING,
    phone: DataTypes.STRING,
    fax: DataTypes.STRING,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
    shipping_first_name: DataTypes.STRING,
    shipping_last_name: DataTypes.STRING,
    shipping_address: DataTypes.STRING,
    shipping_address2: DataTypes.STRING,
    shipping_city: DataTypes.STRING,
    shipping_state: DataTypes.STRING,
    shipping_zip: DataTypes.STRING,
    shipping_country: DataTypes.STRING,
    shipping_phone: DataTypes.STRING,
    shipping_fax: DataTypes.STRING,
    hear_about_us_option: DataTypes.STRING,
    hear_about_us_other: DataTypes.STRING,
    addresses: DataTypes.STRING,
    reset_password_token: DataTypes.STRING,
    shipping_addresses: DataTypes.STRING,
    seller_permit_files: DataTypes.STRING,
  }, {
    timestamps: false
  });
  user.associate = function(models) {
    // associations can be defined here
  };
  return user;
};
