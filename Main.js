// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

document.getElementById("calculate").addEventListener("click", function () {
  var lat = document.getElementById("lat").value;

  if (lat) {
    var data = solarTrack(lat);
    console.log(data);

    document.getElementById("result").innerHTML = data;
  }
});

function solarTrack(lat) {
  console.log("solarTrack", lat);
  var latVal = parseFloat(lat);
  var result = "";

  if (latVal > 18 && latVal <= 35) {
    result += "Range: 18-35\n\n";

    A = 2160 * 1.41 * (
      (Math.sin(radians(40.04 + latVal))) /
      (Math.cos(radians(latVal)))
    );

    B = 1350;

    C = 1.41 * (
      Math.sqrt((Math.pow(A, 2) / 2) + (Math.pow(960, 2)))
    );

    D = 1.41 * 2961 * (
      (Math.sin(radians(27.993 + latVal))) /
      (Math.cos(radians(48.48 - latVal)))
    );

    E = 1.41 * (
      4206 * (Math.cos(radians(latVal - 1.3623))) -
      2961 * (Math.sin(radians(27.993 + latVal))) *
      (Math.tan(radians(48.48 - latVal)))
    );

    F =
      1.41 * (
        3245 * (Math.cos(radians(latVal - 1.7656))) +
        2160 * (Math.sin(radians(40.04 + latVal))) *
        (Math.tan(radians(latVal)))
      );

    G = F - E;
    H = 2179 * 1.41 * (Math.sin(radians(43.14 - latVal)));

    result += ` A: ${A}\n B: ${B}\n C: ${C}\n D: ${D}\n E: ${E}\n F: ${F}\n G: ${G}\n H: ${H}\n `;

    /*---------------------------------------------------------------------------------------------------------*/

  } else if (latVal > 0 && latVal <= 18) {
    result += "Range: 0-18\n\n";

    A = 2160 * 1.41 * ((Math.sin(radians(40.04 + latVal))) / Math.cos(radians(latVal)));
    B = 1350;
    C = 1.41 * (2961 * (Math.sin(radians(27.993 + latVal))) / (Math.cos(radians(latVal))));
    D = 1.41 * (Math.sqrt(((A * A) / 2) + 960 * 960));
    H = 2179 * 1.41 * (Math.sin(radians(43.14 - latVal)));
    E = 1.41 * ((3244 / Math.cos(radians(latVal))) + H * Math.tan(radians(latVal)));
    F = 1.41 * ((4206 / Math.cos(radians(latVal))) + H * Math.tan(radians(latVal)));
    G = (1.41 * 960) / Math.cos(radians(latVal));
    result += ` A: ${A}\n B: ${B}\n C: ${C}\n D: ${D}\n E: ${E}\n F: ${F}\n G: ${G}\n H: ${H}\n `;

  } else {
    result += "\n\n\tInvalid Input, Try again with Lat value within 0 - 35 degrees";
  }

  return result;
}


function radians(degrees) {
  var TAU = 2 * Math.PI;
  return degrees * TAU / 360;
}
