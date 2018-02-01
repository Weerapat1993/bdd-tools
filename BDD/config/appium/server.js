const develop = {
  host: 'localhost',
  port: 4723
}

// TODO
// Waiting for production server
const production = {
  host: 'localhost',
  port: 4723
}

const server = !global.__DEV__ ? production : develop

export default server
