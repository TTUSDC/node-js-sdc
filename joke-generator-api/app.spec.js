const chai = require('chai')
const expect = chai.expect
const app = require('./app')

const request = require('supertest')

describe('Jokes API test', () => {
  it('should recieve valid response from Chuck', (done) => {
    request(app)
      .get('/chuck')
      .expect(200)
      .end((err, res) => {
        if (err) {
          done(err)
        } else {
          const data = res.body
          expect((typeof data.joke) === 'string').to.equal(true)
          done()
        }
      })
  })

  it('should recieve valid response from CS', (done) => {
    request(app)
      .get('/cs')
      .expect(200)
      .end((err, res) => {
        if (err) {
          done(err)
        } else {
          const data = res.body
          expect((typeof data.joke) === 'string').to.equal(true)
          done()
        }
      })
  })

  it('should recieve valid response from Ron', (done) => {
    request(app)
      .get('/ron')
      .expect(200)
      .end((err, res) => {
        if (err) {
          done(err)
        } else {
          const data = res.body
          expect((typeof data.joke) === 'string').to.equal(true)
          done()
        }
      })
  })
})
