var election = new Datamap({
    id: 'madness',
    responsive: true,
    scope: 'usa',
    aspectRatio: 0.5625,
    element: document.getElementById('container'),
    setProjection: function(element) {
        var projection = d3.geo.albersUsa()
        var path = d3.geo.path()
            .projection(projection);
        return {
            path: path,
            projection: projection
        };
    },
    geographyConfig: {
        highlightBorderColor: '#222222',
        popupTemplate: function(geography, data) {
            return '<div class="hoverinfo"><h4>' + geography.properties.name + '</h4><p><strong>Bill Status:</strong> ' + data.fillKey + '</p><p><strong>Data</strong>: ' + data.dataStuff + ' </p>'
        },

        highlightBorderWidth: 0
    },
    fills: {
        'Introduced': '#CC4731',
        'Passed': '#306596',
        'No Bill': '#A9C0DE',
        'Tester': '#bada55',
        defaultFill: '#EDDC4E'
    },
    data: {
        "AZ": {
            "fillKey": "Tester",
            "electoralVotes": 5,
            "dataStuff": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in est eu mi malesuada lacinia. Sed fermentum, quam nec porta fermentum, quam ex molestie nisi, quis luctus enim purus nec tellus. Cras imperdiet, nibh vitae ullamcorper dignissim, ex nulla molestie enim, vitae varius mi sem et diam. Sed nec viverra neque. In ut efficitur tortor, vel suscipit augue. Donec ut dictum sapien. Nunc auctor eleifend ipsum in maximus. Quisque dui sem, eleifend sed eros sit amet, vulputate elementum turpis."
        },
        "CO": {
            "fillKey": "No Bill",
            "electoralVotes": 5,
            "dataStuff": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in est eu mi malesuada lacinia. Sed fermentum, quam nec porta fermentum, quam ex molestie nisi, quis luctus enim purus nec tellus. Cras imperdiet, nibh vitae ullamcorper dignissim, ex nulla molestie enim, vitae varius mi sem et diam. Sed nec viverra neque. In ut efficitur tortor, vel suscipit augue. Donec ut dictum sapien. Nunc auctor eleifend ipsum in maximus. Quisque dui sem, eleifend sed eros sit amet, vulputate elementum turpis."
        },
        "DE": {
            "fillKey": "Passed",
            "electoralVotes": 32,
            "dataStuff": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in est eu mi malesuada lacinia. Sed fermentum, quam nec porta fermentum, quam ex molestie nisi, quis luctus enim purus nec tellus. Cras imperdiet, nibh vitae ullamcorper dignissim, ex nulla molestie enim, vitae varius mi sem et diam. Sed nec viverra neque. In ut efficitur tortor, vel suscipit augue. Donec ut dictum sapien. Nunc auctor eleifend ipsum in maximus. Quisque dui sem, eleifend sed eros sit amet, vulputate elementum turpis."
        },
        "FL": {
            "fillKey": "No Bill",
            "electoralVotes": 29,
            "dataStuff": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in est eu mi malesuada lacinia. Sed fermentum, quam nec porta fermentum, quam ex molestie nisi, quis luctus enim purus nec tellus. Cras imperdiet, nibh vitae ullamcorper dignissim, ex nulla molestie enim, vitae varius mi sem et diam. Sed nec viverra neque. In ut efficitur tortor, vel suscipit augue. Donec ut dictum sapien. Nunc auctor eleifend ipsum in maximus. Quisque dui sem, eleifend sed eros sit amet, vulputate elementum turpis."
        },
        "GA": {
            "fillKey": "Introduced",
            "electoralVotes": 32,
            "dataStuff": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in est eu mi malesuada lacinia. Sed fermentum, quam nec porta fermentum, quam ex molestie nisi, quis luctus enim purus nec tellus. Cras imperdiet, nibh vitae ullamcorper dignissim, ex nulla molestie enim, vitae varius mi sem et diam. Sed nec viverra neque. In ut efficitur tortor, vel suscipit augue. Donec ut dictum sapien. Nunc auctor eleifend ipsum in maximus. Quisque dui sem, eleifend sed eros sit amet, vulputate elementum turpis."
        },
        "HI": {
            "fillKey": "Passed",
            "electoralVotes": 32,
            "dataStuff": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in est eu mi malesuada lacinia. Sed fermentum, quam nec porta fermentum, quam ex molestie nisi, quis luctus enim purus nec tellus. Cras imperdiet, nibh vitae ullamcorper dignissim, ex nulla molestie enim, vitae varius mi sem et diam. Sed nec viverra neque. In ut efficitur tortor, vel suscipit augue. Donec ut dictum sapien. Nunc auctor eleifend ipsum in maximus. Quisque dui sem, eleifend sed eros sit amet, vulputate elementum turpis."
        },
        "ID": {
            "fillKey": "Introduced",
            "electoralVotes": 32,
            "dataStuff": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in est eu mi malesuada lacinia. Sed fermentum, quam nec porta fermentum, quam ex molestie nisi, quis luctus enim purus nec tellus. Cras imperdiet, nibh vitae ullamcorper dignissim, ex nulla molestie enim, vitae varius mi sem et diam. Sed nec viverra neque. In ut efficitur tortor, vel suscipit augue. Donec ut dictum sapien. Nunc auctor eleifend ipsum in maximus. Quisque dui sem, eleifend sed eros sit amet, vulputate elementum turpis."
        },
        "IL": {
            "fillKey": "Passed",
            "electoralVotes": 32,
            "dataStuff": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in est eu mi malesuada lacinia. Sed fermentum, quam nec porta fermentum, quam ex molestie nisi, quis luctus enim purus nec tellus. Cras imperdiet, nibh vitae ullamcorper dignissim, ex nulla molestie enim, vitae varius mi sem et diam. Sed nec viverra neque. In ut efficitur tortor, vel suscipit augue. Donec ut dictum sapien. Nunc auctor eleifend ipsum in maximus. Quisque dui sem, eleifend sed eros sit amet, vulputate elementum turpis."
        },
        "IN": {
            "fillKey": "Introduced",
            "electoralVotes": 11,
            "dataStuff": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in est eu mi malesuada lacinia. Sed fermentum, quam nec porta fermentum, quam ex molestie nisi, quis luctus enim purus nec tellus. Cras imperdiet, nibh vitae ullamcorper dignissim, ex nulla molestie enim, vitae varius mi sem et diam. Sed nec viverra neque. In ut efficitur tortor, vel suscipit augue. Donec ut dictum sapien. Nunc auctor eleifend ipsum in maximus. Quisque dui sem, eleifend sed eros sit amet, vulputate elementum turpis."
        },
        "IA": {
            "fillKey": "No Bill",
            "electoralVotes": 11,
            "dataStuff": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in est eu mi malesuada lacinia. Sed fermentum, quam nec porta fermentum, quam ex molestie nisi, quis luctus enim purus nec tellus. Cras imperdiet, nibh vitae ullamcorper dignissim, ex nulla molestie enim, vitae varius mi sem et diam. Sed nec viverra neque. In ut efficitur tortor, vel suscipit augue. Donec ut dictum sapien. Nunc auctor eleifend ipsum in maximus. Quisque dui sem, eleifend sed eros sit amet, vulputate elementum turpis."
        },
        "KS": {
            "fillKey": "Introduced",
            "electoralVotes": 32,
            "dataStuff": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in est eu mi malesuada lacinia. Sed fermentum, quam nec porta fermentum, quam ex molestie nisi, quis luctus enim purus nec tellus. Cras imperdiet, nibh vitae ullamcorper dignissim, ex nulla molestie enim, vitae varius mi sem et diam. Sed nec viverra neque. In ut efficitur tortor, vel suscipit augue. Donec ut dictum sapien. Nunc auctor eleifend ipsum in maximus. Quisque dui sem, eleifend sed eros sit amet, vulputate elementum turpis."
        },
        "KY": {
            "fillKey": "Introduced",
            "electoralVotes": 32,
            "dataStuff": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in est eu mi malesuada lacinia. Sed fermentum, quam nec porta fermentum, quam ex molestie nisi, quis luctus enim purus nec tellus. Cras imperdiet, nibh vitae ullamcorper dignissim, ex nulla molestie enim, vitae varius mi sem et diam. Sed nec viverra neque. In ut efficitur tortor, vel suscipit augue. Donec ut dictum sapien. Nunc auctor eleifend ipsum in maximus. Quisque dui sem, eleifend sed eros sit amet, vulputate elementum turpis."
        },
        "LA": {
            "fillKey": "Introduced",
            "electoralVotes": 32,
            "dataStuff": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in est eu mi malesuada lacinia. Sed fermentum, quam nec porta fermentum, quam ex molestie nisi, quis luctus enim purus nec tellus. Cras imperdiet, nibh vitae ullamcorper dignissim, ex nulla molestie enim, vitae varius mi sem et diam. Sed nec viverra neque. In ut efficitur tortor, vel suscipit augue. Donec ut dictum sapien. Nunc auctor eleifend ipsum in maximus. Quisque dui sem, eleifend sed eros sit amet, vulputate elementum turpis."
        },
        "MD": {
            "fillKey": "Passed",
            "electoralVotes": 32,
            "dataStuff": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in est eu mi malesuada lacinia. Sed fermentum, quam nec porta fermentum, quam ex molestie nisi, quis luctus enim purus nec tellus. Cras imperdiet, nibh vitae ullamcorper dignissim, ex nulla molestie enim, vitae varius mi sem et diam. Sed nec viverra neque. In ut efficitur tortor, vel suscipit augue. Donec ut dictum sapien. Nunc auctor eleifend ipsum in maximus. Quisque dui sem, eleifend sed eros sit amet, vulputate elementum turpis."
        },
        "ME": {
            "fillKey": "Passed",
            "electoralVotes": 32,
            "dataStuff": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in est eu mi malesuada lacinia. Sed fermentum, quam nec porta fermentum, quam ex molestie nisi, quis luctus enim purus nec tellus. Cras imperdiet, nibh vitae ullamcorper dignissim, ex nulla molestie enim, vitae varius mi sem et diam. Sed nec viverra neque. In ut efficitur tortor, vel suscipit augue. Donec ut dictum sapien. Nunc auctor eleifend ipsum in maximus. Quisque dui sem, eleifend sed eros sit amet, vulputate elementum turpis."
        },
        "MA": {
            "fillKey": "Passed",
            "electoralVotes": 32,
            "dataStuff": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in est eu mi malesuada lacinia. Sed fermentum, quam nec porta fermentum, quam ex molestie nisi, quis luctus enim purus nec tellus. Cras imperdiet, nibh vitae ullamcorper dignissim, ex nulla molestie enim, vitae varius mi sem et diam. Sed nec viverra neque. In ut efficitur tortor, vel suscipit augue. Donec ut dictum sapien. Nunc auctor eleifend ipsum in maximus. Quisque dui sem, eleifend sed eros sit amet, vulputate elementum turpis."
        },
        "MN": {
            "fillKey": "Passed",
            "electoralVotes": 32,
            "dataStuff": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in est eu mi malesuada lacinia. Sed fermentum, quam nec porta fermentum, quam ex molestie nisi, quis luctus enim purus nec tellus. Cras imperdiet, nibh vitae ullamcorper dignissim, ex nulla molestie enim, vitae varius mi sem et diam. Sed nec viverra neque. In ut efficitur tortor, vel suscipit augue. Donec ut dictum sapien. Nunc auctor eleifend ipsum in maximus. Quisque dui sem, eleifend sed eros sit amet, vulputate elementum turpis."
        },
        "MI": {
            "fillKey": "Passed",
            "electoralVotes": 32,
            "dataStuff": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in est eu mi malesuada lacinia. Sed fermentum, quam nec porta fermentum, quam ex molestie nisi, quis luctus enim purus nec tellus. Cras imperdiet, nibh vitae ullamcorper dignissim, ex nulla molestie enim, vitae varius mi sem et diam. Sed nec viverra neque. In ut efficitur tortor, vel suscipit augue. Donec ut dictum sapien. Nunc auctor eleifend ipsum in maximus. Quisque dui sem, eleifend sed eros sit amet, vulputate elementum turpis."
        },
        "MS": {
            "fillKey": "Introduced",
            "electoralVotes": 32,
            "dataStuff": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in est eu mi malesuada lacinia. Sed fermentum, quam nec porta fermentum, quam ex molestie nisi, quis luctus enim purus nec tellus. Cras imperdiet, nibh vitae ullamcorper dignissim, ex nulla molestie enim, vitae varius mi sem et diam. Sed nec viverra neque. In ut efficitur tortor, vel suscipit augue. Donec ut dictum sapien. Nunc auctor eleifend ipsum in maximus. Quisque dui sem, eleifend sed eros sit amet, vulputate elementum turpis."
        },
        "MO": {
            "fillKey": "Introduced",
            "electoralVotes": 13,
            "dataStuff": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in est eu mi malesuada lacinia. Sed fermentum, quam nec porta fermentum, quam ex molestie nisi, quis luctus enim purus nec tellus. Cras imperdiet, nibh vitae ullamcorper dignissim, ex nulla molestie enim, vitae varius mi sem et diam. Sed nec viverra neque. In ut efficitur tortor, vel suscipit augue. Donec ut dictum sapien. Nunc auctor eleifend ipsum in maximus. Quisque dui sem, eleifend sed eros sit amet, vulputate elementum turpis."
        },
        "MT": {
            "fillKey": "Introduced",
            "electoralVotes": 32,
            "dataStuff": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in est eu mi malesuada lacinia. Sed fermentum, quam nec porta fermentum, quam ex molestie nisi, quis luctus enim purus nec tellus. Cras imperdiet, nibh vitae ullamcorper dignissim, ex nulla molestie enim, vitae varius mi sem et diam. Sed nec viverra neque. In ut efficitur tortor, vel suscipit augue. Donec ut dictum sapien. Nunc auctor eleifend ipsum in maximus. Quisque dui sem, eleifend sed eros sit amet, vulputate elementum turpis."
        },
        "NC": {
            "fillKey": "No Bill",
            "electoralVotes": 32,
            "dataStuff": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in est eu mi malesuada lacinia. Sed fermentum, quam nec porta fermentum, quam ex molestie nisi, quis luctus enim purus nec tellus. Cras imperdiet, nibh vitae ullamcorper dignissim, ex nulla molestie enim, vitae varius mi sem et diam. Sed nec viverra neque. In ut efficitur tortor, vel suscipit augue. Donec ut dictum sapien. Nunc auctor eleifend ipsum in maximus. Quisque dui sem, eleifend sed eros sit amet, vulputate elementum turpis."
        },
        "NE": {
            "fillKey": "Introduced",
            "electoralVotes": 32,
            "dataStuff": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in est eu mi malesuada lacinia. Sed fermentum, quam nec porta fermentum, quam ex molestie nisi, quis luctus enim purus nec tellus. Cras imperdiet, nibh vitae ullamcorper dignissim, ex nulla molestie enim, vitae varius mi sem et diam. Sed nec viverra neque. In ut efficitur tortor, vel suscipit augue. Donec ut dictum sapien. Nunc auctor eleifend ipsum in maximus. Quisque dui sem, eleifend sed eros sit amet, vulputate elementum turpis."
        },
        "NV": {
            "fillKey": "Introduced",
            "electoralVotes": 32,
            "dataStuff": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in est eu mi malesuada lacinia. Sed fermentum, quam nec porta fermentum, quam ex molestie nisi, quis luctus enim purus nec tellus. Cras imperdiet, nibh vitae ullamcorper dignissim, ex nulla molestie enim, vitae varius mi sem et diam. Sed nec viverra neque. In ut efficitur tortor, vel suscipit augue. Donec ut dictum sapien. Nunc auctor eleifend ipsum in maximus. Quisque dui sem, eleifend sed eros sit amet, vulputate elementum turpis."
        },
        "NH": {
            "fillKey": "No Bill",
            "electoralVotes": 32,
            "dataStuff": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in est eu mi malesuada lacinia. Sed fermentum, quam nec porta fermentum, quam ex molestie nisi, quis luctus enim purus nec tellus. Cras imperdiet, nibh vitae ullamcorper dignissim, ex nulla molestie enim, vitae varius mi sem et diam. Sed nec viverra neque. In ut efficitur tortor, vel suscipit augue. Donec ut dictum sapien. Nunc auctor eleifend ipsum in maximus. Quisque dui sem, eleifend sed eros sit amet, vulputate elementum turpis."
        },
        "NJ": {
            "fillKey": "Passed",
            "electoralVotes": 32,
            "dataStuff": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in est eu mi malesuada lacinia. Sed fermentum, quam nec porta fermentum, quam ex molestie nisi, quis luctus enim purus nec tellus. Cras imperdiet, nibh vitae ullamcorper dignissim, ex nulla molestie enim, vitae varius mi sem et diam. Sed nec viverra neque. In ut efficitur tortor, vel suscipit augue. Donec ut dictum sapien. Nunc auctor eleifend ipsum in maximus. Quisque dui sem, eleifend sed eros sit amet, vulputate elementum turpis."
        },
        "NY": {
            "fillKey": "Passed",
            "electoralVotes": 32,
            "dataStuff": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in est eu mi malesuada lacinia. Sed fermentum, quam nec porta fermentum, quam ex molestie nisi, quis luctus enim purus nec tellus. Cras imperdiet, nibh vitae ullamcorper dignissim, ex nulla molestie enim, vitae varius mi sem et diam. Sed nec viverra neque. In ut efficitur tortor, vel suscipit augue. Donec ut dictum sapien. Nunc auctor eleifend ipsum in maximus. Quisque dui sem, eleifend sed eros sit amet, vulputate elementum turpis."
        },
        "ND": {
            "fillKey": "Introduced",
            "electoralVotes": 32,
            "dataStuff": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in est eu mi malesuada lacinia. Sed fermentum, quam nec porta fermentum, quam ex molestie nisi, quis luctus enim purus nec tellus. Cras imperdiet, nibh vitae ullamcorper dignissim, ex nulla molestie enim, vitae varius mi sem et diam. Sed nec viverra neque. In ut efficitur tortor, vel suscipit augue. Donec ut dictum sapien. Nunc auctor eleifend ipsum in maximus. Quisque dui sem, eleifend sed eros sit amet, vulputate elementum turpis."
        },
        "NM": {
            "fillKey": "Passed",
            "electoralVotes": 32,
            "dataStuff": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in est eu mi malesuada lacinia. Sed fermentum, quam nec porta fermentum, quam ex molestie nisi, quis luctus enim purus nec tellus. Cras imperdiet, nibh vitae ullamcorper dignissim, ex nulla molestie enim, vitae varius mi sem et diam. Sed nec viverra neque. In ut efficitur tortor, vel suscipit augue. Donec ut dictum sapien. Nunc auctor eleifend ipsum in maximus. Quisque dui sem, eleifend sed eros sit amet, vulputate elementum turpis."
        },
        "OH": {
            "fillKey": "No Bill",
            "electoralVotes": 32,
            "dataStuff": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in est eu mi malesuada lacinia. Sed fermentum, quam nec porta fermentum, quam ex molestie nisi, quis luctus enim purus nec tellus. Cras imperdiet, nibh vitae ullamcorper dignissim, ex nulla molestie enim, vitae varius mi sem et diam. Sed nec viverra neque. In ut efficitur tortor, vel suscipit augue. Donec ut dictum sapien. Nunc auctor eleifend ipsum in maximus. Quisque dui sem, eleifend sed eros sit amet, vulputate elementum turpis."
        },
        "OK": {
            "fillKey": "Introduced",
            "electoralVotes": 32,
            "dataStuff": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in est eu mi malesuada lacinia. Sed fermentum, quam nec porta fermentum, quam ex molestie nisi, quis luctus enim purus nec tellus. Cras imperdiet, nibh vitae ullamcorper dignissim, ex nulla molestie enim, vitae varius mi sem et diam. Sed nec viverra neque. In ut efficitur tortor, vel suscipit augue. Donec ut dictum sapien. Nunc auctor eleifend ipsum in maximus. Quisque dui sem, eleifend sed eros sit amet, vulputate elementum turpis."
        },
        "OR": {
            "fillKey": "Passed",
            "electoralVotes": 32,
            "dataStuff": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in est eu mi malesuada lacinia. Sed fermentum, quam nec porta fermentum, quam ex molestie nisi, quis luctus enim purus nec tellus. Cras imperdiet, nibh vitae ullamcorper dignissim, ex nulla molestie enim, vitae varius mi sem et diam. Sed nec viverra neque. In ut efficitur tortor, vel suscipit augue. Donec ut dictum sapien. Nunc auctor eleifend ipsum in maximus. Quisque dui sem, eleifend sed eros sit amet, vulputate elementum turpis."
        },
        "PA": {
            "fillKey": "Passed",
            "electoralVotes": 32,
            "dataStuff": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in est eu mi malesuada lacinia. Sed fermentum, quam nec porta fermentum, quam ex molestie nisi, quis luctus enim purus nec tellus. Cras imperdiet, nibh vitae ullamcorper dignissim, ex nulla molestie enim, vitae varius mi sem et diam. Sed nec viverra neque. In ut efficitur tortor, vel suscipit augue. Donec ut dictum sapien. Nunc auctor eleifend ipsum in maximus. Quisque dui sem, eleifend sed eros sit amet, vulputate elementum turpis."
        },
        "RI": {
            "fillKey": "Passed",
            "electoralVotes": 32,
            "dataStuff": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in est eu mi malesuada lacinia. Sed fermentum, quam nec porta fermentum, quam ex molestie nisi, quis luctus enim purus nec tellus. Cras imperdiet, nibh vitae ullamcorper dignissim, ex nulla molestie enim, vitae varius mi sem et diam. Sed nec viverra neque. In ut efficitur tortor, vel suscipit augue. Donec ut dictum sapien. Nunc auctor eleifend ipsum in maximus. Quisque dui sem, eleifend sed eros sit amet, vulputate elementum turpis."
        },
        "SC": {
            "fillKey": "Introduced",
            "electoralVotes": 32,
            "dataStuff": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in est eu mi malesuada lacinia. Sed fermentum, quam nec porta fermentum, quam ex molestie nisi, quis luctus enim purus nec tellus. Cras imperdiet, nibh vitae ullamcorper dignissim, ex nulla molestie enim, vitae varius mi sem et diam. Sed nec viverra neque. In ut efficitur tortor, vel suscipit augue. Donec ut dictum sapien. Nunc auctor eleifend ipsum in maximus. Quisque dui sem, eleifend sed eros sit amet, vulputate elementum turpis."
        },
        "SD": {
            "fillKey": "Introduced",
            "electoralVotes": 32,
            "dataStuff": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in est eu mi malesuada lacinia. Sed fermentum, quam nec porta fermentum, quam ex molestie nisi, quis luctus enim purus nec tellus. Cras imperdiet, nibh vitae ullamcorper dignissim, ex nulla molestie enim, vitae varius mi sem et diam. Sed nec viverra neque. In ut efficitur tortor, vel suscipit augue. Donec ut dictum sapien. Nunc auctor eleifend ipsum in maximus. Quisque dui sem, eleifend sed eros sit amet, vulputate elementum turpis."
        },
        "TN": {
            "fillKey": "Introduced",
            "electoralVotes": 32,
            "dataStuff": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in est eu mi malesuada lacinia. Sed fermentum, quam nec porta fermentum, quam ex molestie nisi, quis luctus enim purus nec tellus. Cras imperdiet, nibh vitae ullamcorper dignissim, ex nulla molestie enim, vitae varius mi sem et diam. Sed nec viverra neque. In ut efficitur tortor, vel suscipit augue. Donec ut dictum sapien. Nunc auctor eleifend ipsum in maximus. Quisque dui sem, eleifend sed eros sit amet, vulputate elementum turpis."
        },
        "TX": {
            "fillKey": "Introduced",
            "electoralVotes": 32,
            "dataStuff": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in est eu mi malesuada lacinia. Sed fermentum, quam nec porta fermentum, quam ex molestie nisi, quis luctus enim purus nec tellus. Cras imperdiet, nibh vitae ullamcorper dignissim, ex nulla molestie enim, vitae varius mi sem et diam. Sed nec viverra neque. In ut efficitur tortor, vel suscipit augue. Donec ut dictum sapien. Nunc auctor eleifend ipsum in maximus. Quisque dui sem, eleifend sed eros sit amet, vulputate elementum turpis."
        },
        "UT": {
            "fillKey": "Introduced",
            "electoralVotes": 32,
            "dataStuff": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in est eu mi malesuada lacinia. Sed fermentum, quam nec porta fermentum, quam ex molestie nisi, quis luctus enim purus nec tellus. Cras imperdiet, nibh vitae ullamcorper dignissim, ex nulla molestie enim, vitae varius mi sem et diam. Sed nec viverra neque. In ut efficitur tortor, vel suscipit augue. Donec ut dictum sapien. Nunc auctor eleifend ipsum in maximus. Quisque dui sem, eleifend sed eros sit amet, vulputate elementum turpis."
        },
        "WI": {
            "fillKey": "Passed",
            "electoralVotes": 32,
            "dataStuff": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in est eu mi malesuada lacinia. Sed fermentum, quam nec porta fermentum, quam ex molestie nisi, quis luctus enim purus nec tellus. Cras imperdiet, nibh vitae ullamcorper dignissim, ex nulla molestie enim, vitae varius mi sem et diam. Sed nec viverra neque. In ut efficitur tortor, vel suscipit augue. Donec ut dictum sapien. Nunc auctor eleifend ipsum in maximus. Quisque dui sem, eleifend sed eros sit amet, vulputate elementum turpis."
        },
        "VA": {
            "fillKey": "No Bill",
            "electoralVotes": 32,
            "dataStuff": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in est eu mi malesuada lacinia. Sed fermentum, quam nec porta fermentum, quam ex molestie nisi, quis luctus enim purus nec tellus. Cras imperdiet, nibh vitae ullamcorper dignissim, ex nulla molestie enim, vitae varius mi sem et diam. Sed nec viverra neque. In ut efficitur tortor, vel suscipit augue. Donec ut dictum sapien. Nunc auctor eleifend ipsum in maximus. Quisque dui sem, eleifend sed eros sit amet, vulputate elementum turpis."
        },
        "VT": {
            "fillKey": "Passed",
            "electoralVotes": 32,
            "dataStuff": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in est eu mi malesuada lacinia. Sed fermentum, quam nec porta fermentum, quam ex molestie nisi, quis luctus enim purus nec tellus. Cras imperdiet, nibh vitae ullamcorper dignissim, ex nulla molestie enim, vitae varius mi sem et diam. Sed nec viverra neque. In ut efficitur tortor, vel suscipit augue. Donec ut dictum sapien. Nunc auctor eleifend ipsum in maximus. Quisque dui sem, eleifend sed eros sit amet, vulputate elementum turpis."
        },
        "WA": {
            "fillKey": "Passed",
            "electoralVotes": 32,
            "dataStuff": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in est eu mi malesuada lacinia. Sed fermentum, quam nec porta fermentum, quam ex molestie nisi, quis luctus enim purus nec tellus. Cras imperdiet, nibh vitae ullamcorper dignissim, ex nulla molestie enim, vitae varius mi sem et diam. Sed nec viverra neque. In ut efficitur tortor, vel suscipit augue. Donec ut dictum sapien. Nunc auctor eleifend ipsum in maximus. Quisque dui sem, eleifend sed eros sit amet, vulputate elementum turpis."
        },
        "WV": {
            "fillKey": "Introduced",
            "electoralVotes": 32,
            "dataStuff": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in est eu mi malesuada lacinia. Sed fermentum, quam nec porta fermentum, quam ex molestie nisi, quis luctus enim purus nec tellus. Cras imperdiet, nibh vitae ullamcorper dignissim, ex nulla molestie enim, vitae varius mi sem et diam. Sed nec viverra neque. In ut efficitur tortor, vel suscipit augue. Donec ut dictum sapien. Nunc auctor eleifend ipsum in maximus. Quisque dui sem, eleifend sed eros sit amet, vulputate elementum turpis."
        },
        "WY": {
            "fillKey": "Introduced",
            "electoralVotes": 32,
            "dataStuff": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in est eu mi malesuada lacinia. Sed fermentum, quam nec porta fermentum, quam ex molestie nisi, quis luctus enim purus nec tellus. Cras imperdiet, nibh vitae ullamcorper dignissim, ex nulla molestie enim, vitae varius mi sem et diam. Sed nec viverra neque. In ut efficitur tortor, vel suscipit augue. Donec ut dictum sapien. Nunc auctor eleifend ipsum in maximus. Quisque dui sem, eleifend sed eros sit amet, vulputate elementum turpis."
        },
        "CA": {
            "fillKey": "Passed",
            "electoralVotes": 32,
            "dataStuff": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in est eu mi malesuada lacinia. Sed fermentum, quam nec porta fermentum, quam ex molestie nisi, quis luctus enim purus nec tellus. Cras imperdiet, nibh vitae ullamcorper dignissim, ex nulla molestie enim, vitae varius mi sem et diam. Sed nec viverra neque. In ut efficitur tortor, vel suscipit augue. Donec ut dictum sapien. Nunc auctor eleifend ipsum in maximus. Quisque dui sem, eleifend sed eros sit amet, vulputate elementum turpis."
        },
        "CT": {
            "fillKey": "Passed",
            "electoralVotes": 32,
            "dataStuff": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in est eu mi malesuada lacinia. Sed fermentum, quam nec porta fermentum, quam ex molestie nisi, quis luctus enim purus nec tellus. Cras imperdiet, nibh vitae ullamcorper dignissim, ex nulla molestie enim, vitae varius mi sem et diam. Sed nec viverra neque. In ut efficitur tortor, vel suscipit augue. Donec ut dictum sapien. Nunc auctor eleifend ipsum in maximus. Quisque dui sem, eleifend sed eros sit amet, vulputate elementum turpis."
        },
        "AK": {
            "fillKey": "Introduced",
            "electoralVotes": 32,
            "dataStuff": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in est eu mi malesuada lacinia. Sed fermentum, quam nec porta fermentum, quam ex molestie nisi, quis luctus enim purus nec tellus. Cras imperdiet, nibh vitae ullamcorper dignissim, ex nulla molestie enim, vitae varius mi sem et diam. Sed nec viverra neque. In ut efficitur tortor, vel suscipit augue. Donec ut dictum sapien. Nunc auctor eleifend ipsum in maximus. Quisque dui sem, eleifend sed eros sit amet, vulputate elementum turpis."
        },
        "AR": {
            "fillKey": "Introduced",
            "electoralVotes": 32,
            "dataStuff": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in est eu mi malesuada lacinia. Sed fermentum, quam nec porta fermentum, quam ex molestie nisi, quis luctus enim purus nec tellus. Cras imperdiet, nibh vitae ullamcorper dignissim, ex nulla molestie enim, vitae varius mi sem et diam. Sed nec viverra neque. In ut efficitur tortor, vel suscipit augue. Donec ut dictum sapien. Nunc auctor eleifend ipsum in maximus. Quisque dui sem, eleifend sed eros sit amet, vulputate elementum turpis."
        },
        "AL": {
            "fillKey": "Introduced",
            "electoralVotes": 32,
            "dataStuff": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in est eu mi malesuada lacinia. Sed fermentum, quam nec porta fermentum, quam ex molestie nisi, quis luctus enim purus nec tellus. Cras imperdiet, nibh vitae ullamcorper dignissim, ex nulla molestie enim, vitae varius mi sem et diam. Sed nec viverra neque. In ut efficitur tortor, vel suscipit augue. Donec ut dictum sapien. Nunc auctor eleifend ipsum in maximus. Quisque dui sem, eleifend sed eros sit amet, vulputate elementum turpis."
        }
    }
});
election.labels();



function clicked(d) {
  var x, y, k;

  if (d && centered !== d) {
    var centroid = path.centroid(d);
    x = centroid[0];
    y = centroid[1];
    k = 4;
    centered = d;
  } else {
    x = width / 2;
    y = height / 2;
    k = 1;
    centered = null;
  }

  g.selectAll("path")
      .classed("active", centered && function(d) { return d === centered; });

  g.transition()
      .duration(750)
      .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")scale(" + k + ")translate(" + -x + "," + -y + ")")
      .style("stroke-width", 1.5 / k + "px");
}

window.addEventListener('resize', function() {
    election.resize();
});
