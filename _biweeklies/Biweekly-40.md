---
layout: default
title: Biweekly 40
date: 20 May 2021, 1230 CEST
---

<script src="https://code.jquery.com/jquery-1.11.1.min.js">
</script>
<script src="/javascripts/edit.js"></script>
<script>setEditButonNm();</script>

# {{ page.title }}

|||
|---|---|
| Date | 20 May 2021, 12:30 CEST |


## Pre-meeting stakeholders' reports

<!-- Please keep in mind that the minutes are publicly available.-->

#### Hugo Daniel Macedo
* Overture vscode extension:
  * AddLibrary feature was merged into development branch and should become available in the next release. 
  * Working on code coverage. Coverage files are now generated, and I am working on coverage files visualization 
    and improving the SLSP protocol. 
  * Will be at the F-IDE workshop 
* INTO-CPS Application
  * Release 4.0.3 is out!
  * We opened the [discussion](https://github.com/INTO-CPS-Association/into-cps-application/discussions) for 4.0.4 next fall.  
  * Working with Mirgita on Scenario Generation feature  
* DT in Water
  * Will present at the evanet.dk [thematic day for Digital Twins](http://www.evanet.dk/20-05-2021-digitale-tvillinger-i-afloebs-og-spildevandsbranchen/).
  * Meeting with Aarhus Vand and partners weekly to close proposal before Summer
* Papers
  * Accepted:
    * A Universal Mechanism for Implementing Functional Mock-up Units accepted at SIMULTECH
    * Towards a Digital Twin Framework for Autonomous Robots accepted at COMPSAC 
  * In Preparation:
    * A Digital Twin of Extraneous Water in preparation 
    * Modelling an Injection Molding Machine using the Vienna Development Method to OVT19 
  * Planned
    * ?Digital Twins? (invited paper as a follow up of the evanet.dk presentation)  
    * vs-code extensions to OVT19


#### Peter Gorm Larsen
* Discussion with Springer about the suggested book on engineering digital twins has started
* Isola volume with our digital twin track should soon become available

#### Jim Woodcock
* I completed the preparation and recording of my lectures on probabilistic robotic control.
* I've returned to thinking about a calculus of uncertainty for robotics (and CPS more generally).

#### Nick Battle
* Converted both FMI2 and FMI3 checkers to use the generated XSD-to-VDM schema.
* Updating dynamic model and tests for FMI3 to catch up with changes to the schema/semantics.
* Still need to verify checkers against stock FMUs, but a few trials looks OK.
* Fixes to VDMJ and LSP along the way as small issues have occured while using VSCode to develop.

#### Claudio Gomes
* Prepared case study motivating Simon's work on contracts for FMI.
* Concluded two papers with FMI steering committee (one on clocks, and the other about the new features)
* Oportunity: there will be an FMI plug fest at end of July. It would make a lot of sense for Nick and Christian to participate with their tools. This is the time to try to have impact with those tools. If someone has the time to do another iteration on the model based testing work (something like https://msdl.uantwerpen.be/git/claudio/FMIMOBSTER), and add support for fmi3, that would be awesome.
* Preparing case study for Giuseppe connecting matlab and Giuseppe's experimental setup

#### Mirgita Frasheri
* wrapping up experiments for the rabbitmq paper.
* discussing with Henrik and Casper on the approach for handling the time discrepancy.
* looking into literature wrt to detecting collision velocities and selecting safe velocities for robots -- connected to the scenarios for the ARF project.
* Discussed with Tiziano and Simon from the fortiss project on possible collaborations. They're working on the ros fmi adapter for ros/Gazebo simulations, basically wrapping an fmu with a ros interface. Nevertheless they don't have a master, so we're looking into using our tools together with the rabbitmq fmu, in combination with their fmi adapter.

#### Casper Thule
* Started Maestro2 publication, where we will use Claudio and GIuseppe case study.
* Contributed to the two rabbitmq papers
* Started Scenario Verifier support in maestro2 with Simon and Frederik, also for FM
* Discussed Digital Twin Platform in relation to springer book - i.e. as a foundation for exercises and foundation for future teaching efforts
* Started DSE and Maestro2 C++ codegen project with Newcastle folks
* Hand-over of maestro2 release procedure with Prasad and Frederik
* Hand-over of chronofmu to Henrik Ejersbo and Frederik Foldager
* Discussed some servo-motor torque issues with Jacob Housted and Frederik Foldager

#### Frederik Madsen
* Started work on Scenario Verifier support in maestro2

#### Emil Madsen
* Finished Weighted Least Squares (WLS) calibration (WLS calibration works well and it's kind of standard in robot dynamics calibration)
* Working on adding load-dependent friction. From experience, this will enhance the model of up to approx. 15 %.
* Contacted Technicon about the delayed delivery of robotic equipment. They will get back soon with a new estimated date of delivery.

## Sub-projects status


#### Sub-project X

#### Sub-project Y

#### Sub-project Z

##  Any Other Business

Next Meeting
------------

3 June 2021, 12:30 CEST


<div id="edit_page_div"></div>
