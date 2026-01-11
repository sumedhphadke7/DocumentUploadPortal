import { Router } from 'express';
import {
    uploadDocument,
    getDocument
} from '../controllers/document.controller';

const router = Router();

router.post('/upload', uploadDocument);
router.get('/', getDocuments);

export default router;