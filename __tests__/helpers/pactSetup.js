const path = require("path")
const Pact = require("@pact-foundation/pact").Pact

global.port = 8991
global.provider = new Pact({
  port: global.port,
  log: path.resolve(process.cwd(), "__tests__/contract/logs", "mockserver-integration.log"),
  dir: path.resolve(process.cwd(), "__tests__/contract/pacts"),
  spec: 2,
  pactfileWriteMode: "overwrite",
  consumer: "ClientConsumer",
  provider: "ClientProvider",
})
