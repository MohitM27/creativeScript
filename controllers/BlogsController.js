var ObjectId = require("mongoose").Types.ObjectId;
const blogService = require("../services/BlogsService");

exports.blogsList = async (req, res) => {
  try {
    const blogs = await blogService.getAllBlogs();
    if (blogs) {
      return res
        .status(200)
        .json({ data: blogs, status: 200, message: "success" });
    } else
      return res
        .status(400)
        .json({ data: [], status: 400, message: "Blogs not found!" });
  } catch (err) {
    res.status(500).json({ status: 500, message: err.message });
  }
};

exports.validateId = async (req, res, next) => {
  try {
    if (req.params.id && ObjectId.isValid(req.params.id)) {
      next();
    } else
      return res.status(400).json({ status: 400, message: "Id is Invalid!" });
  } catch (err) {
    res.status(500).json({ status: 500, message: err.message });
  }
};

exports.blogsDetails = async (req, res) => {
  try {
    const blogId = req.params.id;
    const blogs = await blogService.getBlogById(blogId);
    if (blogs) {
      return res
        .status(200)
        .json({ data: blogs, status: 200, message: "success" });
    } else
      return res
        .status(400)
        .json({ data: {}, status: 400, message: "Blogs not found!" });
  } catch (err) {
    res.status(500).json({ status: 500, message: err.message });
  }
};

exports.validatePayload = async (req, res, next) => {
  try {
    const { title, content } = req.body;
    if (!title || !content || title === "" || content === "") {
      let message = "";
      if (!title || title === "") message = "title ";
      if (!content || content === "") message += "content ";
      message += "is Required.";
      return res.status(400).json({ data: {}, status: 400, message });
    } else {
      next();
    }
  } catch (err) {
    res.status(500).json({ status: 500, message: err.message });
  }
};

exports.createBlogs = async (req, res) => {
  try {
    const blog = req.body;
    const blogs = await blogService.createBlog(blog);
    if (blogs) {
      return res
        .status(201)
        .json({ data: blogs, status: 201, message: "success" });
    } else
      return res
        .status(400)
        .json({ data: {}, status: 400, message: "Something Went Wrong!" });
  } catch (err) {
    res.status(500).json({ status: 500, message: err.message });
  }
};

exports.updateBlogs = async (req, res) => {
  try {
    const blogId = req.params.id;
    const blog = req.body;
    const blogs = await blogService.updateBlogById(blogId, blog);
    if (blogs) {
      return res.status(200).json({ status: 200, message: "success" });
    } else
      return res.status(400).json({ status: 400, message: "Blogs not found!" });
  } catch (err) {
    res.status(500).json({ status: 500, message: err.message });
  }
};

exports.deleteBlogs = async (req, res) => {
  try {
    const blogId = req.params.id;
    const blogs = await blogService.deleteBlogById(blogId);
    if (blogs) {
      return res.status(200).json({ status: 200, message: "success" });
    } else
      return res.status(400).json({ status: 400, message: "Blogs not found!" });
  } catch (err) {
    res.status(500).json({ status: 500, message: err.message });
  }
};
