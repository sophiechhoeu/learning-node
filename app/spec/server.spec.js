var request = require('request')

describe('calc', () => {
  it('should multiply 2 and 2', () => {
    expect (2*2).toBe(4)
  })
})

//calling done whenever our aysncyhronous code finishes
//body.length (of a string so testing the characters of a string)
describe('get messages', () => {
  it('should return 200 ok', (done) => {
    request.get('http://localhost:3000/messages', (err, res) => {
      expect(res.statusCode).toEqual(200)
      done()
    })
  })
  it('should return list, thats not empty', (done) => {
    request.get('http://localhost:3000/messages', (err, res) => {
      expect(JSON.parse(res.body).length).toBeGreaterThan(0)
      done()
    })
  })
})

describe('get messages from user', () => {
  it('should return 200 ok', (done) => {
    request.get('http://localhost:3000/messages/des', (err, res) => {
      expect(res.statusCode).toEqual(200)
      done()
    })
  })
    it('name should be des', (done) => {
      request.get('http://localhost:3000/messages/des', (err, res) => {
        expect(JSON.parse(res.body)[0].name).toEqual('des')
        done()
    })
  })
})
