// IMPORT
import express from 'express';
import userRouter from './user/user';
import kycmodelRouter from './KYC_Model/kyc_model';
import kycRouter from './KYC/kyc';
import notificationRouter from './notification/notification';


// CONST
const router = express.Router();


// ROUTER USE
router.use('/user', userRouter);
router.use('/kyc_model', kycmodelRouter);
router.use('/kyc', kycRouter);
router.use('/notification', notificationRouter);


/* GET index page. */
router.get('/', (req, res) => {
  res.json({
    title: 'Coucou Happy Ledger'
  });
});

export default router;

