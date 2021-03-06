define({ "api": [
  {
    "type": "get",
    "url": "/api/url/:id",
    "title": "Get original Url from Shortner",
    "name": "Get_Url",
    "group": "Urls",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Mandatory UrlId</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"response\": {\n  \"success\": \"true\",\n  \"message\": {\"url\": \"Url Object\"}\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/index.js",
    "groupTitle": "Urls",
    "sampleRequest": [
      {
        "url": "https://satnami-url.herokuapp.com/api/url/:id"
      }
    ]
  },
  {
    "type": "post",
    "url": "/api/url",
    "title": "Shortner Url",
    "name": "Shortner_Url",
    "group": "Urls",
    "examples": [
      {
        "title": "Example body:",
        "content": "body:\n{\n  \"url\": \"http://www.example.com\"\n}",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>Mandatory UrlId</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"response\": {\n  \"success\": \"true\",\n  \"message\": {\"url\": \"Url Object\"}\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/index.js",
    "groupTitle": "Urls",
    "sampleRequest": [
      {
        "url": "https://satnami-url.herokuapp.com/api/url"
      }
    ]
  }
] });
