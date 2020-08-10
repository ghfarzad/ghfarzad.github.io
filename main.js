function hidePopup(el) {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

function showPopup(elementName) {
    var content = {
        'rethink' : {
            'definition' : 'How do we decouple economic growth from finite resource consumption? This requires rethinking and redefining our behaviours as consumers and citizens, as well as what our cities could look like in the future.',
            'funFact'    : 'Did you know?',
            'hyperlinks' : [
                {
                    'link' : 'https://www.toronto.ca/city-government/planning-development/planning-studies-initiatives/king-street-pilot/',
                    'text' : 'Rethinking King Street'
                },
                {
                    'link' : 'https://www.toronto.ca/city-government/planning-development/planning-studies-initiatives/king-street-pilot/',
                    'text' : 'Circular Economy and the Built Environment'
                },
                {
                    'link' : 'https://www.arup.com/expertise/services/advisory-services/sustainable-futures',
                    'text' : 'Find out more about Arup\’s Sustainability expertise'
                }
            ]
        },
        'regenerate': {
            'definition' : 'Restoring and retaining the health of our ecosystems by returning recovered biological resources to the biosphere and shifting to renewable energy sources.',
            'funFact'    : 'Did you know? From City?',
            'hyperlinks' : [
                {
                    'link' : 'https://www.arup.com/perspectives/publications/research/section/madrid-and-natural',
                    'text' : 'How to regulate a city\’s urban environment using nature-based solutions?'
                }
            ]
        },
        'reuse' : {
            'definition' : 'Prolonging an asset’s life at its optimum value by maximizing utilization and finding inventive new uses through new ways of collaborating and re-examining supply chains.',
            'funFact'    : 'Did you know? 100% of the PVC pipes used for this installation are construction scrap that would have otherwise gone to landfill.',
            'hyperlinks' : [
            ]
        },
        'reduce' : {
            'definition' : 'Preventing waste generation where possible to conserve resources.',
            'funFact'    : 'Did you know? From City?',
            'hyperlinks' : [
                {
                    'link' : 'https://www.toronto.ca/wp-content/uploads/2017/10/8ed4-Toronto-Waste-Strategy-Exec-Summary-FINAL-AODA.pdf',
                    'text' : 'City of Toronto Waste Strategy Summary'
                },
                {
                    'link' : 'https://www.toronto.ca/services-payments/recycling-organics-garbage/long-term-waste-strategy/working-toward-a-circular-economy/',
                    'text' : 'How the Toronto Waste Strategy relates to Circular Economy'
                }
            ]
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

    var modal = document.getElementById("myModal");
    modal.style.display = "block";

    var span = document.getElementsByClassName("close")[0];
    span.onclick = function() {
      modal.style.display = "none";
    }

    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
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

// Start the video stream when the window loads
window.addEventListener("load", cameraStart, false);


function initializeElement(el)
{
    el.setAttribute('scale',    { 'x' : 0.1, 'y' :  0.1, 'z' :  0.1 });
    el.setAttribute('position', { 'x' : 0,   'y' :  0,   'z' : -3   });
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
        hidePopup(el.getAttributeNames()[0]);
    });

    el.appendChild(box);
}

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

