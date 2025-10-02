import mongoose from 'mongoose';

const QRCodeSchema = new mongoose.Schema({
  recipeId: {
    type: Number,
    required: true,
    unique: true
  },
  qrCode: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Actualizar updatedAt antes de guardar
QRCodeSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

export default mongoose.models.QRCode || mongoose.model('QRCode', QRCodeSchema);
