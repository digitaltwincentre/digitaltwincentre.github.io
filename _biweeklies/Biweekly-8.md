---
layout: default
title: Biweekly 8
date: 13 November 2019, 1030 CEST
---

<script src="https://code.jquery.com/jquery-1.11.1.min.js">
</script>
<script src="/javascripts/edit.js"></script>
<script>setEditButonNm();</script>

# NetMeeting Default Template

|||
|---|---|
| Date | 13 November 2019, 10:30 CEST |
| Participants | AA, BB, ..., CC.  Minutes by DD. |


## Pre-meeting stakeholder's reports

<!-- Please keep in mind that the minutes are publicly available, and that
private information must be stored elsewhere.  -->

#### HDM
* Is developing the Into-cps cloud app.
* Will focus on writing the extended version of the accompanying paper. 
* Waiting for details on the submission of an extended version for the accepted paper at co-sim workshop.

#### Nick
* Extended the dynamic semantic testing to include a combinatorial test suite for Model Exchange in addition to Cosimulation.
* Adding abstract function calls to the API functions to represent the "implementation" of the FMU, which will enable the semantic model to realise any particular FMU's behaviour - it's about half done so far.
* Updated the Overture workshop paper for Carl, to include updated results and a link to the online version of the checker.

#### Claudio
* Won't be able to attend the meeting.
* Working at CMU on an FMI exporter for ModelPlex.
* Going to meet with Stefan some time this week to discuss other research topics.


#### Jim Woodcock
* Apologies for not being able to make the net call: I am at the RoboSoft meeting in London.

#### Stakeholder 3
* Discussion Point 1
* Discussion Point 2


## Sub-projects status


#### Into-cps cloud app (HDM)
* Found some bugs in the COE assignment algorithm. 
* Improving backend testing.
* 50 user version in progress.

#### Maestro V2 DT enabled (CT)

#### Checker of FMUS (NB)
* Only a few changes to the static semantic model - most (transparent) changes to make the dynamic semantic modelling easier.
* Now that the dynamic sematics is close to "working", I want to move over to static semantic for FMI 3.0.

#### Tolerance Language (JW)
 * I've been discussing the tolerance language ideas with Marcel Verhoef (ESA).
 * Marcel recalled a paper that he wrote with John Fitz and Peter: Validation Support for Distributed Real-Time Embedded Systems in VDM++.
 * This paper defines validation conjectures, which are statements of compliance of observed behaviour against a specification.
 * Spacecraft operations generate large amounts of housekeeping and science data that is downloaded over telemetry links. This is a well understood application area where data streams are defined upfront. This includes their expected ranges and alarms in case of parameters going out of bounds. The approach doesn't seem particularly sophisticated, but it is supported by a small script language used to define "synthetic parameters". These are computations and transformations performed on low level parameters in order to derive system state, specific situations, etc.
 * At ESA, they analyse telemetry streams using big data and machine learning approaches. Their objective is to predict errors before they appear in telemetry to assess slow decay, wear and tear, etc.
 * In another piece of work, I am writing a paper on the behaviour of the Aethon TUG autonomous mobile robot. This has noisy infra-red sensors. The robot uses the Ransac algorithm to get a probabilistic guarantee that its motion detection is free from erroneous sensor values. I expect to have a draft of this paper by the end of the year.

#### Graphical configuration inside App (CL)


Next Meeting
------------

27 November 2019, 1030 CET


<div id="edit_page_div"></div>
