import mongoose from 'mongoose';

const CommentSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post',
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Comment || mongoose.model('Comment', CommentSchema);
