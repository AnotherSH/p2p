﻿$axure.loadCurrentPage({
  "url":"my_buying_products_1.html",
  "generationDate":new Date(1439459326489.25),
  "isCanvasEnabled":false,
  "variables":["OnLoadVariable",
"canshu",
"wangluo",
"color",
"neicun",
"number",
"login",
"name",
"phonenumber",
"address2",
"back_login_name",
"website_login_name",
"microsite_login_name"],
  "page":{
    "packageId":"da586b96b3e94a3db679a6cbdae2cad5",
    "type":"Axure:Page",
    "name":"my_buying_products",
    "notes":{
},
    "style":{
      "baseStyle":"627587b6038d43cca051c114ac41ad32",
      "pageAlignment":"near",
      "fill":{
        "fillType":"solid",
        "color":0xFFFFFFFF},
      "image":null,
      "imageHorizontalAlignment":"near",
      "imageVerticalAlignment":"near",
      "imageRepeat":"auto",
      "favicon":null,
      "sketchFactor":"0",
      "colorStyle":"appliedColor",
      "fontName":"Applied Font",
      "borderWidth":"0"},
    "adaptiveStyles":{
      "a":{
}},
    "interactionMap":{
},
    "diagram":{
      "objects":[{
          "id":"da64920ef7fd48b9bc989732d071ed10",
          "label":"",
          "type":"buttonShape",
          "styleType":"buttonShape",
          "visible":true,
          "style":{
            "foreGroundFill":{
              "fillType":"solid",
              "color":0xFFFF9900,
              "opacity":1},
            "fill":{
              "fillType":"solid",
              "color":0xFFF2F2F2},
            "location":{
              "x":0,
              "y":-10},
            "size":{
              "width":295,
              "height":40},
            "borderWidth":"-1"},
          "adaptiveStyles":{
            "a":{
}},
          "objects":[{
              "id":"cfd56aaabe97475084c6ea30b1bc2862",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "foreGroundFill":{
                  "fillType":"solid",
                  "color":0xFFFF9900,
                  "opacity":1},
                "fill":{
                  "fillType":"solid",
                  "color":0xFFF2F2F2},
                "location":{
                  "x":0,
                  "y":-10},
                "size":{
                  "width":295,
                  "height":40},
                "borderWidth":"-1"},
              "adaptiveStyles":{
                "a":{
}}}],
          "images":{
            "normal~":"images/vip_1/u90.png"}},
{
          "id":"4350b8c91add4a818fba92c3151b726b",
          "label":"",
          "type":"imageBox",
          "styleType":"imageBox",
          "visible":true,
          "style":{
            "location":{
              "x":10,
              "y":3},
            "size":{
              "width":20,
              "height":20}},
          "adaptiveStyles":{
            "a":{
}},
          "objects":[{
              "id":"ff0e1bd9c80140b18e1dc6b239cec0c1",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "location":{
                  "x":10,
                  "y":3},
                "size":{
                  "width":20,
                  "height":20}},
              "adaptiveStyles":{
                "a":{
}}}],
          "interactionMap":{
            "onClick":{
              "description":"OnClick",
              "cases":[{
                  "description":"用例 1",
                  "isNewIfGroup":false,
                  "actions":[{
                      "action":"linkWindow",
                      "description":"Open Back in Current Window",
                      "target":{
                        "targetType":"backUrl",
                        "includeVariables":false},
                      "linkType":"current"}]}]}},
          "tabbable":true,
          "images":{
            "normal~":"images/buy_records/u2.png"}},
{
          "id":"5f8c12b51aa0462387a1dd156ff42ad5",
          "label":"",
          "type":"repeater",
          "styleType":"repeater",
          "visible":true,
          "style":{
            "location":{
              "x":1,
              "y":31},
            "size":{
              "width":250,
              "height":150}},
          "adaptiveStyles":{
            "a":{
}},
          "interactionMap":{
            "onItemLoad":{
              "description":"OnItemLoad",
              "cases":[{
                  "description":"Case 1",
                  "isNewIfGroup":false,
                  "actions":[{
                      "action":"setFunction",
                      "description":"Set text on xmmc equal to &quot;[[Item.xmmc]]&quot;, and<br> text on lv equal to &quot;[[Item.lv]]&quot;, and<br> text on tze equal to &quot;[[Item.tze]]&quot;, and<br> text on gmrq equal to &quot;[[Item.gmrq]]&quot;, and<br> text on yjsy equal to &quot;[[Item.yjsy]]&quot;",
                      "expr":{
                        "exprType":"block",
                        "subExprs":[{
                            "exprType":"fcall",
                            "functionName":"SetWidgetRichText",
                            "arguments":[{
                                "exprType":"pathLiteral",
                                "isThis":false,
                                "isFocused":false,
                                "isTarget":false,
                                "value":["49a3988df423447d826c391878086f32"]},
{
                                "exprType":"stringLiteral",
                                "value":"[[Item.xmmc]]",
                                "localVariables":{
},
                                "stos":[{
                                    "sto":"item",
                                    "name":"xmmc",
                                    "isTarget":false}]},
{
                                "exprType":"booleanLiteral",
                                "value":true}]},
{
                            "exprType":"fcall",
                            "functionName":"SetWidgetRichText",
                            "arguments":[{
                                "exprType":"pathLiteral",
                                "isThis":false,
                                "isFocused":false,
                                "isTarget":false,
                                "value":["0e49109267864df3b30f3cbb870e920c"]},
{
                                "exprType":"stringLiteral",
                                "value":"[[Item.lv]]",
                                "localVariables":{
},
                                "stos":[{
                                    "sto":"item",
                                    "name":"lv",
                                    "isTarget":false}]},
{
                                "exprType":"booleanLiteral",
                                "value":true}]},
{
                            "exprType":"fcall",
                            "functionName":"SetWidgetRichText",
                            "arguments":[{
                                "exprType":"pathLiteral",
                                "isThis":false,
                                "isFocused":false,
                                "isTarget":false,
                                "value":["65306a322bfe41d2b52257804bdfd58c"]},
{
                                "exprType":"stringLiteral",
                                "value":"[[Item.tze]]",
                                "localVariables":{
},
                                "stos":[{
                                    "sto":"item",
                                    "name":"tze",
                                    "isTarget":false}]},
{
                                "exprType":"booleanLiteral",
                                "value":true}]},
{
                            "exprType":"fcall",
                            "functionName":"SetWidgetRichText",
                            "arguments":[{
                                "exprType":"pathLiteral",
                                "isThis":false,
                                "isFocused":false,
                                "isTarget":false,
                                "value":["844af37ca16b43ae877bd6cb231b6c8b"]},
{
                                "exprType":"stringLiteral",
                                "value":"[[Item.gmrq]]",
                                "localVariables":{
},
                                "stos":[{
                                    "sto":"item",
                                    "name":"gmrq",
                                    "isTarget":false}]},
{
                                "exprType":"booleanLiteral",
                                "value":true}]},
{
                            "exprType":"fcall",
                            "functionName":"SetWidgetRichText",
                            "arguments":[{
                                "exprType":"pathLiteral",
                                "isThis":false,
                                "isFocused":false,
                                "isTarget":false,
                                "value":["ed3ec7454f1a46efac12e4ef4a4edda2"]},
{
                                "exprType":"stringLiteral",
                                "value":"[[Item.yjsy]]",
                                "localVariables":{
},
                                "stos":[{
                                    "sto":"item",
                                    "name":"yjsy",
                                    "isTarget":false}]},
{
                                "exprType":"booleanLiteral",
                                "value":true}]}]}}]}]}},
          "repeaterPropMap":{
            "isolateRadio":true,
            "isolateSelection":true,
            "default":{
              "loadLocalDefault":true,
              "wrap":-1,
              "vertical":true,
              "horizontalSpacing":0,
              "verticalSpacing":0,
              "hasAltColor":false,
              "itemsPerPage":-1,
              "currPage":1,
              "backColor":{
                "r":255,
                "g":255,
                "b":255,
                "a":0},
              "altColor":{
                "r":255,
                "g":255,
                "b":255,
                "a":0}},
            "":{
              "width":294,
              "height":109,
              "loadLocalDefault":true,
              "wrap":1,
              "vertical":false,
              "horizontalSpacing":0,
              "verticalSpacing":0,
              "hasAltColor":false,
              "itemsPerPage":-1,
              "currPage":1,
              "backColor":{
                "r":255,
                "g":255,
                "b":255,
                "a":0},
              "altColor":{
                "r":255,
                "g":255,
                "b":255,
                "a":0}},
            "a":{
              "width":294,
              "height":109}},
          "objects":[{
              "id":"55a3f27f447847b4b68bbdf9277f3ce2",
              "label":"xmmc",
              "type":"buttonShape",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "foreGroundFill":{
                  "fillType":"solid",
                  "color":0xFFFF9966,
                  "opacity":1},
                "location":{
                  "x":13,
                  "y":4},
                "size":{
                  "width":170,
                  "height":16}},
              "adaptiveStyles":{
                "a":{
}},
              "objects":[{
                  "id":"49a3988df423447d826c391878086f32",
                  "label":"",
                  "isContained":true,
                  "type":"richTextPanel",
                  "styleType":"paragraph",
                  "visible":true,
                  "style":{
                    "foreGroundFill":{
                      "fillType":"solid",
                      "color":0xFFFF9966,
                      "opacity":1},
                    "location":{
                      "x":13,
                      "y":4},
                    "size":{
                      "width":170,
                      "height":16}},
                  "adaptiveStyles":{
                    "a":{
}}}],
              "interactionMap":{
                "onClick":{
                  "description":"OnClick",
                  "cases":[{
                      "description":"用例 1",
                      "isNewIfGroup":false,
                      "actions":[{
                          "action":"linkWindow",
                          "description":"Open product_detail_001 in Current Window",
                          "target":{
                            "targetType":"page",
                            "url":"product_detail_001_1.html",
                            "includeVariables":true},
                          "linkType":"current"}]}]}},
              "tabbable":true,
              "images":{
                "normal~":"resources/images/transparent.gif"}},
{
              "id":"e0fecf79400b44128cbb1ce4e87e5c5a",
              "label":"",
              "type":"horizontalLine",
              "styleType":"horizontalLine",
              "visible":true,
              "style":{
                "location":{
                  "x":0,
                  "y":99},
                "size":{
                  "width":294,
                  "height":10},
                "borderFill":{
                  "fillType":"solid",
                  "color":0xFFCCCCCC}},
              "adaptiveStyles":{
                "a":{
}},
              "images":{
                "start~":"resources/images/transparent.gif",
                "end~":"resources/images/transparent.gif",
                "line~":"images/product_detail_001_1/u43_line.png",
                "start~a":"resources/images/transparent.gif",
                "end~a":"resources/images/transparent.gif",
                "line~a":"images/product_detail_001_1/u43_line.png",
                "start~a":"resources/images/transparent.gif",
                "end~a":"resources/images/transparent.gif",
                "line~a":"images/product_detail_001_1/u43_line.png"}},
{
              "id":"43e477c7b23c402ca435e83bf53921c4",
              "label":"lv",
              "type":"buttonShape",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "location":{
                  "x":128,
                  "y":36},
                "size":{
                  "width":31,
                  "height":16}},
              "adaptiveStyles":{
                "a":{
}},
              "objects":[{
                  "id":"0e49109267864df3b30f3cbb870e920c",
                  "label":"",
                  "isContained":true,
                  "type":"richTextPanel",
                  "styleType":"paragraph",
                  "visible":true,
                  "style":{
                    "location":{
                      "x":128,
                      "y":36},
                    "size":{
                      "width":31,
                      "height":16}},
                  "adaptiveStyles":{
                    "a":{
}}}],
              "images":{
                "normal~":"resources/images/transparent.gif"}},
{
              "id":"04084bbf85cf45acae5b178f14c4ad0f",
              "label":"tze",
              "type":"buttonShape",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "location":{
                  "x":210,
                  "y":36},
                "size":{
                  "width":40,
                  "height":16}},
              "adaptiveStyles":{
                "a":{
}},
              "objects":[{
                  "id":"65306a322bfe41d2b52257804bdfd58c",
                  "label":"",
                  "isContained":true,
                  "type":"richTextPanel",
                  "styleType":"paragraph",
                  "visible":true,
                  "style":{
                    "location":{
                      "x":210,
                      "y":36},
                    "size":{
                      "width":40,
                      "height":16}},
                  "adaptiveStyles":{
                    "a":{
}}}],
              "images":{
                "normal~":"resources/images/transparent.gif"}},
{
              "id":"b929ae7dd519422ca49819afe8909223",
              "label":"",
              "type":"buttonShape",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "foreGroundFill":{
                  "fillType":"solid",
                  "color":0xFFE4E4E4,
                  "opacity":1},
                "location":{
                  "x":175,
                  "y":36},
                "size":{
                  "width":31,
                  "height":1}},
              "adaptiveStyles":{
                "a":{
}},
              "objects":[{
                  "id":"007b0952673f400a8c210423cafb5f10",
                  "label":"",
                  "isContained":true,
                  "type":"richTextPanel",
                  "styleType":"paragraph",
                  "visible":true,
                  "style":{
                    "foreGroundFill":{
                      "fillType":"solid",
                      "color":0xFFE4E4E4,
                      "opacity":1},
                    "location":{
                      "x":175,
                      "y":36},
                    "size":{
                      "width":31,
                      "height":1}},
                  "adaptiveStyles":{
                    "a":{
}}}],
              "images":{
                "normal~":"resources/images/transparent.gif"}},
{
              "id":"5dce6889a3bb4715aa58271928a8ccc0",
              "label":"",
              "type":"buttonShape",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "foreGroundFill":{
                  "fillType":"solid",
                  "color":0xFFE4E4E4,
                  "opacity":1},
                "location":{
                  "x":91,
                  "y":36},
                "size":{
                  "width":31,
                  "height":16}},
              "adaptiveStyles":{
                "a":{
}},
              "objects":[{
                  "id":"7273d9013572451cabd6a10877dd0850",
                  "label":"",
                  "isContained":true,
                  "type":"richTextPanel",
                  "styleType":"paragraph",
                  "visible":true,
                  "style":{
                    "foreGroundFill":{
                      "fillType":"solid",
                      "color":0xFFE4E4E4,
                      "opacity":1},
                    "location":{
                      "x":91,
                      "y":36},
                    "size":{
                      "width":31,
                      "height":16}},
                  "adaptiveStyles":{
                    "a":{
}}}],
              "images":{
                "normal~":"resources/images/transparent.gif"}},
{
              "id":"0252bcac09ab4606ba09150ea9042037",
              "label":"",
              "type":"buttonShape",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "foreGroundFill":{
                  "fillType":"solid",
                  "color":0xFFE4E4E4,
                  "opacity":1},
                "location":{
                  "x":91,
                  "y":62},
                "size":{
                  "width":57,
                  "height":16}},
              "adaptiveStyles":{
                "a":{
}},
              "objects":[{
                  "id":"70a64f2f4e30409990c1afbe3fe1e44b",
                  "label":"",
                  "isContained":true,
                  "type":"richTextPanel",
                  "styleType":"paragraph",
                  "visible":true,
                  "style":{
                    "foreGroundFill":{
                      "fillType":"solid",
                      "color":0xFFE4E4E4,
                      "opacity":1},
                    "location":{
                      "x":91,
                      "y":62},
                    "size":{
                      "width":57,
                      "height":16}},
                  "adaptiveStyles":{
                    "a":{
}}}],
              "images":{
                "normal~":"resources/images/transparent.gif"}},
{
              "id":"e4d7723551064b538a4750f3936bd0c7",
              "label":"gmrq",
              "type":"buttonShape",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "location":{
                  "x":161,
                  "y":62},
                "size":{
                  "width":82,
                  "height":16}},
              "adaptiveStyles":{
                "a":{
}},
              "objects":[{
                  "id":"844af37ca16b43ae877bd6cb231b6c8b",
                  "label":"",
                  "isContained":true,
                  "type":"richTextPanel",
                  "styleType":"paragraph",
                  "visible":true,
                  "style":{
                    "location":{
                      "x":161,
                      "y":62},
                    "size":{
                      "width":82,
                      "height":16}},
                  "adaptiveStyles":{
                    "a":{
}}}],
              "images":{
                "normal~":"resources/images/transparent.gif"}},
{
              "id":"844074e8c0e445c39d6c87d210099ff5",
              "label":"",
              "type":"buttonShape",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "foreGroundFill":{
                  "fillType":"solid",
                  "color":0xFFE4E4E4,
                  "opacity":1},
                "location":{
                  "x":91,
                  "y":85},
                "size":{
                  "width":57,
                  "height":16}},
              "adaptiveStyles":{
                "a":{
}},
              "objects":[{
                  "id":"6d9b634c2e6944cc8688b05dcff93ddb",
                  "label":"",
                  "isContained":true,
                  "type":"richTextPanel",
                  "styleType":"paragraph",
                  "visible":true,
                  "style":{
                    "foreGroundFill":{
                      "fillType":"solid",
                      "color":0xFFE4E4E4,
                      "opacity":1},
                    "location":{
                      "x":91,
                      "y":85},
                    "size":{
                      "width":57,
                      "height":16}},
                  "adaptiveStyles":{
                    "a":{
}}}],
              "images":{
                "normal~":"resources/images/transparent.gif"}},
{
              "id":"ef06c371f8ee46dc8a69ad75a5b46088",
              "label":"yjsy",
              "type":"buttonShape",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "location":{
                  "x":162,
                  "y":84},
                "size":{
                  "width":38,
                  "height":16}},
              "adaptiveStyles":{
                "a":{
}},
              "objects":[{
                  "id":"ed3ec7454f1a46efac12e4ef4a4edda2",
                  "label":"",
                  "isContained":true,
                  "type":"richTextPanel",
                  "styleType":"paragraph",
                  "visible":true,
                  "style":{
                    "location":{
                      "x":162,
                      "y":84},
                    "size":{
                      "width":38,
                      "height":16}},
                  "adaptiveStyles":{
                    "a":{
}}}],
              "images":{
                "normal~":"resources/images/transparent.gif"}},
{
              "id":"ee92a89249d24fd582408cec21cb351e",
              "label":"",
              "type":"buttonShape",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "location":{
                  "x":199,
                  "y":84},
                "size":{
                  "width":14,
                  "height":16}},
              "adaptiveStyles":{
                "a":{
}},
              "objects":[{
                  "id":"bcbd8cc79e4b4becbf915f02cdc23520",
                  "label":"",
                  "isContained":true,
                  "type":"richTextPanel",
                  "styleType":"paragraph",
                  "visible":true,
                  "style":{
                    "location":{
                      "x":199,
                      "y":84},
                    "size":{
                      "width":14,
                      "height":16}},
                  "adaptiveStyles":{
                    "a":{
}}}],
              "images":{
                "normal~":"resources/images/transparent.gif"}},
{
              "id":"555896a7398c4f0080f262a647fcb4b9",
              "label":"",
              "type":"buttonShape",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "location":{
                  "x":251,
                  "y":36},
                "size":{
                  "width":14,
                  "height":16}},
              "adaptiveStyles":{
                "a":{
}},
              "objects":[{
                  "id":"d55c0d0a0ad14ab19dbe098f975f909b",
                  "label":"",
                  "isContained":true,
                  "type":"richTextPanel",
                  "styleType":"paragraph",
                  "visible":true,
                  "style":{
                    "location":{
                      "x":251,
                      "y":36},
                    "size":{
                      "width":14,
                      "height":16}},
                  "adaptiveStyles":{
                    "a":{
}}}],
              "images":{
                "normal~":"resources/images/transparent.gif"}},
{
              "id":"7ac20a5ae5844dd7a22bd7ef7e236e73",
              "label":"",
              "type":"buttonShape",
              "styleType":"buttonShape",
              "visible":true,
              "style":{
                "location":{
                  "x":15,
                  "y":38},
                "size":{
                  "width":57,
                  "height":54},
                "borderFill":{
                  "fillType":"solid",
                  "color":0xFFCCCCCC}},
              "adaptiveStyles":{
                "a":{
}},
              "objects":[{
                  "id":"d140b996929648dda851ae40d3596d85",
                  "label":"",
                  "isContained":true,
                  "type":"richTextPanel",
                  "styleType":"paragraph",
                  "visible":true,
                  "style":{
                    "location":{
                      "x":15,
                      "y":38},
                    "size":{
                      "width":57,
                      "height":54},
                    "borderFill":{
                      "fillType":"solid",
                      "color":0xFFCCCCCC}},
                  "adaptiveStyles":{
                    "a":{
}}}],
              "images":{
                "normal~":"images/finances_1/u32.png"}},
{
              "id":"743fd0e11721476eacdb07a00103479a",
              "label":"",
              "type":"imageBox",
              "styleType":"imageBox",
              "visible":true,
              "style":{
                "location":{
                  "x":23,
                  "y":44},
                "size":{
                  "width":41,
                  "height":42}},
              "adaptiveStyles":{
                "a":{
}},
              "objects":[{
                  "id":"d04a99b9c402404b9dcbb2f365f89c3e",
                  "label":"",
                  "isContained":true,
                  "type":"richTextPanel",
                  "styleType":"paragraph",
                  "visible":true,
                  "style":{
                    "location":{
                      "x":23,
                      "y":44},
                    "size":{
                      "width":41,
                      "height":42}},
                  "adaptiveStyles":{
                    "a":{
}}}],
              "images":{
                "normal~":"images/finances_1/u34.png"}},
{
              "id":"9b2c20021ead4ac5b3694990cbc2a494",
              "label":"",
              "type":"horizontalLine",
              "styleType":"horizontalLine",
              "visible":true,
              "style":{
                "location":{
                  "x":13,
                  "y":19},
                "size":{
                  "width":270,
                  "height":10},
                "borderFill":{
                  "fillType":"solid",
                  "color":0xFFCCCCCC},
                "linePattern":"dashed"},
              "adaptiveStyles":{
                "a":{
}},
              "images":{
                "start~":"resources/images/transparent.gif",
                "end~":"resources/images/transparent.gif",
                "line~":"images/vip_1/u17_line.png",
                "start~a":"resources/images/transparent.gif",
                "end~a":"resources/images/transparent.gif",
                "line~a":"images/vip_1/u17_line.png",
                "start~a":"resources/images/transparent.gif",
                "end~a":"resources/images/transparent.gif",
                "line~a":"images/vip_1/u17_line.png"}},
{
              "id":"943a31afd61046bab23496914751317b",
              "label":"",
              "type":"buttonShape",
              "styleType":"buttonShape",
              "visible":true,
              "style":{
                "fontSize":"11px",
                "foreGroundFill":{
                  "fillType":"solid",
                  "color":0xFFFFFFFF,
                  "opacity":1},
                "fill":{
                  "fillType":"solid",
                  "color":0xFFFF9900},
                "location":{
                  "x":180,
                  "y":4},
                "size":{
                  "width":30,
                  "height":14},
                "borderWidth":"-1",
                "cornerRadiusTopLeft":"3"},
              "adaptiveStyles":{
                "a":{
}},
              "objects":[{
                  "id":"1107db991f4247299b73703c440431b8",
                  "label":"",
                  "isContained":true,
                  "type":"richTextPanel",
                  "styleType":"paragraph",
                  "visible":true,
                  "style":{
                    "fontSize":"11px",
                    "foreGroundFill":{
                      "fillType":"solid",
                      "color":0xFFFFFFFF,
                      "opacity":1},
                    "fill":{
                      "fillType":"solid",
                      "color":0xFFFF9900},
                    "location":{
                      "x":180,
                      "y":4},
                    "size":{
                      "width":30,
                      "height":14},
                    "borderWidth":"-1",
                    "cornerRadiusTopLeft":"3"},
                  "adaptiveStyles":{
                    "a":{
}}}],
              "images":{
                "normal~":"images/finances_1/u27.png"}},
{
              "id":"1cfb57f0402d4c4e9487d66b07be4796",
              "label":"",
              "type":"buttonShape",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "fontSize":"11px",
                "foreGroundFill":{
                  "fillType":"solid",
                  "color":0xFFFF9900,
                  "opacity":1},
                "location":{
                  "x":218,
                  "y":5},
                "size":{
                  "width":66,
                  "height":14}},
              "adaptiveStyles":{
                "a":{
}},
              "objects":[{
                  "id":"1b1c65be0c3e4e7a8018349bb133b58e",
                  "label":"",
                  "isContained":true,
                  "type":"richTextPanel",
                  "styleType":"paragraph",
                  "visible":true,
                  "style":{
                    "fontSize":"11px",
                    "foreGroundFill":{
                      "fillType":"solid",
                      "color":0xFFFF9900,
                      "opacity":1},
                    "location":{
                      "x":218,
                      "y":5},
                    "size":{
                      "width":66,
                      "height":14}},
                  "adaptiveStyles":{
                    "a":{
}}}],
              "images":{
                "normal~":"resources/images/transparent.gif"}}],
          "data":[{
              "xh":{
                "type":"text",
                "text":"1"},
              "xmmc":{
                "type":"text",
                "text":"中石化加油站3月期修装款    "},
              "lv":{
                "type":"text",
                "text":"6.5%"},
              "tze":{
                "type":"text",
                "text":"20,000"},
              "gmrq":{
                "type":"text",
                "text":"2015-07-03"},
              "yjsy":{
                "type":"text",
                "text":"5,000"}},
{
              "xh":{
                "type":"text",
                "text":"2"},
              "xmmc":{
                "type":"text",
                "text":"中国移动夏季啤酒采购款    "},
              "lv":{
                "type":"text",
                "text":"7.2%"},
              "tze":{
                "type":"text",
                "text":"15,000"},
              "gmrq":{
                "type":"text",
                "text":"2015-07-02"},
              "yjsy":{
                "type":"text",
                "text":"4,000"}},
{
              "xh":{
                "type":"text",
                "text":"3"},
              "xmmc":{
                "type":"text",
                "text":"中国移动自动客户机款    "},
              "lv":{
                "type":"text",
                "text":"5.6%"},
              "tze":{
                "type":"text",
                "text":"12,000"},
              "gmrq":{
                "type":"text",
                "text":"2015-06-10"},
              "yjsy":{
                "type":"text",
                "text":"2,000"}},
{
              "xh":{
                "type":"text",
                "text":"4"},
              "xmmc":{
                "type":"text",
                "text":"中国电信crm系统建设款    "},
              "lv":{
                "type":"text",
                "text":"8.2%"},
              "tze":{
                "type":"text",
                "text":"30,000"},
              "gmrq":{
                "type":"text",
                "text":"2015-06-08"},
              "yjsy":{
                "type":"text",
                "text":"6,000"}}],
          "dataProps":["xh",
"xmmc",
"lv",
"tze",
"gmrq",
"yjsy"]}]}},
  "masters":{
},
  "objectPaths":{
    "da64920ef7fd48b9bc989732d071ed10":{
      "scriptId":"u0"},
    "cfd56aaabe97475084c6ea30b1bc2862":{
      "scriptId":"u1"},
    "4350b8c91add4a818fba92c3151b726b":{
      "scriptId":"u2"},
    "ff0e1bd9c80140b18e1dc6b239cec0c1":{
      "scriptId":"u3"},
    "5f8c12b51aa0462387a1dd156ff42ad5":{
      "scriptId":"u4"},
    "55a3f27f447847b4b68bbdf9277f3ce2":{
      "scriptId":"u5"},
    "49a3988df423447d826c391878086f32":{
      "scriptId":"u6"},
    "e0fecf79400b44128cbb1ce4e87e5c5a":{
      "scriptId":"u7"},
    "43e477c7b23c402ca435e83bf53921c4":{
      "scriptId":"u8"},
    "0e49109267864df3b30f3cbb870e920c":{
      "scriptId":"u9"},
    "04084bbf85cf45acae5b178f14c4ad0f":{
      "scriptId":"u10"},
    "65306a322bfe41d2b52257804bdfd58c":{
      "scriptId":"u11"},
    "b929ae7dd519422ca49819afe8909223":{
      "scriptId":"u12"},
    "007b0952673f400a8c210423cafb5f10":{
      "scriptId":"u13"},
    "5dce6889a3bb4715aa58271928a8ccc0":{
      "scriptId":"u14"},
    "7273d9013572451cabd6a10877dd0850":{
      "scriptId":"u15"},
    "0252bcac09ab4606ba09150ea9042037":{
      "scriptId":"u16"},
    "70a64f2f4e30409990c1afbe3fe1e44b":{
      "scriptId":"u17"},
    "e4d7723551064b538a4750f3936bd0c7":{
      "scriptId":"u18"},
    "844af37ca16b43ae877bd6cb231b6c8b":{
      "scriptId":"u19"},
    "844074e8c0e445c39d6c87d210099ff5":{
      "scriptId":"u20"},
    "6d9b634c2e6944cc8688b05dcff93ddb":{
      "scriptId":"u21"},
    "ef06c371f8ee46dc8a69ad75a5b46088":{
      "scriptId":"u22"},
    "ed3ec7454f1a46efac12e4ef4a4edda2":{
      "scriptId":"u23"},
    "ee92a89249d24fd582408cec21cb351e":{
      "scriptId":"u24"},
    "bcbd8cc79e4b4becbf915f02cdc23520":{
      "scriptId":"u25"},
    "555896a7398c4f0080f262a647fcb4b9":{
      "scriptId":"u26"},
    "d55c0d0a0ad14ab19dbe098f975f909b":{
      "scriptId":"u27"},
    "7ac20a5ae5844dd7a22bd7ef7e236e73":{
      "scriptId":"u28"},
    "d140b996929648dda851ae40d3596d85":{
      "scriptId":"u29"},
    "743fd0e11721476eacdb07a00103479a":{
      "scriptId":"u30"},
    "d04a99b9c402404b9dcbb2f365f89c3e":{
      "scriptId":"u31"},
    "9b2c20021ead4ac5b3694990cbc2a494":{
      "scriptId":"u32"},
    "943a31afd61046bab23496914751317b":{
      "scriptId":"u33"},
    "1107db991f4247299b73703c440431b8":{
      "scriptId":"u34"},
    "1cfb57f0402d4c4e9487d66b07be4796":{
      "scriptId":"u35"},
    "1b1c65be0c3e4e7a8018349bb133b58e":{
      "scriptId":"u36"}}});