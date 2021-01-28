---
layout: default
title: Biweekly 32
date: 28 January 2021, 1230 CET
---

<script src="https://code.jquery.com/jquery-1.11.1.min.js">
</script>
<script src="/javascripts/edit.js"></script>
<script>setEditButonNm();</script>

# {{ page.title }}

|||
|---|---|
| Date | 28 January 2021, 1230 CET |


## Pre-meeting stakeholders' reports

<!-- Please keep in mind that the minutes are publicly available.-->

#### Hugo Daniel Macedo
  * INTO-CPS Appliction 4.0.1 was released last week.
  * Working with Till on modeling injection moulding machine
  * Will meet with a company interested in unintended water management.
  * Next Friday Kristoffer, Max, and I will meet to start working on adding the DSE scripts
  into INTO-CPS 4.0.3. 

#### Peter Gorm Larsen
* Organised the next webinar in a more professionel setting (please register online if you would like to attend)
* Started up on the Rinkøbing-Skjern Digital Transformation Lab (2 PhDs to be hired soon)
* Started planning book on engineering digital twins together with John Fitzgerald
* Failed to get post-doc for UPSZIM hired, but managed to get good new MSc hired on a 12 months contract
* Had a constructive meeting with Poul Toft

#### Casper
* Working on abstract API for maestro2.
* Working on IFD proposal
* Working with MAx on DSE for maestro2
* Working with Gita and Hugo on fault injection
* Working with Gita on RabbitMQ

#### Nick Battle
* Completed and published the ["Combinatorial Testing Guide"](https://raw.github.com/overturetool/documentation/master/documentation/CombinatorialTesting/CombinatorialTesting.pdf)
* Separate out DBGP client from VDMJ, so that LSP/DBGP/cmdline are indepedent alternatives
* Improved LSP code-completion capabilities
* Released VDMJ 4.4.1 to go with 1.0.0 release of VDM VSCode
* Added asynchronous execution/interruption for LSP to enable stop and pause
* Numerous fixes to "F12" go-to-definition functionality
* Released VDM VSCode 1.0.4 including the above
* Corrected some import/type resolution issues via Paul Chisholm.

#### Mirgita Frasheri
* First version for the fault injection plugin is done. We'll take the discussion today regarding the paper with Casper, Hugo, and Kenneth.
* Worked on the rabbitmq fmu, switching from basic_consume to basic_get for get the data. This works now.
* Next step on rabbitmq fmu: separating the dostep logic from the message consumption from the rabbitmq server. The idea for the paper here has shifted somewhat, we'll continue the discussions in the upcoming weeks with Casper and Kenneth.
* Working on getting the ns3 simulator (which provides fmi support) to work within the intocps in a very simple setup. This is part of the joint work with DTU, within ARF.
* Autonomy paper draft is here, but needs to be finalised.

#### Daniella
* Created a proof of concept framework for finding combinations of compatibles components (using the interfaces between them). Will be used for finding compatible robot components, to create a robot work cell.
* Started working on unifmu with Christian, and implementing a C# backend
* Worked on DT methodology paper with Till and Fateme
* Will start work on kinematic models of the robot equipment we have in skejby, together with Emil

#### Maurizio Palmieri
* Working on autonomous vehicle case study on the European project that funds me, using Simulink and INTO-CPS.
* Preparing the presentation for the Webinar with my supervisor.
* Prepared a small demo (5 minutes talking) for a local politician (using INTO-CPS).

#### Prasad Talasila
* Worked with Wolfgang of ATOS, Simon of DFKI create metadata structure for FMUs and co-simulation algorithms.
* Discussion with Simon of DFKI team, and Michael to create a co-simulation case study that includes machine learning-based FMUs.
* Writing the vision paper for DIGITbrain project.

#### Till Boettjer
* Working towards a VDM controller model for an Injection Mouling machine, and investigating the link to first order models 
* Developing LSTM model for mould quality degredation 
* Scoping the DT methodology paper and reviewing literature
* Preparation of demonstrator @LEGO

## Sub-projects status

#### Sub-project X

#### Sub-project Y

#### Sub-project Z

##  Any Other Business

Next Meeting
------------

11 February 2021, 12:30 CET


<div id="edit_page_div"></div>
