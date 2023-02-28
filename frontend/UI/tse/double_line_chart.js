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

var double_line_chart_options = {
    series: [
        {
            name: "فروش حقوقی",
            data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6],

        },
        {
            name: "خرید حقوقی",
            data: [1.4, 2, 5, 1.5, 2.5, 2.8, 3.8, 7]
        },

    ],
    colors: ["#FF0000", "#267B26"],
    xaxis: {
        categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
        style: {
            fontSize: '10px',
            fontFamily: 'Vazirmatn',
        },
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
            rotate: -90,
            offsetX: -40,
            offsetY: 0,
            align: 'left',

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