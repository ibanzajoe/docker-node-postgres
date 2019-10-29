'use strict';
module.exports = (sequelize, DataTypes) => {
  const posts = sequelize.define('posts', {
    user_id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    teaser: DataTypes.STRING,
    content: DataTypes.STRING,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  }, {
    timestamps: false
  });
  posts.associate = function(models) {
    // associations can be defined here
  };
  return posts;
};
