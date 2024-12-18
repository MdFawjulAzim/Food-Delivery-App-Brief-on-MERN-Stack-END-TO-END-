import { Router } from 'express'
import { registerUserController,verifyEmailController,loginController,logoutController,uploadAvatar,updateUserDetails,forgotPasswordController,verifyForgotPasswordOtp,resetpassword,refreshToken,userDetails } from '../controllers/user.controller.js'
import auth from '../middleware/auth.js';
import uploads from '../middleware/FileUpload.js';
import upload from '../middleware/multer.js'



const userRouter = Router();

userRouter.post('/register',registerUserController);
userRouter.post('/verify-email',verifyEmailController);
userRouter.post('/login',loginController);
userRouter.get('/logout',auth,logoutController);
// userRouter.put('/upload-avatar',auth,uploads.single("avatar",20),uploadAvatar);
//OR upload user avatar npm i cloudinary
userRouter.put('/upload-avatar',auth,upload.single('avatar'),uploadAvatar)

userRouter.put('/update-user',auth,updateUserDetails);
userRouter.put('/forgot-password',forgotPasswordController);
userRouter.put('/verify-forgot-password-otp',verifyForgotPasswordOtp);
userRouter.put('/reset-password',resetpassword);
userRouter.post('/refresh-token',refreshToken);
userRouter.get('/user-details',auth,userDetails);





export default userRouter
