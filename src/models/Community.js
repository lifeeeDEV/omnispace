import mongoose from 'mongoose';

const CommunitySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
  },
});

CommunitySchema.pre('save', function (next) {
  this.slug = this.name.toLowerCase().replace(/ /g, '-');
  next();
});

const Community = mongoose.models.Community || mongoose.model('Community', CommunitySchema);

export default Community;
