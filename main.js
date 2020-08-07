function changeColor(el, color) {
  el.setAttribute('color', color);
}

function hidePopup(el) {
    changeColor(el, 'grey');
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

function showPopup(el) {
    changeColor(el, 'red');

    var div = document.getElementById('contentDef');
    div.innerHTML = 'Here goes the definition for ' + el.getAttribute('value');

    var hyperlinkData = {
        'regenerate': {
            'link' : 'https://www.arup.com/perspectives/publications/research/section/circular-economy-in-the-built-environment',
            'text' : 'Circular Economy in the built Environment'
        },
        'reduce' : {
            'link' : 'https://www.toronto.ca/services-payments/recycling-organics-garbage/long-term-waste-strategy/working-toward-a-circular-economy/',
            'text' : 'The City of Toronto\'s Circular Economy Highlights'
        },
        'rethink'   : {
            'link' : 'https://www.arup.com/projects/business-guide-to-low-carbon-economy',
            'text' : 'Low Carbon Economy'
        },
        'reuse'     : {
            'link' : 'https://www.toronto.ca/wp-content/uploads/2017/10/8ed4-Toronto-Waste-Strategy-Exec-Summary-FINAL-AODA.pdf',
            'text' : 'The City of Toronto\'s Log Term Waste Management Strategy'
        }
    };

    var link = document.getElementById('infoLink');
    link.href = hyperlinkData[el.getAttributeNames()[0]]['link'];
    link.innerHTML = hyperlinkData[el.getAttributeNames()[0]]['text'];

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
