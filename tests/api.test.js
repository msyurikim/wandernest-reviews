const supertest = require('supertest')
const app = require('../server/index')

const request = supertest(app)

describe('/reviews Endpoint', () => {
    it('Tests for /reviews/response data', async done => {
  
        const response = await request.get('/reviews/?id=5')  
        //console.log(response.body);
        expect(response.status).toBe(200)
        expect(response.body).toExist;
        done()
      })
  });

  describe('/qas Endpoint', () => {
    it('Tests for /reviews/response data', async done => {
  
        const response = await request.get('/qas/?id=5')  
        
        expect(response.status).toBe(200)
        expect(response.body).toExist;        
        done()
      })
  });

  describe('/roomtips Endpoint', () => {
    it('Tests for /reviews/response data', async done => {
  
        const response = await request.get('/roomtips/?id=5')  
        
        expect(response.status).toBe(200)
        expect(response.body).toExist;
        done()
      })
  });
