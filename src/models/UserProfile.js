import mongoose from 'mongoose';

const UserProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  bio: {
    type: String,
    default: '',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.UserProfile || mongoose.model('UserProfile', UserProfileSchema);
