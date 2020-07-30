function changeColor(el, color) {
  el.setAttribute('color', color);
}

function hideTorontoWasteStrategy(el) {
    changeColor(el, 'grey');
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

function showTorontoWasteStrategy(el) {
    changeColor(el, 'red');

    var div = document.getElementById('contentDef');
    div.innerHTML = 'Here goes the definition for ' + el.getAttribute('value');

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
      showTorontoWasteStrategy(el);
  });
  el.addEventListener('mouseleave', function () {
      hideTorontoWasteStrategy(el);
  });
}
});

AFRAME.registerComponent('repurpose', {
init: function () {
  var data = this.data;
  var el = this.el;

  el.addEventListener('click', function () {
      showTorontoWasteStrategy(el);
  });
  el.addEventListener('mouseleave', function () {
      hideTorontoWasteStrategy(el);
  });
}
});

AFRAME.registerComponent('rethink', {
init: function () {
  var data = this.data;
  var el = this.el;

  el.addEventListener('click', function () {
      showTorontoWasteStrategy(el);
  });
  el.addEventListener('mouseleave', function () {
      hideTorontoWasteStrategy(el);
  });
}
});

AFRAME.registerComponent('reuse', {
init: function () {
  var data = this.data;
  var el = this.el;

  el.addEventListener('click', function () {
      showTorontoWasteStrategy(el);
  });
  el.addEventListener('mouseleave', function () {
      hideTorontoWasteStrategy(el);
  });
}
});
