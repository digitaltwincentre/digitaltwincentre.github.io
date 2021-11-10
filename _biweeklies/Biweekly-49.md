---
layout: default
title: Biweekly 49
date: 12 November 2021, 1030 CEST
---

<script src="https://code.jquery.com/jquery-1.11.1.min.js">
</script>
<script src="/javascripts/edit.js"></script>
<script>setEditButonNm();</script>

# {{ page.title }}

|||
|---|---|
| Date | 12 November 2021, 10:30 CEST |


## Pre-meeting stakeholders' reports

<!-- Please keep in mind that the minutes are publicly available.-->

#### Peter Gorm Larsen
* Attended meeting about the future for hybrid testing with Force (DT opportunities)
* Had a positive external assessment of DIGIT

#### Nick Battle
* Majority of time spent assisting Leo with the VDM to Isabelle translation.
* Update below from Leo on this:

    DONE:
    * 87% of TC AST as:
      * 100% binds; 95% expression; 65% definitions; 79% types
      * Key TLDs working:
      * TRTypeDefinition for all mapped types
      * TRExplicitFunctionDefinition for variety of function types (e.g. curried, constant, lambda, etc.)
      * TRProofObligationDefinition for all POG POs
      * TRProofScript + Step definition for an initial class of proof strategy commands
    * Key aspects of the expression tree:
      * all quantified, iota, lambda, let-expo, mu expression
      * all unary, binary, and relational operators
      * proper handling of records and their patterns
      * set and seq comprehension
      * set, seq, and map enumeration
      * literals, record field and tuple projections
      * basic types (e.g. bool, nat, int, real, etc.)
    * Key aspects of the type tree:
      * set, sequence, map, product types
      * record and name types with invariants and auxiliary specification (E.g. inv, ord, eq).
      * optional and function types
      * partial support for union types
    * Key aspects of the plugin hierarchy:
      * exu: roots out “problematic” VDM
      * vdm2isa: translates VDM to ISabelle
      * isapog: generates POs in Isabelle
      * ps2isa: generates proof scripts in Isabelle for isapog POs. 

    TODO:
    * State, statements, and operations
    * Multiple proof strategies for PO (as a TLD boolean) definition
    * Complete union types
    * Complete exu visitors

* Meetings with Simon and Claudio to progress the formal model of clocks in FMI3. It may be possible to link Leo's translation work with a VDM model of clock semantics to enable some proof work.

#### Stakeholder 3
* Discussion Point 1
* Discussion Point 2


## Sub-projects status


#### Sub-project X

#### Sub-project Y

#### Sub-project Z

##  Any Other Business

Next Meeting
------------

26 November 2021, 10:30 CEST


<div id="edit_page_div"></div>
