'use strict';
module.exports = (sequelize, DataTypes) => {
  const site_settings = sequelize.define('site_settings', {
    home_public_banner: DataTypes.STRING,
    home_private_banners: DataTypes.STRING,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
    logo_color: DataTypes.STRING,
    logo_text: DataTypes.STRING
  }, {
    timestamps: false
  });
  site_settings.associate = function(models) {
    // associations can be defined here
  };
  return site_settings;
};
