import express, { Express } from 'express';
import taskRoutes from '@tasks/task.routes';
const app: Express = express();

app.use(express.json());
app.use(taskRoutes);

export default app;
