import express from 'express'
const router = express.Router();
import multer from 'multer'
import Path from 'path';
import * as url from 'url';
    // const __filename = url.fileURLToPath(import.meta.url);
    const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const storage = multer.memoryStorage();
// const upload = multer({dest: 'uploads/'}) // upload is a middleware used to store image in uploads folder
router.use(express.static(__dirname + "../public/"));

var Storage = multer.diskStorage({
    destination: "../public/uploads/",
    filename: (req, file, cb)=>{
        cb(null, file.originalname);
        // cb(null, file.fieldname + "_"+ Date.now()+ Path.extname(file.originalname));
    }
})
var upload = multer({storage: Storage})

import { homeController } from '../controllers/homeController.js';
import { signinSignupRideController } from '../controllers/signinSignupRideController.js';
import { signinsignupDriveController } from '../controllers/signinsignupDriveController.js';

import { RideController } from '../controllers/RideController.js';
import { goController } from '../controllers/goController.js';

import { driverSignupController } from '../controllers/driverSignupController.js';
import { driverSigninController} from '../controllers/driverSigninController.js';
import { driverSigninFormControlller } from '../controllers/driverSigninFormController.js';
import { driverSignupFormController } from '../controllers/driverSignupFormController.js';

import { rideSigninController } from '../controllers/rideSigninController.js';
import { rideSignupController } from '../controllers/rideSignupController.js';
import { rideSignupFormController } from '../controllers/rideSignupFormController.js';
import { rideSigninFormController } from '../controllers/rideSigninFormController.js';

 
router.get('/', homeController)
router.get('/signin-signup-ride', signinSignupRideController)
router.get('/signin-signup-Drive', signinsignupDriveController)


router.get('/driverSignup', driverSignupFormController)
router.post('/driverSignup', upload.single('ProfileImage') ,driverSignupController)// Handle image upload along with other details

router.get('/driverSignin', driverSigninFormControlller)
router.post('/driverSignin', driverSigninController)


router.get('/rideSignup', rideSignupFormController)
router.post('/rideSignup', rideSignupController)

router.get('/rideSignin', rideSigninFormController)
router.post('/rideSignin', rideSigninController)

router.get('/Ride', RideController)
router.get('/go', goController)




export default router