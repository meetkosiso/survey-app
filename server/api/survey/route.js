import express from 'express';
import * as survey from './controller';

const router = express.Router();

router.get('/question', survey.fetchQuestion);

export default router;
