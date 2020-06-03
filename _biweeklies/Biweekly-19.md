---
layout: default
title: Biweekly 19
date: 03 June 2020, 1530 CEST
---

<script src="https://code.jquery.com/jquery-1.11.1.min.js">
</script>
<script src="/javascripts/edit.js"></script>
<script>setEditButonNm();</script>

# {{ page.title }}

|||
|---|---|
| Date | 03 June 2020, 15:30 CEST |


## Pre-meeting stakeholder's reports

<!-- Please keep in mind that the minutes are publicly available.-->

#### Peter Gorm Larsen
* Working on different papers for the ditital twin track of Isola 2020
* Progressed the different MADE FAST part projects involvement of digital twins
* Gave up on the digital twin plan with Terma for now
* Supplied digital twin feedback for a Danish paper on digital twins (see https://ipaper.ipapercms.dk/TekniskLandsforbund/teknikeren-2020/teknikeren-032020/?page=18#/)

#### Jim Woodcock
* Completed near-final draft of ISoLa 2020 paper with Peter, Cláudio, and Hugo.
* Working on a new research proposal for Digital Twins: UK EPSRC's Centre to Centre programme.

#### Claudio Gomes
* Finally got some decent calibration results out of the UR3E Robot (torque equations only).
* Working on Isola 2020 paper
* Misc FMI-standard tasks. 

#### Mustafa Dinç
* Have still been working on writing testing procedures of INTO-CPS app.
* Reviewed WATEC presentation made by Hugo regarding Aarhus Vand Digital Twin Project.
* found that the download manager of the latest INTO-CPS App downloads a 20-sim version 4.8.1 that exports broken FMUs. So, I updated the new version (4.8.2) of 20-sim in downloads.
* have been working on converting states from the TLA+ model checker into states for the rabbitmq fmu.

#### Nick Battle
* Made some progress with the FMI3 API model, as well as some updates to the static semantics as the FMI Standard is being changed.
* Fixed conditional breakpoints, hit counts and tracepoints in the LSP server, so you can now stop conditionally, stop when the break hitcount is =, >, >= or a multiple of some number, and "trace evaluate" expressions as the tracepoints are reached, without stopping.
* Raised some problems with the (new) Reference FMUs defined in the FMI Standard repository, both for FMI2 and FMI3.
* Made a couple of Overture fixes, following from bugs raised by Fuyuki Ishikawa.
* Had a quick look at some Maestro user documentation.
* Reviewed an ACM Survey document.

#### Hugo Daniel Macedo
* Fixed a couple of issues of Overture. I am currently looking at longstanding issues caused by several deprecated APIs. I hope this will fix the Debug Perspective layout problem. 
* First development cycle of tests for the INTO-CPS App reached full coverage of Tutorials 1 to 11. The Work will be presented on the 29th, and Armine is on "study for exams vacation" leave until then. 
* Helped Kristoffer solve a INTO-CPS settings loading problem forcing the user to delete the json file to be able to launch the app. Working on a close project button feature, which is intersting regarding testing purposes.
* Worked with Hao on a DSE approach to compute tolerable delays in a refinement of the LFR model. 
* Contributed to the Isola Tolerance Paper.

#### Casper Thule & Kenneth Lausdahl
* Fixed overture-FMU such that it works on mac catalana. Also updated internal dependences.
* Fixed rabbitmq-fmu, such that it is cross-platform. Needs documentatino and needs linux testing. Needs to be checked with tla model.
* Working on wrapping robotti within an FMU. Sanity check has been conducted and compilation is ongoing.
* Working on Maestro 2. Can run co-simulation. Executed new performance test - good results again.
* Simon Hansen is working on new initialization plugin

## Sub-projects status


#### Sub-project X

#### Sub-project Y

#### Sub-project Z

##  Any Other Business

Next Meeting
------------

17 June 2020, 1030 CET


<div id="edit_page_div"></div>
