const router = require("express").Router();

const axios = require("axios");

router.get("/", (req, res) => {
  res.send("negociacoes pegadas ou buscadas ");
});

router.get("/negociacoes", async (req, res) => {
  try {
    axios
      .get(
        "https://db-wolf-quiteque.vercel.app/api/db/webtrader/negociacao/get/negociacao"
      )
      .then((response) => {
        res.status(200).json(response.data);
      });
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    axios
      .get(
        "https://db-wolf-quiteque.vercel.app/api/db/webtrader/negociacao/get/negociacao/"
      )
      .then((response) => {
        res.status(200).json(response.data);
      });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
