var farsi_local = {
    "name": "fa",
    "options": {
        "months": [
            "فروردین",
            "اردیبهشت",
            "خرداد",
            "تیر",
            "مرداد",
            "شهریور",
            "مهر",
            "آبان",
            "آذر",
            "دی",
            "بهمن",
            "اسفند"
        ],
        "shortMonths": [
            "فرو",
            "ارد",
            "خرد",
            "تیر",
            "مرد",
            "شهر",
            "مهر",
            "آبا",
            "آذر",
            "دی",
            "بهمـ",
            "اسفـ"
        ],
        "days": [
            "یکشنبه",
            "دوشنبه",
            "سه شنبه",
            "چهارشنبه",
            "پنجشنبه",
            "جمعه",
            "شنبه"
        ],
        "shortDays": ["ی", "د", "س", "چ", "پ", "ج", "ش"],
        "toolbar": {
            "exportToSVG": "دانلود SVG",
            "exportToPNG": "دانلود PNG",
            "exportToCSV": "دانلود CSV",
            "menu": "منو",
            "selection": "انتخاب",
            "selectionZoom": "بزرگنمایی انتخابی",
            "zoomIn": "بزرگنمایی",
            "zoomOut": "کوچکنمایی",
            "pan": "پیمایش",
            "reset": "بازنشانی بزرگنمایی"
        }
    }
};

var double_line_chart_options_template = {
    series: [
        {
            name: "فروش حقوقی",
            data: [100, 100, 95, 79, 80, 91, 86, 91, 91, 84, 84, 72, 58, 59, 55, 59, 71, 74, 68, 78, 74, 73, 69, 44, 54, 57, 61, 59, 63, 58, 64, 64, 65, 71, 70, 73, 73, 76, 74, 63, 63, 65, 78, 78, 80, 64, 71, 72, 65, 54, 74, 76, 76, 79, 73, 80, 95, 112, 112, 115, 114, 111, 117, 126, 121, 130, 138, 133, 114, 102, 102, 103, 103, 108, 114, 129, 125, 128, 123, 112, 125, 121, 109, 120, 113, 124, 130, 140, 142, 138, 133, 134, 130, 135, 144, 156, 155, 155, 157, 147, 136, 130, 137, 148, 145, 146, 161, 171, 177, 192, 181, 169, 168, 177, 195, 198, 200, 203, 213, 192, 193, 192, 192, 198, 179, 179, 160, 172, 161, 162, 170, 157, 155, 169, 189, 183, 183, 182, 182, 166, 164, 162, 162, 156, 165, 160, 165, 141, 142, 142, 138, 154, 153, 144, 154, 147, 145, 129, 152, 156, 139, 147, 127, 128, 128, 128, 128, 137, 128, 129, 132, 134, 136, 137, 139, 122, 116, 95, 87, 84, 79, 67, 64, 69, 83, 77, 76, 73, 70, 70, 59, 59, 51, 49, 44, 43, 46, 58, 52, 54, 62, 60, 70, 72, 71, 77, 72, 91, 86, 93, 83, 73, 58, 66, 71, 77, 87, 87, 88, 89, 95, 97, 103, 101, 110, 102, 96, 84, 74, 64, 64, 59, 59, 54, 57, 56, 75, 75, 67, 67, 70],

        },
        {
            name: "خرید حقوقی",
            data: [1.4, 2, 5, 1.5, 2.5, 2.8, 3.8, 7]
        },

    ],
    colors: ["#FF0000", "#267B26"],
    xaxis: {
        type: 'category',
        categories: ['09:00', '09:01', '09:02', '09:03', '09:04', '09:05', '09:06', '09:07', '09:08', '09:09', '09:10', '09:11', '09:12', '09:13', '09:14', '09:15', '09:16', '09:17', '09:18', '09:19', '09:20', '09:21', '09:22', '09:23', '09:24', '09:25', '09:26', '09:27', '09:28', '09:29', '09:30', '09:31', '09:32', '09:33', '09:34', '09:35', '09:36', '09:37', '09:38', '09:39', '09:40', '09:41', '09:42', '09:43', '09:44', '09:45', '09:46', '09:47', '09:48', '09:49', '09:50', '09:51', '09:52', '09:53', '09:54', '09:55', '09:56', '09:57', '09:58', '09:59', '10:00', '10:01', '10:02', '10:03', '10:04', '10:05', '10:06', '10:07', '10:08', '10:09', '10:10', '10:11', '10:12', '10:13', '10:14', '10:15', '10:16', '10:17', '10:18', '10:19', '10:20', '10:21', '10:22', '10:23', '10:24', '10:25', '10:26', '10:27', '10:28', '10:29', '10:30', '10:31', '10:32', '10:33', '10:34', '10:35', '10:36', '10:37', '10:38', '10:39', '10:40', '10:41', '10:42', '10:43', '10:44', '10:45', '10:46', '10:47', '10:48', '10:49', '10:50', '10:51', '10:52', '10:53', '10:54', '10:55', '10:56', '10:57', '10:58', '10:59', '11:00', '11:01', '11:02', '11:03', '11:04', '11:05', '11:06', '11:07', '11:08', '11:09', '11:10', '11:11', '11:12', '11:13', '11:14', '11:15', '11:16', '11:17', '11:18', '11:19', '11:20', '11:21', '11:22', '11:23', '11:24', '11:25', '11:26', '11:27', '11:28', '11:29', '11:30', '11:31', '11:32', '11:33', '11:34', '11:35', '11:36', '11:37', '11:38', '11:39', '11:40', '11:41', '11:42', '11:43', '11:44', '11:45', '11:46', '11:47', '11:48', '11:49', '11:50', '11:51', '11:52', '11:53', '11:54', '11:55', '11:56', '11:57', '11:58', '11:59', '12:00', '12:01', '12:02', '12:03', '12:04', '12:05', '12:06', '12:07', '12:08', '12:09', '12:10', '12:11', '12:12', '12:13', '12:14', '12:15', '12:16', '12:17', '12:18', '12:19', '12:20', '12:21', '12:22', '12:23', '12:24', '12:25', '12:26', '12:27', '12:28', '12:29', '12:30', '12:31', '12:32', '12:33', '12:34', '12:35', '12:36', '12:37', '12:38', '12:39', '12:40', '12:41', '12:42', '12:43', '12:44', '12:45', '12:46', '12:47', '12:48', '12:49', '12:50', '12:51', '12:52', '12:53', '12:54', '12:55', '12:56', '12:57', '12:58', '12:59', '13:00'],
        style: {
            fontSize: '10px',
            fontFamily: 'Vazirmatn',
        },
        tickAmount: undefined,
        tickPlacement: 'between',
        min: undefined,
        max: undefined,
        range: undefined,
        floating: false,
        decimalsInFloat: undefined,
        overwriteCategories: undefined,
        position: 'bottom',


    },
    yaxis: {
        labels: {
            show: true,
            align: 'right',
            style: {
                fontSize: '10px',
                fontFamily: 'Vazirmatn',
                cssClass: 'apexcharts-yaxis-label',
            },
            offsetX: 0,
            offsetY: 0,
            rotate: 0,
            formatter: undefined,
        },
        title: {
            //rotate: -90,
            offsetX: -40,
            offsetY: 0,
            //align: 'left',

            style: {
                fontSize: '10px',
                fontFamily: 'Vazirmatn',
            },
            text: 'میلیارد تومان'
        },
    },

    stroke: {
        curve: 'straight',
        width: [1, 1],
    },

    markers: {
      size: 0,
    },

    fill: {
        colors: undefined,
        opacity: 1,
        type: 'solid',
        gradient: {
            shade: 'dark',
            type: "horizontal",
            shadeIntensity: 0.5,
            gradientToColors: undefined,
            inverseColors: false,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 50, 100],
            colorStops: []
        },
        image: {
            src: [],
            width: undefined,
            height: undefined
        },
        pattern: {
            style: 'verticalLines',
            width: 6,
            height: 6,
            strokeWidth: 2,
        },
    },




    annotations: {
        position: 'front' ,

    },


    chart: {
        locales: [farsi_local],
        defaultLocale: 'fa',
        type: 'line',

        stacked: false,
        height: 300,
        zoom: {
            type: 'x',
            enabled: true,
            autoScaleYaxis: true
        },

        toolbar: {
            show: true,
            offsetX: -10,
            offsetY: 10,
            tools: {
                  download: false,
                  selection: true,
                  zoom: true,
                  zoomin: false,
                  zoomout: false,
                  pan: false,
                  reset: true | '<img src="/static/icons/reset.png" width="20">',
                  customIcons: []
            },

            autoSelected: 'zoom'
        },

    },



    title: {
        text: 'ارزش خرید و فروش حقوقی 60 سهم بزرگ',
        align: 'center',
        margin: 10,
        offsetX: 0,
        offsetY: 10,
        floating: false,

        style: {
            fontSize:  '14px',
            fontWeight:  'bold',
            fontSize: '12px',
            fontFamily: 'Vazirmatn',
            color:  '#263238',
        },
    },

    tooltip: {
        enabled: true,
        enabledOnSeries: undefined,
        shared: true,
        followCursor: false,
        intersect: false,
        inverseOrder: false,
        custom: undefined,
        fillSeriesColor: false,

        style: {
            fontSize: '10px',
            fontFamily: 'Vazirmatn',
            direction: 'ltr',

        },
        marker: {
            show: true,
        },
        onDatasetHover: {
            highlightDataSeries: false,
        },
        x: {
            show: true,
            format: 'dd MMM',
            formatter: undefined,
        },
        y: {
            formatter: undefined,

            title: {
                formatter: (seriesName) => seriesName,
            },
        },
        z: {
            formatter: undefined,
            title: 'Size: '
        },

        items: {
            display: 'flex',
            direction: 'ltr',
        },
        fixed: {
            enabled: false,
            position: 'topRight',
            offsetX: 0,
            offsetY: 0,
        },
    },

    legend: {
        show: true,
        position: 'bottom',
        horizontalAlign: 'center',
        fontSize: '12px',
        fontFamily: 'Vazirmatn',
        floating: false,
        formatter: undefined,
        inverseOrder: false,
        customLegendItems: [],
        offsetX: 0,
        offsetY: 0,


        labels: {
            colors: undefined,
            useSeriesColors: false
        },


        markers: {
            width: 12,
            height: 12,
            strokeWidth: 0,
            strokeColor: '#fff',
            fillColors: undefined,
            radius: 4,
            customHTML: undefined,
            onClick: undefined,
            offsetX: 2,
            offsetY: 0,
        },


        itemMargin: {
            horizontal: 10,
            vertical: 5,
        },


        onItemClick: {
            toggleDataSeries: true
        },
        onItemHover: {
          highlightDataSeries: true
        },
    },
};