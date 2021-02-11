---
layout: default
title: Biweekly 33
date: 11 February 2021, 1230 CET
---

<script src="https://code.jquery.com/jquery-1.11.1.min.js">
</script>
<script src="/javascripts/edit.js"></script>
<script>setEditButonNm();</script>

# {{ page.title }}

|||
|---|---|
| Date | 11 February 2021, 12:30 CET |


## Pre-meeting stakeholders' reports

<!-- Please keep in mind that the minutes are publicly available.-->

#### Casper Thule
* New configuration of co-simulation? I.e. SSP? 
* FMI3? Implementers manual?
* Found bug in VDMJ related to classpath mapping - fixed with help of Nick
* Working with Max from Newcastle on DSE support in maestro
* Working on Fault Injection with Gita
* Working with Simon on using maestro2 as execution engine for the scenario verifier
* Working on abstract API for Maestro2 with Kenneth
* Working on IFD proposal on digital twin for structural health monitoring

#### Nick Battle
* Various VDMJ fixes, due to LSP (VSCode) users and Maestro on Windows
* Added automatic (SNAPSHOT) deploy of VDMJ to ArtiFactory, with help from Casper, so it is guaranteed to be up to date.
* Added nested comment support to the parser (and Jonas added to the UI)
* Started an HLD document for the LSP Server
* Added experimental "ordering" file to VSCode to allow Leo's enormous specification to typecheck efficiently.
* Contact from Lars Ivar Hatledal about integrating VDMCheck with their sspgen tool.

#### Peter Gorm Larsen
* Luxenbourg University now also paying member of the INTO-CPS Association
* Started up digital twin work Vestas in the MADE FAST
* Applications from PhD student received for the 2 new posts in connection with the Ringkøbing-Skjern project

#### Maurizio Palmieri
* Working on importing a Model Predictive Control C-library into an FMU and then into INTO-CPS. This is related to the European Processor Innovative project.
* Working on co-simulation and formal verification of a new case study based on a bicycle vehicle with a Master student who is doing his thesis under my supervision.
* Preparing the slides for the incoming lectures on formal methods and co-simulation .

#### Hugo Daniel Macedo
* Met with SCUBIC https://scubic.tech/en/company/ an SME operating Digital Twins for Water.
* Will meet with Kuono and DenDanskeVandKlynge partners on future Water data platform IFD project lead by DTU.
* Working with Kristoffer on INTO-CPS App development see below.
* Writting with Mirgita and Casper et al on FI paper.
* Met with Claudio about the INTO-CPS tutorials. Looking forward for feedabck on new RC testing.
* Met weekly with Till in the deveoplment of the IMM model.

#### Hao Feng
* Wrote the draft of a tutorial paper regarding to Kalman filter for ANNSIM conferecen.
* Ploished the technical report of the incubator with Claudio. 
* Working together with Christian on benchmark neural network. I am focusing on Koopman autoencoder.
* Working on the CPS-track paper for ANNSIM. 

#### Mirgita Frasheri
* Set up the water-tank case-study for the fault injection paper. Finalising paper with the guys.
* First draft for the autonomy paper.
* On-going discussions with Casper and Henrik for the development of the rabbitmq fmu.
* have tried to couple a simple example fmu with the ns3 simulator, with the intocps+maestro. There is smth wrong with that fmu to begin with, waitng for feedback from the developers of the fmi based ns3.

#### Emil Madsen
* Obtained a (factor 60) speed-up in Python-based calibration routine by calling compiled C code - now I'm cleaning up the code
* Started working on paper describing the methodology, most likely to the conference SAC: Symposium on Applied Computing
  * SAC published the original paper regarding the Symoro software

#### Claudio Gomes
* Nothing to report.

#### Stakeholder 3
* Discussion Point 1
* Discussion Point 2


## Sub-projects status

#### Maestro2
* Error and logging: 90%
* Derivatives: Need to be added in abstract API. Kenneth and Casper will do this, hopefully this week.
* Variable Step: Need to be added to maestro2. Plan that frederik (Feb. 15) will do this
* FMI3?

#### INTO-CPS Application
* New release process is in place. Kristoffer is now doing those.
* We have a plan of releases/milestones for 2021.  
* Release candiate 4.0.2 is ready for testing https://github.com/INTO-CPS-Association/into-cps-application/releases/tag/v4.0.2-rc
* Tested the release with Max Rose DSE scripts. We are free from Python 2. 
* Mac version signing is broken due. Working on a fix. 
* Met with Claudio about the Tutorials and System Engineering course TAing.

#### INTO-CPS-Association.github.io
* Upgraded release process.
* Started releasing 1.0.7
* Updated some broken links.
* New release is stuck with broken RT-Tester links.
* Modelio links need to be updated, but we have the new ones already.

#### DSE Scripts
* @maxsrose is now the maintainer/owner of https://github.com/INTO-CPS-Association/dse_scripts
* DSE runs with Python 3 now
* Progress on Genetic Algorithm to be integrated in the app and maybe in a new tutorial 
* Will move from fetching releases inside the repo folder to a release tag fetching soon

#### Overture
* Planing to have new release soon.
* Auto-update will not work for new releases after March due to bintray service end. Checking the impact of this issue.

#### Sub-project X

#### Sub-project Y

#### Sub-project Z

##  Any Other Business

Next Meeting
------------

26 February 2021, 12:30 CET


<div id="edit_page_div"></div>
