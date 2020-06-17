---
layout: default
title: Biweekly 20
date: 17 June 2020, 1030 CEST
---

<script src="https://code.jquery.com/jquery-1.11.1.min.js">
</script>
<script src="/javascripts/edit.js"></script>
<script>setEditButonNm();</script>

# {{ page.title }}

|||
|---|---|
| Date | 17 June 2020, 10:30 CEST |


## Pre-meeting stakeholder's reports

<!-- Please keep in mind that the minutes are publicly available.-->

#### Peter Gorm Larsen
* Produced my first blog today at medium.com (about digital twins)
* Almost complete with additional PhD project with Kamstrup to be added to teh MSDE FAST project (meet with top-level management from Kamstrup on 16-6)
* The Norwegium centre for digital twins was unfortunately not funded

#### Casper Thule & Kenneth Lausdahl
* Got summersim 2020 paper on rabbitmq FMU accepted
* Documenting and updating rabbitMQ FMU
* Working with Simon on CoSimCPS 2020 paper on the new initialization plugin for Maestro 2
* Working on chronoengine FMU (Robotti) (Successfully compiled chronoengine example on github actions)
* Working on Maestro2 (Livelogging now working) - next step is maturity.
* Working with Mustafa on generating json tests for testing RabbitMQ FMU
* Something seems off with the test strategy on generaitng tests for rabbitmq from tla+. We are going to get 2.5 million+.
THe state space has to be trimmed somehow! Ideas or general approaches are welcome.

#### Claudio Gomes
* Reviewing papers and chair duties for summersim 2020 - CPS track
* Cosimcps administration work (mostly publicity)
* Polishing case study of Viola paper
* Met with Bentley Oakes about possibility of using his python tool to implement property monitoring.
* Will attend the fmi design meeting this week (Wednesday and Friday)

#### Jim Woodcock
* Continued working on Viola the paper for ISoLA.
* Started work on the Centre-to-Centre proposal for robotic digital twins.

#### Nick Battle
* FMI3 dynamic model progressing. I've resurrected the API matrix (which API functions can be called from which state), as this is necessary for the dynamic model, but has been removed from the FMI3 Standard.
* Some feedback on the matrix from Claudio; asked the others for comments (it's a shared Google spreadsheet).
* Some VDMJ and Overture bug fixes, either found while modelling or via Leo.
* Downloaded and reviewed the Maestro 2.0.0-alpha code, feedack sent - I will also give some thoughts on how best to create the type checking for MABL.
* LSP is now capable of debugging the initialization of a specification. Overture cannot do this, and it is a very useful feature (when your spec will not initialize!)
* Started to refresh my familiarity with differential equations, in anticipation of work on Claudio's new model.
* Used VDMCheck3 to identify various errors in the FMI standard examples, and created a PR to fix.

#### Carlos Hansen
* Extension of the Universal Robot Library to command the robot via a PC

#### Hugo Daniel Macedo
* Submitted paper with Hao Feng and Peter Gorm Larsen on a time delay analysis analysis of a networked control version of our line follower robot. We propose to estimate maximum allowable delay bounds using the DSE feature of the INTO-CPS Application. 
* Met with Prasad to go over Overture issues and the tool and the INTO-CPS tool build process. 
* Met with Kristoffer to discuss the Modernizing the INTO-CPS Application talk outline.
* Added the INTO-CPS line follower robot to the HUBCAP platform.

#### Prasad Talasila
* Work completed
    * Worked with Hugo on the memory leak problems in Overture. The memory leak problems in Overture core are fixed.
    * Review and improvements for *D5.1 HUBCAP collaboration platform prototype* document.
    * Install and run IntoCPS tutorials and tests on the local computer. These will be useful for writing the paper on upgrades to IntoCPS tool.
    
* Work in progress
    * Help Leo Freitas solve memory leak for his proprietary VDMJ model.
    * Complete parts of IntoCPS tool upgrade paper.
    * Work with Hugo on setting up the sanbox demonstration of IntoCPS tool.
    * Get started with Maestro v2 development.

## Sub-projects status


#### Sub-project X

#### Sub-project Y

#### Sub-project Z

##  Any Other Business

Next Meeting
------------

To be defined before mid August.


<div id="edit_page_div"></div>
