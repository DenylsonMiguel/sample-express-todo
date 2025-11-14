import app from '@/server';
import 'dotenv/config';

if (!process.env.PORT) throw new Error('enviorment variable PORT not found');
const PORT = parseInt(process.env.PORT!);

app.listen(PORT, () => console.log(`Servidor iniciado na porta: ${PORT}`));
