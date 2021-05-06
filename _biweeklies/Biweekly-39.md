---
layout: default
title: Biweekly 39
date: 6 May 2021, 1230 CEST
---

<script src="https://code.jquery.com/jquery-1.11.1.min.js">
</script>
<script src="/javascripts/edit.js"></script>
<script>setEditButonNm();</script>

# {{ page.title }}

|||
|---|---|
| Date | 6 May 2021, 12:30 CEST |


## Pre-meeting stakeholders' reports

<!-- Please keep in mind that the minutes are publicly available.-->

#### Peter Gorm Larsen
* New H2020 project involving digital twins (called PROBONO) has just been granted with Carl Schultz as the ECE/AU PI

#### Nick Battle
* Created a "new_model" branch for VDMCheck and converted "fmi2" checker to use generated XSD/VDM schema. Currently testing.
* Looked at some native VDM/Java models for Ken Pierce (student support work)
* Cleaned up VDMJ for nested comment LB decisions, and ported change over to Overture.
* Prepared VDMJ for the next VSCode release, to include Hugo's stdlib changes.

#### Daniella Tola
* Found a nice Python library for visualizing robots (a number of robot arm models exist, but other models can possibly be added using URDf files), packaged it into an FMU and tested it in into-cps. It works on windows, and on Mac Mojave, but not on Mac Catalina (Got help fom Gita to test it on Mac). But this could be a direction to work towards in the future, if we want to do visualizations for co-simulations using python FMUs.

<img src="assets/robot_intocps.gif"
     alt="robot intocps"
     style="float: left; margin-right: 10px;" />

#### Hugo Daniel Macedo
* Overture
     * vs-code
          Add Library feature added to vs-code vdm extension.
          Working on the coverage now. Established communication between client and server. Need to work on show covtab files.
     * Worked on camera-ready paper and video on the SLSP protocol to be presented at F-IDE workshop soon.
     * Planning to write a paper on this to Overture WS.

* INTO-CPS Application
     * RC is out for testing purposes [try it here](https://github.com/INTO-CPS-Association/into-cps-application/releases/tag/v4.0.3-rc)

* DT for Water
     * Preparing a talk on DT to present in the [evanet thematic day on DT](http://www.evanet.dk/20-05-2021-digitale-tvillinger-i-afloebs-og-spildevandsbranchen/)
     * Looking for students interested in exploring recently open Data Sets about urban water networks       

#### Claudio Gomes
* Coding setup for connecting matlab and the FMI interface, for co-simulation of civil engineering structures, using uniFMU.
* Coding reference FMUs for synchronous clock.


#### Casper Thule
* DTP is off the table, as DIGITBrain is target the same. Will focus on individual modules for maestro2 addressing different things.
* Kenneth is working on multi-threaded support for maestro2
* Frederik has worked on lots of stuff - lastly a derivativeestimator module for maestro2 (from maestro1)
* Started handoff of maestro2 release to Prasad
* Working with Gita and Henrik on RabbitmqFMU papers
* Meeting with Henrik on Chrono FMU, and will have meeting with Frederik Foldager

#### Frederik Madsen
* Implemented derivative estimator interface and test in Maestro 2.
* Implemented support for multi dimensional arrays in Maestro 2.
* Implemented support for automatically 'get and set' derivatives using the builder in the Maestro 2 together with tests.
* Added support for mixing Java and Kotlin in Maestro 2.
* Worked on the SLSP protocol paper for F-IDE workshop.


## Sub-projects status


#### Sub-project X

#### Sub-project Y

#### Sub-project Z

##  Any Other Business

Next Meeting
------------

20 May 2021, 12:30 CEST


<div id="edit_page_div"></div>
