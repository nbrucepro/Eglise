  const mongoose = require("mongoose");

  const scheme = new mongoose.Schema({
    names: {
      type: String,
    },
    father: {
      type: String,
    },
    mother: {
      type: String,
    },
    id: {
      type: String,
    },
    telephone: {
      type: String,
    },
    redemptionDate: {
      type: Date,
      default: Date.now,
    },
    redemptionPlace: {
      type: String,
    },
    role: {
      type: String,
    },
    zone: {
      type: String,
    },
    birthPlace: {
      sector: {
        type: String,
        trim: true,
      },
      district: {
        type: String,
        trim: true,
      },
      province: {
        type: String,
        trim: true,
      },
    },
    destinyPlace: {
      cell: {
        type: String,
        trim: true,
      },
      sector: {
        type: String,
        trim: true,
      },
      district: {
        type: String,
        trim: true,
      },
      province: {
        type: String,
        trim: true,
      },
    },
    immigrant: {
      type: String,
      trim: true,
    },
    emmigrant: {
      type: String,
      // trim: true,
    },
    dead: {
      type: String,
      trim: true,
    },
    created: {
      type: Date,
      default: Date.now,
    },
  });

  module.exports = mongoose.model("Members", scheme);
