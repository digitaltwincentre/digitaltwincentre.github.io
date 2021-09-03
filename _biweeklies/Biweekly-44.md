---
layout: default
title: Biweekly 44
date: 3 September 2021, 1030 CEST
---

<script src="https://code.jquery.com/jquery-1.11.1.min.js">
</script>
<script src="/javascripts/edit.js"></script>
<script>setEditButonNm();</script>

# {{ page.title }}

|||
|---|---|
| Date | 3 September 2021, 10:30 CEST |


## Pre-meeting stakeholders' reports

<!-- Please keep in mind that the minutes are publicly available.-->

#### Peter Gorm Larsen
* Papers for digital twin track at Isola has been published
* The general assembly of the INTO-CPS Association has been arranged on the 27th of October at Isola
* Made progress regarding the digital twin book
* Assisted with the planning of a defence for an IFD application that has been called for the interview round (7th of September)
* Planned the opening of the Digital Transformation Lab in Skjern on Monday (6th os September)
* Involved in a couple of new Horizon Europe proposals related to digital twins
* Gave presentation about digital twins to the Academy of Technical Sciences in Denmark
* Give a presentation about digital twins in robotics Friday the 3rd of September
* Give presentation about digital twins for the Danish Engineering Association on the 8th of September 
* In July we had successful review of the DIGITbrain project (including digital twins)
* In September will have reviews of HUBCAP and UPSIM

#### Hugo Daniel Macedo
* Participated in WATEC meeting on future wastewater treatment with nice visit to Marselisborg WTP.
* Wrote a magazine article to EVANET on Digital Twins
* Submitted an extended abstract to UDM on Extraneous water detection
* Submitted a paper to OVT-19 on DM for Injection Moulding Machine

#### Nick Battle
* Some progress on the VDM model of FMI3 clocks, but slow
* Contacted by folk from Anaplan about using VDMJ's LSP as a backend for the neovim editor. Made some fixes and enhancements to support that.
* Updated VDMCheck3 to schema version 3.0-beta.2
* Assisting Leo Freitas to migrate to VDM VSCode
* Added structured outlines to VDM VSCode which allows much better integration/navigation around the tool.
* Some paper review work for Overture workshop 19
* Released VDM VSCode version 1.2.0, VDMJ 4.4.3 and VDMCheck 1.1.0
* Added Graphviz file creation to VDM VSCode to enable the creation of module/class dependency graphs.
* Started work on VDM-RT log file integration for VDM VSCode.


#### Jim Woodcock
* **Probabilistic Robotic Control course**. I revised the lectures I gave on Carl's course. I repeated the lectures at Zhiming Liu’s summer school in China using Zoom.
* **Isabelle course**. I've started work on writing this course, working with Simon Foster. We wil teach the course in York in Spring 2022. I'm hoping that the introductory lectures on Isabelle without Tears will be useful in Aarhus.
* **Paper with Lukas Estarte**. Verification and Uncertainties in Self-integrating System. This paper was accepted for SISSY2021. I've spent time helping to revise the paper to cover the reviewers' comments.
* **Uncertainty**. I've been working on probabilistic program models for uncertainty using new semantics I've created based on Iverson brackets. I've got a draft technical report. I'm planning to implement the semantics in Isabelle/UTP with Randall. I've got lots of small examples, but I'm working on a bigger case study on using Bayesian and Kalman filters for dealing with uncertainty from sensors with Gaussian errors.

#### Frederik Madsen
* Released Maestro2 version 2.1.6
* Implemented changes related to Scenario-verifier version 0.2.2
* Implemented CLI support for the Scenario-verifier in Maestro2
* Reworked dt-tutorial tests to use the Maestro2 CLI instead of the web API.
* Working on fmi3 support in Maestro2
* Working on implementing support for the Scenario-verifier functionality in the into-cps application.

#### Claudio Gomes
* Organizing COSIM-CPS workshop. Are you thnking of submitting something? https://sites.google.com/view/cosim-cps-2021/home
* Paper accepted at RuleML on compatibility verification of robotic systems (with Daniella, Emil, et al).
* Paper submitted at SII  AURT (AU Robotics Tool) for dynamic calibration of open chain robots (with Daniella, Emil, et al. tool is at https://github.com/INTO-CPS-Association/aurt)
* Paper submitted at SII on challenges for integration of robotic systems.
* FMI3 and FMI3 Clocks papers accepted at modelica conference.
* Met with UNEW for restarting work on sensitivity analysis for co-simulations.
* Successful Maestrov2 application for hybrid testing. Paper accepted at Modelica Conference and video here: https://www.youtube.com/watch?v=-VkrQJaUo1o&ab_channel=INTO-CPSAssociation
* Participating in writing MSCA DN and Horizong Cl4 projects, on digital twins and robotics.
* Coordinating FM Tutorial (with input from Frederik, Casper, Gita, Daniella, et al.) on running verified co-simulations for the incubator case study.

#### Casper
* Introduced Frederik to INTO-CPS App Development and helped him get started
* Created initial OUT OF SYNC MITIGATION COMPONENT
* Worked on CPP code-generation and performance tests
* New error handling in maestro2 (try finally)
* Started DSE work with Ken Pierce
* Re-started work on Digital Twin Pipelines
* Assisted with FM Tutorial stuff

#### Mirgita
* working on rabbitmq fmu new release
* fi plugin extended to inject inputs/outputs, as well as allow for the evaluation of expressions
* worked on rabbitmq fmu demo for the fm tutorial -- FI part still to be included
* DR students and Skjern demo: the guys have the old part working for moving the robot around and showing the connection to the intocps app. They're still working on getting the lidar and the marvelmind positioning running as well for Monday.

#### Emil Madsen
* Set up robotics and Maker equipment in Skjern
* AURT was published to Github
* Submitted paper to IEEE RAS SII conference
* Made slides for opening of AU DTL-Skjern
* Looking forward:
  * Adding online payload estimation capability to AURT (Daniella already made a branch of URInterface that publishes data using ZMQ)
  * Find network solution for AU DTL-Skjern (complying with AU IT network requirements)

#### Stakeholder
* Discussion Point 1
* Discussion Point 2

## Sub-projects status


#### VDM-VSCode
* Added several features:
  * Import, code-generation, ...
* Looking for developers...

#### INTO-CPS Application
* Looking for developers...

#### Sub-project Z

##  Any Other Business

Next Meeting
------------

17 September, 1030 CEST

<div id="edit_page_div"></div>
