---
layout: page
title: "TayAbsTEC"
---
**TayAbsTEC** is software for calculation of the absolute vertical total electron content (TEC) in the ionosphere and differential code biases (DCB) values. **TayAbsTEC** uses a slant TEC value derived from global navigation satellite systems data by [tec-suite]({{ "/tec-suite" | absolute_url }}).

## Installation

Just download and extract **TayAbsTEC** archive wherever you want (for Windows only yet).

### Downloads

* [Windows]({{ "/assets/TayAbsTEC_24.04.17.zip" | absolute_url }})

## Usage

**TayAbsTEC** takes [tec-suite]({{ "/tec-suite" | absolute_url }}) output files as an input. These files must contain the following data:

* tsn
* hour
* el
* az
* tec.l1l2
* tec.p1p2 or tec.c1p2
* validity

In order to get it you must set `recFields` parameter in `tecs.cfg` to the following:

```
recFileds = 'tsn, hour, el, az, tec.l1l2, tec.p1p2, validity'
```

For further information see [tec-suite documentation](http://tec-suite.readthedocs.io).

Once you get [tec-suite]({{ "/tec-suite" | absolute_url }}) out files, you can

* Edit `absolTEC.dia`
* Run `absolTEC.exe`

### absolTEC.dia

```
c:\dat\  path to .dat files, outputted by tec-suite
10       elevation angle cutoff
2009     year for which evaluation is performed
9        day of year for which evaluation is performed
joze     site for which evaluation is performed
0.5      time step in hours
0.97     the correcting coefficient: 
          0.97 - for mid-latitude stations,
          0.94 - for high-latitude stations,
          0.87 - for low-latitude stations
```

### Output

You can find an output of **TayAbsTEC** in a directory three which looks like `c:\dat\YYYY\SITE`, where

* `YYYY` - year
* `SITE` - name of station

There are two kinds of files in the directory:

* `SITE_DDD_YYYY.dat`
* `DCB_SITE_DDD_YYYY.dat`

And `DDD` here it is a day of year.

In `SITE_DDD_YYYY.dat` you find the following values:

* `UT`- universal time in hours
* `I_v`- absolute vertical TEC in TECU
* `G_lon`, `G_lat`- linear longitude and latitude gradients in TECU/°
* `G_q_lon`, `G_q_lat` - quadratic longitude and latitude gradients in TECU/°
* `G_t`, `G_q_t` - linear and quadratic time derivation in TECU/hour
* `DCB_SITE_DDD_YYYY.dat` files contain DCBs for each satellite (DCB sat) and GPS/GLONASS receiver channel (DCB rec) measured in TECU.

## Bugs

You can report bugs or suggestions via [email](mailto:manna@iszf.irk.ru).

## Authors

Should a scientific publication evolve from the conducted estimation from **TayAbsTEC** software, the authors are requested to include citation of following publications, where **TayAbsTEC** algorithm is described:

* Yu V. Yasyukevich, A.A. Mylnikova, V.E. Kunitsyn, and A.M. Padokhin. Influence of GPS/GLONASS differential code biases on the determination accuracy of the absolute total electron content in the ionosphere. Geomagnetism and Aeronomy, 55(6): 763–769, 2015. [doi:10.1134/S001679321506016X](https://dx.doi.org/10.1134/S001679321506016X).
* A.A. Mylnikova, Yu.V. Yasyukevich, V.E. Kunitsyn, A.M. Padokhin. Variability of GPS/GLONASS differential code biases // Results in Physics, V. 5, P. 9–10. 2015. [doi:10.1016/j.rinp.2014.11.002](https://dx.doi.org/10.1016/j.rinp.2014.11.002).
* Yu.V. Yasyukevich, A.A. Mylnikova, A.S. Polyakova. Estimating the total electron content absolute value from the GPS/GLONASS data // Results in Physics, V. 5, P. 32–33. 2015. [doi:10.1016/j.rinp.2014.12.006](https://dx.doi.org/10.1016/j.rinp.2014.12.006).

Copyright © 2017 [Anna Mylnikova](mailto:manna@iszf.irk.ru), [Yuri Yasyukevich](mailto:yu.yasyukevich@gnss-lab.org).

Please note, that free online access to acquired data is arranged only for educational and non-commercial research purposes.
