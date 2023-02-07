const router = require("express").Router();
const { Category, Product } = require("../../models");

// find all categories
router.get("/", async (req, res) => {
  try {
    const categoryData = await Category.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// find one category by its `id` value
router.get("/:id", async (req, res) => {

  try {
    const categoryById = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });
    res.status(200).json(categoryById);
  } catch (err) {
    res.status(500).json(err);
  }
});

// create a new category
router.post("/", async (req, res) => {
  try {
    const newCategory = await Category.create({
      id: req.body.id,
      category_name: req.body.category_name,
    });
    res.json(newCategory);
    console.log("New category added.");
  } catch (err) {
    res.status(500).json(err);
  }
});

// update a category by its `id` value
router.put("/:id", async (req, res) => {
  try {
    const updateCategory = await Category.update(
      {
        category_name: req.body.category_name,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.json(updateCategory);
    console.log("Category updated.");
  } catch (err) {
    res.status(500).json(err);
  }
});

// delete a category by its `id` value
router.delete("/:id", async (req, res) => {
  try {
    const deleteCategory = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json(deleteCategory);
    console.log("Category deleted.");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
