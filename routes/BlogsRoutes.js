const express = require("express");
const {
  blogsList,
  validateId,
  blogsDetails,
  validatePayload,
  createBlogs,
  updateBlogs,
  deleteBlogs,
} = require("../controllers/BlogsController");
const router = express.Router();

router.get("/", blogsList);
router.get("/:id", validateId, blogsDetails);
router.post("/", validatePayload, createBlogs);
router.put("/:id", validateId, updateBlogs);
router.delete("/:id", validateId, deleteBlogs);

module.exports = router;
