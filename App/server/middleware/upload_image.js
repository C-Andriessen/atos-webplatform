const fs = require("file-system");
const multer = require("multer");
const uuid = require("uuid").v4;

var img_dir = "./tmp/uploads/images";

if (!fs.existsSync(img_dir)) {
  fs.mkdirSync(img_dir);
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, `${img_dir}`);
  },
  filename: (req, file, cb) => {
    const { originalname } = file;
    cb(null, `${uuid()}-${originalname}`);
  },
});

const upload = multer({ storage });

module.exports = upload;
