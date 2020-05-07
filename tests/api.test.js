const supertest = require('supertest')
const app = require('../server/index')

const request = supertest(app)



describe('/reviews Endpoint', () => {
    it('Tests for /reviews/response data', async done => {
  
        const response = await request.get('/reviews/?id=5')  
        console.log(response);
        expect(response.status).toBe(200)
        done()
      })
  });
