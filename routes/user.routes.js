const Router = require("express");
const router = new Router();
const userController = require("../controller/user.controller");

router.post("/create_sug_journal", userController.createSugJournal);
router.post("/create_sug_report", userController.createSugReport);
router.post("/create_component_journal", userController.createComJournal);
router.post("/create_com_report", userController.createComReport);

module.exports = router;
