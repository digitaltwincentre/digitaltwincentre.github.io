---
layout: default
title: Biweekly 34
date: 26 February 2021, 1330 CET
---

<script src="https://code.jquery.com/jquery-1.11.1.min.js">
</script>
<script src="/javascripts/edit.js"></script>
<script>setEditButonNm();</script>

# {{ page.title }}

|||
|---|---|
| Date | 26 February 2021, 13:30 CET |


## Pre-meeting stakeholders' reports

<!-- Please keep in mind that the minutes are publicly available.-->

#### Peter Gorm Larsen
* Attended a workshop on the Vico platform from NTNU last week
* Discussed collaboration possibilities with Universal Robots
* Further planning of the book on engineering digital twins carried out
* Had brainstorm with Jakob regarding the Ringkøbing-Skjern project
* Have selected 2 PhD students for the Ringkøbing-Skjern project
* A new ITEA application called 3STARS have been submitted

#### Nick Battle
* Released FMI-VDM-Model 1.0.2
* Released VDMJ 4.4.2, leading to VDM VSCode release 1.1.0
* Contributed to Jonas/Frederik's F-IDE paper about VDM VSCode
* Create tool for automatic generation of ordered module dependencies (to support Leo's large specifications, but as a general tool)
* Debate the pros and cons of nested comment parsing with the Language Board :)
* Added SPDX licensing comments to the whole of VDMJ (GPLv3 or later)
* Added an experimental feature to save/restore specification state rather than re-calculating it every time between trace tests. This significantly improves the performance of combinatorial testing with very large specifications.
* Fixed some more F12 navigation issues (for ext and errs clauses)
* Released the above as VDM VSCode 1.1.1

#### Jim Woodcock
* Making progress with Pedro Ribeiro, Simon, and Cláudio on an abstract characterisation of step revision in FMI. Pedro and I have a description using angelic nondeterminism. We will present this to Simon, Cláudio, and Jaco on Wednesday 24th Feb.
* Started developing my lecture material on an introduction to probabilistic reobotic control for the modelling course.
* Submitted a research proposal to EPSRC on verified co-simulation.

#### Daniella Tola
* Integrated the C# backend for unifmu together with Christian. We haven't pushed it to the master branch yet.
* Starting looking into visualization of robots in Unity. They have recently been working on making it easier to visualize and simulate robots in Unity (https://github.com/Unity-Technologies/Unity-Robotics-Hub)
* Starting looking into the Unity FMU in into-cps, to understand how it works. 

#### Claudio Gomes
* Finished Tutorial on Kalman Filtering for DTs with Hao
* Almost done with paper on DT Engineering with Hao
* Almost done with paper on adaptive master algorithm with Emin (KU Leuven)
* Going to prepare paper on FMI Clocks with fmi steering committee.

#### Casper
* Fault injection paper is away
* Working on rabbit mq practitioner introduction
* Working with DSE with MAx - think I have a multi-threaded solution.
* NEED TO TALK A BIT ABOUT DISTRIBUTED AND CLOUD!!!! @prasad, @tomas
* Initial work on digital-twin-platform in Python to Support CLaudios huge efforts.
* Digital-twin-platform should go to Pypi some time.
* DTP: pipe lines? 
```
Hardware data (outputs time-series data according to specification X) ->
(inputs time-series data according to specification X) state estimation (outputs time-series data according to specification Z) ->
(inputs time-series data according to specification Z) fault detector (outputs EVENT according to specification W)
```
* Great effort by Frederik!
* Working on proposal.
* Bachelor project on FMI3 java api?

#### Emil Madsen
* Robot Calibration:
  * Added capability of numerically estimating no. of base parameters (by estimating the maximum obtainable rank of the observation matrix)
  * Next step is to add numerical identification of base parameters by obtaining the Reduced-Row Echelon Form (RREF) by Gauss Jordan elimination of the observation matrix
* AU DTL-Skjern:
  * Deriving dynamic model of a MiR robot (the bicycle model cannot be used here)

## Sub-projects status

#### Sub-project X

#### Sub-project Y

#### Sub-project Z

##  Any Other Business

Next Meeting
------------

11 March 2021, 12:30 CET


<div id="edit_page_div"></div>
