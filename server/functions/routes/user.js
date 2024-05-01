const router = require("express").Router();
const admin = require("firebase-admin");

router.get("/", (req, res) => {
  return res.send("Inside the user router");
});

router.get("/jwtverification", async (req, res) => {
  if (!req.headers.authorization) {
    return res.status(500).send({ msg: "token not found" });
  }

  const token = req.headers.authorization.split(" ")[1];

  // return res.status(200).send({ token: token });

  try {
    const decodedvalue = await admin.auth().verifyIdToken(token);

    if (!decodedvalue) {
      return res
        .status(500)
        .json({ success: false, msg: "unauthorized access" });
    }
    return res.status(200).json({
      succes: true,
      data: decodedvalue,
    });
  } catch (err) {
    return res.send({
      succes: false,
      msg: `error in extracting the token : ${err}`,
    });
  }
});

module.exports = router;
