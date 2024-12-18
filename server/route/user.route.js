import { Router } from 'express'
import { registerUserController,verifyEmailController,loginController,logoutController,uploadAvatar,updateUserDetails } from '../controllers/user.controller.js'
import auth from '../middleware/auth.js';
import upload from '../middleware/FileUpload.js';


const userRouter = Router();

userRouter.post('/register',registerUserController);
userRouter.post('/verify-email',verifyEmailController);
userRouter.post('/login',loginController);
userRouter.get('/logout',auth,logoutController);
userRouter.put('/upload-avatar',auth,upload.single("avatar",20),uploadAvatar)
userRouter.put('/update-user',auth,updateUserDetails)






export default userRouter
