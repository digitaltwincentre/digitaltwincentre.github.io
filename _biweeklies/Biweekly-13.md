---
layout: default
title: Biweekly 13
date: 11 March 2020, 1030 CEST
---

<script src="https://code.jquery.com/jquery-1.11.1.min.js">
</script>
<script src="/javascripts/edit.js"></script>
<script>setEditButonNm();</script>

# {{ page.title }}

|||
|---|---|
| Date | 11 March 2020, 10:30 CEST |


## Pre-meeting stakeholder's reports

<!-- Please keep in mind that the minutes are publicly available.-->

#### Claudio Gomes
* Attended FMI Design Meeting
* Preparing papers for SummerSim conference on rabbitmq fmu and rapid prototyping of FMUs using python.

#### HDM
* Delivered Tutorials 0, 1 and 2 at the Systems Engineering Course at AU.
* We are doing a lot of progress in the VDM agenda. The R&D project is moving good with a prototype of an LSP implementation for VDM performing syntax and type checking. I made some advances towards solving issue #716 (https://github.com/overturetool/overture/issues/716) affecting the Overture tool. 
* The INTO-CPS App and its cloud version are moving. Student programmers are doing a great job see INTO-CPS subproject section below.

#### Nick Battle
* FMI modelling paused util the FMI3 standard settles from its new Alias changes.
* Work focussed on VDMJ support for LSP protocol instead.
* Visitor infrastructure completed for VDMJ, and used to create vistors to locate arbitrary definitions, in response to LSP "definition" requests. Testing with lsp4e (Eclipse client) is currently timing out, though the definition lookup itself is very fast - still investigating.

#### Peter Gorm Larsen
* Looks like the DIGITBrain IA project will be funded (on digital twins for manufacturing)
* Gave a presentation about digital twins last week at a seminar arranged by FORCE
* Read selected digital twin survey papers

## Sub-projects status


#### INTO-CPS 

The student programmers are doing a great job. Last week we achieved the coverage of all the steps of Tutorial 1. Some steps are checked in an abstract setting (e.g.: the co-simulation plot is not checked... We only check if the co-simulation stopped), but the progress looks good. We made a major leap in versioning updates already (from hundreds of deprecated to dozens). Nonetheless, we are currently dealing with more difficult updates. Last week we needed to debug functionality in the new-project.ts and found out the source maps for that and lots of other files were not being generated. This will keep us busy for a while. We have a new R&D project related to this. For now the focus will be on the cloud app.

#### Formal models of FMI

There has been a burst of new activity on FMI3, which is making it difficult to track in the formal model. In particular, there are changes to the XML schema and changes to how variable aliases are declared which may produce fundamental changes in the model. I am therefore monitoring the Standard changes rather than actively trying to model them, while the standard is in flux.

#### LSP

Modifications are being made to a new "lspserver" branch of VDMJ to support the LSP protocol. I'm currently testing with the Eclipse lsp4e client, enabling one feature at a time to see what messages are sent - the Microsoft documentation for the protocol is not very clear (no examples), so we really have to progress by example. VDMJ itself is currently proving relatively easy to change to add this support, though I'm getting timeout problems with the lsp4e client (even though it's quite fast).


##  Any Other Business

Next Meeting
------------

25 March 2020, 1030 CET


<div id="edit_page_div"></div>
