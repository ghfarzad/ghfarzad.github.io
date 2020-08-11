function hidePopup() {
    document.getElementById('definition-modal').style.display = 'none';
}

function showPopup(elementName) {
    var content = {
        'instructions' : {
            'definition'   : "Look for the four words around you and hover your cursor over them to learn more.",
            'funFact'      : "",
            'hyperlinks'   : [],
            'isDefinition' : false
        },
        'rethink' : {
            'definition' : 'How do we decouple economic growth from finite resource consumption? This requires redefining our behaviours as consumers and citizens, as well as what our cities could look like in the future.',
            'funFact'    : 'Globally, another 2.5 billion people will be living in urban areas by 2050, putting immense pressure on resources and infrastructure.',
            'hyperlinks' : [
                {
                    'link' : 'https://www.toronto.ca/city-government/planning-development/planning-studies-initiatives/king-street-pilot/',
                    'text' : 'Rethinking King Street'
                },
                {
                    'link' : 'https://www.arup.com/perspectives/publications/research/section/circular-economy-in-the-built-environment',
                    'text' : 'Circular Economy and the Built Environment'
                },
                {
                    'link' : 'https://www.arup.com/expertise/services/advisory-services/sustainable-futures',
                    'text' : 'Find out more about Arup\’s Sustainability expertise'
                }
            ],
            'isDefinition' : true
        },
        'regenerate': {
            'definition' : 'Restoring and retaining the health of our ecosystems by returning recovered biological resources to the biosphere and shifting to renewable energy sources.',
            'funFact'    : 'As of 2018, all new planning applications are required to meet the Toronto Green Standard.',
            'hyperlinks' : [
                {
                    'link' : 'https://www.arup.com/perspectives/publications/research/section/madrid-and-natural',
                    'text' : 'How to regulate a city\’s urban environment using nature-based solutions?'
                },
                {
                    'link' : 'https://www.toronto.ca/city-government/planning-development/official-plan-guidelines/toronto-green-standard/',
                    'text' : 'How the City of Toronto is mandating greener development?'
                }
            ],
            'isDefinition' : true
        },
        'reuse' : {
            'definition' : 'Finding inventive new end-of -life uses that prolong an asset’s life at its optimum value through re-examining supply chains and exploring new ways of collaborating.',
            'funFact'    : '100% of the PVC pipes used for this installation are construction scrap that would have otherwise gone to landfill.',
            'hyperlinks' : [
                {
                    'link' : 'https://www.arup.com/projects/1-triton-square',
                    'text' : 'For an office refurbishment in London, UK, Arup’s proposal to refurbish and reuse existing glazing reduced façade costs by 66%.'
                },
                {
                    'link' : 'https://www.arup.com/perspectives/publications/promotional-materials/section/transform-and-resuse-low-carbon-futures-for-existing-buildings',
                    'text' : 'Read more about how Arup is challenging perceptions about the transformation and reuse of buildings.'
                }
            ],
            'isDefinition' : true
        },
        'reduce' : {
            'definition' : 'Changing habits to limit energy consumption and preventing waste generation where possible to conserve resources.',
            'funFact'    : 'The City of Toronto has implemented the following Community Reduce & Reuse programs: Urban Harvest, Sewing Repair Hubs, Bicycle Repair Hubs, Community Composting, and Sharing and Reuse Spaces.',
            'hyperlinks' : [
                {
                    'link' : 'https://www.toronto.ca/wp-content/uploads/2017/10/8ed4-Toronto-Waste-Strategy-Exec-Summary-FINAL-AODA.pdf',
                    'text' : 'City of Toronto Waste Strategy Summary.'
                },
                {
                    'link' : 'https://www.toronto.ca/services-payments/recycling-organics-garbage/long-term-waste-strategy/working-toward-a-circular-economy/',
                    'text' : 'How the Toronto Waste Strategy relates to Circular Economy.'
                },
                {
                    'link' : 'https://www.toronto.ca/services-payments/recycling-organics-garbage/long-term-waste-strategy/waste-reduction/community-reduce-reuse-programs/',
                    'text' : 'Read more about the City of Toronto’s Community Reduce & Reuse programs.'
                }
            ],
            'isDefinition' : true
        }
    };

    document.getElementById('contentDef').innerHTML = content[elementName]['definition'];
    document.getElementById('contentFact').innerHTML = content[elementName]['funFact'];

    document.getElementById('contentLinks').innerHTML = '';

    content[elementName]['hyperlinks'].forEach(function (item, index) {
        var node1 = document.createElement("LI");
        var node2 = document.createElement("A");
        node2.href = item['link'];
        node2.target = '_blank';
        node2.innerHTML = item['text'];

        node1.appendChild(node2);
        document.getElementById('contentLinks').appendChild(node1);
    });

    document.getElementById('contentDidYouKnow').innerHTML = content[elementName].isDefinition ? 'Did you know?' : '';

    var modal = document.getElementById('definition-modal');
    modal.style.display = 'block';

    var span = document.getElementsByClassName('close')[0];
    span.onclick = function() {
      modal.style.display = 'none';
    }
}

var cameraView;

var constraints = {
    audio: false,
    video: {
        facingMode: "environment",
    }
};

// Access the device camera and stream to cameraView
function cameraStart() {
    cameraView = document.querySelector("#webcam");
    navigator.mediaDevices
        .getUserMedia(constraints)
        .then(function(stream) {
        cameraView.srcObject = stream;
    })
    .catch(function(error) {
        console.error("Oops. Something is broken.", error);
    });
}

function initializeElement(el)
{
    el.setAttribute('scale', { 'x' : 0.1, 'y' :  0.1, 'z' :  0.1 });

    var positions = {
        'regenerate' : { 'x' : -1.9, 'y' : 0.2, 'z' : -3 },
        'rethink' :    { 'x' : -1.3, 'y' : 0.2, 'z' : -3 },
        'reduce' :     { 'x' : -1.2, 'y' : 0.2, 'z' : -3 },
        'reuse' :      { 'x' : -1,   'y' : 0.2, 'z' : -3 }
    }
    el.setAttribute('position', positions[el.getAttributeNames()[0]]);
}

function initializeMdoelBoundingBox(el)
{
    //var mesh = el.getObject3D('mesh');
    //var bbox = new THREE.Box3().setFromObject(mesh);
    //var centerX = (bbox.max.x + bbox.min.x) / 2;
    //var centerY = (bbox.max.y + bbox.min.y) / 2;
    //var centerZ = (bbox.max.z + bbox.min.z) / 2;

    //var centroid = { 'x' : centerX, 'y': centerY, 'z': centerZ }
    //var depth    = Math.abs(bbox.max.z - bbox.min.z);
    //var height   = Math.abs(bbox.max.y - bbox.min.y);
    //var width    = Math.abs(bbox.max.x - bbox.min.x);
    //var rotation = el.getAttribute('rotation');

    // TODO: Couldn't reliably get sbbox spec at runtime
    // as 'model-loaded' event seem to get fired prematurley.
    var specs = {
        'regenerate' : {
            'centroid': {x: 19.4721050262451, y: 1.694560706615445, z: -0.125},
            'depth': 1.75,
            'height': 5.87168753147125,
            'rotation': {x: 0, y: 0, z: 0},
            'width': 38.9442100524902
        },
        'rethink' : {
            'centroid': {x: 13.54986095428465, y: 2.3901673816144484, z: -0.125},
            'depth': 1.75,
            'height': 4.933751769363884,
            'rotation': {x: 0, y: 0, z: 0},
            'width': 27.0997219085693
        },
        'reduce' : {
            'centroid': {x: 12.9780330657959, y: 2.3430962227284886, z: -0.125},
            'depth': 1.75,
            'height': 4.8326359465718225,
            'rotation': {x: 0, y: 0, z: 0},
            'width': 25.9560661315918
        },
        'reuse' : {
            'centroid': {x: 10.9138765335083, y: 1.7625523470342137, z: -0.125},
            'depth': 1.75,
            'height': 3.6715481951832727,
            'rotation': {x: 0, y: 0, z: 0},
            'width': 21.8277530670166
        }
    }

    var spec = specs[el.getAttributeNames()[0]];
    var box = document.createElement('a-box');
    box.setAttribute('depth',    spec.depth);
    box.setAttribute('height',   spec.height);
    box.setAttribute('width',    spec.width);
    box.setAttribute('position', spec.centroid);
    box.setAttribute('rotation', spec.otation);
    box.setAttribute('color',    'red');
    box.setAttribute('visible',  false);

    box.addEventListener('click', function () {
        showPopup(el.getAttributeNames()[0]);
    });
    box.addEventListener('mouseleave', function () {
        hidePopup();
    });

    el.appendChild(box);
}

window.onclick = function(event) {
    if (event.target == document.getElementById('definition-close-btn')) {
        document.getElementById('definition-modal').style.display = 'none';

        var instructions = document.getElementById('instructions');
        if (instructions) {
            instructions.remove();
        }

        var scene = document.querySelector('a-scene');
        scene.style.display = 'block';
    }
};

// Start the video stream when the window loads
window.addEventListener(
    'load',
    function() {
        cameraStart();
    },
    false
);

AFRAME.registerComponent('regenerate', {
init: function () {
  var el = this.el;

  initializeElement(el);
  el.addEventListener('model-loaded', (e) => {
    initializeMdoelBoundingBox(el);
  });
}
});

AFRAME.registerComponent('reduce', {
init: function () {
  var el = this.el;

  initializeElement(el);
  el.addEventListener('model-loaded', (e) => {
    initializeMdoelBoundingBox(el);
  });
}
});

AFRAME.registerComponent('rethink', {
init: function () {
  var el = this.el;

  initializeElement(el);
  el.addEventListener('model-loaded', (e) => {
    initializeMdoelBoundingBox(el);
  });
}
});

AFRAME.registerComponent('reuse', {
init: function () {
  var el = this.el;

  initializeElement(el);
  el.addEventListener('model-loaded', (e) => {
    initializeMdoelBoundingBox(el);
  });
}
});

AFRAME.registerComponent('instructions', {
init: function () {
  var el = this.el;

  el.addEventListener('click', function () {
    showPopup(el.getAttributeNames()[0]);
  });
}
});

