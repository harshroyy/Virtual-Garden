const mongoose = require("mongoose");

const herbSchema = new mongoose.Schema({
  image: { // Changed from images to image
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  botanicalName: {
    type: String,
    required: true,
  },

  commonNames: {
    type: Map,
    of: String, // Maps language to common name
  },

  habitat: {
    type: String,
    required: true,
  },

  medicinalUses: {
    type: [String], // Array of medicinal uses
    required: true,
  },
  
  cultivation: {
    climate: {
      type: String,
    },
    propagation: {
      type: String,
    },
    soil: {
      type: String,
    },
    watering: {
      type: String,
    },
    pestControl: {
      type: String,
    },
    maintenance: {
      type: String,
    },
  },
});

module.exports = mongoose.model("Herb", herbSchema);
