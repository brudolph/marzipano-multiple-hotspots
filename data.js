var APP_DATA = {
  "scenes": [
    {
      "id": "0-nc540_pano_01rgb_color0000",
      "name": "NC540_Pano_01.RGB_color.0000",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.33852286649794827,
        "pitch": 0.1152108815946935,
        "fov": 1.4620109976495501
      },
      "linkHotspots": [
        {
          "yaw": 0.28461826033994164,
          "pitch": 0.1379181314234721,
          "rotation": 13.351768777756625,
          "target": "1-nc540_pano_02rgb_color0000"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-nc540_pano_02rgb_color0000",
      "name": "NC540_Pano_02.RGB_color.0000",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.5007508290267388,
        "pitch": 0.337601778734955,
        "fov": 1.4620109976495501
      },
      "linkHotspots": [
        {
          "yaw": -2.5371649629562523,
          "pitch": 0.1992814422535627,
          "rotation": 5.497787143782138,
          "target": "0-nc540_pano_01rgb_color0000"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.23390867336916799,
          "pitch": 0.3622139338026713,
          "title": "Test",
          "text": "Lorem ipsum"
        }
      ]
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
