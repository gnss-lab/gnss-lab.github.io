---
layout: page
title: "GetWTEC"
---
Software to calculate the Wtec index. Wtec is a regional TEC disturbance that is equal to the mean TEC variation (with periods less than the specified ones) amplitude for a single GPS/GLONASS site. One can make a multisite processing: the software calculates the corresponding index for each site. The maximum duration of the Wtec series is one year.

## Installation

Just download and extract **GetWTEC** archive wherever you want (for Windows only).

### Downloads

* [Windows]({{ "/assets/GetWTEC.zip" | absolute_url }})

## Files and directories included in the software package

* Executable file (`GetWTEC.exe`)
* Configuration file (`GetWTEC.dia`)
* Automatically created service directories (`out`, `genout`).

## Usage

**GetWTEC** takes [tec-suite]({{ "/tec-suite" | absolute_url }}) output files as an input. These files must contain the following data:

* tsn
* el
* az
* tec.l1l2

For further information see [tec-suite documentation](http://tec-suite.readthedocs.io).

Once you get [tec-suite]({{ "/tec-suite" | absolute_url }}) out files, you can

* Edit `GetWTEC.dia`
* Run `GetWTEC.exe`

### GetWTEC.dia

```
e:\gps\dat\   	- datway (path to dat-files)
0  	  - crit_all =1 (processing of all sites)
LIST 	  - site (site name (if crit_all =0))
2016 	  - year
1  	  - daybeg (the first of the processed days)
366  	  - dayend (the last of the processed days)
300. 	  - hmax (height for calculating the coordinates of ionospheric points, km)
10. 	  - highper (window for removing slow variations, minutes)
15. 	  - gamcutoff (minimum elevation, degrees)
55  	  - prncutoff (the maximum number of satellites to process)
0  	  - GNSS_crit =0 (all satellites), =1 (GPS only), =2 (GLONASS only)
999 	  - GrossDir ("main" direction for processing, if =999 common file only)
4  	  - NofDirs (number of azimuth sectors (no more than 4))
```

Some parameters of `GetWTEC.dia` need explaining:

* If `crit_all` = 1 all the sites found in the directory [datway]\[year]\[daybeg] are processed. If `crit_all` = 0 only the site specified in the `site` parameter is processed. 
* With the parameters `GrossDir` and `NofDirs`, one can specify additional output files with data in certain azimuth sectors relative to the processed station. `NofDirs` specifies the number of sectors (no more than 4). `GrossDir` sets the reference center direction for the first sector. If `GrossDir` = 999 only the common file will be output.

### Output

You can find an output of **GetWTEC** in the directory `genout\YYYY`. For each processed site, a file is created with the name `SSSSDDD_DDD_YYYYF_PPmin.dat`, where 

* `SSSS` (site name)
* `DDD_DDD` (limits of the interval of processed days)
* `YYYY` (year)
* `PP` (window used to remove slow variations)
* `F` (indicates that the file is common for all azimuths). 

If the `GrossDir` parameter is set within the 0--360 range, in addition to the common file for the site, some more files (according to `NofDirs` value) will be created with data divided by azimuth sectors. The names of such files will look like SSSSDDD_DDD_YYYYAAA_PPmin.dat (AAA refer to center of azimuth sector). 

All output files have the same structure. The first lines of an output file may look like this:

```
300	- height of F2-layer maximum
 10	- high filtering period, minutes
 15	- elevation cutoff
0	 =0 - GPS/GLONASS, =1 - GPS, =2 - GLONASS
999	- main direction
  4	- number of directions
tec_filt_aver - averaged through all prns filtered TEC variations
rms - root mean square of TEC averaging
Xaver, Yaver - average position of Ionospheric Pierce Point (km)
N_of_Sats - number of satellites

time_ut, tec_filt_aver, rms, Xaver, Yaver, N_of_Sats
   0.0000   0.0000   0.0000   67.570   14.884 11
   0.0083   0.0000   0.0000   68.378   15.365 11
   0.0167   0.0056   0.0055   69.187   15.841 11
```

The first 6 lines duplicate the values of the parameters `hmax`, `highper`, `gamcutoff`, `GNSS_crit`, `GrossDir`, and `NofDirs` from the file `GetWTEC.dia`. 

The following 4 lines contain a description of the data columns: 

* `time_ut` refer to time count in UT hours from the beginning of the first day `daybeg`
* `tec_filt_aver` is Wtec data
* `rms` is data spread during averaging over satellites
* `Xaver`, `Yaver` are deviations of the average ionospheric pierce point position from the site in kilometers
* `N_of_Sats` is number of satellites to average. 

## Bugs

You can report bugs or suggestions via [email](mailto:serg3108@iszf.irk.ru).

## Authors

Should a scientific publication evolve from the conducted estimation from **GetWTEC** software, the authors are requested to include citation of following publications, where **GetWTEC** algorithm is described:

* S.V. Voeykov, O.I. Berngardt, and N.V. Shestakov // Geomagnetism and Aeronomy, 2016, Vol. 56, No. 2, pp. 219–228.  [doi:10.1134/S0016793216020122](https://dx.doi.org/10.1134/S0016793216020122).

Copyright © 2018 [Sergey Voeykov](mailto:serg3108@iszf.irk.ru).

Please note that free online access to the acquired data is arranged only for educational and non-commercial research purposes.
