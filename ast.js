ast {
    "type": 0,
    "children": [
      {
        "type": 1,
        "tag": "div",
        "props": [],
        "loc": {
          "start": {
            "column": 1,
            "line": 1,
            "offset": 0
          },
          "end": {
            "column": 7,
            "line": 4,
            "offset": 100
          },
          "source": "<div id=\"app\">\n    <div @click=\"add\" :id=\"name\">{{name}}</div>\n    <h1 class=\"item\">技术摸鱼</h1>\n</div>"
        },
        "children": [
          {
            "type": 1,
            "tag": "div",
            "props": [
              {
                "type": 7,
                "name": "on",
                "exp": {
                  "type": 4,
                  "content": "add",
                  "isStatic": false,
                  "loc": {
                    "start": {
                      "column": 18,
                      "line": 2,
                      "offset": 32
                    },
                    "end": {
                      "column": 21,
                      "line": 2,
                      "offset": 35
                    },
                    "source": "add"
                  }
                },
                "arg": {
                  "type": 4,
                  "content": "click",
                  "isStatic": true,
                  "loc": {
                    "start": {
                      "column": 11,
                      "line": 2,
                      "offset": 25
                    },
                    "end": {
                      "column": 16,
                      "line": 2,
                      "offset": 30
                    },
                    "source": "click"
                  }
                },
                "loc": {
                  "start": {
                    "column": 10,
                    "line": 2,
                    "offset": 24
                  },
                  "end": {
                    "column": 22,
                    "line": 2,
                    "offset": 36
                  },
                  "source": "@click=\"add\""
                }
              },
              {
                "type": 7,
                "name": "bind",
                "exp": {
                  "type": 4,
                  "content": "name",
                  "isStatic": false,
                  "loc": {
                    "start": {
                      "column": 28,
                      "line": 2,
                      "offset": 42
                    },
                    "end": {
                      "column": 32,
                      "line": 2,
                      "offset": 46
                    },
                    "source": "name"
                  }
                },
                "arg": {
                  "type": 4,
                  "content": "id",
                  "isStatic": true,
                  "loc": {
                    "start": {
                      "column": 24,
                      "line": 2,
                      "offset": 38
                    },
                    "end": {
                      "column": 26,
                      "line": 2,
                      "offset": 40
                    },
                    "source": "id"
                  }
                },
                "loc": {
                  "start": {
                    "column": 23,
                    "line": 2,
                    "offset": 37
                  },
                  "end": {
                    "column": 33,
                    "line": 2,
                    "offset": 47
                  },
                  "source": ":id=\"name\""
                }
              }
            ],
            "loc": {
              "start": {
                "column": 5,
                "line": 2,
                "offset": 19
              },
              "end": {
                "column": 48,
                "line": 2,
                "offset": 62
              },
              "source": "<div @click=\"add\" :id=\"name\">{{name}}</div>"
            },
            "children": [
              {
                "type": 5,
                "content": {
                  "type": 4,
                  "isStatic": false,
                  "content": "name",
                  "loc": {
                    "start": {
                      "column": 36,
                      "line": 2,
                      "offset": 50
                    },
                    "end": {
                      "column": 40,
                      "line": 2,
                      "offset": 54
                    },
                    "source": "name"
                  }
                },
                "loc": {
                  "start": {
                    "column": 34,
                    "line": 2,
                    "offset": 48
                  },
                  "end": {
                    "column": 42,
                    "line": 2,
                    "offset": 56
                  },
                  "source": "{{name}}"
                }
              }
            ]
          },
          {
            "type": 1,
            "tag": "h1",
            "props": [],
            "loc": {
              "start": {
                "column": 5,
                "line": 3,
                "offset": 67
              },
              "end": {
                "column": 31,
                "line": 3,
                "offset": 93
              },
              "source": "<h1 class=\"item\">技术摸鱼</h1>"
            },
            "children": [
              {
                "type": 2,
                "content": "技术摸鱼",
                "loc": {
                  "start": {
                    "column": 22,
                    "line": 3,
                    "offset": 84
                  },
                  "end": {
                    "column": 26,
                    "line": 3,
                    "offset": 88
                  },
                  "source": "技术摸鱼"
                }
              }
            ]
          }
        ]
      }
    ],
    "helpers": [],
    "components": [],
    "directives": [],
    "hoists": [],
    "imports": [],
    "cached": 0,
    "temps": 0,
    "loc": {
      "start": {
        "column": 1,
        "line": 1,
        "offset": 0
      },
      "end": {
        "column": 7,
        "line": 4,
        "offset": 100
      },
      "source": "<div id=\"app\">\n    <div @click=\"add\" :id=\"name\">{{name}}</div>\n    <h1 class=\"item\">技术摸鱼</h1>\n</div>"
    }
  }