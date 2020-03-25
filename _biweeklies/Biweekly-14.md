---
layout: default
title: Biweekly 14
date: 25 March 2020, 1030 CEST
---

<script src="https://code.jquery.com/jquery-1.11.1.min.js">
</script>
<script src="/javascripts/edit.js"></script>
<script>setEditButonNm();</script>

# {{ page.title }}

|||
|---|---|
| Date | 25 March 2020, 10:30 CEST |


## Pre-meeting stakeholder's reports

<!-- Please keep in mind that the minutes are publicly available.-->

#### HDM
* Released Overture 2.7.4 with minor updates. We expect 2.7.4 to be the last one bound to Java 8.
In https://overture.au.dk/overture/development/latest/ you can also find the next development release of Overture. It will be running on top of the most recent Eclipse platform and in my machine works with openjdk 13.
* The INTO-CPS Apps development is on track check the details in the subprojects below.
* Delivered the into-cps training Tutorial 3 in the systems engineering course last week. It was an online Q/A session due to the coronavirus lockdown... Not a lot of participants or questions thought...

#### Peter Gorm Larsen
* DIGITbrain has indeed been funded. More than 50 person months to be delivered by AU
* New discussions with a power electronics group from AAU about digital twins
* New Iranian PhD has been approved. To be working on a digital twin for a large battery from a power electrinics side

#### Casper Thule
* Had vacation
* Working on rabbitmq fmu - bridging tla+ and c++.
* Will update maestro to work with java 13
* Went to FMI design meeting

#### Nick Battle
* Produced a pure Java version of the VDMCheck top level script, to make things easier for Windows folk.
* Added XSD schema validation to VDMCheck2 and VDMCheck3
* Made a lot of progress with the LSP server version of VDMJ:
    * Editing and syntax/type checking seems to work reasonably well via lsp4e. The Outline view is populated.
    * Debugging is more difficult, but breakpoints work and display in the right Eclipse views.
    * Variable display at breakpoints is working in simple cases, though structured data displays will need more work.
    
#### Carlos Hansen
* Conexion to Polyscope simulator

#### Claudio Gomes
* Support FMI Steering committee on Hybrid Co-sim interfaces
* Developed tracking simulator proof of concept (for Christian's paper) using dynamic bycicle model.

#### Christian Møldrup Legaard
* Writing paper related to Python FMUs (deadline this monday)
* Work on PyFMU implementation

## Sub-projects status


#### INTO-CPS App
* The INTO-CPS Desktop app now runs with Angular 5.... There is still a long way to go until we reach the current stable release Angular 9, specially because the next jump requires a major reworking of how the Angular app is build(definition of a angular.json CLI file and usage of it in the build process). Kristoffer is working on this.
* On the cloud side we are adding a new landing page to avoid requiring users to register before experimenting with the platform. We are also trying to improve the design of the upload files component. Armine is working on this. Regarding the testing using Spectron there is some issues with closing the created test windows that made us suspend the work for a while.
* The plotting feature of the cloud app is underperforming. It takes too much time to show the graph. We have a new R&D student that will start his work in the context of the INTO-CPS App and the Digital Twin Centre, and he is looking into this problem.

#### RabbitMQ FMU
* Work is progressing and substantial testing support is being developed.

#### Tolerance Language

* First draft of paper produced. This consists of about 60 LaTeX beamer slides with bullet points for the final paper and most of the required technical material.

#### Sub-project Z

##  Any Other Business

Next Meeting
------------

08 April 2020, 1030 CET


<div id="edit_page_div"></div>
