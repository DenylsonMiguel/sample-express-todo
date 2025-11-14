import request from 'supertest';
import app from '@/server';

describe('GET /', () => {
  test('Deve responder com json e status 200', async () => {
    const res = await request(app).get('/');
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ msg: 'Hello, World!' });
  });
});
