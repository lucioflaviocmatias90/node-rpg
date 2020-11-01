import request from 'supertest'
import app from '../app'

describe('Users testing...', () => {
  test('get current user', done => {
    request(app).get('/users').then(response => {
      expect(response.status).toBe(200)
      done()
    })
  })

  test('create a new user', done => {
    request(app).post('/users').then(response => {
      expect(response.status).toBe(200)
      done()
    })
  })
})
