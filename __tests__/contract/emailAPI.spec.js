"use strict"

const getEmails = require("../../src/index").getEmails

describe("email's API", () => {
  let url = "http://localhost"

  const EXPECTED_BODY = [
    {
      email: "test-pact@tau.com",
    },
  ]

  afterEach(() => {
    return provider.verify()
  })

  describe("Email Tests", () => {
    beforeEach(() => {
      const interaction = {
        state: "I have a list of emails",
        uponReceiving: "a request for emails",
        withRequest: {
          method: "GET",
          path: "/emails",
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

    it("returns a sucessful body", () => {
      return getEmails({
        url,
        port,
      }).then(response => {
        expect(response.headers["content-type"]).toEqual("application/json")
        expect(response.data).toEqual(EXPECTED_BODY)
        expect(response.status).toEqual(200)
      })
    })
  })
})
