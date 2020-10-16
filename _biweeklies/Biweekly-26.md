---
layout: default
title: Biweekly 26
date: 16 October 2020, 1400 CEST
---

<script src="https://code.jquery.com/jquery-1.11.1.min.js">
</script>
<script src="/javascripts/edit.js"></script>
<script>setEditButonNm();</script>

# {{ page.title }}

|||
|---|---|
| Date | 16 October 2020, 14:00 CEST |


## Pre-meeting stakeholders' reports

<!-- Please keep in mind that the minutes are publicly available.-->

#### Peter Gorm Larsen
* Attending kick-off meeting for the UPSIM project this week
* Planning meeting with Rinkjøbing-Skjern municipality in two weeks time
* Involved in digital twin discussions related to the DIGITbrain project
* Ensured that Denmark will vote yes for 2 new ISO draft standards around digital twins
* Suggest to have a webinar on the 25th of November 2020 for the INTO-CPS Association posibilities (input welcome)
* In kick-off of UPSIM saw http://www.the-mtc.org/our-projects/simready which looks relevant in particular for our manufactoring research projects
* Suggest that someone in the group gather as many definitions of digital twins as possible. This could potentially turn into a technical report related to the differences depending upon different dimensions e.g. research/commercial, research focus and application domain.

#### Claudio Gomes
* Robot Manipulator Model calibrated (with Emil)
* FMI 3.0 Work on semantics of clocks (anybody interested in applying formal methods to fmi 3.0 clocks?)
* Reading up on optimal experimental design

#### Nick Battle
* Did some renaming and restructuring of the FMI2/3 VDM-SL models, with Kenneth.
* Completed and pushed a bugfix for more sensible function value comparisons (that works better with lambdas)
* Created first cut of POG methods in LSP Server for Jonas and Frederik
* Added some POs to VDMJ that were missing from Overture (to do with inv/post satisfiability)
* Helped Kenneth get annotations working (without using a plugin jar)
* Fixed FMI-2-VDM's toVDM() method to return a String rather than print to stdout
* Look into an Overture bug of Leo's that gets an incorrect warning for expressions like post_func[type].

#### Casper Thule
* Case study with Ken Pierce and Sam Hall on Digital Twin 3-joint robot arm.
* Working on release 1 of Maestro2
* Initiating proof of Mabl spec (termination)
* Implementing CI and deployment for FMI2/3 VDM-SL models
* Identified VDM2C issue - I am not continuing on this. What is the plan here? I think it is a pity to give up on this, as vdm2c creates MUCH better FMUs than overture toolwrapper and makes it possible to run it on microcontroller


#### Maurizio Palmieri
* Initiating proof of Mabl spec (termination) in UPPAAL with Casper
* Studying the DSE scripts for genetic algorithm (sounds close the the third point of Claudio)
* Finalizing the paper on formal analysis of drones at unipi

#### Hugo Daniel Macedo
* Overture
  * Working towards Overture 3.0.2 Release 
  * A release candidate was produced and Nick tests found issues I will go over next week.

* DT for water case
   * I have been in a workshop organized by AVK https://www.avkventiler.dk/ as part of the the Danish Water Cluster initiave 
   * Next week I will participate in the kickoff of a platform for sharing data generated in the water sector: Innovationsdataplatform - Data Ecosystem Water workshop. 
   
* INTO-CPS Application
   * Regarding INTO-CPS. We were able to upgrade the Electron version to the latest version! From 6 to 10.3! It required sorting out troubles with the download manager and dialogs, but we are now done with it. Kristoffer solved an issue Mirgita found and we are now working towards a new release. 
   * Looking forward to collaborate with Maurizio in the improvement of DSE. Kristoffer and Hao can also join to both extend the app and create a new DSE project with the scripts from the paper about time-delay.

* Other
   * Working with Till on his survey on DT. Now and then he finds papers about digital twins in water,  and I see good work comming out of the partnership in the long run.
   

## Sub-projects status


#### Sub-project X

#### Sub-project Y

#### Sub-project Z

##  Any Other Business

Next Meeting
------------

27 October 2020, 14:00 CEST


<div id="edit_page_div"></div>
