const BlogsModel = require("../models/Blogs");

exports.getAllBlogs = async () => {
  return await BlogsModel.find({});
};
exports.getBlogById = async (id) => {
  return await BlogsModel.findById(id);
};
exports.createBlog = async (blog) => {
  return await BlogsModel.create(blog);
};
exports.updateBlogById = async (id, blog) => {
  return await BlogsModel.findByIdAndUpdate(id, blog);
};
exports.deleteBlogById = async (id) => {
  return await BlogsModel.findOneAndDelete(id);
};
