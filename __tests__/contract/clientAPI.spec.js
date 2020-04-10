"use strict"

const path = require("path")
const { Matchers } = require("@pact-foundation/pact")
const getClients = require("../../src").getClients

describe("client's API", () => {
  let url = "http://localhost"

  const EXPECTED_BODY = { client: "2414e594-625a-4f9d-95ce-5143d7deb860" }

  afterEach(() => {
    return provider.verify()
  })

  describe("Client Tests", () => {
    beforeEach(() => {
      const interaction = {
        state: "i have a list of clients",
        uponReceiving: "a request for clients with given clientId",
        withRequest: {
          method: "GET",
          path: "/clients",
          query: {
            "clientId": Matchers.like("a460104c-edf9-4345-922f-a781678e0d61"),
          },
          headers: {
            Accept: "application/json",
          },
        },
        willRespondWith: {
          status: 200,
          headers: {
            "Content-Type": "application/json",
          },
          body: EXPECTED_BODY,
        },
      }

      return provider.addInteraction(interaction)
    })

    it("returns a successful body", () => {
      return getClients({
        url,
        port,
      })
        .then(response => {
          expect(response.headers["content-type"]).toEqual("application/json")
          expect(response.data).toEqual(EXPECTED_BODY)
          expect(response.status).toEqual(200)
        })
    })
  })
})
