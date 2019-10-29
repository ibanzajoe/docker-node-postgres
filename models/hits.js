'use strict';
module.exports = (sequelize, DataTypes) => {
  const hits = sequelize.define('hits', {
    user_id: DataTypes.INTEGER,
    ip: DataTypes.STRING,
    created_at: DataTypes.DATE
  }, {
    timestamps: false
  });
  hits.associate = function(models) {
    // associations can be defined here
  };
  return hits;
};
