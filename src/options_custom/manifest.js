// SAMPLE
this.manifest = {
    "name": "Tab Player",
    "icon": "icon.png",
    "settings": [
        {
            "tab": "Tab Player Settings",
            "group": "Sound",
            "name": "noti_volume",
            "type": "slider",
            "label": "Notification volume:",
            "max": 1,
            "min": 0,
            "step": 0.01,
            "display": true,
            "displayModifier": function (value) {
                return (value * 100).floor() + "%";
            }
        },
        {
            "tab": "Tab Player Settings",
            "group": "Sound",
            "name": "sound_volume",
            "type": "slider",
            "label": "Sound volume:",
            "max": 100,
            "min": 0,
            "step": 1,
            "display": true,
            "displayModifier": function (value) {
                return value + "%";
            }
        },
    ],
    "alignment": [
        [
            "noti_volume",
            "sound_volume"
        ]
    ]
};
