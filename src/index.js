"use strict"

const axios = require("axios")

exports.getEmails = endpoint => {
  const url = endpoint.url
  const port = endpoint.port

  return axios.request({
    method: "GET",
    baseURL: `${url}:${port}`,
    url: "/emails",
    headers: { Accept: "application/json" },
  })
}

exports.getClients = endpoint => {
  const url = endpoint.url
  const port = endpoint.port

  return axios.request({
    method: "GET",
    baseURL: `${url}:${port}`,
    url: "/clients?clientId=2414e594-625a-4f9d-95ce-5143d7deb860",
    headers: { Accept: "application/json" },
  })
}
