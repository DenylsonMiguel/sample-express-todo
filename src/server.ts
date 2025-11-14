import express from 'express';
import taskRoutes from '@tasks/task.routes';
const app = express();

app.use(express.json());
app.use(taskRoutes);

export default app;
