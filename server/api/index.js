import express from 'express';

import survey from './survey';

const router = express.Router();

// use Routes
router.use(survey);

// export route
export default router;
