const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// find all tags including its associated Product data
router.get("/", async (req, res) => {
  try {
    const tagData = await Tag.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// find a single tag by its `id` include its associated Product data
router.get("/:id", async (req, res) => {
  try {
    const tagById = await Tag.findByPk(req.params.id,{
      include: [{ model: Product }],
    });
    res.status(200).json(tagById);
  } catch (err) {
    res.status(500).json(err);
  }
});

// create a new tag
router.post("/", async (req, res) => {
  try {
    const newTag = await Tag.create({
      id: req.body.id,
      tag_name: req.body.tag_name,
    });
    res.json(newTag);
    console.log("New tag added.");
  } catch (err) {
    res.status(500).json(err);
  }
});

// update a tag's name by its `id` value
router.put("/:id", async (req, res) => {
  try {
    const updateTag = await Tag.update(
      {
        tag_name: req.body.tag_name,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.json(updateTag);
    console.log("Tag updated.");
  } catch (err) {
    res.status(500).json(err);
  }
});

// delete on tag by its `id` value
router.delete("/:id", async (req, res) => {
  try { 
    const deleteTag = await Tag.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json(deleteTag);
    console.log("Tag deleted.");
  } catch (err) {
    res.status(500).json(err);
  } 
});

module.exports = router;
