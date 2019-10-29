'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      sku: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      category: {
        type: Sequelize.STRING
      },
      fabric: {
        type: Sequelize.STRING
      },
      made_in: {
        type: Sequelize.STRING
      },
      label: {
        type: Sequelize.STRING
      },
      stock_status: {
        type: Sequelize.STRING
      },
      stock_qty: {
        type: Sequelize.INTEGER
      },
      price: {
        type: Sequelize.DECIMAL
      },
      old_price: {
        type: Sequelize.DECIMAL
      },
      color_type: {
        type: Sequelize.STRING
      },
      colors: {
        type: Sequelize.JSONB
      },
      images: {
        type: Sequelize.JSONB
      },
      categories: {
        type: Sequelize.JSONB
      },
      created_at: {
        type: Sequelize.DATE
      },
      updated_at: {
        type: Sequelize.DATE
      },
      arrived_on: {
        type: Sequelize.DATE
      },
      available_on: {
        type: Sequelize.DATE
      },
      refid: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('products');
  }
};