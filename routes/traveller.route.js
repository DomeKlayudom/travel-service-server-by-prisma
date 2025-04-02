const express = require("express");
const travellerController = require("../controllers/traveller.controller");


const router = express.Router();

//ในการกำหนดเส้นทางเป็นตามหลักการของ REST API
//เพิ่ม post(), แก้ไข put()/patch(), ลบ delete(), ค้นหา/ตรวจสอบ/ดึง/ดู get()
router.post(
    "/",
    (req, res, next) => {
      travellerController.uploadTraveller(req, res, (err) => {
        if (err) {
          console.error("File upload error:", err); // บันทึก error แต่ไม่หยุด flow
        }
        next(); // ไปต่อที่ createTraveller โดยไม่สนใจ error
      });
    },
    travellerController.createTraveller
  );
  



router.get("/:travellerEmail/:travellerPassword", travellerController.checkLoginTraveller);

router.put("/:travellerId",  travellerController.uploadTraveller, travellerController.editTraveller)

module.exports = router;


