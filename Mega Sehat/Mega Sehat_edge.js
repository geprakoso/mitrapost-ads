/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Bg',
                            type: 'image',
                            rect: ['0', '0', '1456px', '180px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Untitled-1_0006_Layer-1.png",'0px','0px']
                        },
                        {
                            id: '_1',
                            type: 'image',
                            rect: ['-333px', '0px', '321px', '180px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Untitled-1_0005_Doctor_with_Patient_RGB.png",'0px','0px']
                        },
                        {
                            id: 'border',
                            type: 'image',
                            rect: ['277px', '0', '250px', '180px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"rect_0003_Rectangle-1.png",'0px','0px']
                        },
                        {
                            id: 'rect_1',
                            type: 'image',
                            rect: ['1046px', '52px', '313px', '76px', 'auto', 'auto'],
                            opacity: 0,
                            fill: ["rgba(0,0,0,0)",im+"Untitled-1_0004_Rounded-Rectangle-1.png",'0px','0px']
                        },
                        {
                            id: 'rect_2',
                            type: 'image',
                            rect: ['1084px', '72px', '238px', '36px', 'auto', 'auto'],
                            opacity: 0,
                            fill: ["rgba(0,0,0,0)",im+"Untitled-1_0002_Daftar-Sekarang.png",'0px','0px']
                        },
                        {
                            id: '_2',
                            type: 'image',
                            rect: ['75px', '70px', '808px', '56px', 'auto', 'auto'],
                            opacity: 0,
                            fill: ["rgba(0,0,0,0)",im+"Untitled-1_0003_Klinik-Pratama-Mega-Sehat-Pati.png",'0px','0px']
                        },
                        {
                            id: '_3',
                            type: 'image',
                            rect: ['356px', '185px', '1054px', '52px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Untitled-1_0001_Kesehatan-adalah-aset-paling-berharga-anda.png",'0px','0px']
                        },
                        {
                            id: '_4',
                            type: 'image',
                            rect: ['346px', '68px', '1067px', '40px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Untitled-1_0000_Konsultasikan-kesehatan-anda-bersama-kami.png",'0px','0px']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: [undefined, undefined, '1456px', '180px'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 10000,
                    autoPlay: true,
                    data: [
                        [
                            "eid34",
                            "opacity",
                            7250,
                            250,
                            "linear",
                            "${rect_1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid5",
                            "left",
                            0,
                            500,
                            "linear",
                            "${_1}",
                            '-333px',
                            '0px'
                        ],
                        [
                            "eid22",
                            "left",
                            6750,
                            250,
                            "linear",
                            "${_1}",
                            '0px',
                            '-326px'
                        ],
                        [
                            "eid24",
                            "left",
                            10000,
                            0,
                            "linear",
                            "${_1}",
                            '-326px',
                            '-326px'
                        ],
                        [
                            "eid18",
                            "top",
                            4250,
                            250,
                            "linear",
                            "${_4}",
                            '183px',
                            '68px'
                        ],
                        [
                            "eid20",
                            "top",
                            6750,
                            250,
                            "linear",
                            "${_4}",
                            '68px',
                            '-50px'
                        ],
                        [
                            "eid28",
                            "opacity",
                            7250,
                            250,
                            "linear",
                            "${_2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10",
                            "top",
                            500,
                            250,
                            "linear",
                            "${_3}",
                            '185px',
                            '72px'
                        ],
                        [
                            "eid13",
                            "top",
                            4000,
                            250,
                            "linear",
                            "${_3}",
                            '72px',
                            '-56px'
                        ],
                        [
                            "eid32",
                            "opacity",
                            7250,
                            250,
                            "linear",
                            "${rect_2}",
                            '0.000000',
                            '1'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("Mega%20Sehat_edgeActions.js");
})("EDGE-459484599");
