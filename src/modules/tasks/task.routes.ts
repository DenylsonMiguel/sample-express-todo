import { Router } from 'express';
import controller from '@tasks/task.controller';

const taskRoutes = Router();

taskRoutes.get('/', controller.hello);

export default taskRoutes;
