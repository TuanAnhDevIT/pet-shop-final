"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ImageProduct extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Product, {
        foreignKey: "productId",
        targetKey: "id",
      });
    }
  }
  ImageProduct.init(
    {
      link: DataTypes.STRING(500),
      productId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "ImageProduct",
    }
  );
  return ImageProduct;
};
