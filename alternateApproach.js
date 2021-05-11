// use these functiions in place of main.js functions for a different approach of radians calcuations but its a bit less accurate

//Range 18-35

Rd = 0.0175533
A = 2160 * 1.41 * ((Math.sin((40.04 + latVal)*Rd)) / Math.cos(latVal*Rd));
B = 1350;
C = 1.41 * (Math.sqrt(((A * A) / 2) + 960 * 960))
D = 1.41 * 2961 * ((Math.sin((27.993 + latVal)*Rd)) / (Math.cos((48.48 - latVal)*Rd)));
E =
  1.41 *
  (4206 * (Math.cos((latVal - 1.3623)*Rd))) -
    2961 * (Math.sin((27.993 + latVal)*Rd)) * (Math.tan((48.48 - latVal)*Rd)));
F =
  1.41 *
  (3245 * (Math.cos((latVal - 1.7656)*Rd)) +
    2160 * (Math.sin((40.04 + latVal)*Rd) * Math.tan(latVal*Rd));
G = F - E;
H = 2179 * 1.41 * Math.sin((43.14 - latVal)*Rd);


//Range 0-18

Rd = 0.0175533
A = 2160 * 1.41 * ((Math.sin((40.04 + latVal)*Rd)) / Math.cos(latVal*Rd));
B = 1350;
C = 1.41 * (2961 * (Math.sin((27.993 + latVal)*Rd)) / (Math.cos(latVal*Rd)));
D = 1.41 * (Math.sqrt(((A * A) / 2) + 960 * 960));
H = 2179 * 1.41 * (Math.sin((43.14 - latVal)*Rd));
E = 1.41 * ((3244 / Math.cos(latVal*Rd)) + H * Math.tan(latVal*Rd));
F = 1.41 * ((4206 / Math.cos(latVal*rd)) + H * Math.tan(latVal*rd));
G = (1.41 * 960) / Math.cos(latVal*Rd);
