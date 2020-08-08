function changeColor(el, color) {
  el.setAttribute('color', color);
}

function hidePopup(el) {
    changeColor(el, 'grey');
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

function showPopup(el) {
    var content = {
        'rethink'   : {
            'definition' : 'How do we decouple economic growth from finite resource consumption? This requires rethinking and redefining our behaviours as consumers and citizens, as well as what our cities could look like in the future.',
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
                    'text' : 'Find out more about Arup’s Sustainability expertise'
                }
            ]
        },
        'regenerate': {
            'definition' : 'Restoring and retaining the health of our ecosystems by returning recovered biological resources to the biosphere and shifting to renewable energy sources.',
            'hyperlinks' : [
                {
                    'link' : 'https://www.arup.com/perspectives/publications/research/section/madrid-and-natural',
                    'text' : 'How to regulate a city’s urban environment using nature-based solutions?'
                }
            ]
        },
        'reuse'     : {
            'definition' : 'Prolonging an asset’s life at its optimum value by maximizing utilization and finding inventive new uses through new ways of collaborating and re-examining supply chains.',
            'hyperlinks' : [
            ]
        },
        'reduce' : {
            'definition' : 'Preventing waste generation where possible to conserve resources.',
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

    document.getElementById('contentDef').innerHTML = content[el.getAttributeNames()[0]]['definition'];

    document.getElementById('contentLinks').innerHTML = '';

    content[el.getAttributeNames()[0]]['hyperlinks'].forEach(function (item, index) {
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
//window.addEventListener("load", cameraStart, false);


function initializeElement(el)
{
    el.setAttribute('scale',    {'x' :  0.1, 'y' :  0.1, 'z' :  0.1 });
    el.setAttribute('position', { 'x' : 0,   'y' :  0,   'z' : -3   });
    el.setAttribute('rotation', { 'x' : 0,   'y' : -20,  'z' :  0   });
}

// Component to change to a sequential color on cursor suspension.
AFRAME.registerComponent('cursor-listener', {
  init: function () {
    var lastIndex = -1;
    var COLORS = ['red', 'green', 'blue'];
    this.el.addEventListener('click', function (evt) {
      lastIndex = (lastIndex + 1) % COLORS.length;
      this.setAttribute('material', 'color', COLORS[lastIndex]);
      console.log('I was clicked at: ', evt.detail.intersection.point);
    });
  }
});

AFRAME.registerComponent('regenerate', {
init: function () {
  var data = this.data;
  var el = this.el;

  el.addEventListener('click', function () {
      showPopup(el);
  });
  el.addEventListener('mouseleave', function () {
      hidePopup(el);
  });

  initializeElement(el);
}
});

AFRAME.registerComponent('reduce', {
init: function () {
  var data = this.data;
  var el = this.el;

  el.addEventListener('click', function () {
      showPopup(el);
  });
  el.addEventListener('mouseleave', function () {
      hidePopup(el);
  });

  initializeElement(el);
}
});

AFRAME.registerComponent('rethink', {
init: function () {
  var data = this.data;
  var el = this.el;

  el.addEventListener('click', function () {
      showPopup(el);
  });
  el.addEventListener('mouseleave', function () {
      hidePopup(el);
  });

  initializeElement(el);
}
});

AFRAME.registerComponent('reuse', {
init: function () {
  var data = this.data;
  var el = this.el;

  el.addEventListener('click', function () {
      showPopup(el);
  });
  el.addEventListener('mouseleave', function () {
      hidePopup(el);
  });

  initializeElement(el);
}
});
