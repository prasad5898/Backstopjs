report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "../bitmaps_reference/backstop_default_Example_Homepage_0_document_0_phone.png",
        "test": "../bitmaps_test/20220713-134947/backstop_default_Example_Homepage_0_document_0_phone.png",
        "selector": "document",
        "fileName": "backstop_default_Example_Homepage_0_document_0_phone.png",
        "label": "Example Homepage",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "https://example.com",
        "referenceUrl": "https://example1.com",
        "expect": 0,
        "viewportLabel": "phone",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": -273,
            "height": -1384
          },
          "rawMisMatchPercentage": 2.04966381749886,
          "misMatchPercentage": "2.05",
          "analysisTime": 21
        },
        "diffImage": "../bitmaps_test/20220713-134947/failed_diff_backstop_default_Example_Homepage_0_document_0_phone.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/backstop_default_Example_Homepage_0_document_1_tablet.png",
        "test": "../bitmaps_test/20220713-134947/backstop_default_Example_Homepage_0_document_1_tablet.png",
        "selector": "document",
        "fileName": "backstop_default_Example_Homepage_0_document_1_tablet.png",
        "label": "Example Homepage",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "https://example.com",
        "referenceUrl": "https://example1.com",
        "expect": 0,
        "viewportLabel": "tablet",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": -1096
          },
          "rawMisMatchPercentage": 2.4591666946083692,
          "misMatchPercentage": "2.46",
          "analysisTime": 49
        },
        "diffImage": "../bitmaps_test/20220713-134947/failed_diff_backstop_default_Example_Homepage_0_document_1_tablet.png"
      },
      "status": "fail"
    }
  ],
  "id": "backstop_default"
});