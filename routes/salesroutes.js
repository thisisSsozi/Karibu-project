const express = require("express");
const router = express.Router();
const Sale = require("../models/Sale");

router.get("/", (req, res) => {
  if (req.session.user) {
    res.render("sales");
  } else {
    console.log("Can not find session");
    res.redirect("/");
  }
});

// posting the sales records into db
router.post("/", async (req, res) => {
  try {
    const sale = new Sale(req.body);
    await sale.save();
    res.redirect("/sales");
    console.log("Submitted successffully");
  } catch (err) {
    res.status(400).redirect("/sales");
    console.log("Not successful");
  }
});

router.get("/saleslist", async (req, res) => {
  try {
    const sales = await Sale.find({});
    let totalSales = await Sale.aggregate([
      {
        $group: {
          _id: "$all",
          totalRevenue: { $sum: "$amountpaid" },
          totalTonnage: { $sum: "$tonnage" },
        },
      },
    ]);
    res.render("saleslist", {
      sales: sales,
      total: totalSales[0],
    });
    console.log(totalSales);
  } catch (error) {
    res.status(400).send("List not found");
    console.log(error);
  }
});

router.post("/delete", async (req, res) => {
  try {
    await Sale.deleteOne({ _id: req.body.id });
    res.redirect("back");
  } catch (err) {
    res.status(400).send("Unable to delete item in the database");
  }
});

// editing the sales list
router.get("/editsale/:id", async (req, res) => {
  try {
    const item = await Sale.findOne({ _id: req.params.id });
    res.render("editsale", { sale: item });
  } catch (error) {
    res.send("Sale not found in DB");
  }
});

router.post("/editsale/:id", async (req, res) => {
  try {
    await Sale.findOneAndUpdate({ _id: req.params.id }, req.body);

    res.redirect("/sales/saleslist");
  } catch (error) {
    res.send("Failed to update product");
    console.log(error);
  }
});

module.exports = router;
